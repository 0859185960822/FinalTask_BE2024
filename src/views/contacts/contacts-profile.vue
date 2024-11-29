<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import profile from "@/assets/images/profile-img.png"
import { avatar1 } from "../../assets/images/users/data"
import { revenueChart, timelineData, projectData } from "./data-profile";
import Stat from "@/components/widgets/stat";

/**
 * Contacts-Profile component
 */
export default {
  components: { Layout, PageHeader, Stat },
  data() {
    return {
      profile, avatar1,
      revenueChart: revenueChart, timelineData, projectData,
      statData: [
        {
          icon: "bx bx-check-circle",
          title: "Completed Projects",
          value: "125"
        },
        {
          icon: "bx bx-hourglass",
          title: "Pending Projects",
          value: "12"
        },
        {
          icon: "bx bx-package",
          title: "Total Revenue",
          value: "$36,524"
        }
      ],
    };
  }
};
</script>

<template>
  <Layout>
    <PageHeader title="Profile" pageTitle="Contacts" />

    <BRow>
      <BCol xl="4">
        <BCard no-body class="overflow-hidden">
          <div class="bg-primary-subtle">
            <BRow>
              <BCol cols="7">
                <div class="text-primary p-3">
                  <h5 class="text-primary">Welcome Back !</h5>
                  <p>It will seem like simplified</p>
                </div>
              </BCol>
              <BCol cols="5" class="align-self-end">
                <img :src=profile alt class="img-fluid" />
              </BCol>
            </BRow>
          </div>
          <BCardBody class="pt-0">
            <BRow>
              <BCol sm="4">
                <div class="avatar-md profile-user-wid mb-4">
                  <img :src=avatar1 alt class="img-thumbnail rounded-circle" />
                </div>
                <h5 class="font-size-15 text-truncate">Cynthia Price</h5>
                <p class="text-muted mb-0 text-truncate">UI/UX Designer</p>
              </BCol>

              <BCol sm="8">
                <div class="pt-4">
                  <BRow>
                    <BCol cols="6">
                      <h5 class="font-size-15">125</h5>
                      <p class="text-muted mb-0">Projects</p>
                    </BCol>
                    <BCol cols="6">
                      <h5 class="font-size-15">$1245</h5>
                      <p class="text-muted mb-0">Revenue</p>
                    </BCol>
                  </BRow>
                  <div class="mt-4">
                    <BLink class="btn btn-primary btn-sm">
                      View Profile
                      <i class="mdi mdi-arrow-right ms-1"></i>
                    </BLink>
                  </div>
                </div>
              </BCol>
            </BRow>
          </BCardBody>
        </BCard>

        <BCard no-body>
          <BCardBody class="pb-0">
            <BCardTitle class="mb-4">Personal Information</BCardTitle>

            <p class="text-muted mb-4">Hi I'm Cynthia Price,has been the industry's standard dummy text To an English
              person, it will seem like simplified English, as a skeptical Cambridge.</p>
            <div class="table-responsive ">
              <BTableSimple class="table-nowrap mb-0">
                <BTbody>
                  <BTr>
                    <BTh scope="row">Full Name :</BTh>
                    <BTd>Cynthia Price</BTd>
                  </BTr>
                  <BTr>
                    <BTh scope="row">Mobile :</BTh>
                    <BTd>(123) 123 1234</BTd>
                  </BTr>
                  <BTr>
                    <BTh scope="row">E-mail :</BTh>
                    <BTd>cynthiaskote@gmail.com</BTd>
                  </BTr>
                  <BTr>
                    <BTh scope="row">Location :</BTh>
                    <BTd>California, United States</BTd>
                  </BTr>
                </BTbody>
              </BTableSimple>
            </div>
          </BCardBody>
        </BCard>

        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-5">Experience</BCardTitle>
            <div class>
              <ul class="verti-timeline list-unstyled">
                <li class="event-list" v-for="(event, index) in timelineData" :key="index" :class="{ active: event.active }">
                  <div class="event-timeline-dot">
                    <i :class="event.iconClass"></i>
                  </div>
                  <div class="d-flex">
                    <div class="me-3">
                      <i :class="event.icon"></i>
                    </div>
                    <div class="flex-grow-1">
                      <div>
                        <h5 class="font-size-15">
                          <BLink :href="event.link" class="text-dark">{{ event.title }}</BLink>
                        </h5>
                        <span class="text-primary">{{ event.date }}</span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol xl="8">
        <BRow>
          <BCol md="4" v-for="stat of statData" :key="stat.icon" >
            <Stat :icon="stat.icon" :title="stat.title" :value="stat.value" />
          </BCol>
        </BRow>
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Revenue</BCardTitle>
            <apexchart class="apex-charts" type="bar" height="320" :series="revenueChart.series" :options="revenueChart.chartOptions"></apexchart>
          </BCardBody>
        </BCard>

        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">My Projects</BCardTitle>
            <div class="table-responsive">
              <BTableSimple class="table-nowrap table-hover mb-0">
                <BThead>
                  <BTr>
                    <BTh scope="col">#</BTh>
                    <BTh scope="col">Projects</BTh>
                    <BTh scope="col">Start Date</BTh>
                    <BTh scope="col">Deadline</BTh>
                    <BTh scope="col">Budget</BTh>
                  </BTr>
                </BThead>
                <BTbody>
                  <BTr v-for="(project, index) in projectData" :key="index">
                    <BTh scope="row">{{ project.id }}</BTh>
                    <BTd>{{ project.projectName }}</BTd>
                    <BTd>{{ project.startDate }}</BTd>
                    <BTd>{{ project.endDate }}</BTd>
                    <BTd>{{ project.price }}</BTd>
                  </BTr>
                </BTbody>
              </BTableSimple>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>
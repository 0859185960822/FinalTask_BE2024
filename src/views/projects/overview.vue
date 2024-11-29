<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import { avatar2, avatar3 } from "../../assets/images/users/data";
import { img1 } from "@/assets/images/companies/data"
import { barChart, memberData, filesData } from "./data-overview";

/**
 * Projects-overview component
 */
export default {

  components: { Layout, PageHeader },
  data() {
    return {
      barChart: barChart,
      memberData, filesData, avatar2, avatar3, img1
    };
  }
};
</script>

<template>
  <Layout>
    <PageHeader title="Project Overview" pageTitle="Project" />

    <BRow>
      <BCol lg="8">
        <BCard no-body>
          <BCardBody>
            <div class="d-flex">
              <img :src="img1" alt class="avatar-sm me-4" />

              <div class="flex-grow-1 overflow-hidden">
                <h5 class="text-truncate font-size-15">Skote Dashboard UI</h5>
                <p class="text-muted">Separate existence is a myth. For science, music, sport, etc.</p>
              </div>
            </div>

            <h5 class="font-size-15 mt-4">Project Details :</h5>

            <p class="text-muted">To an English person, it will seem like simplified English, as a skeptical Cambridge
              friend of mine told me what Occidental is. The European languages are members of the same family. Their
              separate existence is a myth. For science, music, sport, etc,</p>

            <div class="text-muted mt-4">
              <p>
                <i class="mdi mdi-chevron-right text-primary me-1"></i> To achieve this, it would be necessary
              </p>
              <p>
                <i class="mdi mdi-chevron-right text-primary me-1"></i> Separate existence is a myth.
              </p>
              <p>
                <i class="mdi mdi-chevron-right text-primary me-1"></i> If several languages coalesce
              </p>
            </div>

            <BRow class="task-dates">
              <BCol sm="4" cols="6">
                <div class="mt-4">
                  <h5 class="font-size-14">
                    <i class="bx bx-calendar me-1 text-primary"></i> Start Date
                  </h5>
                  <p class="text-muted mb-0">08 Sept, 2019</p>
                </div>
              </BCol>

              <BCol sm="4" cols="6">
                <div class="mt-4">
                  <h5 class="font-size-14">
                    <i class="bx bx-calendar-check me-1 text-primary"></i> Due Date
                  </h5>
                  <p class="text-muted mb-0">12 Oct, 2019</p>
                </div>
              </BCol>
            </BRow>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol lg="4">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Team Members</BCardTitle>

            <div class="table-responsive">
              <BTableSimple class="table-nowrap align-middle">
                <BTbody>
                  <BTr class="col-3" v-for="(item, index) in memberData" :key="index">
                    <BTd v-if="item.imageSrc" style="width: 50px;">
                      <img :src="item.imageSrc" class="rounded-circle avatar-xs" alt />
                    </BTd>
                    <BTd v-else-if="item.avatarTitle" class="avatar-xs">
                      <span class="avatar-title rounded-circle bg-soft-primary text-white font-size-16 p-1">{{
                        item.avatarTitle }}</span>
                    </BTd>
                    <BTd>
                      <h5 class="font-size-14 m-0">
                        <BLink class="text-dark">{{ item.name }}</BLink>
                      </h5>
                    </BTd>
                    <BTd>
                      <div>
                        <BLink href="javascript: void(0);" class="badge bg-primary-subtle text-primary font-size-11">{{
                          item.jobTitle1 }}</BLink>
                        <BLink href="javascript: void(0);"
                          class="badge bg-primary-subtle text-primary font-size-11 ms-1">{{
                            item.jobTitle2 }}</BLink>
                      </div>
                    </BTd>
                  </BTr>
                </BTbody>
              </BTableSimple>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="4">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Overview</BCardTitle>

            <div id="overview-chart" class="apex-charts" dir="ltr"></div>
            <apexchart class="apex-charts" type="bar" height="280" :series="barChart.series"
              :options="barChart.chartOptions"></apexchart>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol lg="4">
        <BCard no-body>
          <BCardBody class="pb-1">
            <BCardTitle class="mb-4">Attached Files</BCardTitle>
            <div class="table-responsive">
              <BTableSimple class="table table-nowrap table-centered table-hover mb-0 align-middle">
                <BTbody>
                  <BTr v-for="(file, index) in filesData" :key="index">
                    <BTd style="width: 45px;">
                      <div class="avatar-sm">
                        <span class="avatar-title rounded-circle bg-primary-subtle text-primary font-size-24">
                          <i class="bx bxs-file-doc"></i>
                        </span>
                      </div>
                    </BTd>
                    <BTd>
                      <h5 class="font-size-14 mb-1 p-0">
                        <BLink href="javascript:void(0);" class="text-dark">{{ file.name }}</BLink>
                      </h5>
                      <small v-text="'Size : ' + file.size" />
                    </BTd>
                    <BTd>
                      <div class="text-center">
                        <BLink :href="file.downloadLink" class="text-dark">
                          <i class="bx bx-download h3 m-0"></i>
                        </BLink>
                      </div>
                    </BTd>
                  </BTr>
                </BTbody>
              </BTableSimple>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol lg="4">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Comments</BCardTitle>

            <div class="d-flex mb-4">
              <div class="me-3">
                <img class="media-object rounded-circle avatar-xs" alt :src=avatar2 />
              </div>
              <div class="flex-grow-1">
                <h5 class="font-size-13 mb-1">David Lambert</h5>
                <p class="text-muted mb-1">Separate existence is a myth.</p>
              </div>
              <div class="ms-3">
                <BLink class="text-primary">Reply</BLink>
              </div>
            </div>

            <div class="d-flex mb-4">
              <div class="me-3">
                <img class="media-object rounded-circle avatar-xs" alt :src=avatar3 />
              </div>
              <div class="flex-grow-1">
                <h5 class="font-size-13 mb-1">Steve Foster</h5>
                <p class="text-muted mb-1">
                  <BLink class="text-success">@Henry</BLink>
                  To an English person it will like simplified
                </p>
                <div class="d-flex mt-3">
                  <div class="avatar-xs me-3">
                    <span class="avatar-title rounded-circle bg-primary-subtle text-primary font-size-16">J</span>
                  </div>
                  <div class="flex-grow-1">
                    <h5 class="font-size-13 mb-1">Jeffrey Walker</h5>
                    <p class="text-muted mb-1">as a skeptical Cambridge friend</p>
                  </div>
                  <div class="ms-3">
                    <BLink class="text-primary">Reply</BLink>
                  </div>
                </div>
              </div>
              <div class="ms-3">
                <BLink class="text-primary">Reply</BLink>
              </div>
            </div>

            <div class="d-flex mb-4">
              <div class="avatar-xs me-3">
                <span class="avatar-title rounded-circle bg-primary-subtle text-primary font-size-16">S</span>
              </div>
              <div class="flex-grow-1">
                <h5 class="font-size-13 mb-1">Steven Carlson</h5>
                <p class="text-muted mb-1">Separate existence is a myth.</p>
              </div>
              <div class="ms-3">
                <BLink class="text-primary">Reply</BLink>
              </div>
            </div>

            <div class="text-center mt-4 pt-2">
              <BLink href="javascript: void(0);" class="btn btn-primary btn-sm">View more</BLink>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>
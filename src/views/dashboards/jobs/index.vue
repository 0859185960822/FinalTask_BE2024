<script>
import Layout from "../../../layouts/main";
import simplebar from "simplebar-vue";
import StatisticsApplicationsChart from "./statistics-applications-chart";
import ApplicationReceviedTime from "./application-recevied-time";
import { avatar1 } from "@/assets/images/users/data";
import jobs from "@/assets/images/jobs.png"
import { slidesData, jobData, activityData, recentJobData } from "./data"
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

/**
 * Starter component
 */
export default {

  components: {
    Layout, StatisticsApplicationsChart, ApplicationReceviedTime, simplebar, Swiper, SwiperSlide,
  },
  data() {
    return {
      Autoplay: Autoplay,
      slidesData: slidesData,
      jobData: jobData,
      activityData: activityData,
      recentJobData: recentJobData,
      avatar1, jobs,
      title: "Job Dashboard",
      jobWidgets: [
        {
          id: 1,
          label: "Job View",
          counter: "14,487",
          badge: "bx bx-trending-up",
          badgeColor: "success",
          percentage: "18.89%",
          chartsColor: "#34c38f",
          chartOptions: {
            chart: {
              width: "100%",
              height: 46,
              type: "area",
              sparkline: {
                enabled: true,
              },
              toolbar: {
                show: false,
              },
            },
            dataLabels: {
              enabled: false,
            },
            stroke: {
              curve: "smooth",
              width: 1.5,
            },
            fill: {
              type: "gradient",
              gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.45,
                opacityTo: 0.05,
                stops: [50, 100, 100, 100],
              },
            },
            colors: ["#34c38f"],
          },
          series: [
            {
              name: "Job View",
              data: [36, 21, 65, 22, 35, 50, 87, 98],
            },
          ],
        },
        {
          id: 2,
          label: "New Application",
          counter: "7,402",
          badge: "bx bx-trending-up",
          badgeColor: "success",
          percentage: "24.07%",
          chartOptions: {
            chart: {
              width: "100%",
              height: 46,
              type: "area",
              sparkline: {
                enabled: true,
              },
              toolbar: {
                show: false,
              },
            },
            dataLabels: {
              enabled: false,
            },
            stroke: {
              curve: "smooth",
              width: 1.5,
            },
            fill: {
              type: "gradient",
              gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.45,
                opacityTo: 0.05,
                stops: [50, 100, 100, 100],
              },
            },
            colors: ["#34c38f"],
          },
          series: [
            {
              name: "New Application",
              data: [36, 48, 10, 74, 35, 50, 70, 73],
            },
          ],
        },
        {
          id: 3,
          label: "Total Approved",
          counter: "12,487",
          badge: "bx bx-trending-up",
          badgeColor: "success",
          percentage: "8.41%",
          chartOptions: {
            chart: {
              width: "100%",
              height: 46,
              type: "area",
              sparkline: {
                enabled: true,
              },
              toolbar: {
                show: false,
              },
            },
            dataLabels: {
              enabled: false,
            },
            stroke: {
              curve: "smooth",
              width: 1.5,
            },
            fill: {
              type: "gradient",
              gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.45,
                opacityTo: 0.05,
                stops: [50, 100, 100, 100],
              },
            },
            colors: ["#34c38f"],
          },
          series: [
            {
              name: "Total Approved",
              data: [60, 14, 5, 60, 30, 43, 65, 84],
            },
          ],
        },
        {
          id: 4,
          label: "Total Rejected",
          counter: "14,487",
          badge: "bx bx-trending-down",
          badgeColor: "danger",
          percentage: "20.63%",
          chartOptions: {
            chart: {
              width: "100%",
              height: 46,
              type: "area",
              sparkline: {
                enabled: true,
              },
              toolbar: {
                show: false,
              },
            },
            dataLabels: {
              enabled: false,
            },
            stroke: {
              curve: "smooth",
              width: 1.5,
            },
            fill: {
              type: "gradient",
              gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.45,
                opacityTo: 0.05,
                stops: [50, 100, 100, 100],
              },
            },
            colors: ["#f46a6a"],
          },
          series: [
            {
              name: "Total Rejected",
              data: [32, 22, 7, 55, 20, 45, 36, 20],
            },
          ],
        },
      ]
    };

  }
};
</script>
<template>
  <Layout>
    <BRow class="mb-4">
      <BCol lg="12">
        <div class="d-flex align-items-center">
          <img :src="avatar1" alt="" class="avatar-sm rounded">
          <div class="ms-3 flex-grow-1">
            <h5 class="mb-2 card-title">Hello, Henry Franklin</h5>
            <p class="text-muted mb-0">Ready to jump back in?</p>
          </div>
          <div>
            <BLink href="javascript:void(0);" class="btn btn-primary"><i class="bx bx-plus align-middle"></i> Add New
              Jobs</BLink>
          </div>
        </div>
      </BCOl>
    </BRow>

    <BRow>
      <BCol kg="3" v-for="(item, index) of jobWidgets" :key="index">
        <BCard no-body class="mini-stats-wid">
          <BCardBody>
            <div class="d-flex">
              <div class="flex-grow-1">
                <p class="text-muted fw-medium">{{ item.label }}</p>
                <h4 class="mb-0">{{ item.counter }}</h4>
              </div>

              <div class="flex-shrink-0 align-self-center">
                <apexchart class="apex-charts" :options="item.chartOptions" width="130" height="46" dir="ltr" :series="item.series.length > 0 ? item.series : []" :key="item.id"></apexchart>
              </div>
            </div>
          </BCardBody>
          <BCardBody class="border-top py-3">
            <p class="mb-0"> <span :class="`badge badge-soft-${item.badgeColor} me-1`">
                <i :class="`${item.badge} align-bottom me-1`"></i> {{ item.percentage }}</span>
              {{ item.badgeColor == "success" ? 'Increase' : 'Decrease' }} last month
            </p>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="8">
        <StatisticsApplicationsChart />
      </BCol>
      <BCol lg="4">
        <BCard no-body>
          <BCardBody>
            <div class="d-flex">
              <div>
                <BCardTitle class="mb-3">Invite your friends to Skote</BCardTitle>
                <p class="text-muted">Nor again is there anyone who loves or pursues or desires to obtain pain of
                  itself, because it is pain, but because occasionally.</p>
                <div>
                  <BLink href="javascript:void(0);" class="btn btn-primary btn-sm"><i class='bx bx-user-plus align-middle'></i> Invite Friends</BLink>
                </div>
              </div>
              <div>
                <img :src="jobs" alt="" height="130">
              </div>
            </div>
          </BCardBody>
        </BCard>
        <BCard no-body>
          <BCardBody class="pb-1">
            <BCardTitle class="mb-3">Popular Candidate</BCardTitle>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
              <swiper class="mySwiper" :loop="true" :modules="[Autoplay]" :autoplay="{ delay: 2500, disableOnInteraction: false }">
                <swiper-slide v-for="slide in slidesData" :key="slide.id">
                  <div class="bg-light p-3 d-flex mb-3 rounded">
                    <img :src="slide.avatarSrc" alt="" class="avatar-sm rounded me-3" />
                    <div class="flex-grow-1">
                      <h5 class="font-size-15 mb-2">
                        <router-link to="/jobs/candidate/overview" class="text-body">{{ slide.name }}</router-link>
                        <span class="badge" :class="slide.badgeClass">{{ slide.badgeText }}</span>
                      </h5>
                      <p class="mb-0 text-muted">
                        <i class="bx bx-map text-body align-middle"></i> {{ slide.location }}
                      </p>
                    </div>
                    <div>
                      <BDropdown variant="soft-primary" menu-class="dropdown-menu-end">
                        <template #button-content>
                          <i class="bx bx-dots-vertical-rounded"></i>
                        </template>
                        <BDropdownItem href="#">View Details</BDropdownItem>
                        <BDropdownItem href="#">Download CV</BDropdownItem>
                      </BDropdown>
                    </div>
                  </div>
                  <div class="bg-light p-3 d-flex mb-3 rounded">
                    <img :src="slide.avatarSrc2" alt="" class="avatar-sm rounded me-3" />
                    <div class="flex-grow-1">
                      <h5 class="font-size-15 mb-2">
                        <router-link to="/jobs/candidate/overview" class="text-body">{{ slide.name2 }}</router-link>
                        <span class="badge" :class="slide.badgeClass2">{{ slide.badgeText2 }}</span>
                      </h5>
                      <p class="mb-0 text-muted">
                        <i class="bx bx-map text-body align-middle"></i> {{ slide.location2 }}
                      </p>
                    </div>
                    <div>
                      <BDropdown variant="soft-primary" menu-class="dropdown-menu-end">
                        <template #button-content>
                          <i class="bx bx-dots-vertical-rounded"></i>
                        </template>
                        <BDropdownItem href="#">View Details</BDropdownItem>
                        <BDropdownItem href="#">Download CV</BDropdownItem>
                      </BDropdown>
                    </div>
                  </div>
                </swiper-slide>
              </swiper>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <div class="d-flex">
          <BCardTitle class="mb-4 flex-grow-1">New Job Vacancy</BCardTitle>
          <div>
            <router-link to="/jobs/job-list" class="btn btn-primary btn-sm">View All <i class="bx bx-right-arrow-alt"></i></router-link>
          </div>
        </div>
      </BCol>
      <BCol lg="2" v-for="(job, index) in jobData" :key="index">
        <BCard no-body>
          <BCardBody class="p-4">
            <div class="text-center mb-3">
              <img :src="job.companyLogo" alt="" class="avatar-sm">
              <router-link to="/jobs/job-details" class="text-body">
                <h5 class="mt-4 mb-2 font-size-15">{{ job.jobTitle }}</h5>
              </router-link>
              <p class="mb-0 text-muted">{{ job.companyName }}</p>
            </div>
            <div class="d-flex">
              <p class="mb-0 flex-grow-1 text-muted">
                <i class="bx bx-map text-body"></i> {{ job.location }}
              </p>
              <p class="mb-0 text-muted"><b>{{ job.vacancies }}</b> Vacancy</p>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="4">
        <ApplicationReceviedTime />
      </BCol>
      <BCol lg="4">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Activity Feed</BCardTitle>
            <simplebar style="max-height: 376px;">
              <ul class="verti-timeline list-unstyled">
                <li class="event-list" v-for="(event, index) in activityData" :key="index">
                  <div class="event-timeline-dot">
                    <i class="bx bx-right-arrow-circle font-size-18"></i>
                  </div>
                  <div class="d-flex">
                    <div class="flex-shrink-0 me-3">
                      <img v-if="event.avatar" :src="event.avatar" alt="" class="avatar-xs rounded-circle">
                      <div v-else class="avatar-xs d-flex align-items-center justify-content-center rounded-circle bg-primary-subtle"> {{ event.avatarText }} </div>
                    </div>
                    <div class="flex-grow-1">
                      <div>
                        <b>{{ event.userName }}</b> <span v-html="event.action" />
                        <p class="mb-0 text-muted">{{ event.time }}</p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <div class="text-center mt-4">
                <BLink href="javascript: void(0);" class="btn btn-primary waves-effect waves-light btn-sm">View More <i class="mdi mdi-arrow-right ms-1"></i></BLink>
              </div>
            </simplebar>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="4">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Recent Added Jobs</BCardTitle>
            <simplebar data-simplebar style="max-height: 376px;">
              <div class="vstack gap-4">
                <div class="d-flex" v-for="(job, index) in recentJobData" :key="index">
                  <img :src="job.companyLogo" alt="" height="40" class="rounded">
                  <div class="ms-2 flex-grow-1">
                    <h6 class="mb-1 font-size-15"><router-link to="/jobs/job-details" class="text-body">{{ job.jobTitle
                    }}</router-link></h6>
                    <p class="text-muted mb-0">{{ job.companyName }}, {{ job.location }} - <b>{{ job.timeAgo }}{{ " " }}</b>{{ job.hrs }} ago</p>
                  </div>
                  <BDropdown variant="soft-secondary" menu-class="dropdown-menu-end" style="height: 38px">
                    <template #button-content>
                      <i class="bx bx-dots-vertical-rounded"></i>
                    </template>
                    <BDropdownItem href="/jobs/job-details">View Details</BDropdownItem>
                    <BDropdownItem href="#">Download CV</BDropdownItem>
                  </BDropdown>
                </div>
              </div>
            </simplebar>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>
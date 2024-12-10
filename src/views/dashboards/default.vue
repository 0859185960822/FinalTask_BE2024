<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
// import ProjectStats from "../../components/widgets/progress1.vue";
import Stat from "../../components/widgets/stat.vue";
import Emailsent from "../../components/widgets/emailsent.vue";
// import SideBar from "../../components/side-bar.vue";



/**
 * Dashboard Component
 */
export default {
  components: {
    Layout,
    PageHeader,
    // ProjectStats,
    Stat,
    Emailsent,
    // SideBar,

  },
  data() {
    return {
      statData: [
        {
          icon: "bx bx-copy-alt",
          title: "Total Project",
          value: "1,235",
        },
        {
          icon: "bx bx-archive-in",
          title: "On Going",
          value: "23",
        },
        {
          icon: "bx bx-purchase-tag-alt",
          title: "Done",
          value: "16",
        },
      ],

      project: {
        name: "Project A",
        progress: 80, // Persentase progress
        deadline: "20 Desember 2024",
        daysLeft: 30, // Hari tersisa
        
      },
 
    };
  },
  mounted() {
    setTimeout(() => {
      this.showModal = false;
    }, 1500);
  },
  methods: {
    // Fungsi untuk memperbarui progress secara dinamis
    updateProgress(newProgress) {
      this.project.progress = newProgress;
    },
  },
 
};
</script>

<template>

  <!-- <SideBar/> -->
  <Layout>
  
    <PageHeader title="Dashboard" pageTitle="Dashboards" />

    <BRow>
      <BCol xl="10" md="12" lg=12>
        <Profile :updating="fetchingStats" />
        <Earning :updating="earningStatus" />
      </BCol>
      <BCol xl="12" md="12" lg="12">
        <BRow>
          <BCol md="4" v-for="stat of statData" :key="stat.icon">
            <Stat :icon="stat.icon" :title="stat.title" :value="stat.value" />
          </BCol>
        </BRow>
        
        </BCol>
    </BRow>



        <BRow>
            <BCol md="12" lg="12">
                <BCard>
                  <div class="d-flex align-item-center justify-content-between my-0 py-0 border">
                    <div class="align-item-center">
                      <BCardTitle class="h3">Project Final Task</BCardTitle>
                      <BCardText>With supporting text below as a natural lead-in to additional
                          content.</BCardText>
                    </div>
                    <div class="d-flex ">
                      <BCol md="5" class="mx-5 my-0">
                        <BCard bg-variant="danger" class="text-center">
                          <h5 class="mt-0 mb-4 text-white">
                            <i class="mdi mdi-alert-outline me-3"></i> Deadline<br>
                            2024-12-12
                          </h5>
                          <BCardText class="text-center h3">20</BCardText>
                        </BCard>
                      </BCol>
                      <BCol md="4" class="mx-5 my-0">
                        <BCard class="text-center">
                            <BCardText class="text-center">Deadline <br>20</BCardText>
                        </BCard>
                      </BCol>
                    </div>
                  </div>

                        
                            <div class="progress-container w-100">
                              <div class="progress-wrapper w-100">
                                <div class="d-flex justify-content-between">
                                  <span class="text-white">Presentase</span>
                                  <span class="fw-bold">{{ project.progress }}%</span>
                                </div>
                                <div class="progress mt-2">
                                  <div class="progress-bar bg-warning" :style="{ width: project.progress + '%' }"></div>
                                </div>
                              </div>
                            </div>
                </BCard>
            </BCol>
            <Emailsent :updating="fetchingStats" />
        </BRow>
    
  </Layout>
</template>

<style>
    .card-container {
      background-color: #d6d6d6;
      padding: 20px;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
    }
    .top-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .judul-section {
      flex: 2;
    }
    .deadline-box {
      text-align: center;
      flex: 2;
      background-color: white;
      padding: 10px;
      border-radius: 8px;
      margin: 0 10px;
    }
    .sisa-waktu-container {
      background-color: white;
      border-radius: 8px;
      text-align: center;
      /* padding: 10px; */
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      /* margin-bottom: 2px; */
      /* height: 200px; */
    }
    .progress-container {
      background-color: #50a5f1;
      padding: 10px;
      border-radius: 8px;
      margin-top: 10px;
      width: 865px;
    }
    .progress-wrapper {
      width: calc(100% - 250px); /* Batasi progress bar sejajar deadline */
    }
    
</style>
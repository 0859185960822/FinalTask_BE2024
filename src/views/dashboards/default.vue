<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
// import ProjectStats from "../../components/widgets/progress1.vue";
import Stat from "../../components/widgets/stat.vue";
import axios from "axios";
import Swal from "sweetalert2";


/**
 * Dashboard Component
 */
export default {
  components: {
    Layout,
    PageHeader,
    // ProjectStats,
    Stat,
    

  },
  data() {
    return {
      data : [],
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
    this.getDataProject(),
    setTimeout(() => {
      this.showModal = false;
    }, 1500);
  },
  methods: {
    // Fungsi untuk memperbarui progress secara dinamis
    updateProgress(newProgress) {
      this.project.progress = newProgress;
    },
    getDataProject() {
      this.loadingTable = true;

      const token = localStorage.accessToken;
      if (!token) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No access token found!',
        });
        return;
      }

      const config = {
        method: 'get',
        url: process.env.VUE_APP_BACKEND_URL_API + 'admin',
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer ' + token,
        },
      };

      axios(config)
        .then((response) => {
          this.loadingTable = false;
          if (response.status === 200) {
            this.data = response.data.data;
            console.log(this.data);
          } else {
            this.data = [];
          }
        })
        .catch((error) => {
          this.loadingTable = false;
          this.data = [];
          console.error('Error:', error.response ? error.response.data : error.message);
        });
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
          <BCol md="4">
            <Stat icon="bx bx-copy-alt" title="Total Project" :value="data.total_project" />
          </BCol>
          <BCol md="4">
            <Stat icon="bx bx-archive-in" title="On Going" :value="data.project_on_going" />
          </BCol>
          <BCol md="4">
            <Stat icon="bx bx-purchase-tag-alt" title="Done" :value="data.project_done" />
          </BCol>
        </BRow>
      </BCol>
      <!-- <BCol md="4">
                <BCard no-body class="text-start">
                    <BCardBody>
                        <BCardTitle>Special title treatment</BCardTitle>
                        <BCardText>
                            With supporting text below as a natural lead-in to additional
                            content.
                        </BCardText>
                       </BCardBody>
                </BCard>
            </BCol> -->
    </BRow>

   <div id="app" class="container mt-4">
    <div class="card-container mb-3"  v-for="(item, index) in data.data_project" :key="index">
      <!-- Baris atas -->
      <div class="top-row">
        <!-- Judul Proyek -->
        <div class="judul">
          <h3 class="judul-section">{{ item.project_name }}</h3>
          <p>ini detail project </p>
        </div>
         
        <!-- Deadline -->
        <div class="deadline-box">
          <i class="mdi mdi-alert-outline me-3 text-white"> Deadline</i>
          <p class="fw-bold text-white">{{ item.deadline }}</p>
        </div>

        <!-- Sisa Waktu -->
        <div class="sisa-waktu-container">
          <i class="mdi mdi-alert-outline me-3 text-white mt-3"> Sisa Waktu (hari)</i>
          <p class="sisa-hari text-white fw-bold md:display-6">{{ item.sisa_waktu }}</p>
        </div>
      </div>

      <!-- Baris progress -->
      <div class="progress-container w-100">
        <div class="progress-wrapper w-100">
          <div class="d-flex justify-content-between">
            <span>Presentase</span>
            <span class="fw-bold">{{ item.progress_project }}%</span>
          </div>
          <div class="progress mt-2">
            <div class="progress-bar bg-success" :style="{ width: item.progress_project + '%' }"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
    
  </Layout>
</template>

<style>
    .card-container {
      background-color: #ffffff;
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
   .judul{
    width: 500px;
   }
    .deadline-box {
      text-align: center;
      flex: 1;
      background-color: #F46A6A;
      padding: 10px;
      border-radius: 8px;
      margin: 0 10px;
      height: 75px;
    }
    .sisa-waktu-container {
      background-color: #F46A6A;
      border-radius: 8px;
      text-align: center;
      padding: 10px;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 75px;
    }
    .progress-container {
      background-color: #eef5fc;
      padding: 10px;
      border-radius: 8px;
      margin-top: 10px;
      width: 865px;
    }
    .progress-wrapper {
      width: calc(100% - 250px); /* Batasi progress bar sejajar deadline */
    }
    
</style>
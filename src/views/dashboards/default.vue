<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
// import ProjectStats from "../../components/widgets/progress1.vue";
import Stat from "../../components/widgets/stat.vue";



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

   <div id="app" class="container mt-4">
    <div class="card-container">
      <!-- Baris atas -->
      <div class="top-row">
        <!-- Judul Proyek -->
        <h3 class="judul-section">{{ project.name }}</h3>

        <!-- Deadline -->
        <div class="deadline-box">
          <i class="mdi mdi-alert-outline me-3 text-white"> Deadline</i>
          <p class="fw-bold text-white">{{ project.deadline }}</p>
        </div>

        <!-- Sisa Waktu -->
        <div class="sisa-waktu-container">
          <i class="mdi mdi-alert-outline me-3 text-white mt-3"> Sisa Waktu (hari)</i>
          <p class="sisa-hari text-white fw-bold md:display-6">{{ project.daysLeft }}</p>
        </div>
      </div>

      <!-- Baris progress -->
      <div class="progress-container w-100">
        <div class="progress-wrapper w-100">
          <div class="d-flex justify-content-between">
            <span>Presentase</span>
            <span class="fw-bold">{{ project.progress }}%</span>
          </div>
          <div class="progress mt-2">
            <div class="progress-bar bg-success" :style="{ width: project.progress + '%' }"></div>
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
    .judul-section {
      flex: 2;
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
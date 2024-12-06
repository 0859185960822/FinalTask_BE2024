<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import ProjectStats from "../../components/widgets/progress1.vue";
// import SideBar from "../../components/side-bar.vue";


/**
 * Dashboard Component
 */
export default {
  components: {
    Layout,
    PageHeader,
    ProjectStats,
    // SideBar,

    

  },
  data() {
    return {
      // statData: [
      
      // ],

      project: {
        name: "Project A",
        progress: 60, // Persentase progress
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
    <ProjectStats /> 
        <div id="app" class="container mt-4">
    <div class="card-container">
      <!-- Baris atas -->
      <div class="top-row">
        <!-- Judul Proyek -->
        <h4 class="judul-section">{{ project.name }}</h4>

        <!-- Deadline -->
        <div class="deadline-box">
          <p class="fw-bold mb-1">Deadline</p>
          <p class="fw-bold">{{ project.deadline }}</p>
        </div>

        <!-- Sisa Waktu -->
        <div class="sisa-waktu-container">
          <p class="fw-bold mb-1 mt-3">Sisa Waktu (hari)</p>
          <p class="sisa-hari">{{ project.daysLeft }}</p>
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
            <div class="progress-bar bg-dark" :style="{ width: project.progress + '%' }"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
    
  </Layout>
</template>

<style>
 body {
      background-color: #f8f9fa;
    }
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
      background-color: white;
      padding: 10px;
      border-radius: 8px;
      margin-top: 10px;
      width: 865px;
    }
    .progress-wrapper {
      width: calc(100% - 250px); /* Batasi progress bar sejajar deadline */
    }
    .progress-bar {
      height: 4px;
    }
    .sisa-hari {
      font-size: 3rem;
      font-weight: bold;
      line-height: 1;
    }
    h4 {
      font-weight: bold;
      margin-bottom: 0;
    }
</style>
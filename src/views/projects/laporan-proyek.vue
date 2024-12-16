<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import { ref } from "vue";
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import Page from "../../components/common/pagination.vue";
import Swal from "sweetalert2";
import axios from "axios";



/**
 * Task-list component
 */
export default {
  setup() {
    const picked = ref(new Date());

    return {
      picked,
    };
  },
  data(){
    return{
      data: [],
      project: {
        name: "Project A",
        progress: 80, // Persentase progress
        deadline: "20 Desember 2024",
        daysLeft: 30, // Hari tersisa
      },
    }
  },
  components: { Layout, PageHeader,Page,flatPickr, },
  
  mounted() {
    this.getDataProject(),
    setTimeout(() => {
      this.showModal = false;
    }, 1500);
  },

  methods : {
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
            this.data = response.data.data.data_project;
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
    exportLaporanProyek() {
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
    url: process.env.VUE_APP_BACKEND_URL_API + 'admin/projects/export',
    headers: {
      Accept: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      Authorization: 'Bearer ' + token,
    },
    responseType: 'blob', // Tambahkan ini untuk menangani respon binary
  };
  
  axios(config)
    .then((response) => {
      this.loadingTable = false;
  
      // Buat URL dari binary data
      const blob = new Blob([response.data], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'Laporan_Proyek.xlsx'; // Nama file yang akan diunduh
      link.click();
  
      Swal.fire({
        icon: 'success',
        title: 'Berhasil',
        text: 'File berhasil diunduh!',
      });
    })
    .catch((error) => {
      this.loadingTable = false;
  
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.response ? error.response.data.message : 'Terjadi kesalahan!',
      });
      console.error('Error:', error.response ? error.response.data : error.message);
    });
    },
    },
  };
  
</script>

<template>
  <!-- <Sidebar/> -->
  <Layout>
    <PageHeader title="Laporan Proyek" pageTitle="Project" />
    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <BCardBody class="pb-0">
            <BCardTitle>Laporan Proyek</BCardTitle>
            <!-- <form class="row col-12 " style="margin-bottom: 1%;">
              <div class="col-2">
                <label class="visually-hidden" for="autoSizingSelect">Preference</label>
                <select class="form-select" id="autoSizingSelect">
                  <option selected>10</option>
                  <option value="1">10</option>
                  <option value="2">50</option>
                  <option value="3">100</option>
                </select>
              </div>
              <div class="col-7">
                <input type="text" class="form-control" id="autoSizingInput" placeholder="Cari">
              </div>
              <div class="col-3" style="margin-left: auto;" >
                <button type="button" class="btn btn-success h-100 w-100" alt="Disable"><i class="mdi-microsoft-excel"></i> EXPORT TO EXCEL</button>
              </div>
            </form> -->

           


            <form class="row g-3 align-items-center" style="margin-bottom: 2%;">
  <!-- Input Nama Proyek -->
  <div class="col-12 col-sm-6 col-md-4 col-lg-2">
    <label for="projectName" class="form-label">Cari Proyek</label>
    <input type="text" class="form-control" id="projectName" placeholder="Cari Proyek">
  </div>

  <!-- Dropdown Status Proyek -->
  <div class="col-12 col-sm-6 col-md-4 col-lg-2">
    <label for="projectStatus" class="form-label">Status Deadline</label>
    <select class="form-select" id="projectStatus">
      <option value="tepat waktu" selected>Tepat Waktu</option>
      <option value="terlambat">Terlambat</option>
    </select>
  </div>

  <!-- Input Progres -->
  <div class="col-12 col-sm-6 col-md-4 col-lg-2">
    <label for="progress" class="form-label">Mulai Tanggal</label>
    <!-- <input type="text" class="form-control" id="tgl_deadline" placeholder="Cari Tanggal"> -->
    <flat-pickr v-model="picked" :first-day-of-week="1" lang="en" confirm class="form-control"></flat-pickr>
  </div>

   <!-- Input Progres -->
   <div class="col-12 col-sm-6 col-md-4 col-lg-2">
    <label for="progress" class="form-label">Hingga Tanggal</label>
    <!-- <input type="text" class="form-control" id="tgl_deadline" placeholder="Cari Tanggal"> -->
    <flat-pickr v-model="picked" :first-day-of-week="1" lang="en" confirm class="form-control"></flat-pickr>
  </div>

  <!-- Input Sisa Waktu -->
  <!-- <div class="col-12 col-sm-6 col-md-4 col-lg-2">
    <label for="remainingTime" class="form-label">Sisa Waktu</label>
    <input type="text" class="form-control" id="remainingTime" placeholder="Cari sisa waktu">
  </div> -->

  <!-- Tombol Filter -->
  <div class="col-12 col-sm-6 col-md-4 col-lg-2 d-flex pt-4 align-items-end">
    <button type="button" class="btn btn-info w-100">
      <i class="bx bx-filter"></i> FILTER
    </button>
  </div>

  <!-- Tombol Export to Excel -->
  <div class="col-12 col-sm-6 col-md-4 col-lg-2 pt-md-0 pt-lg-4 d-flex align-items-end">
    <b-button type="button" class="btn btn-success w-100" @click="exportLaporanProyek()">
      <i class="fas fa-file-excel me-2"></i> EXPORT
    </b-button>
    <!-- <b-button variant="primary" size="sm" @click="exportLaporanProyek()">
          <i class="fas fa-file-excel"></i>
          &nbsp;
          <b>Export</b>
        </b-button> -->
  </div>
  
  
<!-- </form> -->

<!--             
            <form class="row col-auto" style="margin-bottom: 2%;"> -->
              <!-- <div class="row col-8" style="border: 1px solid #DCDCDC; margin-left: 1%; padding: 10px;">
                <div class="col-4">
                  <label class="visually-hidden" for="autoSizingSelect">Preference</label>
                  <select class="form-select" id="autoSizingSelect">
                    <option selected>Status</option>
                    <option value="1">Tepat Waktu</option>
                    <option value="2">Terlambat</option>
                  </select>
                </div>
                <div class="col-4">
                  <input type="text" class="form-control" id="autoSizingInput" placeholder="Cari">
                </div>
                <div class="col-4">
                  <input type="text" class="form-control" id="autoSizingInput" placeholder="Cari">
                </div>
              </div> -->

              <!-- <label class="me-2">Show</label>
                <select class="form-select w-auto" id="autoSizingSelect" aria-label="Select number of entries">
                  <option value="10" selected>10</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
                <label class="ms-2">Entries</label> -->


<!-- <div class="col-auto d-flex align-items-center">
  <form class="row g-3 align-items-center" style="gap: 0.85rem; flex-wrap: wrap;">
    
    Show Entries
    <div class="col-12 col-sm-6 col-md-2 col-lg-3 mt-lg-4 d-flex flex-column">
      <label class="form-label">Show Entries</label>
      <select class="form-select w-auto" id="autoSizingSelect" aria-label="Select number of entries">
        <option value="10" selected>10</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
    </div>

    Input Nama Proyek
    <div class="col-12 col-sm-6 col-md-3 col-lg-2 d-flex flex-column pt-3">
      <label for="projectName" class="form-label">Cari Proyek</label>
      <input type="text" class="form-control" id="projectName" placeholder="Cari Proyek">
    </div>

    Dropdown Status Proyek
    <div class="col-12 col-sm-6 col-md-3 col-lg-3 d-flex flex-column pt-3">
      <label for="projectStatus" class="form-label">Status Deadline</label>
      <select class="form-select" id="projectStatus">
        <option value="tepat waktu" selected>Tepat Waktu</option>
        <option value="terlambat">Terlambat</option>
      </select>
    </div>

    Input Progres
    <div class="col-12 col-sm-6 col-md-3 col-lg-2 d-flex flex-column pt-3">
      <label for="progress" class="form-label">Progres</label>
      <input type="text" class="form-control" id="progress" placeholder="Cari progress">
    </div>

    Input Sisa Waktu
    <div class="col-12 col-sm-6 col-md-3 col-lg-2 d-flex flex-column pt-3">
      <label for="remainingTime" class="form-label">Sisa Waktu</label>
      <input type="text" class="form-control" id="remainingTime" placeholder="Cari sisa waktu">
    </div>

    Button Filter
    <div class="col-12 col-sm-6 col-md-3 col-lg-2 d-flex flex-column  pt-5">
      <button type="button" class="btn btn-info w-100">
        <i class="bx bx-filter"></i> FILTER
      </button>
    </div>
    
  </form>
</div> -->
</form>
           
            <div class="table-responsive">
              <BTableSimple class="mb-0">
                <BThead>
                  <BTr style="border-collapse: collapse; border: 1px solid black">
                    <BTh style="background-color: #272b4e; color: whitesmoke;text-align: center; vertical-align: middle;border-collapse: collapse; border: 1px solid black;">No</BTh>
                    <BTh style="background-color: #272b4e; color: whitesmoke;text-align: center; border-collapse: collapse; border: 1px solid black;">Nama Proyek <button class="btn btn-sm btn-link p-0"><i class="fa fa-sort"></i></button></BTh>
                    <BTh style="background-color: #272b4e; color: whitesmoke;text-align: center; border-collapse: collapse; border: 1px solid black;">Progress % <button class="btn btn-sm btn-link p-0"><i class="fa fa-sort"></i></button></BTh>
                    <BTh style="background-color: #272b4e; color: whitesmoke;text-align: center; border-collapse: collapse; border: 1px solid black;">Tanggal Deadline <button class="btn btn-sm btn-link p-0"><i class="fa fa-sort"></i></button></BTh>
                    <BTh style="background-color: #272b4e; color: whitesmoke;text-align: center; border-collapse: collapse; border: 1px solid black;">Sisa Waktu <button class="btn btn-sm btn-link p-0"><i class="fa fa-sort"></i></button></BTh>
                    <BTh style="background-color: #272b4e; color: whitesmoke;text-align: center; border-collapse: collapse; border: 1px solid black;">Status Deadline <button class="btn btn-sm btn-link p-0"><i class="fa fa-sort"></i></button></BTh>
                    <!-- <BTh style="background-color: #272b4e; color: whitesmoke;text-align: center; border-collapse: collapse; border: 1px solid black;vertical-align: middle;" rowspan="2">Aksi</BTh> -->
                  </BTr>
                  <!-- <BTr style="border-collapse: collapse; border: 1px solid black;">
                    <BTh style="background-color: #272b4e; color: whitesmoke; border-collapse: collapse; border: 1px solid black;"><input type="text" placeholder="Search User" class="form-control"></BTh>
                    <BTh style="background-color: #272b4e; color: whitesmoke; border-collapse: collapse; border: 1px solid black;"><input type="text" placeholder="Search User" class="form-control"></BTh>
                    <BTh style="background-color: #272b4e; color: whitesmoke; border-collapse: collapse; border: 1px solid black;"><input type="text" placeholder="Search User" class="form-control"></BTh>
                    <BTh style="background-color: #272b4e; color: whitesmoke; border-collapse: collapse; border: 1px solid black;"><input type="text" placeholder="Search User" class="form-control"></BTh>
                    <BTh style="background-color: #272b4e; color: whitesmoke; border-collapse: collapse; border: 1px solid black;"><input type="text" placeholder="Search User" class="form-control"></BTh>
                  </BTr> -->
                </BThead>
                <BTbody>
                  <BTr style="border-collapse: collapse; border: 1px solid black" v-for="(item,index) in data" :key="index">
                    <BTh scope="row">{{ index+1 }}</BTh>
                    <BTd style="border-collapse: collapse; border: 1px solid black;">{{item.project_name}}</BTd>
                    <BTd style="border-collapse: collapse; border: 1px solid black;">
                      <div class="progress-container w-100">
                        <div class="progress-wrapper w-100">
                          <div class="d-flex justify-content-between">
                            <span>Presentase</span>
                            <span class="fw-bold">{{ item.progress_project }}</span>
                          </div>
                          <div class="progress mt-2">
                            <div class="progress-bar bg-success" :style="{ width: item.progress_project + '%' }"></div>
                          </div>
                        </div>
                      </div>
                    </BTd>
                    <BTd style="border-collapse: collapse; border: 1px solid black;">{{ item.deadline }}</BTd>
                    <BTd style="border-collapse: collapse; border: 1px solid black;text-align: center;"><span class="badge bg-danger">{{ item.sisa_waktu }}</span></BTd>
                    <BTd style="border-collapse: collapse; border: 1px solid black;text-align: center;"><span class="badge bg-danger">{{ item.status_deadline }}</span></BTd>
                  </BTr>
                </BTbody>
              </BTableSimple>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  <Page/>
  </Layout>
</template>

<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
// import { ref } from "vue";
// import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import Page from "../../components/common/pagination.vue";
import Swal from "sweetalert2";
import axios from "axios";
import $ from 'jquery';
import moment from 'moment';
import 'daterangepicker/daterangepicker.css';
import 'daterangepicker';


/**
 * Task-list component
 */
export default {
  setup() {
    // const picked = ref(new Date());
    // const picked2 = ref(new Date());
    // return {
    //   picked,
    //   picked2,
    // };
  },
  data(){
    return{
      project: {
        name: "Project A",
        progress: 80, // Persentase progress
        deadline: "20 Desember 2024",
        daysLeft: 30, // Hari tersisa
      },
      dateRange: '', // Untuk menyimpan tanggal yang dipilih
    }
  },
  mounted() {
    const start = moment().subtract(29, 'days');
    const end = moment();

    const cb = (start, end) => {
      this.dateRange = `${start.format('MMMM D, YYYY')} - ${end.format('MMMM D, YYYY')}`;
    };

    $(this.$refs.reportrange).daterangepicker(
      {
        startDate: start,
        endDate: end,
        ranges: {
          'Today': [moment(), moment()],
          'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
          'Last 7 Days': [moment().subtract(6, 'days'), moment()],
          'Last 30 Days': [moment().subtract(29, 'days'), moment()],
          'This Month': [moment().startOf('month'), moment().endOf('month')],
          'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
        },
      },
      cb
    );

    // Set the initial date range
    cb(start, end);
  },

  components: { Layout, PageHeader,Page,
    // flatPickr, 
  },
  
  methods: {
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

            <form class="row g-3 align-items-center" style="margin-bottom: 2%;">
  <!-- Input Nama Proyek -->
  <div class="col-12 col-sm-6 col-md-4 col-lg-3">
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

  <!-- date-->
   <div class="col-12 col-sm-6 col-md-4 col-lg-3">
    <label for="dateRange">Sort Tanggal</label>
      <div id="reportrange" ref="reportrange" style="background: #fff; cursor: pointer; border: 1px solid #ccc;">
        <i class="fa fa-calendar"></i>&nbsp;<span>{{ dateRange }}</span> <i class="fa fa-caret-down"></i>
      </div>
   </div>

 <!-- <div class="col-12 col-sm-6 col-md-4 col-lg-2">
    <label for="progress" class="form-label">Mulai Tanggal</label>
    <flat-pickr v-model="picked" :first-day-of-week="1" lang="en" confirm class="form-control"></flat-pickr>
  </div> -->

   <!-- <div class="col-12 col-sm-6 col-md-4 col-lg-2">
    <label for="progress" class="form-label">Hingga Tanggal</label>
    <flat-pickr v-model="picked2" :first-day-of-week="1" lang="en" confirm class="form-control"></flat-pickr>
  </div>  -->

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
  </div>
  
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
                  </BTr>
                 
                </BThead>
                <BTbody>
                  <BTr style="border-collapse: collapse; border: 1px solid black">
                    <BTh scope="row">1</BTh>
                    <BTd style="border-collapse: collapse; border: 1px solid black;">Proyek A</BTd>
                    <BTd style="border-collapse: collapse; border: 1px solid black;">
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
                    </BTd>
                    <BTd style="border-collapse: collapse; border: 1px solid black;">20/11/2021</BTd>
                    <BTd style="border-collapse: collapse; border: 1px solid black;text-align: center;"><span class="badge bg-danger">3 Hari</span></BTd>
                    <BTd style="border-collapse: collapse; border: 1px solid black;text-align: center;"><span class="badge bg-danger">Terlambat</span></BTd>
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

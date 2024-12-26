<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import "flatpickr/dist/flatpickr.css";
// import Page from "../../components/common/pagination.vue";
import Pagination from "../../components/common/table-pagination.vue";
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

  data(){
    return{
      data: [],
      project: {
        name: "Project A",
        progress: 80, // Persentase progress
        deadline: "20 Desember 2024",
        daysLeft: 30, // Hari tersisa
      },
      dateRange: '', // Untuk menyimpan tanggal yang dipilih
      filterTitle: '',
      filterStatus: '',
      sortColumn: null, // Nama kolom yang sedang disortir
      sortOrder: 'asc', // Urutan sorting ('asc' atau 'desc')
      loadingTable: false,
      isFilterApplied: false, // Properti untuk melacak apakah filter diterapkan
      per_page: 5,
      page: 1,

      // paginasi
      pagination: {
        total: "",
        from: "",
        to: "",
        page: "",
        per_page: "",
        links: '',
        lastPageUrl: "",
        nextPageUrl: "",
        prevPageUrl: "",
      },
    }
  },
  mounted() {
    this.getDataProject();
    const start = moment().subtract(29, 'days');
  const end = moment();

  const cb = (start, end) => {
    // Simpan tanggal dalam array
    this.dateRange = [start.format('YYYY-MM-DD'), end.format('YYYY-MM-DD')];
  };

  $(this.$refs.reportrange).daterangepicker(
    {
      locale: { format: 'YYYY-MM-DD' },
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

  // Set initial date range
  cb(start, end);
  },

  components: { 
    Layout,
    PageHeader,
    Pagination,
    // Page,
    // flatPickr, 
  },
  
  methods: {
    getDataProject(url = process.env.VUE_APP_BACKEND_URL_API + 'laporan-project') {
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
        url: url,
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
            // console.log(this.data);

            this.pagination.total = response.data.data.pagination.total;
              this.pagination.from = response.data.data.pagination.from;
              this.pagination.to = response.data.data.pagination.to;
              this.pagination.links = response.data.data.pagination.links;
              this.pagination.lastPageUrl = response.data.data.pagination.last_page_url;
              this.pagination.nextPageUrl = response.data.data.pagination.next_page_url;
              this.pagination.prevPageUrl = response.data.data.pagination.prev_page_url;
              this.pagination.per_page = this.per_page;
              this.pagination.page = this.page;
              console.log(response.data.data.pagination.links);
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
    toPage: function(str){
      console.clear();
      console.log(str);
      this.getDataProject(str);
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

      let filterParams = {}; // Default tanpa filter

      if (this.isFilterApplied) {
        let startDate = '';
        let endDate = '';
        if (Array.isArray(this.dateRange) && this.dateRange.length === 2) {
          startDate = this.dateRange[0];
          endDate = this.dateRange[1];
        }

        // Atur parameter filter jika filter diterapkan
        filterParams = {
          title: this.filterTitle || '',
          status_deadline: this.filterStatus || '',
          deadline_from: startDate,
          deadline_to: endDate,
        };
      }

      const config = {
        method: 'get',
        url: process.env.VUE_APP_BACKEND_URL_API + 'admin/projects/export',
        headers: {
          Accept: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
          Authorization: 'Bearer ' + token,
        },
        params: filterParams, // Gunakan filterParams hanya jika filter diterapkan
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
      openDatePicker() {
        const self = this;
        $(this.$refs.reportrange).daterangepicker(
          {
            locale: {
              format: 'YYYY-MM-DD',
            },
            opens: 'left',
          },
          function (start, end) {
            // Simpan tanggal sebagai array
            self.dateRange = [start.format('YYYY-MM-DD'), end.format('YYYY-MM-DD')];
          }
        );
      },

      filterLaporanProyek() {
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

      let startDate = '';
      let endDate = '';
      if (Array.isArray(this.dateRange) && this.dateRange.length === 2) {
        startDate = this.dateRange[0];
        endDate = this.dateRange[1];
      }

      const filterParams = {
        title: this.filterTitle || '',
        status_deadline: this.filterStatus || '',
        deadline_from: startDate,
        deadline_to: endDate,
      };

      const config = {
        method: 'get',
        url: process.env.VUE_APP_BACKEND_URL_API + 'admin/projects/filter',
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer ' + token,
        },
        params: filterParams,
      };

      axios(config)
        .then((response) => {
          this.loadingTable = false;
          this.data = response.data.data.data_projects;
          this.isFilterApplied = true; // Atur filter sebagai diterapkan
          Swal.fire({
            icon: 'success',
            title: 'Berhasil',
            text: 'Data berhasil difilter!',
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


      sortData(column) {
        if (this.sortColumn === column) {
          // Toggle sorting order jika kolom yang sama diurutkan
          this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
        } else {
          // Tetapkan kolom baru dan urutan default (ascending)
          this.sortColumn = column;
          this.sortOrder = 'asc';
        }

        // Lakukan sorting data
        this.data.sort((a, b) => {
          let valA = a[column];
          let valB = b[column];

          // Jika datanya string, lakukan perbandingan case-insensitive
          if (typeof valA === 'string' && typeof valB === 'string') {
            valA = valA.toLowerCase();
            valB = valB.toLowerCase();
          }

          if (this.sortOrder === 'asc') {
            return valA > valB ? 1 : valA < valB ? -1 : 0;
          } else {
            return valA < valB ? 1 : valA > valB ? -1 : 0;
          }
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
              <input type="text" class="form-control" id="projectName" v-model="filterTitle"  placeholder="Cari Proyek">
            </div>

            <!-- Dropdown Status Proyek -->
            <div class="col-12 col-sm-6 col-md-4 col-lg-2">
              <label for="projectStatus" class="form-label">Status Deadline</label>
              <select class="form-select" id="projectStatus" v-model="filterStatus">
                <option value="" selected>Semua Status</option>
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
            {{ console.log(this.start) }}

            <!-- Tombol Filter -->
            <div class="col-12 col-sm-6 col-md-4 col-lg-2 d-flex pt-4 align-items-end">
              <button type="button" class="btn btn-info w-100" @click="filterLaporanProyek()">
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
                    <BTh style="background-color: #272b4e; color: whitesmoke;text-align: center; border-collapse: collapse; border: 1px solid black;">Nama Proyek 
                      <!-- <button class="btn btn-sm btn-link p-0"><i class="fa fa-sort"></i></button> -->
                      <button class="btn btn-sm btn-link p-0" @click="sortData('project_name')" ><i  
                        class="fa fa-sort"
                        :class="{
                          'fa-sort-asc': sortColumn === 'project_name' && sortOrder === 'asc',
                          'fa-sort-desc': sortColumn === 'project_name' && sortOrder === 'desc',
                        }"></i></button>
                    </BTh>
                    <BTh style="background-color: #272b4e; color: whitesmoke;text-align: center; border-collapse: collapse; border: 1px solid black;">Progress % 
                      <!-- <button class="btn btn-sm btn-link p-0"><i class="fa fa-sort"></i></button> -->
                      <button class="btn btn-sm btn-link p-0" @click="sortData('progress_project')" ><i  
                        class="fa fa-sort"
                        :class="{
                          'fa-sort-asc': sortColumn === 'progress_project' && sortOrder === 'asc',
                          'fa-sort-desc': sortColumn === 'progress_project' && sortOrder === 'desc',
                        }"></i></button>
                    </BTh>
                    <BTh style="background-color: #272b4e; color: whitesmoke;text-align: center; border-collapse: collapse; border: 1px solid black;">Tanggal Deadline 
                      <!-- <button class="btn btn-sm btn-link p-0"><i class="fa fa-sort"></i></button> -->
                      <button class="btn btn-sm btn-link p-0" @click="sortData('deadline')" ><i  
                        class="fa fa-sort"
                        :class="{
                          'fa-sort-asc': sortColumn === 'deadline' && sortOrder === 'asc',
                          'fa-sort-desc': sortColumn === 'deadline' && sortOrder === 'desc',
                        }"></i></button>
                    </BTh>
                    <BTh style="background-color: #272b4e; color: whitesmoke;text-align: center; border-collapse: collapse; border: 1px solid black;">Sisa Waktu 
                      <!-- <button class="btn btn-sm btn-link p-0"><i class="fa fa-sort"></i></button> -->
                      <button class="btn btn-sm btn-link p-0" @click="sortData('sisa_waktu')" ><i  
                        class="fa fa-sort"
                        :class="{
                          'fa-sort-asc': sortColumn === 'sisa_waktu' && sortOrder === 'asc',
                          'fa-sort-desc': sortColumn === 'sisa_waktu' && sortOrder === 'desc',
                        }"></i></button>
                    </BTh>
                    <BTh style="background-color: #272b4e; color: whitesmoke;text-align: center; border-collapse: collapse; border: 1px solid black;">Status Deadline 
                      <!-- <button class="btn btn-sm btn-link p-0"><i class="fa fa-sort"></i></button> -->
                      <button class="btn btn-sm btn-link p-0" @click="sortData('status_deadline')" ><i  
                        class="fa fa-sort"
                        :class="{
                          'fa-sort-asc': sortColumn === 'status_deadline' && sortOrder === 'asc',
                          'fa-sort-desc': sortColumn === 'status_deadline' && sortOrder === 'desc',
                        }"></i></button>
                    </BTh>
                  </BTr>
                 
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
                            <span class="fw-bold">{{ item.progress_project }}%</span>
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
            <Pagination :pagination="pagination" @to-page="toPage"></Pagination>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  <!-- <Page/> -->
  </Layout>
</template>

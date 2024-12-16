<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import Stat from "../../components/widgets/stat.vue";
import Page from "../../components/common/pagination.vue";
import { ref } from "vue";
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import Swal from 'sweetalert2'
import axios from "axios";

/**
 * Task-list component
 */
export default {
  setup() {
    const modalTK = ref(false);
    const modalTT = ref(false);
    const modalST = ref(false);
    const modalSP = ref(false);
    const modalDT = ref(false);
    return {
      modalTK,
      modalTT,
      modalST,
      modalSP,
      modalDT,
      picked: ref(new Date()),
    };
  },
  components: { Layout, PageHeader,Page,flatPickr,Stat, },
  data() {
    return {
 
      id: this.$route.params.id,
      data: [],
      instruktur_data: [], // Array untuk data instruktur
      peserta_ref: [], // Opsi referensi untuk v-select

      no:1,

      statData: [
        {
          icon: "bx bx-copy-alt",
          title: "Total Task",
          value: "112",
          // backgroundColor: "bg-danger !important",
        },
        {
          icon: "bx bx-archive-in",
          title: "Task Pending",
          value: "23",
          backgroundColor: "bg-danger !important",
        },
        {
          icon: "bx bx-run",
          title: "Task Ongoing",
          value: "16",
          backgroundColor: "bg-warning !important",
        },
        {
          icon: "bx bx-list-check",
          title: "Task Done",
          value: "16",
          backgroundColor: "bg-success !important",
        },
      ],

      project: {
        name: "Project A",
        progress: 60, // Persentase progress
        deadline: "20 Desember 2024",
        daysLeft: 30, // Hari tersisa
        
      },
 
    };
  },
  mounted() {
    this.getDataProject()
    setTimeout(() => {
      this.showModal = false;
    }, 1500);
  },
  methods: {
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
        url: process.env.VUE_APP_BACKEND_URL_API + 'admin/' + this.id,
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

  countTasksByStatus(status) {
      return this.data.task.filter(data => data.status_task === status).length;
    },

    // Tambahkan baris instruktur baru
    addRowPeserta() {
      this.instruktur_data.push({
        instruktur_data: self.instruktur_data,
      });
    },
    

    // Hapus baris tertentu
    deleteRow(index) {
      this.instruktur_data.splice(index, 1);
    },
  
    // Fungsi untuk memperbarui progress secara dinamis
    updateProgress(newProgress) {
      this.project.progress = newProgress;
    },
    updatemsg() {
    Swal.fire({
        title: "Data Terupdate!",
        text: "Data Berhasil Terupdate!",
        icon: "success",
        confirmButtonColor: "#556ee6",

    });
},
confirm() {
    Swal.fire({
        title: "Apakah kamu yakin ?",
        text: "kamu tidak bisa mengembalikan data setelah dihapus",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#34c38f",
        cancelButtonColor: "#f46a6a",
        confirmButtonText: "Ya, Hapus !",
       
    }).then(result => {
        if (result.value) {
            Swal.fire("Deleted!", "Data Berhasil Dihapus.", "success");
        }
    });
},
successmsg() {
    Swal.fire({
        title: "Data Tersimpan!",
        text: "Data Berhasil Tersimpan!",
        icon: "success",
        confirmButtonColor: "#556ee6",

    });
},

sendmsg() {
    Swal.fire({
        title: "Komentar Tersimpan!",
        text: "Komentar Berhasil Tersimpan!",
        icon: "success",
        confirmButtonColor: "#556ee6",

    });
},
 
};
</script>
console.log(pro);
<template>
  <!-- <Sidebar/> -->
  <Layout>
    <PageHeader title="Detail Proyek" pageTitle="Project" />
    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <BCardBody class="pb-0">
          <div class="mb-1 d-md-flex">
            <BCardTitle>Detail Proyek</BCardTitle>
            <div class="col-md-3 col-6" style="margin-left: auto; margin-right: 1%;" >
                <button type="button" class="btn btn-success h-100 w-100 d-none d-md-flex" alt="Disable" @click="modalTK = true" variant="primary"><i class="fa fa-plus me-1 mt-1"></i> TAMBAH KOLABORATOR </button>
                  <BModal v-model="modalTK" id="modal-center" size="lg" centered title="Tambah Kolaborator" hide-footer>
                    <div class="p-3">
                      <form>
                        <div class="row">
                        <div class="col-12">
                          <table class="table mb-0 mt-0 table-bordered table-condensed table-hover">
                            <thead class="bg-dark text-center text-white">
                              <tr>
                                <th style="width: 50px">No</th>
                                <th style="width: auto">Kolaborator</th>
                                <th style="width: 50px" class="text-center">
                                  <b-button
                                    type="button"
                                    class="btn btn-success btn-sm"
                                    @click="addRowPeserta"
                                  >
                                    <i class="fa fa-plus"></i>
                                  </b-button>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="(row_data, key_data) in instruktur_data" :key="key_data">
                                <td class="text-center">{{ key_data + 1 }}.</td>
                                <td>
                                  <v-select
                                    label="nip_name"
                                    v-model="row_data.instruktur_data"
                                    :options="peserta_ref"
                                    @search="onSearchInstruktur"
                                    placeholder="Cari dan Pilih Kolaborator..."
                                  ></v-select>
                                </td>
                              
                                <td class="text-center">
                                  <button
                                    type="button"
                                    class="btn btn-danger btn-sm"
                                    @click="deleteRow(key_data, row_data)"
                                  >
                                    <i class="fa fa-minus"></i>
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                        </table>
                        </div>
                      </div>
                        <div class="text-end mt-3">
                          <button type="button" class="btn btn-secondary btn-success">Tambah</button>
                        </div>
                      </form>
                    </div>
                  </BModal>
                </div>
            <div class="col-6 col-md-3">
                <button type="button" class="btn btn-warning h-100 w-100 d-none d-md-flex" alt="Disable" @click="modalSP = true" variant="primary"><i class="fa fa-edit me-1"></i>  SUNTING PROYEK </button>
                <!-- <button type="button" class="btn btn-warning h-100 w-100 d-flex d-md-none" alt="Disable" @click="modalSP = true" variant="primary"><i class="fa fa-edit"></i>  PROYEK</button> -->
                <BModal v-model="modalSP" id="modal-center" size="lg" centered title="Sunting Proyek" hide-footer>
                    <div class="p-3">
                      <form>
                        <div class="mb-3">
                          <label for="judul-task" class="form-label fw-bold">Nama Proyek</label>
                          <input type="text" class="form-control" id="autoSizingInput" value="Proyek A">
                        </div>
                        <div class="mb-3">
                          <label for="judul-task" class="form-label fw-bold">Deskripsi Proyek</label>
                          <!-- <input type="text" class="form-control" id="autoSizingInput" value="ini deskripsi"> -->
                          <textarea class="form-control" placeholder="Tuliskan Deskripsi Proyek" rows="2" value="ini deskripsi proyek"></textarea>
                        </div>
                        <div class="mb-3">
                          <label for="deadline" class="form-label fw-bold">Tenggat Waktu</label>
                          <flat-pickr v-model="picked" :first-day-of-week="1" lang="en" confirm class="form-control"></flat-pickr>
                        </div>
                        <div class="text-end">
                          <button type="button" class="btn btn-secondary btn-success" @click="updatemsg()">Simpan</button>
                        </div>
                      </form>
                    </div>
                  </BModal>
            </div>
            <div class="d-flex gap-1">
              <button type="button" class="btn btn-success h-100 w-100 d-flex d-md-none" alt="Disable" @click="modalTK = true" variant="primary"><i class="fa fa-plus me-1"></i> KOLABORATOR </button>
            <button type="button" class="btn btn-warning h-100 w-100 d-flex d-md-none" alt="Disable" @click="modalSP = true" variant="primary"><i class="fa fa-edit"></i>  PROYEK</button>
            </div>
          </div>
          
<b-card header-class="bg-transparent border-primary" class="border border-primary">
  <div id="app" class="container mt-4">
  <div class="card-container mb-3">
    <!-- Baris atas -->
    <div class="top-row row align-items-center">
      <!-- Judul Proyek -->
      <div class="col-12 col-md-5 judul mb-3 mb-md-0">
        <h3 class="judul-section">{{ data.project_name }}</h3>
        <p>{{ data.description }}</p>
      </div>

      <!-- Deadline -->
      <div class="col-12 col-md-3 deadline-box mb-3 mb-md-0">
        <i class="mdi mdi-alert-outline me-2 text-white"> Deadline</i>
        <p class="fw-bold text-white">{{ data.deadline }}</p>
      </div>

      <!-- Sisa Waktu -->
      <div class="col-12 col-md-3 sisa-waktu-container">
        <i class="mdi mdi-alert-outline me-2 text-white"> Sisa Waktu (hari)</i>
        <p class="sisa-hari text-white fw-bold">{{ data.sisa_waktu }}</p>
      </div>
    </div>

    <!-- Baris progress -->
    <div class="progress-container w-100 mt-4">
      <div class="progress-wrapper w-100">
        <div class="d-flex justify-content-between">
          <span>Presentase</span>
          <span class="fw-bold">{{ data.progress_project }}</span>
        </div>
        <div class="progress mt-2">
          <div class="progress-bar bg-success" :style="{ width: data.progress_project + '%' }"></div>
        </div>
      </div>
    </div>
  </div>
</div>



  <BCol xl="12" md="12" lg="12">
        <BRow>
          <BCol md="3">
            <Stat icon="bx bx-task" title="Total Task" :value="data.total_task" />
          </BCol>
          <BCol md="3">
            <Stat icon="bx bx-error-alt" title="Pending" :value="data.task_pending" :backgroundColor="statData[1].backgroundColor" />
          </BCol>
          <BCol md="3">
            <Stat icon="bx bx-run" title="On Going" :value="data.task_on_going" :backgroundColor="statData[2].backgroundColor"/>
          </BCol>
          <BCol md="3">
            <Stat icon="bx bx-list-check" title="Done" :value="data.task_done" :backgroundColor="statData[3].backgroundColor" />
          </BCol>
        </BRow>
      </BCol>
          </b-card>
          
          <b-card header-class="bg-transparent border-primary" class="border border-primary">
          <form class="row align-items-center" style="margin-bottom: 2%;">
            <!-- Dropdown Show Entries -->
            <div class="col-auto d-flex align-items-center pt-lg-4">
              <label class="me-2">Show</label>
              <select class="form-select w-auto" id="autoSizingSelect" aria-label="Select number of entries">
                <option value="10" selected>10</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
              <label class="ms-2">Entries</label>
            </div>

            <!-- Input Pencarian -->
            <div class="col-md-auto col-7">
              <label>Data Proyek</label>
              <input type="text" class="form-control" id="autoSizingInput" placeholder="Cari Data Proyek">
            </div>

  <!-- Tombol Tambah Task -->
  <div class="col-auto ms-auto pt-lg-4 pt-4">
    <button type="button" class="btn btn-success d-flex align-items-center d-none d-md-flex" alt="Disable" @click="modalTT = true"><i class="fa fa-plus me-2"></i>TAMBAH TASK</button>
    <button type="button" class="btn btn-success d-flex align-items-center d-flex d-md-none" alt="Disable" @click="modalTT = true"><i class="fa fa-plus me-2"></i>TASK</button>
    <BModal v-model="modalTT" id="modal-center" size="lg" centered title="Tambah Task" hide-footer>
                    <div class="p-3">
                      <form>
                        <div class="mb-3">
                          <label for="judul-task" class="form-label fw-bold">Judul Task</label>
                          <input type="text" class="form-control" id="autoSizingInput" placeholder="Masukan judul Task">
                        </div>
                        <BRow>
                          <BCol md="6">
                            <BFormGroup class="mb-3" label="Tingkat Urgensi" label-for="tingkat-urgensi-input">
                                <select id="urgensi" class="form-select">
                                  <option selected>Pilih Tingkat Urgensi</option>
                                  <option value="1">Urgent</option>
                                  <option value="2">Tinggi</option>
                                  <option value="3">Sedang</option>
                                  <option value="3">Rendah</option>
                                </select>
                            </BFormGroup>
                          </BCol>
                          <BCol md="6">
                            <div class="form-group">
                              <BFormGroup class="mb-3 fw-bold" label="Tipe Task" label-for="tipe-task-input">
                                <select id="kolaborator" class="form-select">
                                  <option selected>Pilih Tipe Task</option>
                                  <option value="1">Major</option>
                                  <option value="2">Minor</option>
                                </select>
                              </BFormGroup>
                            </div>
                          </BCol>
                        </BRow>

                        <BRow>
                          <BCol md="6">
                            <BFormGroup class="mb-3" label="Kolaborator" label-for="kolabolator-input">
                              <select id="kolaborator" class="form-select">
                                    <option selected>Pilih kolaborator</option>
                                    <option value="1">Kolaborator 1</option>
                                    <option value="2">Kolaborator 2</option>
                                    <option value="3">Kolaborator 3</option>
                              </select>
                            </BFormGroup>
                          </BCol>
                          <BCol md="6">
                            <div class="form-group">
                              <BFormGroup class="mb-3 fw-bold" label="Tanggal Deadline" label-for="tipe-task-input">
                                <flat-pickr v-model="picked" :first-day-of-week="1" lang="en" confirm class="form-control"></flat-pickr>
                              </BFormGroup>
                            </div>
                          </BCol>
                        </BRow>
                        <div class="text-end">
                          <button type="button" class="btn btn-secondary btn-success" @click="successmsg()">Tambah</button>
                        </div>
                      </form>
                    </div>
                  </BModal>
                </div>
              </form>
              
            <div class="table-responsive">
              <BTableSimple class="mb-0">
                <BThead>
                  <BTr style="border-collapse: collapse; border: 1px solid black">
                    <BTh style="background-color: #272b4e; color: whitesmoke;text-align: center; vertical-align: middle;border-collapse: collapse; border: 1px solid black;">No</BTh>
                    <BTh style="background-color: #272b4e; color: whitesmoke;text-align: center; border-collapse: collapse; border: 1px solid black;">Kolaborator <button class="btn btn-sm btn-link p-0"><i class="fa fa-sort"></i></button></BTh>
                    <BTh style="background-color: #272b4e; color: whitesmoke;text-align: center; border-collapse: collapse; border: 1px solid black;">Task <button class="btn btn-sm btn-link p-0"><i class="fa fa-sort"></i></button></BTh>
                    <BTh style="background-color: #272b4e; color: whitesmoke;text-align: center; border-collapse: collapse; border: 1px solid black;">Status <button class="btn btn-sm btn-link p-0"><i class="fa fa-sort"></i></button></BTh>
                    <BTh style="background-color: #272b4e; color: whitesmoke;text-align: center; border-collapse: collapse; border: 1px solid black;">Sisa Waktu <button class="btn btn-sm btn-link p-0"><i class="fa fa-sort"></i></button></BTh>
                    <BTh style="background-color: #272b4e; color: whitesmoke;text-align: center; border-collapse: collapse; border: 1px solid black;vertical-align: middle;" rowspan="2">Aksi</BTh>
                  </BTr>
                </BThead>
                <BTbody>
                  <BTr style="border-collapse: collapse; border: 1px solid black" v-for="(item,index) in data.task" :key="index">
                    <BTh scope="row">{{ index + 1 }}</BTh>
                    <BTd style="border-collapse: collapse; border: 1px solid black;">
                      {{ item.collaborator_id.name }}
                    </BTd>
                    <BTd style="border-collapse: collapse; border: 1px solid black;"><a @click="modalDT = true" variant="primary" style="cursor: pointer;">{{ item.task_name }}</a> <br><span class="badge bg-info">{{ item.type_task }}</span> <span class="badge bg-warning">{{ item.priority_task }}</span> </BTd>
                    <BModal v-model="modalDT" id="modal-task-detail" hide-footer>
                      <div class="space-y-4">
                        <!-- Header -->
                        <div class="d-flex justify-content-between align-items-center border-bottom pb-2">
                          <h5 class=" mb-0">Detail Task</h5>
                          <div class="d-flex">
                            <!-- Sisa Waktu -->
                            <div class="text-center me-4">
                              <p class="text-muted mb-1">Sisa Waktu</p>
                              <p class="fw-bold mb-0">{{item.sisa_waktu}}</p>
                            </div>
                            <!-- Status Deadline -->
                            <!-- <div class="text-center">
                              <p class="text-muted mb-1">Status Deadline</p>
                              <span class="badge bg-danger text-white rounded-pill">Terlambat 3 Tahun</span>
                            </div> -->
                          </div>
                        </div>
                        <!-- Form Fields -->
                        <BRow>
                          <BCol md="6">
                            <BFormGroup class="mb-3 fw-bold" label="Judul Task" label-for="tingkat-urgensi-input">
                              <p>{{item.task_name}}</p>
                            </BFormGroup>
                          </BCol>
                          <BCol md="6">
                            <div class="form-group">
                              <BFormGroup class="mb-3 fw-bold" label="Tipe-Task" label-for="tipe-task-input">
                                <p>{{item.type_task}}</p>
                              </BFormGroup>
                            </div>
                          </BCol>
                        </BRow>
                        <BRow>
                          <BCol md="6">
                            <BFormGroup class="mb-3 fw-bold" label="Tingkat Urgensi" label-for="tingkat-urgensi-input">
                              <p>{{item.priority_task}}</p>
                            </BFormGroup>
                          </BCol>
                          <BCol md="6">
                            <div class="form-group">
                              <BFormGroup class="mb-3 fw-bold" label="Nama Kolaborator" label-for="tipe-task-input">
                               <p>{{item.collaborator_id.name}}</p>
                              </BFormGroup>
                            </div>
                          </BCol>
                        </BRow>
                        <BRow>
                          <BCol md="6">
                            <BFormGroup class="mb-3 fw-bold" label="Status Task" label-for="tingkat-urgensi-input">
                              <p>{{item.status_task}}</p>
                            </BFormGroup>
                          </BCol>
                          <BCol md="6">
                            <div class="form-group">
                              <BFormGroup class="mb-3 fw-bold" label="Tanggal Deadline" label-for="tipe-task-input">
                                 <p>{{item.deadline}}</p>
                              </BFormGroup>
                            </div>
                          </BCol>
                        </BRow>

                        <!-- Comment Section -->
                        <div class="pt-3">
                          <div style="display: flex; gap: 10px;">
                            <!-- Div dengan border bulat -->
                            <div style="background-color: whitesmoke; border: 1px solid black; border-radius: 50%; width: 50px; height: 50px; display: flex; justify-content: center; align-items: center;">
                              <p style="font-weight: bold; font-size: 2em; margin: 0;">A</p>
                            </div>
                            <!-- Textarea -->
                            <!-- <label for="nama-yang-komen">Komentar</label> -->
                            <textarea class="form-control" placeholder="Ketikan Komentar" style="flex: 1;"></textarea>
                          </div>
                          <div class="text-end mt-2 mb-2">
                            <button type="button" class="btn btn-secondary btn-info" @click="sendmsg()">Kirim</button>
                          </div>
                          <div style="display: flex; gap: 10px;">
                            <!-- Div dengan border bulat -->
                            <div style="background-color: whitesmoke; border: 1px solid black; border-radius: 50%; width: 50px; height: 50px; display: flex; justify-content: center; align-items: center;">
                              <p style="font-weight: bold; font-size: 2em; margin: 0;">A</p>
                            </div>
                            <!-- Textarea -->
                            <textarea class="form-control" value="ini adalah komentar" style="flex: 1;" disabled></textarea>
                          </div>
                        </div>
                      </div>
                    </BModal>
                    <BTd style="border-collapse: collapse; border: 1px solid black;"> 
                      <label class="visually-hidden" for="autoSizingSelect">Preference</label>
                      <select class="form-select" id="autoSizingSelect">
                        <option selected>{{ item.status_task }}</option>
                        <option value="">Pending</option>
                        <option value="1">Ongoing</option>
                        <option value="2">Done</option>
                      </select>
                    </BTd>
                    <BTd style="border-collapse: collapse; border: 1px solid black; text-align: center;">
                      <span class="badge bg-danger">{{ item.sisa_waktu }}</span>
                    </BTd>
                    <BTd style="border-collapse: collapse; border: 1px solid black;">
                      <button type="button" class="btn btn-warning btn-sm mb-1 w-100" alt="Disable" @click="modalST = true" variant="primary"><i class="bx bx-edit"></i> SUNTING</button>
                      <BModal v-model="modalST" id="modal-center" size="lg" centered title="Sunting Task" hide-footer>
                        <div class="p-3">
                          <form>
                            <div class="mb-3">
                              <label for="judul-task" class="form-label fw-bold">Judul Task</label>
                              <input type="text" class="form-control" id="autoSizingInput" placeholder="Masukan judul Task" value="Task A">
                            </div>
                            <BRow>
                              <BCol md="6">
                                <BFormGroup class="mb-3" label="Tingkat Urgensi" label-for="tingkat-urgensi-input">
                                    <select id="urgensi" class="form-select">
                                      <option selected>Pilih Tingkat Urgensi</option>
                                      <option value="1">Urgent</option>
                                      <option value="2">Tinggi</option>
                                      <option value="3">Sedang</option>
                                      <option value="3">Rendah</option>
                                    </select>
                                </BFormGroup>
                              </BCol>
                              <BCol md="6">
                                <div class="form-group">
                                  <BFormGroup class="mb-3 fw-bold" label="Tipe Task" label-for="tipe-task-input">
                                    <select id="kolaborator" class="form-select">
                                      <option selected>Pilih Tipe Task</option>
                                      <option value="1">Major</option>
                                      <option value="2">Minor</option>
                                    </select>
                                  </BFormGroup>
                                </div>
                              </BCol>
                            </BRow>

                            <BRow>
                              <BCol md="6">
                                <BFormGroup class="mb-3" label="Kolaborator" label-for="kolabolator-input">
                                  <select id="kolaborator" class="form-select">
                                        <option selected>Pilih kolaborator</option>
                                        <option value="1">Kolaborator 1</option>
                                        <option value="2">Kolaborator 2</option>
                                        <option value="3">Kolaborator 3</option>
                                  </select>
                                </BFormGroup>
                              </BCol>
                              <BCol md="6">
                                <div class="form-group">
                                  <BFormGroup class="mb-3 fw-bold" label="Tangal Deadline" label-for="tipe-task-input">
                                    <flat-pickr v-model="picked" :first-day-of-week="1" lang="en" confirm class="form-control"></flat-pickr>
                                  </BFormGroup>
                                </div>
                              </BCol>
                            </BRow>
                            <div class="text-end">
                              <button type="button" class="btn btn-secondary btn-success" @click="successmsg()">Simpan</button>
                            </div>
                          </form>
                        </div>
                      </BModal>
                      <button type="button" class="btn btn-danger btn-sm mb-1 w-100" alt="Disable" @click="confirm()"><i class="bx bxs-trash-alt"></i> HAPUS</button>
                    </BTd>
                  </BTr>
                </BTbody>
              </BTableSimple>
              
            </div>
            <Page/>
          </b-card>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>


<style>
 body {
      background-color: #f8f9fa;
    }
    
    h4 {
      font-weight: bold;
      margin-bottom: 0;
    }
    .card-container {
    background-color: #F8F9FA;
    padding: 20px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
    box-sizing: border-box;
  }

  /* Layout Umum */
.top-row {
  display: flex;
  flex-wrap: wrap; /* Membungkus elemen di layar kecil */
  justify-content: space-between;
  align-items: center;
}

/* Judul */
.judul {
  text-align: left;
}

/* Deadline Box */
.deadline-box,
.sisa-waktu-container {
  text-align: center;
  background-color: #f46a6a;
  padding: 10px;
  border-radius: 8px;
  height: auto; /* Menyesuaikan tinggi berdasarkan konten */
}

/* Progress Bar */
.progress-container {
  padding: 1rem 0;
}

.progress-bar {
  transition: width 0.4s ease; /* Animasi lebar progress bar */
}

/* Responsivitas */
@media (min-width: 768px) {
  .deadline-box,
  .sisa-waktu-container {
    height: 75px; /* Tetapkan tinggi tetap di desktop */
  }

  .judul {
    width: 350px;
  }
}

    .progress-container {
      background-color: #eef5fc;
      padding: 10px;
      border-radius: 8px;
      margin-top: 10px;
      width: 100%; /* Pastikan penuh */
    }
    .progress-wrapper {
      width: 100%;
    }
</style>
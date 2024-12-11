<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import Stat from "../../components/widgets/stat.vue";
import Page from "../../components/common/pagination.vue";
import { ref } from "vue";
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import Swal from 'sweetalert2'

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
 
      instruktur_data: [], // Array untuk data instruktur
      peserta_ref: [], // Opsi referensi untuk v-select

      statData: [
        {
          icon: "bx bx-copy-alt",
          title: "Total Task",
          value: "1,235",
        },
        {
          icon: "bx bx-archive-in",
          title: "Task Pending",
          value: "23",
        },
        {
          icon: "bx bx-purchase-tag-alt",
          title: "Task Ongoing",
          value: "16",
        },
        {
          icon: "bx bx-list-check",
          title: "Task Done",
          value: "16",
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
    setTimeout(() => {
      this.showModal = false;
    }, 1500);
  },
  methods: {

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
  },
 
};
</script>

<template>
  <!-- <Sidebar/> -->
  <Layout>
    <PageHeader title="Detail Proyek" pageTitle="Project" />
    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <BCardBody class="pb-0">
          <div style="display: flex; margin-bottom: 1%;">
            <BCardTitle>Detail Proyek</BCardTitle>
            <div class="col-3" style="margin-left: auto; margin-right: 1%;" >
                <button type="button" class="btn btn-success h-100 w-100" alt="Disable" @click="modalTK = true" variant="primary"><i class="fa fa-plus"></i>  TAMBAH KOLABORATOR </button>
                  <BModal v-model="modalTK" id="modal-center" centered title="Tambah Kolaborator" hide-footer>
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
            <div class="col-3">
                <button type="button" class="btn btn-warning h-100 w-100" alt="Disable" @click="modalSP = true" variant="primary"><i class="fa fa-edit"></i>  SUNTING PROYEK </button>
                <BModal v-model="modalSP" id="modal-center" centered title="Sunting Proyek" hide-footer>
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
                        <!-- <div class="mb-3">
                          <label for="judul-task" class="form-label fw-bold">Nama Kolaborator</label>
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
                        </div> -->
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
          </div>
          
          <b-card header-class="bg-transparent border-primary" class="border border-primary">
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


          <BRow>
            <BCol xl="10" md="12" lg=12>
              <Profile :updating="fetchingStats" />
              <Earning :updating="earningStatus" />
            </BCol>
            <BCol xl="12" md="12" lg="12">
              <BRow>
                <BCol md="3" v-for="stat of statData" :key="stat.icon">
                  <Stat :icon="stat.icon" :title="stat.title" :value="stat.value" />
                </BCol>
              </BRow>
            </BCol>
          </BRow>
          </b-card>
          
          <!-- <div class="d-flex justify-content-between align-items-center gap-5" id="tolong tengahin" style="padding: 1%; text-align: center;">
            <div class="col-2 h-100" style="background-color:#DCDCDC; padding: 1%; border-radius: 5%;">
              <p>TOTAL TASK</p>
              <div style="background-color: white; height: 3rem; border-radius: 5%;">
                <p style="padding-top: 5%; font-size: 2em">10</p>
              </div>
            </div>
            <div class="col-2 h-100" style="background-color:#DCDCDC; padding: 1%;border-radius: 5%;">
              <p>TASK PENDING</p>
              <div style="background-color: white; height: 3rem;border-radius: 5%;">
                <p style="padding-top: 5%; font-size: 2em">10</p>
              </div>
            </div>
            <div class="col-2 h-100" style="background-color:#DCDCDC; padding: 1%;border-radius: 5%;">
              <p>TASK ONGOING</p>
              <div style="background-color: white; height: 3rem;border-radius: 5%;">
                <p style="padding-top: 5%; font-size: 2em">10</p>
              </div>
            </div>
            <div class="col-2 h-100" style="background-color:#DCDCDC; padding: 1%;border-radius: 5%;">
              <p>TASK DONE</p>
              <div style="background-color: white; height: 3rem;border-radius: 5%;">
                <p style="padding-top: 5%; font-size: 2em">10</p>
              </div>
            </div>
          </div> -->

            <!-- <div style="display: flex;" class="row col-12">
              <form class="row col-9 " style="margin-bottom: 2%;">
              <div class="col-2">
                <label class="visually-hidden" for="autoSizingSelect">Preference</label>
                <select class="form-select" id="autoSizingSelect">
                  <option selected>Pilih</option>
                  <option value="1">10</option>
                  <option value="2">50</option>
                  <option value="3">100</option>
                </select>
              </div>
              <div class="col-7">
                <input type="text" class="form-control" id="autoSizingInput" placeholder="Cari Data">
              </div>
              
            </form>
            <div class="col-auto" style="margin-left: auto;" >
                <button type="button" class="btn btn-success h-80 w-100" alt="Disable" @click="modalTT = true" variant="primary">TAMBAH TASK <i class="fa fa-plus"></i></button>
                <BModal v-model="modalTT" id="modal-center" centered title="Tambah Task" hide-footer>
                    <div class="p-3">
                      <form>
                        <div class="mb-3">
                          <label for="judul-task" class="form-label fw-bold">Judul Task</label>
                          <input type="text" class="form-control" id="autoSizingInput">
                        </div>
                        <div class="mb-3">
                          <label for="kolaborator" class="form-label fw-bold">Tingkat Urgensi</label>
                          <select id="kolaborator" class="form-select">
                            <option selected>Pilih Tingkat Urgensi</option>
                            <option value="1">Urgent</option>
                            <option value="2">Tinggi</option>
                            <option value="3">Sedang</option>
                            <option value="3">Rendah</option>
                          </select>
                        </div>
                        <div class="mb-3">
                          <label for="kolaborator" class="form-label fw-bold">Tipe task</label>
                          <select id="kolaborator" class="form-select">
                            <option selected>Pilih Tipe Task</option>
                            <option value="1">Major</option>
                            <option value="2">Minor</option>
                          </select>
                        </div>
                        <div class="mb-3">
                          <label for="kolaborator" class="form-label fw-bold">Tambah Kolaborator</label>
                          <select id="kolaborator" class="form-select">
                                    <option selected>Pilih kolaborator</option>
                                    <option value="1">Kolaborator 1</option>
                                    <option value="2">Kolaborator 2</option>
                                    <option value="3">Kolaborator 3</option>
                                  </select>
                        </div>
                        <div class="mb-3">
                          <label for="deadline" class="form-label fw-bold">Tenggat Waktu</label>
                          <flat-pickr v-model="picked" :first-day-of-week="1" lang="en" confirm class="form-control"></flat-pickr>
                        </div>
                        <div class="text-end">
                          <button type="button" class="btn btn-secondary btn-success" @click="successmsg()">Tambah</button>
                        </div>
                      </form>
                    </div>
                  </BModal>
            </div>
          </div> -->

          <b-card header-class="bg-transparent border-primary" class="border border-primary">
          <form class="row align-items-center" style="margin-bottom: 2%;">
            <!-- Dropdown Show Entries -->
            <div class="col-auto d-flex align-items-center">
              <label class="me-2">Show</label>
              <select class="form-select w-auto" id="autoSizingSelect" aria-label="Select number of entries">
                <option value="10" selected>10</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
              <label class="ms-2">Entries</label>
            </div>

            <!-- Input Pencarian -->
            <div class="col-auto">
              <input type="text" class="form-control" id="autoSizingInput" placeholder="Cari Data Proyek">
            </div>

  <!-- Tombol Tambah Task -->
  <div class="col-auto ms-auto">
    <button type="button" class="btn btn-success d-flex align-items-center" alt="Disable" @click="modalTT = true"><i class="fa fa-plus me-2"></i> TAMBAH TASK</button>
    <BModal v-model="modalTT" id="modal-center" centered title="Tambah Task" hide-footer>
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
                              <BFormGroup class="mb-3 fw-bold" label="Tipe-Task" label-for="tipe-task-input">
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
                              <BFormGroup class="mb-3 fw-bold" label="Tipe-Task" label-for="tipe-task-input">
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
                    <BTh style="background-color: #272b4e; color: whitesmoke;text-align: center; border-collapse: collapse; border: 1px solid black;">Nama Kolaborator <button class="btn btn-sm btn-link p-0"><i class="fa fa-sort"></i></button></BTh>
                    <BTh style="background-color: #272b4e; color: whitesmoke;text-align: center; border-collapse: collapse; border: 1px solid black;">Task <button class="btn btn-sm btn-link p-0"><i class="fa fa-sort"></i></button></BTh>
                    <BTh style="background-color: #272b4e; color: whitesmoke;text-align: center; border-collapse: collapse; border: 1px solid black;">Status <button class="btn btn-sm btn-link p-0"><i class="fa fa-sort"></i></button></BTh>
                    <BTh style="background-color: #272b4e; color: whitesmoke;text-align: center; border-collapse: collapse; border: 1px solid black;">Sisa Waktu <button class="btn btn-sm btn-link p-0"><i class="fa fa-sort"></i></button></BTh>
                    <BTh style="background-color: #272b4e; color: whitesmoke;text-align: center; border-collapse: collapse; border: 1px solid black;vertical-align: middle;" rowspan="2">Aksi</BTh>
                  </BTr>
                </BThead>
                <BTbody>
                  <BTr style="border-collapse: collapse; border: 1px solid black">
                    <BTh scope="row">1</BTh>
                    <BTd style="border-collapse: collapse; border: 1px solid black;">User 1</BTd>
                    <BTd style="border-collapse: collapse; border: 1px solid black;"><a @click="modalDT = true" variant="primary" style="cursor: pointer;">Membuat Fitur Tambah User</a> <br><span class="badge bg-info">Major</span> <span class="badge bg-warning">Sedang</span> </BTd>
                    <BModal v-model="modalDT" id="modal-task-detail" hide-footer>
                      <div class="space-y-4">
                        <!-- Header -->
                        <div class="d-flex justify-content-between align-items-center border-bottom pb-2">
                          <h5 class=" mb-0">Detail Task</h5>
                          <div class="d-flex">
                            <!-- Sisa Waktu -->
                            <div class="text-center me-4">
                              <p class="text-muted mb-1">Sisa Waktu</p>
                              <p class="fw-bold mb-0">10 Hari</p>
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
                              <p>Task A</p>
                            </BFormGroup>
                          </BCol>
                          <BCol md="6">
                            <div class="form-group">
                              <BFormGroup class="mb-3 fw-bold" label="Tipe-Task" label-for="tipe-task-input">
                                <p>Minor</p>
                              </BFormGroup>
                            </div>
                          </BCol>
                        </BRow>
                        <BRow>
                          <BCol md="6">
                            <BFormGroup class="mb-3 fw-bold" label="Tingkat Urgensi" label-for="tingkat-urgensi-input">
                              <p>Rendah</p>
                            </BFormGroup>
                          </BCol>
                          <BCol md="6">
                            <div class="form-group">
                              <BFormGroup class="mb-3 fw-bold" label="Nama Kolaborator" label-for="tipe-task-input">
                               <p>User 1</p>
                              </BFormGroup>
                            </div>
                          </BCol>
                        </BRow>
                        <BRow>
                          <BCol md="6">
                            <BFormGroup class="mb-3 fw-bold" label="Status Task" label-for="tingkat-urgensi-input">
                              <p>Pending</p>
                            </BFormGroup>
                          </BCol>
                          <BCol md="6">
                            <div class="form-group">
                              <BFormGroup class="mb-3 fw-bold" label="Tanggal Deadline" label-for="tipe-task-input">
                                 <p>12/12/2021</p>
                              </BFormGroup>
                            </div>
                          </BCol>
                        </BRow>

                        <!-- Comment Section -->
                        <div class="pt-3">
                          <div style=" align-items: center; gap: 10px;">
                            <!-- Div dengan border bulat -->
                            <!-- <div style="background-color: whitesmoke; border: 1px solid black; border-radius: 50%; width: 50px; height: 50px; display: flex; justify-content: center; align-items: center;">
                              <p style="font-weight: bold; font-size: 2em; margin: 0;">A</p>
                            </div> -->
                            <!-- Textarea -->
                            <label for="nama-yang-komen">Komentar</label>
                            <textarea class="form-control" placeholder="Ketikan Komentar" style="flex: 1;"></textarea>
                          </div>
                          <div class="text-end mt-2">
                            <button type="button" class="btn btn-secondary btn-info" @click="sendmsg()">Kirim</button>
                          </div>
                          <div class="mb-3">
                            <label for="judul-task" class="form-label fw-bold">User 1</label>
                            <!-- <div class="d-flex justify-content-between mt-2">
                              <label for="judul-task" class="form-label fw-bold">User 1</label>
                              <span style="opacity: 50%;">12/12/32</span>
                            </div> -->
                            <input type="text" class="form-control" id="autoSizingInput" value="ini komentarnya" disabled>
                            <p class="mt-1"><span style="opacity: 50%;">12/12/32</span></p>
                          </div>
                        </div>
                      </div>
                    </BModal>
                    <BTd style="border-collapse: collapse; border: 1px solid black;"> 
                      <label class="visually-hidden" for="autoSizingSelect">Preference</label>
                      <select class="form-select" id="autoSizingSelect">
                        <option selected>Pending</option>
                        <option value="1">Ongoing</option>
                        <option value="2">Done</option>
                      </select>
                    </BTd>
                    <BTd style="border-collapse: collapse; border: 1px solid black; text-align: center;"><span class="badge bg-danger">10 Hari</span></BTd>
                    <BTd style="border-collapse: collapse; border: 1px solid black;">
                      <button type="button" class="btn btn-warning btn-sm mb-1 w-100" alt="Disable" @click="modalST = true" variant="primary"><i class="bx bx-edit"></i> SUNTING</button>
                      <BModal v-model="modalST" id="modal-center" centered title="Sunting Task" hide-footer>
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
                                  <BFormGroup class="mb-3 fw-bold" label="Tipe-Task" label-for="tipe-task-input">
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
                                  <BFormGroup class="mb-3 fw-bold" label="Tipe-Task" label-for="tipe-task-input">
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
          </b-card>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

  <Page/>
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

  .top-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
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
      width: 100%; /* Pastikan penuh */
    }
    .progress-wrapper {
      width: 100%;
    }
</style>
<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
// import Sidebar from "../../components/side-bar.vue";
import Page from "../../components/common/pagination.vue";
import { ref } from "vue";
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

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
  components: { Layout, PageHeader,Page,flatPickr, },
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
                <button type="button" class="btn btn-success h-100 w-100" alt="Disable" @click="modalTK = true" variant="primary">TAMBAH KOLABORATOR <i class="fa fa-plus"></i></button>
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
                          <button type="button" class="btn btn-secondary">Tambah</button>
                        </div>
                      </form>
                    </div>
                  </BModal>
                </div>
            <div class="col-3">
                <button type="button" class="btn btn-warning h-100 w-100" alt="Disable" @click="modalSP = true" variant="primary">SUNTING PROYEK <i class="fa fa-edit"></i> </button>
                <BModal v-model="modalSP" id="modal-center" centered title="Sunting Proyek" hide-footer>
                    <div class="p-3">
                      <form>
                        <div class="mb-3">
                          <label for="judul-task" class="form-label fw-bold">Nama Proyek</label>
                          <input type="text" class="form-control" id="autoSizingInput" value="Proyek A">
                        </div>
                        <div class="mb-3">
                          <label for="judul-task" class="form-label fw-bold">Deskripsi Proyek</label>
                          <input type="text" class="form-control" id="autoSizingInput" value="ini deskripsi">
                        </div>
                        <div class="mb-3">
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

                          <!-- <div class="input-group">
                            <input type="text" class="form-control" id="kolaborator" placeholder="Masukkan nama kolaborator">
                            <span class="badge bg-warning">Sedang</span>
                          </div> -->
                        </div>
                        <div class="mb-3">
                          <label for="deadline" class="form-label fw-bold">Tenggat Waktu</label>
                          <flat-pickr v-model="picked" :first-day-of-week="1" lang="en" confirm class="form-control"></flat-pickr>
                        </div>
                        <div class="text-end">
                          <button type="button" class="btn btn-secondary">Simpan</button>
                        </div>
                      </form>
                    </div>
                  </BModal>
            </div>
          </div>
          
          <div id="app" class="container mt-4">
            <div class="card-container">
              <!-- Baris atas -->
              <div class="top-row">
                <!-- Judul Proyek -->
                <div class="mt-2">
                  <h4 class="judul-section">{{ project.name }}</h4>
                  <h5>ini proyek pertama kita</h5>
                </div>
                <div class="w-50"></div>
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


          <div class="d-flex justify-content-between align-items-center gap-5" id="tolong tengahin" style="padding: 1%; text-align: center;">
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
          </div>

            <div style="display: flex;" class="row col-12">
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
                <input type="text" class="form-control" id="autoSizingInput" placeholder="Cari">
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
                          <button type="button" class="btn btn-secondary">Tambah</button>
                        </div>
                      </form>
                    </div>
                  </BModal>
            </div>
          </div>
          
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
                              <p class="fw-bold mb-0">-382 Hari</p>
                            </div>
                            <!-- Status Deadline -->
                            <div class="text-center">
                              <p class="text-muted mb-1">Status Deadline</p>
                              <span class="badge bg-danger text-white rounded-pill">Terlambat 3 Tahun</span>
                            </div>
                          </div>
                        </div>
                        <!-- Form Fields -->
                        <form class="space-y-3">
                          <div>
                            <label class="form-label fw-bold">Judul Task</label>
                            <input type="text" class="form-control" id="autoSizingInput" value="Task A" disabled >
                          </div>

                          <div>
                            <label class="form-label fw-bold">Tipe Task</label>
                            <input type="text" class="form-control" id="autoSizingInput" value="Minor" disabled >
                          </div>

                          <div>
                            <label class="form-label fw-bold">Tingkat Urgensi</label>
                            <input type="text" class="form-control" id="autoSizingInput" value="Rendah" disabled >
                          </div>

                          <div>
                            <label class="form-label fw-bold">Nama Kolaborator</label>
                            <input type="text" class="form-control" id="autoSizingInput" value="User 1" disabled >
                          </div>

                          <div>
                            <label class="form-label fw-bold">Status Task</label>
                            <input type="text" class="form-control" id="autoSizingInput" value="Pending" disabled >
                          </div>

                          <div>
                            <label class="form-label fw-bold">Tenggat Waktu</label>
                            <input type="text" class="form-control" id="autoSizingInput" value="12/12/21" disabled >
                          </div>
                        </form>

                        <!-- Comment Section -->
                        <div class="pt-3">
                          <div style="display: flex; align-items: center; gap: 10px;">
                            <!-- Div dengan border bulat -->
                            <div style="background-color: whitesmoke; border: 1px solid black; border-radius: 50%; width: 50px; height: 50px; display: flex; justify-content: center; align-items: center;">
                              <p style="font-weight: bold; font-size: 2em; margin: 0;">A</p>
                            </div>
                            <!-- Textarea -->
                            <textarea class="form-control" placeholder="write a comment" style="flex: 1;"></textarea>
                          </div>
                          <div class="text-end mt-2">
                            <button type="button" class="btn btn-secondary">Kirim</button>
                          </div>
                        </div>
                      </div>
                    </BModal>
                    <BTd style="border-collapse: collapse; border: 1px solid black;"> 
                      <label class="visually-hidden" for="autoSizingSelect">Preference</label>
                      <select class="form-select" id="autoSizingSelect">
                        <option selected>Pilih</option>
                        <option value="1">Pending</option>
                        <option value="2">Ongoing</option>
                        <option value="3">Done</option>
                      </select>
                    </BTd>
                    <BTd style="border-collapse: collapse; border: 1px solid black; text-align: center;"><span class="badge bg-danger">3 Years Ago</span></BTd>
                    <BTd style="border-collapse: collapse; border: 1px solid black;">
                      <button type="button" class="btn btn-warning btn-sm mb-1 w-100" alt="Disable" @click="modalST = true" variant="primary"><i class="bx bx-edit"></i> SUNTING</button>
                              <BModal v-model="modalST" id="modal-center" centered title="Sunting Task" hide-footer>
                            <div class="p-3">
                              <form>
                                <div class="mb-3">
                                  <label for="judul-task" class="form-label fw-bold">Judul Task</label>
                                  <input type="text" class="form-control" id="autoSizingInput" value="ini judul task">
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
                                  <label for="kolaborator" class="form-label fw-bold">Nama Kolaborator</label>
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
                                  <button type="button" class="btn btn-secondary">Simpan</button>
                                </div>
                              </form>
                            </div>
                          </BModal>
                      <button type="button" class="btn btn-danger btn-sm mb-1 w-100" alt="Disable"><i class="bx bxs-trash-alt"></i> HAPUS</button>
                    </BTd>
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
      height: 7rem
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
      /* width: 865px; */
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
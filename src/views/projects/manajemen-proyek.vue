<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import Page from "../../components/common/pagination.vue";
import { ref } from "vue";
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import Swal from 'sweetalert2';
import axios from "axios";

export default {
  setup() {
    const modalTP = ref(false);
    const modalSP = ref(false);
    const picked = ref(new Date());

    return {
      modalTP,
      modalSP,
      picked
    };
  },
  components: {
    Layout,
    PageHeader,
    Page,
    flatPickr,
  },
  data() {
    return {
      kolaborator_data: [],
      peserta_ref: [],
      namaProyek: "",
      deskripsiProyek: "",
      tenggatWaktu: "",
    };
  },
  methods: {
    confirm() {
      Swal.fire({
        title: "Apakah kamu yakin?",
        text: "Kamu tidak bisa mengembalikan data setelah dihapus",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#34c38f",
        cancelButtonColor: "#f46a6a",
        confirmButtonText: "Ya, Hapus!",
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
    updatemsg() {
      Swal.fire({
        title: "Data Terupdate!",
        text: "Data Berhasil Terupdate!",
        icon: "success",
        confirmButtonColor: "#556ee6",
      });
    },
    addRowPeserta() {
      this.kolaborator_data.push({
        kolaborator_data: null
      });
    },
    deleteRow(index) {
      this.kolaborator_data.splice(index, 1);
    },

    onSearchKolaborator(search, loading) {
      if (search.length) {
        loading(true);
        this.searchKolaborator(loading, search);
      }
    },

    // Metode untuk memanggil API pencarian instruktur
    searchKolaborator(loading, search) {
      const config = {
        method: "get",
        url: process.env.VUE_APP_BACKEND_URL_VERSION + "referensi/search-instruktur",
        params: { search },
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + localStorage.access_token,
        },
      };

      axios(config)
        .then((response) => {
          if (response.data?.meta?.code === 200) {
            this.peserta_ref = response.data.data.referensi;
          } else {
            this.peserta_ref = [{ user_id: 0, username: "-" }];
          }
          loading(false);
        })
        .catch(() => {
          this.peserta_ref = [{ user_id: 0, username: "-" }];
          loading(false);
        });
    },
    
    storeDataProyek() {
      if (!this.namaProyek || !this.deskripsiProyek || !this.tenggatWaktu) {
        Swal.fire({
          icon: "warning",
          title: "Data tidak lengkap",
          text: "Harap lengkapi semua field sebelum menyimpan",
        });
        return;
      }

      const configStoreData = {
        method: "post",
        url: process.env.VUE_APP_BACKEND_URL_API + "admin",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.accessToken,
        },
        data: {
          id: this.id || null,
          project_name: this.namaProyek,
          description: this.deskripsiProyek,
          deadline: this.tenggatWaktu,
          collaborator: this.kolaborator_data,
        },
      };

      console.log("Data yang dikirim:", configStoreData.data);

      axios(configStoreData)
        .then((response) => {
          console.log("Respon server:", response.data);
          Swal.fire({
            icon: "success",
            title: "Berhasil",
            text: response.data.message || "Data berhasil disimpan",
          });
          this.resetForm();
        })
        .catch((error) => {
          console.error("Error saat mengirim data:", error);
          if (error.response) {
            console.error("Response:", error.response);
          }
          Swal.fire({
            icon: "error",
            title: "Gagal",
            text: error.response?.data?.message || "Terjadi kesalahan saat menyimpan data",
          });
        });
    },
    resetForm() {
      this.id = null;
      this.namaProyek = "";
      this.deskripsiProyek = "";
      this.tenggatWaktu = "";
      this.kolaborator_data = [];
    },
  },
};
</script>



<template>
  <!-- <Sidebar/> -->
  <Layout>
    <PageHeader title="Manajemen Proyek" pageTitle="Project" />
    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <BCardBody class="pb-0">
            <BCardTitle>Manajemen Proyek</BCardTitle>
           
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
              <div class="col-auto">
                <label>Data Proyek</label>
                <input type="text" class="form-control" id="autoSizingInput" placeholder="Cari Proyek">
              </div>

              <!-- Tombol Tambah Proyek -->
              <div class="col-auto ms-auto pt-lg-4 pt-4">
                <button type="button" class="btn btn-success" @click="modalTP = true">
                  <i class="fa fa-plus me-2"></i> TAMBAH PROYEK
                </button>
                <BModal v-model="modalTP" size="lg" centered title="Tambah Proyek" hide-footer>
                  <div class="p-3">
                    <form @submit.prevent="storeDataProyek">
                      <div class="mb-3">
                        <label for="namaProyek" class="form-label">Nama Proyek</label>
                        <input type="text" class="form-control" v-model="namaProyek" placeholder="Inputkan Nama Proyek">
                      </div>
                      <div class="mb-3">
                        <label for="deskripsiProyek" class="form-label">Deskripsi Proyek</label>
                        <textarea class="form-control" v-model="deskripsiProyek" rows="2" placeholder="Tuliskan Deskripsi Proyek"></textarea>
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
                              <tr v-for="(row_data, key_data) in kolaborator_data" :key="key_data">
                                <td class="text-center">{{ key_data + 1 }}.</td>
                                <td>
                                  <v-select
                                    label="nip_name"
                                    v-model="row_data.kolaborator_data"
                                    :options="peserta_ref"
                                    @search="onSearchKolaborator"
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
                        <label for="tenggatWaktu" class="form-label">Tenggat Waktu</label>
                        <flat-pickr v-model="tenggatWaktu" class="form-control"></flat-pickr>
                      </div>
                      <div class="text-end">
                        <button type="submit" class="btn btn-success">Simpan</button>
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
                    <BTh style="background-color: #272b4e; color: whitesmoke;text-align: center; border-collapse: collapse; border: 1px solid black;">Proyek <button class="btn btn-sm btn-link p-0"><i class="fa fa-sort"></i></button></BTh>
                    <BTh style="background-color: #272b4e; color: whitesmoke;text-align: center; border-collapse: collapse; border: 1px solid black;">Deskripsi <button class="btn btn-sm btn-link p-0"><i class="fa fa-sort"></i></button></BTh>
                    <BTh style="background-color: #272b4e; color: whitesmoke;text-align: center; border-collapse: collapse; border: 1px solid black;">Tenggat <button class="btn btn-sm btn-link p-0"><i class="fa fa-sort"></i></button></BTh>
                    <BTh style="background-color: #272b4e; color: whitesmoke;text-align: center; border-collapse: collapse; border: 1px solid black;">Sisa Waktu <button class="btn btn-sm btn-link p-0"><i class="fa fa-sort"></i></button></BTh>
                    <BTh style="background-color: #272b4e; color: whitesmoke;text-align: center; border-collapse: collapse; border: 1px solid black;">Progress % <button class="btn btn-sm btn-link p-0"><i class="fa fa-sort"></i></button></BTh>
                    <BTh style="background-color: #272b4e; color: whitesmoke;text-align: center; border-collapse: collapse; border: 1px solid black;vertical-align: middle; width: 20%;">Aksi</BTh>
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
                  <BTr style="border-collapse: collapse; border: 1px solid black">
                    <BTh scope="row">1</BTh>
                    <BTd style="border-collapse: collapse; border: 1px solid black;">Proyek A</BTd>
                    <BTd style="border-collapse: collapse; border: 1px solid black;">Proyek Cukup sulit</BTd>
                    <BTd style="border-collapse: collapse; border: 1px solid black;">20/11/2021</BTd>
                    <BTd style="border-collapse: collapse; border: 1px solid black;">10 Hari Yang lalu</BTd>
                    <BTd style="border-collapse: collapse; border: 1px solid black;">20%</BTd>
                    <BTd style="border-collapse: collapse; border: 1px solid black;">
                      <router-link :to="'detail-proyek'" class="btn btn-info btn-sm mb-1 w-100">
                        <i class="bx bx-info-circle"></i> DETAILS
                      </router-link>
                      <button type="button" class="btn btn-warning btn-sm mb-1 w-100" alt="Disable" @click="modalSP = true" variant="primary"><i class="bx bx-edit"></i> SUNTING</button>
                      <BModal v-model="modalSP" id="modal-center" size="lg" centered title="Sunting Proyek" hide-footer>
                        <div class="p-3">
                          <form>
                            <div class="mb-3">
                              <label for="judul-task" class="form-label fw-bold">Nama Proyek</label>
                              <input type="text" class="form-control" id="autoSizingInput" value="Proyek A" >
                            </div>
                            <div class="mb-3">
                              <label for="judul-task" class="form-label fw-bold">Deskripsi Proyek</label>
                              <!-- <input type="text" class="form-control" id="autoSizingInput" value="ini deskripsi proyek"> -->
                              <textarea class="form-control" placeholder="Tuliskan Deskripsi Proyek" rows="2" value="ini deskripsi proyek"></textarea>
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
                              <tr v-for="(row_data, key_data) in kolaborator_data" :key="key_data">
                                <td class="text-center">{{ key_data + 1 }}.</td>
                                <td>
                                  <v-select
                                    label="nip_name"
                                    v-model="row_data.kolaborator_data"
                                    :options="peserta_ref"
                                    @search="onSearchKolaborator"
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
                            </div>
                            <div class="mb-3">
                              <label for="deadline" class="form-label fw-bold">Tenggat Waktu</label>
                              <flat-pickr v-model="picked" :first-day-of-week="1" lang="en" confirm class="form-control"></flat-pickr>
                            </div>
                            <div class="text-end">
                              <button type="button" class="btn btn-secondary btn-success" @click="updatemsg">Simpan</button>
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
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  <Page/>
  </Layout>
</template>

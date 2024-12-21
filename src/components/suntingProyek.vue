<script>
import { ref } from "vue";
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import Swal from 'sweetalert2';
import axios from "axios";


export default {
  setup() {
    // const modalTP = ref(false);
    // const modalSP = ref(false);
    const picked = ref(new Date());

    return {
      // modalTP,
      // modalSP,
      picked
    };
  },
  components: {
    flatPickr,
  },
  data() {
    return {
      data : [],
      project_id: '',
      kolaborator_data: [], // Array untuk data instruktur
      peserta_ref: [], // Opsi referensi untuk v-select
      namaProyek: "",
      deskripsiProyek: "",
      tenggatWaktu: "",
      query: "", // Kata kunci pencarian
      projects: [], // Hasil pencarian proyek      
      showModal: {
          uploadProyek: false,
          editProyek: false,
      },
    };
  },


    mounted() {
  this.getDataProject();
  setTimeout(() => {
    this.showModal.uploadProyek = false;
    this.showModal.editProyek = false;
  }, 1500);

  },
  methods: {
  showModalEditProyek(id) { 
    console.log("Tombol SUNTING diklik, ID Proyek:", id);
    this.editProyek(id);
    this.showModal.editProyek = true;
  },

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
        url: process.env.VUE_APP_BACKEND_URL_API + 'project-management',
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
        kolaborator_data: self.kolaborator_data,
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
        url: process.env.VUE_APP_BACKEND_URL_API + "tasks/get-collaborators",
        params: { search },
        headers: {
                Accept: "application/json",
                Authorization:`Bearer ${localStorage.accessToken}`, 
            },
      };

      axios(config)
        .then((response) => {
          if (response.data?.meta?.code === 200) {
            this.peserta_ref = response.data.data;
            console.log(this.peserta_ref);
          } else {
            this.peserta_ref = [{ user_id: 0, name: "-" }];
          }
          loading(false);
        })
        .catch(() => {
          this.peserta_ref = [{ user_id: 0, name: "-" }];
          loading(false);
        });
    },
    
    storeDataProyek() {
  console.log("storeDataProyek function is called");  // Log untuk memverifikasi apakah fungsi dipanggil

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
      Authorization: `Bearer ${localStorage.accessToken}`,
    },
    data: {
      project_name: this.namaProyek,
      description: this.deskripsiProyek,
      deadline: this.tenggatWaktu,
      collaborator: JSON.stringify(this.kolaborator_data),
    },
  };

  console.log("Data yang dikirim:", configStoreData.data);  // Log untuk melihat data yang dikirim

  axios(configStoreData)
    .then((response) => {
      console.log("Respon server:", response.data);  // Log response dari server
      Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: response.data.message || "Data berhasil disimpan",
      });
      this.resetForm();  // Reset form setelah berhasil
    })
    .catch((error) => {
      console.error("Error saat mengirim data:", error);
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: error.response?.data?.message || "Terjadi kesalahan saat menyimpan data",
      });
    });
},
    resetForm() {
      this.namaProyek = "";
      this.deskripsiProyek = "";
      this.tenggatWaktu = "";
      this.kolaborator_data = [];
    },

    editProyek(project_id) {
  console.log(`Memuat data proyek dengan ID: ${project_id}`);

  // Reset data sebelum memuat yang baru
  this.project_id = null,
  this.namaProyek = "";
  this.deskripsiProyek = "";
  this.tenggatWaktu = "";
  this.kolaborator_data = [];

  // Menampilkan loading
  Swal.fire({
    title: '<i class="fas fa-spinner fa-spin"></i>',
    text: "Loading...",
    showConfirmButton: false,
    allowOutsideClick: false,
    allowEscapeKey: false,
  });

  // Konfigurasi untuk mengambil data proyek
  const configGetData = {
    method: "get",
    url: process.env.VUE_APP_BACKEND_URL_API + 'admin/' + project_id,
  
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${localStorage.accessToken}`,
    },
  };

  axios(configGetData)
    .then((response) => {
      console.log("Respon server:", response.data);
      const resData = response.data.data;

      // Validasi data respons
      if (resData) {
      console.log("Data proyek ditemukan:", resData);
      this.project_id = resData.project_id || null;
      this.namaProyek = resData.project_name || "";
      this.deskripsiProyek = resData.description || "";
      this.tenggatWaktu = resData.deadline || "";
      this.kolaborator_data = resData.collaborator || [];
    } else {
      throw new Error("Data proyek tidak ditemukan.");
    }

      this.showModal.editProyek = true; // Menampilkan modal untuk edit
    })
    .catch((error) => {
      console.error("Error mengambil data proyek:", error);
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: error.response?.data?.message || "Terjadi kesalahan saat memuat data proyek.",
      });
    })
    .finally(() => {
      Swal.close(); // Selalu tutup loading
    });
},


storeDataEditProyek() {
  console.log("storeDataEditProyek function is called"); // Log untuk verifikasi

  // Validasi input
  if (!this.namaProyek || !this.deskripsiProyek || !this.tenggatWaktu) {
    Swal.fire({
      icon: "warning",
      title: "Data tidak lengkap",
      text: "Harap lengkapi semua field sebelum menyimpan",
    });
    return;
  }

  // Konfigurasi axios untuk update data proyek
  const configEditData = {
    method: "put",
    url: process.env.VUE_APP_BACKEND_URL_API +'admin/' + this.project_id,  // Pastikan URL API benar
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.accessToken}`, // Token akses
    },
    data: {
      project_id: this.project_id,  // ID proyek yang akan diedit
      project_name: this.namaProyek,  // Nama proyek
      description: this.deskripsiProyek,  // Deskripsi proyek
      deadline: this.tenggatWaktu,  // Tenggat waktu proyek
      collaborator: JSON.stringify(this.kolaborator_data),
    },
  };

  console.log("Data yang dikirim untuk update:", configEditData.data); // Log data yang dikirim

  // Kirim permintaan ke backend untuk update data proyek
  axios(configEditData)
    .then((response) => {
      console.log("Respon server:", response.data); // Log response dari server
      Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: response.data.message || "Data berhasil diperbarui",
        timer: 2000, // Otomatis menutup pesan setelah 2 detik
        timerProgressBar: true,
        showConfirmButton: false, // Tidak ada tombol konfirmasi
      }).then(() => {
        this.showModal.editProyek = false; // Tutup modal setelah berhasil
        this.resetForm(); // Reset form setelah menyimpan
        this.getDataUploadProyek(); // Refresh data yang ditampilkan di tabel
      });
    })
    .catch((error) => {
      console.error("Error saat memperbarui data proyek:", error);
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: error.response?.data?.message || "Terjadi kesalahan saat memperbarui data.",
      });
    });
},

cariProyek() {
        let self = this;
        self.loadingTable = true;

        // Konfigurasi Axios
        var config = {
            method: "post",
            url: process.env.VUE_APP_BACKEND_URL_API + "project-management/search",
            params: {
                search: self.query, // Query pencarian
            },
            headers: {
                Accept: "application/json",
                Authorization:`Bearer ${localStorage.accessToken}`, 
            },
        };

        // Panggil API
        axios(config)
            .then(function (response) {
                let response_data = response.data;

                if (response_data.meta.code === 200) {
                    // Berhasil mengambil data
                    self.data.data_project = response_data.data; // Simpan data ke variabel
                } else {
                    // Jika error
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: response_data.meta.message,
                    });
                }
                self.loadingTable = false;
            })
            .catch(function (error) {
                console.error("Error fetching data:", error);
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Terjadi kesalahan saat mengambil data.",
                });
                self.loadingTable = false;
            });
    },

  }
};

</script>

<template>
    <BModal v-model="showModal.editProyek" centered title="Sunting Proyek" hide-footer>
                        <div class="p-3">
                          <form @submit.prevent="storeDataEditProyek()">
                              <div class="mb-3">
                                <label for="namaProyek" class="form-label">Nama Proyek</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  v-model="namaProyek"
                                  placeholder="Inputkan Nama Proyek"
                                />
                              </div>
                              <div class="mb-3">
                                <label for="deskripsiProyek" class="form-label">Deskripsi Proyek</label>
                                <textarea
                                  class="form-control"
                                  v-model="deskripsiProyek"
                                  rows="2"
                                  placeholder="Tuliskan Deskripsi Proyek"
                                ></textarea>
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
                                    label="name"
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
                                <flat-pickr
                                  v-model="tenggatWaktu"
                                  :first-day-of-week="1"
                                  lang="en"
                                  confirm
                                  class="form-control"
                                ></flat-pickr>
                              </div>
                            <div class="text-end">
                              <button type="submit" class="btn btn-success">Simpan</button>

                            </div>
                          </form>
                        </div>
                      </BModal>
                     
</template>
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
import { useAuthStore } from '@/state/pinia'
const auth = useAuthStore()

/**
 * Task-list component
 */
export default {
  setup() {
    // const modalTK = ref(false);
    const modalTT = ref(false);
    const modalST = ref(false);
    // const modalSP = ref(false);
    const modalDT = ref(false);
    return {
      // modalTK,
      modalTT,
      modalST,
      // modalSP,
      modalDT,
      picked: ref(new Date()),
    };
  },

  components: { Layout, PageHeader,Page,flatPickr,Stat, },
  data() {
    return {
      
      id: this.$route.params.id,
      data: [],
      dataTask: [],
      kolaborator_data: [], // Array untuk data instruktur
      peserta_ref: [], // Opsi referensi untuk v-select
      judulTask: "",
      tingkatUrgensi: "",
      tipeTask: "",
      tanggalDeadline: "",
      project_id: "",
      collaborator_id: "",
      collaborators: [],
      selectedKolaborator: null,
      userIds: "",
      menuItems: auth.activeRole.role_id,
      namaProyek: "",
      deskripsiProyek: "",
      tenggatWaktu: "",
      status_name: "",
      task_id: "",
      sortColumn: null, // Nama kolom yang sedang disortir
      sortOrder: 'asc', // Urutan sorting ('asc' atau 'desc')
  
      no:1,

      statData: [
        {
          icon: "bx bx-copy-alt",
          title: "Total Task",
          value: "112",
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

      query: "", // Kata kunci pencarian
      task: [], // Hasil pencarian proyek    
      showModal: {
                editProyek: false,
                tambahKolaborator: false,
            },
        
    };
  },
  mounted() {
    this.getDataProject();
    this.getCollaborators();
    setTimeout(() => {
      this.showModal.editProyek = false;
      this.showModal.tambahKolaborator = false;
    }, 1500);

    // this.fetchProjectData();
  },

  props: {
    item: Object,
  },

  created() {
  // Ambil parameter project_id dari URL
  if (this.$route.params.id) {
    this.project_id = this.$route.params.id; // Simpan project_id ke properti
    console.log("Project ID dari URL:", this.project_id); // Debug untuk memastikan project_id berhasil diambil
  } else {
    console.warn("Project ID tidak ditemukan di URL"); // Peringatan jika project_id tidak ada
  }

  // Ambil parameter task_id dari URL
  // if (this.$route.params.task_id) {
  //   this.task_id = this.$route.params.task_id; // Simpan task_id ke properti
  //   console.log("Task ID dari URL:", this.task_id); // Debug untuk memastikan task_id berhasil diambil
  // } else {
  //   console.warn("Task ID tidak ditemukan di URL"); // Peringatan jika task_id tidak ada
  // }
},


  methods: {

    async updateStatus(task_id, event) {
      const newStatus = event.target.value;

      const configStoreData = {
        method: "post", // Menggunakan metode PUT
        url: `${process.env.VUE_APP_BACKEND_URL_API}tasks/${task_id}/status-task`, // URL API
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.accessToken}`,
        },
        data: {
          id: task_id,
          status: newStatus,
        },
      };

      try {
        const response = await axios(configStoreData);
        alert('Status berhasil diperbarui!');
        console.log('Response:', response.data);
      } catch (error) {
        console.error('Error updating status:', error);
        alert('Terjadi kesalahan saat memperbarui status.');
      }
    },


    showModalTambahKolaborator() {
  console.log("Tombol TAMBAH KOLABORATOR diklik");
  this.resetForm();
  this.showModal.tambahKolaborator = true;
},

onSearchKolaborator(search, loading) {
      if (search.length) {
        loading(true);
        this.searchKolaborator(loading, search);
      }
    },

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


    storeDataTambahKolaborator() {
      console.log("storeDataTambahKolaborator function is called"); 
      this.userIds = this.kolaborator_data.map((item) => item.kolaborator_data.user_id);


  const configStoreData = {
    method: "post",
    url: process.env.VUE_APP_BACKEND_URL_API + "admin/add-collaborator",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.accessToken}`,
    },
    data: {
      project_id: this.project_id, 
      user_id: JSON.stringify(this.userIds),
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
      this.showModal.tambahKolaborator = false; // Tutup modal setelah berhasil
      this.resetForm(); // Reset form setelah menyimpan
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
  


    getDataProject() {
      this.getDataTask();
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
      // console.log(item.deadline);
      axios(config)
        .then((response) => {
          this.loadingTable = false;
          if (response.status === 200) {
            this.data = response.data.data;
            // console.log(this.data);
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
    getDataTask(per_page) {
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
        url: process.env.VUE_APP_BACKEND_URL_API + 'task-management/' + this.id,
        params: {
          per_page: per_page,
        },
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer ' + token,
        },
      };
      // console.log(item.deadline);
      axios(config)
        .then((response) => {
          this.loadingTable = false;
          if (response.status === 200) {
            this.dataTask = response.data.data.data_task;
            console.log(this.dataTask);
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

    cariProyek() {
    let self = this;
    self.loadingTable = true;

    // Konfigurasi Axios
    var config = {
        method: "post",
        url: process.env.VUE_APP_BACKEND_URL_API + "task-management/search",
        params: {
            search: self.query, // Query pencarian
            project_id: self.project_id, // Query pencarian
        },
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.accessToken}`, // Token dari localStorage
        },
    };

    // Panggil API
    axios(config)
        .then(function (response) {
            let response_data = response.data;

            console.log(response_data); // Debugging untuk memastikan struktur response

            if (response_data.meta.code === 200) {
                // Berhasil mengambil data
                self.data.task = response_data.data; // Simpan data ke variabel
            } else {
                // Jika response gagal
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: response_data.meta.message, // Perbaiki akses properti di sini
                });
            }
        })
        .catch(function (error) {
            console.error("Error fetching data:", error);

            // Tampilkan pesan kesalahan
            Swal.fire({
                icon: "error",
                title: "Error",
                text: error.response && error.response.data.meta 
                    ? error.response.data.meta.message 
                    : "Terjadi kesalahan saat mengambil data.",
            });
        })
        .finally(() => {
            // Pastikan indikator loading dihentikan
            self.loadingTable = false;
        });
},


    storeDataTambahTask() {
      this.getCollaborators();
  console.log("storeDataTambahTask function is called"); // Log untuk memverifikasi apakah fungsi dipanggil

  // Validasi jika ada field yang kosong
  if (!this.judulTask || !this.tingkatUrgensi || !this.tipeTask || !this.tanggalDeadline) {
    Swal.fire({
      icon: "warning",
      title: "Data tidak lengkap",
      text: "Harap lengkapi semua field sebelum menyimpan",
    });
    return;
  }

  // Konfigurasi request ke API
  const configStoreData = {
    method: "post",
    url: process.env.VUE_APP_BACKEND_URL_API + "tasks", // Endpoint API
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.accessToken}`,
    },
    data: {
      collaborator_id: this.collaborator_id || null,
      project_id: this.project_id,
      task_name: this.judulTask,
      priority_task: parseInt(this.tingkatUrgensi), // Ubah ke integer jika perlu
      type_task: this.tipeTask.toUpperCase(),  // Ubah ke integer jika perlu
      deadline: this.tanggalDeadline,
    },
  };

  console.log("Data yang dikirim:", configStoreData.data); // Log untuk melihat data yang dikirim

  // Mengirim request ke API menggunakan Axios
  axios(configStoreData)
    .then((response) => {
      console.log("Respon server:", response.data); // Log response dari server
      Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: response.data.message || "Data berhasil disimpan",
      });
      this.resetForm(); // Reset form setelah berhasil
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
  this.id = null;
  this.judulTask = "";
  this.tingkatUrgensi = "";
  this.tipeTask = "";
  this.tanggalDeadline = "";
},


  countTasksByStatus(status) {
      return this.data.task.filter(data => data.status_task === status).length;
    },

    // Tambahkan baris instruktur baru
    addRowPeserta() {
      this.kolaborator_data.push({
        kolaborator_data: self.kolaborator_data,
      });
    },
    deleteRow(index) {
      this.kolaborator_data.splice(index, 1);
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

showModalEditProyek(id) { 
    console.log("Tombol SUNTING diklik, ID Proyek:", id);
    this.editProyek(id);
    this.showModal.editProyek = true;
  },

  editProyek(project_id) {
  
  console.log(`Memuat data proyek dengan ID: ${project_id}`);

  // Reset data sebelum memuat yang baru
  this.project_id = null,
  this.namaProyek = "";
  this.deskripsiProyek = "";
  this.tenggatWaktu = "";
  // this.kolaborator_data = [];

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
      // this.kolaborator_data = resData.collaborator || [];
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
      collaborator: this.kolaborator_data,  // Data kolaborator
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

getCollaborators() {
      this.loadingTable = true;
      this.errorMessage = '';

      const token = localStorage.accessToken;
      if (!token) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No access token found!',
        });
        this.loadingTable = false;
        return;
      }

      const config = {
        method: 'get',
        url: `${process.env.VUE_APP_BACKEND_URL_API}tasks/get-collaborators/${this.id}`,
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };

      axios(config)
        .then((response) => {
          this.loadingTable = false;
          if (response.status === 200) {
            this.collaborators = response.data.data; // Sesuaikan dengan struktur data yang dikembalikan
          } else {
            this.collaborators = [];
          }
          
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Gagal",
            text: error.response?.data?.message || "Terjadi kesalahan saat menyimpan data",
          });
          console.error('Error:', error.response ? error.response.data : error.message);
        });
    },

    updateEntries() {
        const perPage = document.getElementById('autoSizingSelect').value; // Ambil nilai dari dropdown
        this.getDataTask(perPage); // Panggil fungsi getDataProject dengan nilai perPage
    },
    sortData(column) {
    if (this.sortColumn === column) {
      // Toggle sorting order
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      // Set new column and default order to ascending
      this.sortColumn = column;
      this.sortOrder = 'asc';
    }

    // Lakukan sorting data
    this.dataTask.sort((a, b) => {
      let valA = a[column];
      let valB = b[column];

      if (typeof valA === 'string') valA = valA.toLowerCase();
      if (typeof valB === 'string') valB = valB.toLowerCase();

      if (this.sortOrder === 'asc') {
        return valA > valB ? 1 : -1;
      } else {
        return valA < valB ? 1 : -1;
      }
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
          <div class="mb-1 d-md-flex">
            <BCardTitle>Detail Proyek</BCardTitle>
            <div class="col-md-3 col-6" style="margin-left: auto; margin-right: 1%;" >
                <button type="button" class="btn btn-success h-100 w-100 d-none d-md-flex" alt="Disable" @click="showModal.tambahKolaborator = true" variant="primary" v-if="menuItems === 1"><i class="fa fa-plus me-1 mt-1"></i> TAMBAH KOLABORATOR </button>
                <div v-else>{{ console.log(this.data.pm_id) }}</div>

                  <BModal v-model="showModal.tambahKolaborator" id="modal-center" size="lg" centered title="Tambah Kolaborator" hide-footer>
                    <div class="p-3">
                      <form @submit.prevent="storeDataTambahKolaborator()">
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
                        <div class="text-end mt-3">
                          <button type="submit" class="btn btn-secondary btn-success">Tambah</button>
                        </div>
                      </form>
                    </div>
                  </BModal>
                </div>

            <div class="col-6 col-md-3">
              <button 
                type="button" 
                class="btn btn-warning h-100 w-100 d-none d-md-flex" 
                title="Edit Proyek" 
                @click="showModalEditProyek(this.project_id)" 
                v-if="menuItems === 1">
                <i class="fa fa-edit me-1"></i> SUNTING PROYEK
              </button>


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
                    </div> -->
                           
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
                    </div>
            <div class="d-flex gap-1">
              <!-- <button type="button" class="btn btn-success h-100 w-100 d-flex d-md-none" alt="Disable" @click="modalTK = true" variant="primary" v-if="menuItems === 1"><i class="fa fa-plus me-1"></i> KOLABORATOR </button> -->
            <!-- <button type="button" class="btn btn-warning h-100 w-100 d-flex d-md-none" alt="Disable" @click="modalSP = true" variant="primary" v-if="menuItems === 1"><i class="fa fa-edit"></i>  PROYEK</button> -->
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
                <select class="form-select w-auto" id="autoSizingSelect" aria-label="Select number of entries" v-on:change="updateEntries()">
                  <option value="5" selected>5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                  <option value="20">20</option>
                  <option value="50">50</option>
                </select>
                <label class="ms-2">Entries</label>
              </div>

            <!-- Input Pencarian -->
            <div class="col-md-auto col-7">
              <label>Data Task</label>
              <input type="text" v-model="query" @input="cariProyek()" class="form-control" id="autoSizingInput" placeholder="Cari Data Task">
            </div>

  <!-- Tombol Tambah Task -->
  <div class="col-auto ms-auto pt-lg-4 pt-4">
    <!-- Tombol Tambah Task -->
    <button
      type="button"
      class="btn btn-success d-flex align-items-center d-none d-md-flex"
      @click="modalTT = true"
    >
      <i class="fa fa-plus me-2"></i>TAMBAH TASK
    </button>
    <button
      type="button"
      class="btn btn-success d-flex align-items-center d-flex d-md-none"
      @click="modalTT = true"
    >
      <i class="fa fa-plus me-2"></i>TASK
    </button>

    <BModal v-model="modalTT" id="modal-center" size="lg" centered title="Tambah Task" hide-footer>
      <div class="p-3">
        <form @submit.prevent="storeDataTambahTask">
          <!-- Input Judul Task -->
          <div class="mb-3">
            <label for="judul-task" class="form-label fw-bold">Judul Task</label>
            <input
              type="text"
              class="form-control"
              v-model="judulTask"
              placeholder="Masukkan judul Task"
              required
            />
          </div>

          <BRow>
            <BCol md="6">
              <BFormGroup class="mb-3" label="Tingkat Urgensi" label-for="tingkat-urgensi-input">
                <select v-model="tingkatUrgensi" id="tingkat-urgensi-input" class="form-select">
                  <option disabled value="">Pilih Tingkat Urgensi</option>
                  <option value="1">Urgent</option>
                  <option value="2">Tinggi</option>
                  <option value="3">Sedang</option>
                  <option value="4">Rendah</option>
                </select>
              </BFormGroup>
            </BCol>
                           <BCol md="6">
              <BFormGroup class="mb-3" label="Tipe Task" label-for="tipe-task-input">
                <select v-model="tipeTask" id="tipe-task-input" class="form-select">
                  <option disabled value="">Pilih Tipe Task</option>
                  <option value="MAJOR">Major</option>
                  <option value="MINOR">Minor</option>
                </select>
              </BFormGroup>
            </BCol>
          </BRow>

                        <BRow>
                              <BCol md="6">
                                <BFormGroup class="mb-3" label="Kolaborator" label-for="kolaborator-input">
                                  <select id="kolaborator" class="form-select" v-model="collaborator_id">
                                    <option selected>Pilih kolaborator</option>
                                    <option v-for="user in collaborators" :key="user.user_id" :value="user.user_id">
                                      {{ user.name }}
                                    </option>
                                  </select>
                                </BFormGroup>
                              </BCol>
                              <div v-if="loadingTable">Loading...</div>
                              <div v-if="errorMessage" class="text-danger">{{ errorMessage }}</div>
                          <BCol md="6">
              <BFormGroup class="mb-3" label="Tanggal Deadline" label-for="tanggal-deadline-input">
                <flat-pickr
                  v-model="tanggalDeadline"
                  :first-day-of-week="1"
                  lang="en"
                  class="form-control"
                ></flat-pickr>
              </BFormGroup>
            </BCol>
          </BRow>

          <!-- Tombol Submit -->
          <div class="text-end">
            <button type="submit" class="btn btn-success">Tambah</button>
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
                    <BTh style="background-color: #272b4e; color: whitesmoke;text-align: center; border-collapse: collapse; border: 1px solid black;">Kolaborator 
                      <button class="btn btn-sm btn-link p-0" @click="sortData('collaborator_id')" ><i class="fa fa-sort"
                        :class="{
                          'fa-sort-asc': sortColumn === 'collaborator_id' && sortOrder === 'asc',
                          'fa-sort-desc': sortColumn === 'collaborator_id' && sortOrder === 'desc',
                        }"></i></button></BTh>
                    <BTh style="background-color: #272b4e; color: whitesmoke;text-align: center; border-collapse: collapse; border: 1px solid black;">Task 
                      <button class="btn btn-sm btn-link p-0" @click="sortData('task_name')" ><i class="fa fa-sort"
                        :class="{
                          'fa-sort-asc': sortColumn === 'task_name' && sortOrder === 'asc',
                          'fa-sort-desc': sortColumn === 'task_name' && sortOrder === 'desc',
                        }"></i></button></BTh>
                    <BTh style="background-color: #272b4e; color: whitesmoke;text-align: center; border-collapse: collapse; border: 1px solid black;">Status 
                      <!-- <button class="btn btn-sm btn-link p-0" @click="sortData('status_task')" ><i class="fa fa-sort"
                        :class="{
                          'fa-sort-asc': sortColumn === 'status_task' && sortOrder === 'asc',
                          'fa-sort-desc': sortColumn === 'status_task' && sortOrder === 'desc',
                        }"></i></button> -->
                        </BTh>
                    <BTh style="background-color: #272b4e; color: whitesmoke;text-align: center; border-collapse: collapse; border: 1px solid black;">Sisa Waktu 
                      <button class="btn btn-sm btn-link p-0" @click="sortData('sisa_waktu')" ><i class="fa fa-sort"
                        :class="{
                          'fa-sort-asc': sortColumn === 'sisa_waktu' && sortOrder === 'asc',
                          'fa-sort-desc': sortColumn === 'sisa_waktu' && sortOrder === 'desc',
                        }"></i></button></BTh>
                    <BTh style="background-color: #272b4e; color: whitesmoke;text-align: center; border-collapse: collapse; border: 1px solid black;vertical-align: middle;" rowspan="2" v-if="menuItems === 1">Aksi</BTh>
                  </BTr>
                </BThead>
                <BTbody>
                  <BTr style="border-collapse: collapse; border: 1px solid black" v-for="(item,index) in dataTask" :key="index">
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
                              <!-- <p class="fw-bold mb-0">{{item.sisa_waktu}}</p> -->
                              <h5><span class="badge bg-danger">{{item.sisa_waktu}}</span></h5>
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
                                <h5><span class="badge bg-primary">{{item.type_task}}</span></h5>
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
                              <h5><span class="badge bg-danger">{{item.status_task}}</span></h5>
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
    <select class="form-select" id="autoSizingSelect" :value="item.status_task" @change="updateStatus(item.task_id, $event)">
      <option disabled>{{ item.status_task }}</option>
      <option value="PENDING">Pending</option>
      <option value="ONGOING">Ongoing</option>
      <option value="DONE">Done</option>
    </select>
  </BTd>
                    <BTd style="border-collapse: collapse; border: 1px solid black; text-align: center;">
                      <span class="badge bg-danger">{{ item.sisa_waktu }}</span>
                    </BTd>

                    <BTd style="border-collapse: collapse; border: 1px solid black;" v-if="menuItems === 1">
                      <button type="button" class="btn btn-warning btn-sm mb-1 w-100" alt="Disable" @click="modalST = true" variant="primary"><i class="bx bx-edit"></i> SUNTING</button>
                      <BModal v-model="modalST" id="modal-center" size="lg" centered title="Sunting Task" hide-footer>
                        <div class="p-3">
                          <form @submit.prevent="storeDataEditTask">
                            <div class="mb-3">
                              <label for="judul-task" class="form-label fw-bold">Judul Task</label>
                              <input type="text" class="form-control" id="autoSizingInput" placeholder="Masukan judul Task" value="Task A">
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
                                      <option value="major">Major</option>
                                      <option value="minor">Minor</option>
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
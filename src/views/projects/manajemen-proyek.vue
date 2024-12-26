<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import Pagination from "../../components/common/table-pagination.vue";
import { ref } from "vue";
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import Swal from 'sweetalert2';
import axios from "axios";

export default {
  setup() {
    const picked = ref(new Date());

    return {
      picked
    };
  },
  components: {
    Layout,
    PageHeader,
    Pagination,
    flatPickr,
  },
  data() {
    return {
      current_page: "",
      data : [],
      project_id: '',
      kolaborator_data: [], // Array untuk data instruktur
      peserta_ref: [], // Opsi referensi untuk v-select
      namaProyek: "",
      deskripsiProyek: "",
      tenggatWaktu: "",
      query: "", // Kata kunci pencarian
      projects: [], // Hasil pencarian proyek
      sortColumn: null, // Nama kolom yang sedang disortir
      sortOrder: 'asc', // Urutan sorting ('asc' atau 'desc')
      showModal: {
          uploadProyek: false,
          editProyek: false,
      },
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
  showModalUploadProyek() {
  console.log("Tombol TAMBAH PROYEK diklik");
  this.resetForm();
  this.showModal.uploadProyek = true;
},

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
getDataProject( per_page=5 ,url = process.env.VUE_APP_BACKEND_URL_API + 'project-management') {
      this.loadingTable = true;
      // console.log(per_page);
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
        params: {
          per_page: per_page,
        },
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
    
    //paginasi
    toPage: function(str){
      console.clear();
      console.log(str);
      this.getDataProject(5, str);
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
      this.showModal.uploadProyek = false; // Tutup modal setelah berhasil
        this.resetForm(); // Reset form setelah menyimpan
        this.getDataProject(); // Refresh data yang ditampilkan di tabel
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
        this.getDataProject(); // Refresh data yang ditampilkan di tabel
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
    this.data.data_project.sort((a, b) => {
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
  updateEntries() {
        const perPage = document.getElementById('autoSizingSelect').value; // Ambil nilai dari dropdown
        this.getDataProject(perPage); // Panggil fungsi getDataProject dengan nilai perPage
    },

//     deleteProyek(project_id) {
//     if (!project_id) {
//         Swal.fire({
//             icon: 'error',
//             title: 'Error',
//             text: 'Project ID tidak valid!',
//         });
//         return;
//     }

//     const config = {
//         method: 'delete',
//         url: `${ process.env.VUE_APP_BACKEND_URL_API}admin/${project_id}`,
//         headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${localStorage.accessToken}`,
//         },
//     };

//     axios(config)
//         .then((response) => {
//             if (response.status === 200) {
//                 Swal.fire({
//                     icon: 'success',
//                     title: 'Success',
//                     text: 'Data has been successfully deleted!',
//                     timer: 2000,
//                     timerProgressBar: true,
//                     showCancelButton: false,
//                     showConfirmButton: false,
//                 }).then((result) => {
//                     if (result.dismiss === Swal.DismissReason.timer) {
//                         this.getDataProject(); // Refresh data
//                     }
//                 });
//             }
//         })
//         .catch((error) => {
//             Swal.fire({
//                 title: 'Error',
//                 text: error.response?.data?.message || 'Terjadi kesalahan saat menghapus data!',
//                 icon: 'error',
//                 showConfirmButton: true,
//             });
//         });
// }

deleteProyek(project_id) {
    if (!project_id) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Project ID tidak valid!',
        });
        return;
    }

    // Konfirmasi penghapusan
    Swal.fire({
        icon: 'warning',
        title: 'Delete this data!',
        text: 'Are you sure you want to remove this data?',
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'Cancel',
    }).then((result) => {
        if (result.isConfirmed) {
            // Menampilkan spinner loading
            Swal.fire({
                title: 'Loading...',
                html: '<i class="fas fa-spinner fa-spin"></i>',
                showConfirmButton: false,
                allowOutsideClick: false,
                willOpen: () => {
                    Swal.showLoading();
                },
            });

            const config = {
        method: 'delete',
        url: `${ process.env.VUE_APP_BACKEND_URL_API}admin/${project_id}`,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.accessToken}`,
        },
            };

            axios(config)
                .then((response) => {
                    if (response.status === 200) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Success',
                            text: 'Data has been successfully deleted!',
                            timer: 2000,
                            timerProgressBar: true,
                            showCancelButton: false,
                            showConfirmButton: false,
                        }).then((result) => {
                            if (result.dismiss === Swal.DismissReason.timer) {
                                this.getDataProject(); // Refresh data
                            }
                        });
                    }
                })
                .catch((error) => {
                    Swal.fire({
                        title: 'Error',
                        text: error.response?.data?.message || 'Terjadi kesalahan saat menghapus data!',
                        icon: 'error',
                        showConfirmButton: true,
                    });
                });
        }
    });
}


  }
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
                <select class="form-select w-auto" id="autoSizingSelect" aria-label="Select number of entries" v-on:change="updateEntries()">
                  <option value="5" selected>5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                  <option value="20">20</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                </select>
                <label class="ms-2">Entries</label>
              </div>

              <!-- Input Pencarian -->
              <div class="col-auto">
                <label>Data Proyek</label>
                <input type="text" v-model="query" @input="cariProyek()" class="form-control" id="autoSizingInput" placeholder="Cari Proyek">
              </div>

              <!-- Tombol Tambah Proyek -->
              <div class="col-auto ms-auto pt-lg-4 pt-4">
      <button type="button" class="btn btn-success d-none d-md-flex" @click="showModal.uploadProyek = true"><i class="fa fa-plus me-2"></i> TAMBAH PROYEK</button>
      <button type="button" class="btn btn-success d-flex d-md-none" @click="showModal.uploadProyek = true"><i class="fa fa-plus me-1"></i> PROYEK</button>

  <BModal v-model="showModal.uploadProyek" centered title="Tambah Proyek" hide-footer>
    <div class="p-3">
      <form @submit.prevent="storeDataProyek()">
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
                <button type="submit" class="btn btn-success" @click="console.log('Tombol diklik')">
                  Simpan
                </button>

              </div>
            </form>
          </div>
        </BModal>
      </div>
      </form>
 
            <div class="table-responsive">
              <BTableSimple class="mb-0"   
                id="data-proyek">
                <BThead>
                  <BTr style="border-collapse: collapse; border: 1px solid black">
                    <BTh style="background-color: #272b4e; color: whitesmoke;text-align: center; vertical-align: middle;border-collapse: collapse; border: 1px solid black;">No</BTh>
                    <BTh style="background-color: #272b4e; color: whitesmoke;text-align: center; border-collapse: collapse; border: 1px solid black;">Proyek 
                      <!-- <button class="btn btn-sm btn-link p-0"><i class="fa fa-sort"></i></button> -->
                      <button class="btn btn-sm btn-link p-0" @click="sortData('project_name')" ><i  
                        class="fa fa-sort"
                        :class="{
                          'fa-sort-asc': sortColumn === 'project_name' && sortOrder === 'asc',
                          'fa-sort-desc': sortColumn === 'project_name' && sortOrder === 'desc',
                        }"></i></button>
                    </BTh>
                    <BTh style="background-color: #272b4e; color: whitesmoke;text-align: center; border-collapse: collapse; border: 1px solid black;">Deskripsi
                      <button class="btn btn-sm btn-link p-0" @click="sortData('description')" ><i  
                        class="fa fa-sort"
                        :class="{
                          'fa-sort-asc': sortColumn === 'description' && sortOrder === 'asc',
                          'fa-sort-desc': sortColumn === 'description' && sortOrder === 'desc',
                        }"></i></button>
                    </BTh>
                    <BTh style="background-color: #272b4e; color: whitesmoke;text-align: center; border-collapse: collapse; border: 1px solid black;">Tenggat 
                      <button class="btn btn-sm btn-link p-0" @click="sortData('deadline')" ><i  
                        class="fa fa-sort"
                        :class="{
                          'fa-sort-asc': sortColumn === 'deadline' && sortOrder === 'asc',
                          'fa-sort-desc': sortColumn === 'deadline' && sortOrder === 'desc',
                        }"></i></button>
                    </BTh>
                    <BTh style="background-color: #272b4e; color: whitesmoke;text-align: center; border-collapse: collapse; border: 1px solid black;">Sisa Waktu 
                      <button class="btn btn-sm btn-link p-0" @click="sortData('sisa_waktu')" ><i  
                        class="fa fa-sort"
                        :class="{
                          'fa-sort-asc': sortColumn === 'sisa_waktu' && sortOrder === 'asc',
                          'fa-sort-desc': sortColumn === 'sisa_waktu' && sortOrder === 'desc',
                        }"></i></button>
                    </BTh>
                    <BTh style="background-color: #272b4e; color: whitesmoke;text-align: center; border-collapse: collapse; border: 1px solid black;">Progress % 
                      <button class="btn btn-sm btn-link p-0" @click="sortData('progress_project')" ><i  
                        class="fa fa-sort"
                        :class="{
                          'fa-sort-asc': sortColumn === 'progress_project' && sortOrder === 'asc',
                          'fa-sort-desc': sortColumn === 'progress_project' && sortOrder === 'desc',
                        }"></i></button>
                    </BTh>
                    <BTh style="background-color: #272b4e; color: whitesmoke;text-align: center; border-collapse: collapse; border: 1px solid black;vertical-align: middle; width: 20%;">Aksi</BTh>
                  </BTr>
                </BThead>
                <BTbody>
                                                        
                  <BTr style="border-collapse: collapse; border: 1px solid black"  v-for="(item, index) in data.data_project" :key="index">
                    <BTh scope="row">{{ index + 1 }}</BTh>
                    <BTd style="border-collapse: collapse; border: 1px solid black;">{{ item.project_name }}</BTd>
                    <BTd style="border-collapse: collapse; border: 1px solid black;">{{ item.description }}</BTd>
                    <BTd style="border-collapse: collapse; border: 1px solid black;">{{ item.deadline }}</BTd>
                    <BTd style="border-collapse: collapse; border: 1px solid black;">{{ item.sisa_waktu }} hari</BTd>
                    <BTd style="border-collapse: collapse; border: 1px solid black;">{{item.progress_project}}</BTd>
                    <BTd style="border-collapse: collapse; border: 1px solid black;">
                      <router-link :to="{ name: 'Detail Proyek', params: { id: item.project_id } }" class="btn btn-info btn-sm mb-1 w-100">
                        <i class="bx bx-info-circle"></i> DETAILS
                      </router-link>
                      <!-- <button
                        type="button"
                        class="btn btn-warning btn-sm mb-1 w-100"
                        alt="Disable"
                        @click="showModalEditProyek(item.project_id)"
                        variant="primary"
                      >
                        <i class="bx bx-edit"></i> SUNTING
                      </button> -->

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
                <div class="font-xs">
                  <p>Kolaborator sebelumnya:</p>
                <li v-for="kolaborator in kolaborator_data" :key="kolaborator.user_id">
                  {{ kolaborator.name }}
                </li>
              </div>
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
                      <button
                      variant="warning"
                        type="button"
                        class="btn btn-danger btn-sm mb-1 w-100"
                        alt="Disable"
                        @click="deleteProyek(item.project_id)"
                      >
                        <i class="bx bxs-trash-alt"></i> HAPUS
                      </button>

                    </BTd>
                  </BTr>
                </BTbody>
              </BTableSimple>
            </div>

            <Pagination :pagination="pagination" @to-page="toPage"></Pagination>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
    {{ console.log(this.data) }}
  <!-- <Pagination :pagination="pagination" @to-page="toPage"/> -->
  </Layout>
</template>

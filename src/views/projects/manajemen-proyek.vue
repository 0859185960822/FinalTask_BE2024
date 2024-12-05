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
    const modalTP = ref(false);
    const modalSP = ref(false);
    return {
      modalTP,
      modalSP,
      picked: ref(new Date()),
    };
  },
  components: { Layout, PageHeader,Page,flatPickr, },
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
            <form class="row col-12 " style="margin-bottom: 2%;">
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
              <div class="col-3" style="margin-left: auto;" >
                <button type="button" class="btn btn-success h-100 w-100" alt="Disable" @click="modalTP = true" variant="primary"><i class="fa fa-plus"></i> TAMBAH PROYEK</button>
                <BModal v-model="modalTP" id="modal-center" centered title="Tambah Proyek" hide-footer>
                  <div class="p-3">
                    <form>
                      <div class="mb-3">
                        <label for="judul-task" class="form-label fw-bold">Nama Proyek</label>
                        <input type="text" class="form-control" id="autoSizingInput">
                      </div>
                      <div class="mb-3">
                        <label for="judul-task" class="form-label fw-bold">Deskripsi Proyek</label>
                        <input type="text" class="form-control" id="autoSizingInput">
                      </div>
                      <div class="mb-3">
                        <label for="judul-task" class="form-label fw-bold">Nama Kolaborator</label>
                        <input type="text" class="form-control" id="autoSizingInput" value="kolaborator 1">
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
                        <button type="button" class="btn btn-secondary">Tambah</button>
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
                    <BTh style="background-color: #272b4e; color: whitesmoke;text-align: center; border-collapse: collapse; border: 1px solid black;">Nama Proyek <button class="btn btn-sm btn-link p-0"><i class="fa fa-sort"></i></button></BTh>
                    <BTh style="background-color: #272b4e; color: whitesmoke;text-align: center; border-collapse: collapse; border: 1px solid black;">Deskripsi <button class="btn btn-sm btn-link p-0"><i class="fa fa-sort"></i></button></BTh>
                    <BTh style="background-color: #272b4e; color: whitesmoke;text-align: center; border-collapse: collapse; border: 1px solid black;">Tenggat <button class="btn btn-sm btn-link p-0"><i class="fa fa-sort"></i></button></BTh>
                    <BTh style="background-color: #272b4e; color: whitesmoke;text-align: center; border-collapse: collapse; border: 1px solid black;">Sisa Waktu <button class="btn btn-sm btn-link p-0"><i class="fa fa-sort"></i></button></BTh>
                    <BTh style="background-color: #272b4e; color: whitesmoke;text-align: center; border-collapse: collapse; border: 1px solid black;">Progress % <button class="btn btn-sm btn-link p-0"><i class="fa fa-sort"></i></button></BTh>
                    <BTh style="background-color: #272b4e; color: whitesmoke;text-align: center; border-collapse: collapse; border: 1px solid black;vertical-align: middle;" rowspan="2">Aksi</BTh>
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
                    <BTd style="border-collapse: collapse; border: 1px solid black;">Sudah 3 Tahun Yang Lalu</BTd>
                    <BTd style="border-collapse: collapse; border: 1px solid black;">20 <span style="color: red">%</span></BTd>
                    <BTd style="border-collapse: collapse; border: 1px solid black;">
                      <!-- <button type="button" class="btn btn-info btn-sm mb-1 w-100" alt="Disable"><i class="bx bx-info-circle"></i> DETAILS</button> -->
                      <router-link :to="'detail-proyek'" class="btn btn-info btn-sm mb-1 w-100">
                        <i class="bx bx-info-circle"></i> DETAILS
                      </router-link>
                      <button type="button" class="btn btn-warning btn-sm mb-1 w-100" alt="Disable" @click="modalSP = true" variant="primary"><i class="bx bx-edit"></i> SUNTING</button>
                      <BModal v-model="modalSP" id="modal-center" centered title="Sunting Proyek" hide-footer>
                        <div class="p-3">
                          <form>
                            <div class="mb-3">
                              <label for="judul-task" class="form-label fw-bold">Nama Proyek</label>
                              <input type="text" class="form-control" id="autoSizingInput" value="Proyek A" >
                            </div>
                            <div class="mb-3">
                              <label for="judul-task" class="form-label fw-bold">Deskripsi Proyek</label>
                              <input type="text" class="form-control" id="autoSizingInput" value="ini deskripsi proyek">
                            </div>
                            <div class="mb-3">
                              <label for="judul-task" class="form-label fw-bold">Nama Kolaborator</label>
                              <input type="text" class="form-control" id="autoSizingInput" value="kolaborator 1">
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

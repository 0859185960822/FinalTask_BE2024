<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
// import Sidebar from "../../components/side-bar.vue";
import Page from "../../components/common/pagination.vue";
import { ref } from "vue";

/**
 * Task-list component
 */
export default {
  setup() {
    const isOpen = ref(false);
    return {
      isOpen,
    };
  },
  components: { Layout, PageHeader,Page, },
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
                <button type="button" class="btn btn-success h-100 w-100" alt="Disable" @click="isOpen = true" variant="primary">TAMBAH KOLABORATOR <i class="fa fa-plus"></i></button>
                <!-- <BModal v-model="isOpen" id="modal-center" centered title="Center modal" title-class="font-18" hide-footer>
                    <p>
                      Cras mattis consectetur purus sit amet fermentum. Cras
                      justo odio, dapibus ac facilisis in, egestas eget quam.
                      Morbi leo risus, porta ac consectetur ac, vestibulum at
                      eros.
                    </p>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur et. Vivamus sagittis lacus vel augue laoreet
                      rutrum faucibus dolor auctor.
                    </p>
                    <p class="mb-0">
                      Aenean lacinia bibendum nulla sed consectetur. Praesent
                      commodo cursus magna, vel scelerisque nisl consectetur et.
                      Donec sed odio dui. Donec ullamcorper nulla non metus
                      auctor fringilla.
                    </p>
                  </BModal>    -->
                  <BModal v-model="isOpen" id="modal-center" centered title="Tambah Kolaborator" hide-footer>
  <div class="p-3">
    <form>
      <div class="mb-3">
        <label for="kolaborator" class="form-label fw-bold">Nama Kolaborator</label>
        <select id="kolaborator" class="form-select">
          <option selected>Pilih kolaborator</option>
          <option value="1">Kolaborator 1</option>
          <option value="2">Kolaborator 2</option>
          <option value="3">Kolaborator 3</option>
        </select>
      </div>
      <div class="text-end">
        <button type="button" class="btn btn-secondary">Tambah</button>
      </div>
    </form>
  </div>
</BModal>
            </div>
            <div class="col-3">
                <button type="button" class="btn btn-warning h-100 w-100" alt="Disable">SUNTING PROYEK <i class="fa fa-edit"></i> </button>
            </div>
          </div>
          <!-- <div class="col-12" style="display: flex; padding: 1%; text-align: center;gap: 0.5em;" id="tolong tengahin">
            <div class="col-2 h-100" style="background-color: gray;padding: 1%;">
              <p>TOTAL TASK</p> <br>
              <div style="background-color: white;height: 3rem;">
              <p style="padding-top: 5%;font-size: 2em">10</p>
              </div>
            </div>
            <div class="col-2 h-100" style="background-color: gray;padding: 1%;">
              <p>TASK PENDING</p> <br>
              <div style="background-color: white;height: 3rem;">
              <p style="padding-top: 5%;font-size: 2em">10</p>
              </div>
            </div>
            <div class="col-2 h-100" style="background-color: gray;padding: 1%;">
              <p>TASK ONGOING</p> <br>
              <div style="background-color: white;height: 3rem;">
              <p style="padding-top: 5%;font-size: 2em">10</p>
              </div>
            </div>
            <div class="col-2 h-100" style="background-color: gray;padding: 1%;">
              <p>TASK DONE</p> <br>
              <div style="background-color: white;height: 3rem;">
              <p style="padding-top: 5%;font-size: 2em">10</p>
              </div>
            </div>
          </div> -->

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
                <button type="button" class="btn btn-success h-80 w-100" alt="Disable">TAMBAH TASK <i class="fa fa-plus"></i></button>
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
                    <BTd style="border-collapse: collapse; border: 1px solid black;">User 1</BTd>
                    <BTd style="border-collapse: collapse; border: 1px solid black;">Membuat Fitur Tambah User <br><span class="badge bg-info">Major</span> <span class="badge bg-warning">Sedang</span> </BTd>
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
                      <button type="button" class="btn btn-warning btn-sm mb-1 w-100" alt="Disable"><i class="bx bx-edit"></i> SUNTING</button>
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

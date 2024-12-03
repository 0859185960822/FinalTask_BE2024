<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
// import Sidebar from "../../components/side-bar.vue";
import { tasksChart, tasks, recentData } from "./data-tasklist";
import { required, helpers } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";

/**
 * Task-list component
 */
export default {
  setup() {
    return { v$: useVuelidate() };
  },
  components: { Layout, PageHeader },
  data() {
    return {
      tasksChart: tasksChart,
      inprogressTasks: "",
      upcomingTasks: "",
      completedTasks: "",

      taskList: {
        name: "",
      },
      myFiles: [],
      selected: "",
      selected2: "",
      submitted: false,
      showModal: false,
      recentData
    };
  },
  validations: {
    taskList: {
      name: {
        required: helpers.withMessage("Task is required", required),
      },
    },
  },
  mounted() {
    this.isMountData();
    // all tasks
  },
  methods: {
    onFileChange(event) {
      for (var i = 0; i < event.target.files.length; i++) {
        const url = URL.createObjectURL(event.target.files[i])
        this.myFiles.push(url);
      }
    },

    handleSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      this.v$.$touch();
      if (this.v$.$invalid) {
        return;
      } else {
        this.tasks.push({
          index: this.tasks.length + 1,
          taskType: this.selected,
          name: this.taskList.name,
          images: this.myFiles,
          status: this.selected2,
          checked: false,
        });
        this.isMountData();
        this.showModal = false;
        this.taskList = {};
        this.selected = "";
        this.selected2 = "";
        this.myFiles = [];
      }
      this.submitted = false;
    },

    isMountData() {
      this.tasks = tasks;
      this.inprogressTasks = tasks.filter((t) => t.taskType === "inprogress");
      this.upcomingTasks = tasks.filter((t) => t.taskType === "upcoming");
      this.completedTasks = tasks.filter((t) => t.taskType === "completed");
    },
  },
};
</script>

<template>
  <!-- <Sidebar/> -->
  <Layout>
    <PageHeader title="Task List" pageTitle="Tasks" />
    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <BCardBody class="pb-0">
            <BCardTitle>Responsive tables</BCardTitle>

            <p class="card-title-desc">
              <!-- Create responsive tables by wrapping any <code>.table</code> in
              <code>.table-responsive</code>
              to make them scroll horizontally on small devices (under 768px). -->
            </p>

            <div class="table-responsive">
              <BTableSimple class="mb-0">
                <BThead>
                  <BTr>
                    <BTh>No</BTh>
                    <BTh>Nama Project</BTh>
                    <BTh>Deskripsi</BTh>
                    <BTh>Tenggat</BTh>
                    <BTh>Sisa Waktu</BTh>
                    <BTh>Progress</BTh>
                    <BTh>Aksi</BTh>
                  </BTr>
                </BThead>
                <BTbody>
                  <BTr>
                    <BTh scope="row">1</BTh>
                    <BTd>Project A</BTd>
                    <BTd>Project Cukup sulit</BTd>
                    <BTd>20/11/2021</BTd>
                    <BTd>Sudah 3 Tahun Yang Lalu</BTd>
                    <BTd>20 <span style="color: red">%</span></BTd>
                    <BTd></BTd>
                  </BTr>
                  <!-- <BTr>
                    <BTh scope="row">2</BTh>
                    <BTd>Table cell</BTd>
                    <BTd>Table cell</BTd>
                    <BTd>Table cell</BTd>
                    <BTd>Table cell</BTd>
                    <BTd>Table cell</BTd>
                    <BTd>Table cell</BTd>
                  </BTr>
                  <BTr>
                    <BTh scope="row">3</BTh>
                    <BTd>Table cell</BTd>
                    <BTd>Table cell</BTd>
                    <BTd>Table cell</BTd>
                    <BTd>Table cell</BTd>
                    <BTd>Table cell</BTd>
                    <BTd>Table cell</BTd>
                  </BTr> -->
                </BTbody>
              </BTableSimple>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>

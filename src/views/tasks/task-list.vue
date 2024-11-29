<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

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
  <Layout>
    <PageHeader title="Task List" pageTitle="Tasks" />

    <BRow>
      <BCol lg="8">
        <BCard no-body>
          <BCardBody>
            <div class="d-flex align-items-start">
              <BCardTitle class="mb-4">Upcoming</BCardTitle>
              <BButton variant="success" class="ms-auto" @click="showModal = true">Add Task</BButton>
            </div>
            <BModal title="Add Task" v-model="showModal" hide-footer>
              <BForm @submit.prevent="handleSubmit">
                <BRow>
                  <BCol cols="12">
                    <div class="mb-3">
                      <label for="name">Event Name</label>
                      <input id="name" v-model="taskList.name" type="text" class="form-control" placeholder="Insert name"
                        :class="{
                          'is-invalid': submitted && v$.taskList.name.$error,
                        }" />
                      <div v-if="submitted && v$.taskList.name.$error" class="invalid-feedback">
                        <span v-if="v$.taskList.name.required.$message">{{
                          v$.taskList.name.required.$message
                        }}</span>
                      </div>
                    </div>
                  </BCol>
                  <div class="mb-3">
                    <label for="file">File</label>
                    <input id="file" type="file" multiple class="form-control" @change="onFileChange($event)" />
                  </div>
                  <BCol cols="12">
                    <div class="mb-3">
                      Task Type
                      <BFormSelect v-model="selected" class="mb-3 form-select">
                        <BFormSelectOption value="upcoming">Upcoming</BFormSelectOption>
                        <BFormSelectOption value="inprogress">In-progress</BFormSelectOption>
                        <BFormSelectOption value="completed">Completed</BFormSelectOption>
                      </BFormSelect>
                    </div>
                  </BCol>
                  <BCol cols="12">
                    <div class="mb-3">
                      Task Status
                      <BFormSelect v-model="selected2" class="mb-3 form-select">
                        <BFormSelectOption value="Approved">Approved</BFormSelectOption>
                        <BFormSelectOption value="Waiting">Waiting</BFormSelectOption>
                        <BFormSelectOption value="Pending">Pending</BFormSelectOption>
                        <BFormSelectOption value="Complete">Complete</BFormSelectOption>
                      </BFormSelect>
                    </div>
                  </BCol>
                </BRow>
                <div class="text-end mt-3">
                  <BButton variant="light">Close</BButton>
                  <BButton type="submit" variant="success" class="ms-1">Create event</BButton>
                </div>
              </BForm>
            </BModal>
            <div class="table-responsive mb-0">
              <BTableSimple class="table-nowrap align-middle mb-0">
                <BTbody>
                  <BTr v-for="task of upcomingTasks" :key="task.index">
                    <BTd style="width: 40px">
                      <BFormCheckbox class="form-check" v-model="task.checked">
                      </BFormCheckbox>
                    </BTd>
                    <BTd>
                      <h5 class="text-truncate font-size-14 m-0">
                        <BLink href="javascript: void(0);" class="text-dark">{{
                          task.name
                        }}</BLink>
                      </h5>
                    </BTd>
                    <BTd>
                      <div class="avatar-group">
                        <div class="avatar-group-item" v-for="(data, index) of task.images" :key="index">
                          <BLink href="javascript: void(0);" class="d-inline-block">
                            <img :src="`${data}`" alt="" class="rounded-circle avatar-xs" />
                          </BLink>
                        </div>
                      </div>
                    </BTd>
                    <BTd>
                      <div class="text-center">
                        <span class="badge rounded-pill font-size-11" :class="{
                          'badge-soft-success': task.status === 'Complete',
                          'badge-soft-warning': task.status === 'Pending',
                          'badge-soft-primary': task.status === 'Approved',
                          'badge-soft-secondary': task.status === 'Waiting',
                        }">{{ task.status }}</span>
                      </div>
                    </BTd>
                  </BTr>
                </BTbody>
              </BTableSimple>
            </div>
          </BCardBody>
        </BCard>

        <BCard no-body>
          <BCardBody>
            <div class="d-flex align-items-start">
              <BCardTitle class="mb-4">In Progress</BCardTitle>
              <BButton variant="success" class="ms-auto" @click="showModal = true">Add Task</BButton>
            </div>
            <div class="table-responsive mb-0">
              <BTableSimple class="table-nowrap table-centered">
                <BTbody>
                  <BTr v-for="task of inprogressTasks" :key="task.index">
                    <BTd style="width: 40px">
                      <BFormCheckbox class="form-check" v-model="task.checked">
                      </BFormCheckbox>
                    </BTd>
                    <BTd>
                      <h5 class="text-truncate font-size-14 m-0">
                        <BLink href="javascript: void(0);" class="text-dark">{{
                          task.name
                        }}</BLink>
                      </h5>
                    </BTd>
                    <BTd>
                      <div class="avatar-group">
                        <div class="avatar-group-item" v-for="(data, index) of task.images" :key="index">
                          <BLink href="javascript: void(0);" class="d-inline-block">
                            <img :src="`${data}`" alt="" class="rounded-circle avatar-xs" />
                          </BLink>
                        </div>
                      </div>
                    </BTd>
                    <BTd>
                      <div class="text-center">
                        <span class="badge rounded-pill font-size-11" :class="{
                          'badge-soft-success': task.status === 'Complete',
                          'badge-soft-warning': task.status === 'Pending',
                          'badge-soft-primary': task.status === 'Approved',
                          'badge-soft-secondary': task.status === 'Waiting',
                        }">{{ task.status }}</span>
                      </div>
                    </BTd>
                  </BTr>
                </BTbody>
              </BTableSimple>
            </div>
          </BCardBody>
        </BCard>

        <BCard no-body>
          <BCardBody>
            <div class="d-flex align-items-start">
              <BCardTitle class="mb-4">Completed</BCardTitle>
              <BButton variant="success" class="ms-auto" @click="showModal = true">Add Task</BButton>
            </div>
            <div class="table-responsive mb-0">
              <BTableSimple class="table-nowrap table-centered">
                <BTbody>
                  <BTr v-for="task of completedTasks" :key="task.index">
                    <BTd style="width: 40px">
                      <BFormCheckbox class="form-check" v-model="task.checked">
                      </BFormCheckbox>
                    </BTd>
                    <BTd>
                      <h5 class="text-truncate font-size-14 m-0">
                        <BLink href="javascript: void(0);" class="text-dark">{{
                          task.name
                        }}</BLink>
                      </h5>
                    </BTd>
                    <BTd>
                      <div class="avatar-group">
                        <div class="avatar-group-item" v-for="(data, index) of task.images" :key="index">
                          <BLink href="javascript: void(0);" class="d-inline-block">
                            <img :src="`${data}`" alt="" class="rounded-circle avatar-xs" />
                          </BLink>
                        </div>
                      </div>
                    </BTd>
                    <BTd>
                      <div class="text-center">
                        <span class="badge rounded-pill font-size-11" :class="{
                          'badge-soft-success': task.status === 'Complete',
                          'badge-soft-warning': task.status === 'Pending',
                          'badge-soft-primary': task.status === 'Approved',
                          'badge-soft-secondary': task.status === 'Waiting',
                        }">{{ task.status }}</span>
                      </div>
                    </BTd>
                  </BTr>
                </BTbody>
              </BTableSimple>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol lg="4">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-3">Tasks</BCardTitle>

            <apexchart class="apex-charts" type="line" height="280" :series="tasksChart.series"
              :options="tasksChart.chartOptions"></apexchart>
          </BCardBody>
        </BCard>

        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Recent Tasks</BCardTitle>

            <div class="table-responsive">
              <BTableSimple class="table-nowrap align-middle mb-0">
                <BTbody>
                  <BTr v-for="(item, index) in recentData" :key="index">
                    <BTd>
                      <h5 class="text-truncate font-size-14 m-0">
                        <BLink class="text-dark">{{ item.name }}</BLink>
                      </h5>
                    </BTd>
                    <BTd>
                      <div class="avatar-group">
                        <div class="avatar-group-item" v-for="(avatar, i) in item.avatars" :key="i">
                          <BLink href="javascript: void(0);" class="d-inline-block">
                            <img v-if="avatar.src" :src="avatar.src" :alt="avatar.alt" class="rounded-circle avatar-xs" />
                            <div v-else class="avatar-xs">
                              <span :class="`avatar-title rounded-circle bg-${avatar.avatarBgColor} text-white font-size-16`">
                                {{ avatar.avatarTitle }}
                              </span>
                            </div> 
                          </BLink>
                        </div>
                      </div>
                    </BTd>
                  </BTr>
                </BTbody>
              </BTableSimple>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>

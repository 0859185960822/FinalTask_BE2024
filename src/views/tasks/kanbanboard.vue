<script>
import { VueDraggableNext } from 'vue-draggable-next'

import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

import { upcomingTasks, progressTasks, completedTasks } from "./data-kanaban";

/**
 * Kanban-board component
 */
export default {
  components: {
    draggable: VueDraggableNext,
    Layout,
    PageHeader,
  },
  data() {
    return {
      enabled: true,
      list: [
        { name: 'John', id: 1 },
        { name: 'Joao', id: 2 },
        { name: 'Jean', id: 3 },
        { name: 'Gerard', id: 4 },
      ],
      dragging: false,
      upcomingTasks: upcomingTasks,
      progressTasks: progressTasks,
      completedTasks: completedTasks,
      items1: Array(5)
        .fill({})
        .map((_, index) => ({ title: `Item ${index + 1}` })),
      items2: [],
    };
  },
  methods: {
    log(event) {
      console.log(event)
    },
  },
};
</script>

<template>
  <Layout>
    <PageHeader title="Kanban Board" pageTitle="Tasks" />

    <div class="drag-container">
      <BRow class="drag-list">
        <BCol lg="4" class="drag-column">
          <BCard no-body>
            <BCardBody>
              <BDropdown right variant="white" class="float-end" menu-class="dropdown-menu-end" toggle-class="p-0">
                <template #button-content>
                  <i class="mdi mdi-dots-vertical m-0 text-muted h5"></i>
                </template>
                <BDropdownItem href="javascript: void(0);">Edit</BDropdownItem>
                <BDropdownItem href="javascript: void(0);">Delete</BDropdownItem>
              </BDropdown>
              <span class="drag-column-header">
                <BCardTitle class="mb-4 pb-1">Upcoming</BCardTitle>
              </span>

              <draggable v-model="items1" transition="100" class="drop-zone">
                <template v-slot:item="{ item }">
                  <div class="draggable-item">
                    {{ item.title }}
                  </div>
                </template>
              </draggable>

              <draggable class="list-group" v-model="upcomingTasks">
                <BCard no-body v-for="task in upcomingTasks" :key="task.id" class="task-box">
                  <BCardBody>
                    <div class="float-end ml-2">
                      <span class="badge rounded-pill font-size-12" :class="{
                        'badge-soft-secondary': `${task.task}` === 'Waiting',
                        'badge-soft-success': `${task.task}` === 'Complete',
                        'badge-soft-primary': `${task.task}` === 'Approved',
                        'badge-soft-warning': `${task.task}` === 'Pending',
                      }">{{ task.task }}</span>
                    </div>
                    <div>
                      <h5 class="font-size-15">
                        <BLink href="javascript: void(0);" class="text-dark">{{
                          task.title
                        }}</BLink>
                      </h5>
                    </div>
                    <p class="text-muted mb-4">{{ task.date }}</p>
                    <div class="avatar-group float-start">
                      <div class="avatar-group-item">
                        <BLink href="javascript: void(0);" class="d-inline-block">
                          <img :src="`${task.user[0]}`" class="rounded-circle avatar-xs" alt />
                        </BLink>
                      </div>
                      <div class="avatar-group-item" v-if="task.user[1]">
                        <BLink href="javascript: void(0);" class="d-inline-block">
                          <img :src="`${task.user[1]}`" class="rounded-circle avatar-xs" alt />
                        </BLink>
                      </div>
                    </div>
                    <div class="text-end">
                      <h5 class="font-size-15 mb-1">$ {{ task.budget }}</h5>
                      <p class="mb-0 text-muted">Budget</p>
                    </div>
                  </BCardBody>
                </BCard>
              </draggable>
              <div class="text-center d-grid">
                <BLink href="javascript: void(0);" class="btn btn-primary mt-3">
                  <i class="mdi mdi-plus me-1"></i> Add New
                </BLink>
              </div>
            </BCardBody>
          </BCard>
        </BCol>

        <BCol lg="4" class="drag-column">
          <BCard no-body>
            <BCardBody>
              <BDropdown right variant="white" class="float-end" toggle-class="p-0" menu-class="dropdown-menu-end">
                <template #button-content>
                  <i class="mdi mdi-dots-vertical m-0 text-muted h5"></i>
                </template>
                <BDropdownItem href="javascript: void(0);">Edit</BDropdownItem>
                <BDropdownItem href="javascript: void(0);">Delete</BDropdownItem>
              </BDropdown>
              <span class="drag-column-header">
                <BCardTitle class="mb-4 pb-1">In Progress</BCardTitle>

              </span>
              <draggable class="list-group" v-model="progressTasks">
                <BCard no-body v-for="task in progressTasks" :key="task.id" class="task-box">
                  <BCardBody>
                    <div class="float-end ml-2">
                      <span class="badge rounded-pill font-size-12" :class="{
                        'badge-soft-secondary': `${task.task}` === 'Waiting',
                        'badge-soft-success': `${task.task}` === 'Complete',
                        'badge-soft-primary': `${task.task}` === 'Approved',
                        'badge-soft-warning': `${task.task}` === 'Pending',
                      }">{{ task.task }}</span>
                    </div>
                    <div>
                      <h5 class="font-size-15">
                        <BLink href="javascript: void(0);" class="text-dark">{{
                          task.title
                        }}</BLink>
                      </h5>
                    </div>
                    <p class="text-muted mb-4">{{ task.date }}</p>
                    <div class="avatar-group float-start">
                      <div class="avatar-group-item">
                        <BLink href="javascript: void(0);" class="d-inline-block">
                          <img :src="`${task.user[0]}`" class="rounded-circle avatar-xs" alt />
                        </BLink>
                      </div>
                      <div class="avatar-group-item" v-if="task.user[1]">
                        <BLink href="javascript: void(0);" class="d-inline-block">
                          <img :src="`${task.user[1]}`" class="rounded-circle avatar-xs" alt />
                        </BLink>
                      </div>
                    </div>
                    <div class="text-end">
                      <h5 class="font-size-15 mb-1">$ {{ task.budget }}</h5>
                      <p class="mb-0 text-muted">Budget</p>
                    </div>
                  </BCardBody>
                </BCard>
              </draggable>
              <div class="text-center d-grid">
                <BLink href="javascript: void(0);" class="btn btn-primary mt-3">
                  <i class="mdi mdi-plus me-1"></i> Add New
                </BLink>
              </div>
            </BCardBody>
          </BCard>
        </BCol>

        <BCol lg="4" class="drag-column">
          <BCard no-body>
            <BCardBody>
              <BDropdown right variant="white" class="float-end" toggle-class="p-0" menu-class="dropdown-menu-end">
                <template #button-content>
                  <i class="mdi mdi-dots-vertical m-0 text-muted h5"></i>
                </template>
                <BDropdownItem href="javascript: void(0);">Edit</BDropdownItem>
                <BDropdownItem href="javascript: void(0);">Delete</BDropdownItem>
              </BDropdown>
              <span class="drag-column-header">
                <BCardTitle class="mb-4 pb-1">Completed</BCardTitle>
              </span>
              <draggable class="list-group" v-model="completedTasks">
                <BCard no-body v-for="task in completedTasks" :key="task.id" class="task-box">
                  <BCardBody>
                    <div class="float-end ml-2">
                      <span class="badge rounded-pill font-size-12" :class="{
                        'badge-soft-secondary': `${task.task}` === 'Waiting',
                        'badge-soft-success': `${task.task}` === 'Complete',
                        'badge-soft-primary': `${task.task}` === 'Approved',
                        'badge-soft-warning': `${task.task}` === 'Pending',
                      }">{{ task.task }}</span>
                    </div>
                    <div>
                      <h5 class="font-size-15">
                        <BLink href="javascript: void(0);" class="text-dark">{{
                          task.title
                        }}</BLink>
                      </h5>
                    </div>
                    <p class="text-muted mb-4">{{ task.date }}</p>
                    <div class="avatar-group float-start">
                      <div class="avatar-group-item">
                        <BLink href="javascript: void(0);" class="d-inline-block">
                          <img :src="`${task.user[0]}`" class="rounded-circle avatar-xs" alt />
                        </BLink>
                      </div>
                      <div class="avatar-group-item" v-if="task.user[1]">
                        <BLink href="javascript: void(0);" class="d-inline-block">
                          <img :src="`${task.user[1]}`" class="rounded-circle avatar-xs" alt />
                        </BLink>
                      </div>
                    </div>
                    <div class="text-end">
                      <h5 class="font-size-15 mb-1">$ {{ task.budget }}</h5>
                      <p class="mb-0 text-muted">Budget</p>
                    </div>
                  </BCardBody>
                </BCard>
              </draggable>
              <div class="text-center d-grid">
                <BLink href="javascript: void(0);" class="btn btn-primary mt-3">
                  <i class="mdi mdi-plus me-1"></i> Add New
                </BLink>
              </div>
            </BCardBody>
          </BCard>
        </BCol>
      </BRow>
    </div>
  </Layout>
</template>

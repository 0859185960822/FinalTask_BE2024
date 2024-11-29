<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

import { projectData } from "./data-projects";

/**
 * Projects-list component
 */
export default {
  components: {
    Layout,
    PageHeader,
  },
  data() {
    return {
      projectData: projectData,
    };
  },
};
</script>

<template>
  <Layout>
    <PageHeader title="Projects List" pageTitle="Projects" />

    <BRow>
      <BCol lg="12">
        <div>
          <div class="table-responsive">
            <BTableSimple class="project-list-table table-nowrap table-centered table-borderless align-middle">
              <BThead>
                <BTr>
                  <BTh scope="col" style="widBTh: 100px">#</BTh>
                  <BTh scope="col">Projects</BTh>
                  <BTh scope="col">Due Date</BTh>
                  <BTh scope="col">Status</BTh>
                  <BTh scope="col">Team</BTh>
                  <BTh scope="col">Action</BTh>
                </BTr>
              </BThead>
              <BTbody>
                <BTr v-for="project in projectData" :key="project.id">
                  <BTd>
                    <img :src="`${project.image}`" alt class="avatar-sm" />
                  </BTd>
                  <BTd>
                    <h5 class="text-truncate font-size-14">
                      <BLink href="javascript: void(0);" class="text-dark">{{
                        project.text
                      }}</BLink>
                    </h5>
                    <p class="text-muted mb-0">{{ project.subtext }}</p>
                  </BTd>
                  <BTd>{{ project.date }}</BTd>
                  <BTd>
                    <span class="badge" :class="{
                      'bg-success': `${project.status}` === 'Completed',
                      'bg-warning': `${project.status}` === 'Pending',
                      'bg-danger': `${project.status}` === 'Delay',
                    }">{{ project.status }}</span>
                  </BTd>
                  <BTd>
                    <div class="avatar-group">
                      <div class="avatar-group-item">
                        <BLink href="javascript: void(0);" class="d-inline-block">
                          <img :src="`${project.users[0]}`" class="rounded-circle avatar-xs" alt />
                        </BLink>
                      </div>
                      <div class="avatar-group-item" v-if="project.users[1]">
                        <BLink href="javascript: void(0);" class="d-inline-block">
                          <img :src="`${project.users[1]}`" class="rounded-circle avatar-xs" alt />
                        </BLink>
                      </div>
                    </div>
                  </BTd>
                  <BTd>
                    <BDropdown class="card-drop" variant="white" menu-class="dropdown-menu-end" right toggle-class="p-0">
                      <template v-slot:button-content>
                        <i class="mdi mdi-dots-horizontal font-size-18"></i>
                      </template>
                      <BDropdownItem href="javascript: void(0);">Action</BDropdownItem>
                      <BDropdownItem href="javascript: void(0);">Another action</BDropdownItem>
                      <BDropdownItem href="javascript: void(0);">Something else here</BDropdownItem>
                    </BDropdown>
                  </BTd>
                </BTr>
              </BTbody>
            </BTableSimple>
          </div>
        </div>
      </BCol>
    </BRow>

    <BRow>
      <BCol cols="12">
        <div class="text-center my-3">
          <BLink href="javascript:void(0);" class="text-success">
            <i class="bx bx-loader bx-spin font-size-18 align-middle me-2"></i>
            Load more
          </BLink>
        </div>
      </BCol>
    </BRow>
  </Layout>
</template>

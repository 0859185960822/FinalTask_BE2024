<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import Pagination from "@/components/common/pagination"
import { projectData } from "./data-projects";

/**
 * Projects-grid component
 */
export default {
  components: {
    Layout,
    PageHeader,
    Pagination
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
    <PageHeader title="Projects Grid" pageTitle="Projects" />

    <BRow>
      <BCol xl="4" sm="6" v-for="grid in projectData" :key="grid.id">
        <BCard no-body>
          <BCardBody>
            <div class="d-flex">
              <div class="avatar-md me-4">
                <span class="avatar-title rounded-circle bg-light text-danger font-size-16">
                  <img :src="`${grid.image}`" alt height="30" />
                </span>
              </div>

              <div class="flex-grow-1 overflow-hidden">
                <h5 class="text-truncate font-size-15">
                  <BLink href="javascript: void(0);" class="text-dark">{{
                    grid.text
                  }}</BLink>
                </h5>
                <p class="text-muted mb-4">{{ grid.subtext }}</p>
                <div class="avatar-group">
                  <div class="avatar-group-item">
                    <BLink href="javascript: void(0);" class="d-inline-block">
                      <img :src="`${grid.users[0]}`" class="rounded-circle avatar-xs" alt />
                    </BLink>
                  </div>
                  <div class="avatar-group-item" v-if="grid.users[1]">
                    <BLink href="javascript: void(0);" class="d-inline-block">
                      <img :src="`${grid.users[1]}`" class="rounded-circle avatar-xs" alt />
                    </BLink>
                  </div>
                  <div class="avatar-group-item" v-if="grid.users[2]">
                    <BLink href="javascript: void(0);" class="d-inline-block">
                      <img :src="`${grid.users[2]}`" class="rounded-circle avatar-xs" alt />
                    </BLink>
                  </div>
                </div>
              </div>
            </div>
          </BCardBody>
          <div class="px-4 py-3 border-top">
            <ul class="list-inline mb-0">
              <li class="list-inline-item me-3">
                <span class="badge" :class="{
                  'bg-success': `${grid.status}` === 'Completed',
                  'bg-warning': `${grid.status}` === 'Pending',
                  'bg-danger': `${grid.status}` === 'Delay',
                }">{{ grid.status }}</span>
              </li>
              <li v-b-tooltip.hover.top class="list-inline-item me-3" title="Due Date">
                <i class="bx bx-calendar me-1"></i>
                {{ grid.date }}
              </li>
              <li v-b-tooltip.hover.top class="list-inline-item me-3" title="Comments">
                <i class="bx bx-comment-dots me-1"></i>
                {{ grid.comment }}
              </li>
            </ul>
          </div>
        </BCard>
      </BCol>
    </BRow>
    <BRow>
      <BCol lg="12">
        <Pagination />
      </BCol>
    </BRow>
  </Layout>
</template>

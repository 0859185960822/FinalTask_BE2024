<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import Pagination from "@/components/common/pagination"
import { userGridData } from "./data-user";

/**
 * Contacts-list component
 */
export default {
  components: { Layout, PageHeader, Pagination },
  data() {
    return {
      userGridData: userGridData,
    };
  }
};
</script>

<template>
  <Layout>
    <PageHeader title="Users List" pageTitle="Contacts" />

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <BCardBody>
            <div class="table-responsive">
              <BTableSimple class="align-middle table-nowrap table-hover">
                <BThead class="table-light">
                  <BTr>
                    <BTh scope="col" style="width: 70px;">#</BTh>
                    <BTh scope="col">Name</BTh>
                    <BTh scope="col">Email</BTh>
                    <BTh scope="col">Tags</BTh>
                    <BTh scope="col">Projects</BTh>
                    <BTh scope="col">Action</BTh>
                  </BTr>
                </BThead>
                <BTbody>
                  <BTr v-for="list in userGridData" :key="list.id">
                    <BTd>
                      <div v-if="!list.image" class="avatar-xs">

                        <span class="avatar-title rounded-circle">{{ list.name.charAt(0) }}</span>
                      </div>
                      <div v-if="list.image">
                        <img class="rounded-circle avatar-xs" :src="`${list.image}`" alt />
                      </div>
                    </BTd>
                    <BTd>
                      <h5 class="font-size-14 mb-1">
                        <BLink href="#" class="text-dark">{{ list.name }}</BLink>
                      </h5>
                      <p class="text-muted mb-0">{{ list.designation }}</p>
                    </BTd>
                    <BTd>{{ list.email }}</BTd>
                    <BTd>
                      <div>
                        <BLink href="javascript: void(0);" class="badge badge-soft-primary font-size-11 m-1">{{
                          list.projects[0] }}</BLink>
                        <BLink href="javascript: void(0);" class="badge badge-soft-primary font-size-11 m-1">{{
                          list.projects[1] }}</BLink>
                        <BLink href="javascript: void(0);" class="badge badge-soft-primary font-size-11 m-1">{{
                          list.projects[2] }}</BLink>
                      </div>
                    </BTd>
                    <BTd>125</BTd>
                    <BTd>
                      <ul class="list-inline font-size-20 contact-links mb-0">
                        <li class="list-inline-item px-2">
                          <BLink v-b-tooltip.hover title="Message">
                            <i class="bx bx-message-square-dots"></i>
                          </BLink>
                        </li>
                        <li class="list-inline-item px-2">
                          <BLink v-b-tooltip.hover title="Profile">
                            <i class="bx bx-user-circle"></i>
                          </BLink>
                        </li>
                      </ul>
                    </BTd>
                  </BTr>
                </BTbody>
              </BTableSimple>
            </div>
            <BRow>
              <BCol lg="12">
                <Pagination />
              </BCol>
            </BRow>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>
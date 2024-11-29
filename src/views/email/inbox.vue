<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import Toolbar from "./toolbar";
import Sidepanel from "./sidepanel";
import Pagination from "@/components/common/pagination"
import { emailData } from "./data-inbox";

/**
 * Email-inbox component
 */
export default {
  components: {
    Layout,
    PageHeader,
    Toolbar,
    Sidepanel,
    Pagination
  },
  data() {
    return {
      emailData: emailData,
      paginatedEmailData: emailData,

      // page number
      currentPage: 1,
      // default page size
      perPage: 15,
      emailIds: [],
      // start and end index
      startIndex: 1,
      endIndex: 15
    };
  },
  computed: {
    rows() {
      return this.emailData.length;
    }
  },
  created() {
    this.startIndex = 0;
    this.endIndex = this.perPage;
    this.paginatedEmailData = this.emailData.slice(
      this.startIndex,
      this.endIndex
    );
  },
  methods: {
    onPageChange() {
      this.startIndex = (this.currentPage - 1) * this.perPage;
      this.endIndex = (this.currentPage - 1) * this.perPage + this.perPage;

      this.paginatedEmailData = this.emailData.slice(
        this.startIndex,
        this.endIndex
      );
    }
  }
};
</script>

<template>
  <Layout>
    <PageHeader title="Inbox" pageTitle="Email" />

    <BRow>
      <BCol cols="12">
        <Sidepanel />
        <div class="email-rightbar mb-3">
          <BCard no-body>
            <div class="btn-toolbar p-3">
              <Toolbar />
            </div>
            <div class="mt-3">
              <ul class="message-list">
                <router-link custom v-slot="{ navigate }" v-for="(email, index) in paginatedEmailData" :key="index" :class="{ 'unread': email.unread === true }" :to="`/email/reademail/${email.id}`">
                  <li @click="navigate" @keypress.enter="navigate">
                    <div class="col-mail col-mail-1">
                      <div class="checkbox-wrapper-mail">
                        <input :id="`chk-${index}`" type="checkbox" />
                        <label :for="`chk-${index}`"></label>
                      </div>
                      <span :class="`star-toggle far fa-star text-${email.text}`"></span>
                      <BLink class="title">{{ email.title }}</BLink>
                    </div>
                    <div class="col-mail col-mail-2">
                      <router-link to="/email/reademail/1" class="subject">{{ email.subject }}</router-link>
                      <div class="date">{{ email.date }}</div>
                    </div>
                  </li>
                </router-link>
              </ul>
            </div>
          </BCard>
          <BRow class="justify-content-md-between align-items-md-center">
            <BCol xl="7">Showing {{ startIndex }} - {{ endIndex }} of {{ rows }}</BCol>
            <BCol xl="5">
              <div class="text-md-right float-end mt-2 pagination-rounded">
                <Pagination />
              </div>
            </BCol>
          </BRow>
        </div>
      </BCol>
    </BRow>
  </Layout>
</template>
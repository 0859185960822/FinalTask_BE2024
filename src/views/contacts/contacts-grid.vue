<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

import { required, helpers } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";

import { userGridData } from "./data-user";

/**
 * Contacts-grid component
 */
export default {
  setup() {
    return { v$: useVuelidate() };
  },
  components: { Layout, PageHeader },
  data() {
    return {
      userGridData: userGridData,
      showModal: false,
      submitted: false,
      users: {
        name: "",
        designation: "",
        email: "",
      },
      value1: null,
      options: [
        "Photoshop",
        "illustrator",
        "Html",
        "Css",
        "Php",
        "Java",
        "Python",
        "Ruby",
      ],
    };
  },

  validations: {
    users: {
      name: {
        required: helpers.withMessage("Name is required", required),
      },
      designation: {
        required: helpers.withMessage("Designation is required", required),
      },
      email: { required: helpers.withMessage("Email is required", required) },
    },
  },
  methods: {
    /**
     * Modal form submit
     */
    // eslint-disable-next-line no-unused-vars
    handleSubmit(e) {
      this.submitted = true;

      // stop here if form is invalid
      this.v$.$touch();
      if (this.v$.$invalid) {
        return;
      } else {
        this.userGridData.push({
          id: this.userGridData.length + 1,
          name: this.users.name,
          designation: this.users.designation,
          projects: this.value1,
          email: this.users.email,
        });
        this.showModal = false;
        this.users = {};
        this.value1 = [];
      }
      this.submitted = false;
    },
  },
};
</script>

<template>
  <Layout>
    <PageHeader title="Users Grid" pageTitle="Contacts" />

    <BRow>
      <BCol xl="3" sm="6" v-for="user in userGridData" :key="user.id">
        <BCard no-body class="text-center">
          <BCardBody>
            <div v-if="!user.image" class="avatar-sm mx-auto mb-4">
              <span :class="` avatar-title
                  rounded-circle
                  bg-${user.imageclass}-subtle
                  text-${user.imageclass}
                  font-size-16`
                ">{{ user.name.charAt(0) }}</span>
            </div>
            <div v-if="user.image" class="mb-4">
              <img class="rounded-circle avatar-sm" :src="`${user.image}`" alt />
            </div>
            <h5 class="font-size-15 mb-1">
              <BLink href="javascript: void(0);" class="text-dark">{{
                user.name
              }}</BLink>
            </h5>
            <p class="text-muted">{{ user.designation }}</p>

            <div>
              <BLink href="javascript: void(0);" class="badge bg-primary font-size-11 m-1">{{ user.projects[0] }}</BLink>
              <BLink href="javascript: void(0);" class="badge bg-primary font-size-11 m-1 ms-2">{{ user.projects[1] }}</BLink>
              <BLink href="javascript: void(0);" class="badge bg-primary font-size-11 m-1 ms-2">{{ user.projects[2] }}</BLink>
            </div>
          </BCardBody>
          <BCardFooter class="bg-transparent border-top">
            <div class="contact-links d-flex font-size-20">
              <div class="flex-fill">
                <BLink v-b-tooltip.hover.top title="Message" href="javascript: void(0);">
                  <i class="bx bx-message-square-dots"></i>
                </BLink>
              </div>
              <div class="flex-fill">
                <BLink v-b-tooltip.hover.top title="Projects" href="javascript: void(0);">
                  <i class="bx bx-pie-chart-alt"></i>
                </BLink>
              </div>
              <div class="flex-fill">
                <BLink v-b-tooltip.hover.top title="Profile" href="javascript: void(0);">
                  <i class="bx bx-user-circle"></i>
                </BLink>
              </div>
            </div>
          </BCardFooter>
        </BCard>
      </BCol>
    </BRow>
    <BRow>
      <BCol cols="12">
        <div class="text-center my-3">
          <BLink href="javascript:void(0);" class="text-success">
            <i class="bx bx-hourglass bx-spin me-2"></i> Load more
          </BLink>
        </div>
      </BCol>
    </BRow>
  </Layout>
</template>
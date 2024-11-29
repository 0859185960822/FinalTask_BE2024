<script>
import { ref } from "vue";
import useVuelidate from "@vuelidate/core";

import DropZone from "@/components/widgets/dropZone";
import datepicker from "vue3-datepicker";

import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

/**
 * Projects-create component
 */
export default {
  setup() {
    let dropzoneFile = ref("");
    const drop = (e) => {
      dropzoneFile.value = e.dataTransfer.files[0];
    };
    const selectedFile = () => {
      dropzoneFile.value = document.querySelector(".dropzoneFile").files[0];
    };
    return { dropzoneFile, drop, selectedFile, v$: useVuelidate() };
  },
  components: {
    DropZone,
    datepicker,
    Layout,
    PageHeader,
  },
  data() {
    return {

      dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 150,
        maxFilesize: 0.5,
        headers: { "My-Awesome-Header": "header value" },
      },
      daterange: ref(new Date()),
    };
  },
};
</script>

<template>
  <Layout>
    <PageHeader title="Create New" pageTitle="Project" />

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Create New Project</BCardTitle>
            <BForm>
              <div class="form-group row mb-4">
                <label for="projectname" class="col-form-label col-lg-2">Project Name</label>
                <div class="col-lg-10">
                  <input id="projectname" name="projectname" type="text" class="form-control" placeholder="Enter Project Name..." />
                </div>
              </div>
              <div class="form-group row mb-4">
                <label for="projectdesc" class="col-form-label col-lg-2">Project Description</label>
                <div class="col-lg-10">
                  <BFormTextarea id="projectdesc" class="form-control" rows="3" placeholder="Enter Project Description..."></BFormTextarea>
                </div>
              </div>

              <div class="form-group row mb-4">
                <label class="col-form-label col-lg-2">Project Date</label>
                <div class="col-lg-10">
                  <datepicker class="form-control" v-model="daterange" range append-to-body lang="en" confirm></datepicker>
                </div>
              </div>

              <div class="form-group row mb-4">
                <label for="projectbudget" class="col-form-label col-lg-2">Budget</label>
                <div class="col-lg-10">
                  <input id="projectbudget" name="projectbudget" type="text" placeholder="Enter Project Budget..." class="form-control" />
                </div>
              </div>
            </BForm>
            <BRow class="mb-4">
              <label class="col-form-label col-lg-2">Attached Files</label>
              <BCol lg="10">
                <DropZone @drop.prevent="drop" @change="selectedFile" />
                <span class="file-info">File: {{ dropzoneFile.name }}</span>
              </BCol>
            </BRow>
            <BRow class="justify-content-end">
              <BCol lg="10">
                <BButton variant="primary">
                  Create Project
                </BButton>
              </BCol>
            </BRow>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>
<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import pagination from "@/components/common/pagination";

import { jobapply } from "@/views/jobs/jobapplyData";

/**
 * Starter component
 */
export default {
  components: { Layout, PageHeader, pagination },
  data() {
    return {
      jobapply,
      showModal: false
    };
  },
};
</script>
<template>
  <Layout>
    <PageHeader title="Job Apply" pageTitle="Jobs" />

    <BRow>
      <BCol lg="12"> 
        <BCard no-body>
          <BCardBody class="border-bottom">
            <div class="d-flex align-items-center">
              <BCardTitle class="mb-0 flex-grow-1">Applied Jobs</BCardTitle>

              <div class="flex-shrink-0">
                <select class="form-select" aria-label="Default select example">
                  <option value="Today" selected>Today</option>
                  <option value="1 MonBThly">1 MonBTh</option>
                  <option value="6 MonBTh">6 MonBTh</option>
                  <option value="1 Years">1 Year</option>
                </select>
              </div>
            </div>
          </BCardBody>
          <BCardBody>
            <div class="table-responsive">
              <BTableSimple class="table-bordered align-middle nowrap">
                <BThead>
                  <BTr>
                    <BTh scope="col">No</BTh>
                    <BTh scope="col">Job Title</BTh>
                    <BTh scope="col">Company Name</BTh>
                    <BTh scope="col">Type</BTh>
                    <BTh scope="col">Apply Date</BTh>
                    <BTh scope="col">Status</BTh>
                    <BTh scope="col">Action</BTh>
                  </BTr>
                </BThead>

                <BTbody>
                  <BTr v-for="(job, index) in jobapply" :key="index">
                    <BTd>{{ index + 1 }}</BTd>
                    <BTd>{{ job.title }}</BTd>
                    <BTd>{{ job.company }}</BTd>
                    <BTd>
                      <span v-if="job.type === 'Full Time'" class="badge badge-soft-success"> {{ job.type }} </span>
                      <span v-if="job.type === 'Part Time'" class="badge badge-soft-danger"> {{ job.type }} </span>
                      <span v-if="job.type === 'Freelance'" class="badge badge-soft-info"> {{ job.type }} </span>
                      <span v-if="job.type === 'Internship'" class="badge badge-soft-warning"> {{ job.type }} </span>
                    </BTd>
                    <BTd>{{ job.datePosted }}</BTd>
                    <BTd>
                      <span v-if="job.status === 'Active'" class="badge bg-success"> {{ job.status }} </span>
                      <span v-if="job.status === 'New'" class="badge bg-info"> {{ job.status }} </span>
                      <span v-if="job.status === 'Close'" class="badge bg-danger">{{ job.status }}</span>
                    </BTd>
                    <td>
                      <ul class="list-unstyled hstack gap-1 mb-0">
                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                          <router-link to="/jobs/job-details" class="btn btn-sm btn-soft-primary"><i class="mdi mdi-eye-outline"></i></router-link>
                        </li>
                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
                          <BLink href="#jobDelete" @click="showModal = !showModal" class="btn btn-sm btn-soft-danger"><i class="mdi mdi-delete-outline"></i></BLink>
                        </li>
                      </ul>
                    </td>
                  </BTr>
                </BTbody>
              </BTableSimple>
            </div>

            <BRow class="justify-content-between align-items-center">
              <BCol class="col-auto me-auto">
                <p class="text-muted mb-0">Showing <b>1</b> to <b>12</b> of <b>45</b> entries</p>
              </BCol>
              <BCol class="col-auto">
                <BCard no-body class="d-inline-block mb-0">
                  <BCardBody class="p-0">
                    <nav aria-label="Page navigation example" class="mb-0">
                      <pagination :pills="false" />
                    </nav>
                  </BCardBody>
                </BCard>
              </BCol>
            </BRow>
          </BCardBody>
        </BCard>
      </BCol>

    </BRow>
    <BModal v-model="showModal" title-class="text-black font-18" body-class="px-4 py-5 text-center" hide-header hide-footer class="v-modal-custom" size="sm" centered>

      <BButton type="button" class="btn-close position-absolute end-0 top-0 m-3" @click="showModal = !showModal"></BButton>

      <div class="avatar-sm mb-4 mx-auto">
        <div class="avatar-title bg-primary text-primary bg-opacity-10 font-size-20 rounded-3">
          <i class="mdi mdi-trash-can-outline"></i>
        </div>
      </div>
      <p class="text-muted font-size-16 mb-4">Are you sure you want to permanently erase BThe job.</p>

      <div class="hstack gap-2 justify-content-center mb-0">
        <BButton variant="danger" @click="showModal = !showModal">Delete Now</BButton>
        <BButton variant="secondary" type="button" class="btn btn-secondary" @click="showModal = !showModal">Close</BButton>
      </div>
    </BModal>
  </Layout>
</template>
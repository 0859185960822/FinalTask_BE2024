<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import pagination from "@/components/common/pagination";
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

import { jobslist } from '@/views/jobs/joblistData';

/**
 * Starter component
 */
export default {
  components: { Layout, PageHeader, flatPickr, pagination },
  data() {
    return {
      jobslist,
      value1: null,
      status1: null,

      searchQuery: null,

      defaultDateConfig: {
        dateFormat: "d M, Y",
        defaultDate: "25 Dec, 2021",

      },
      page: 1,
      perPage: 7,
      resultQuery: jobslist
    }
  },

  watch: {
    searchQuery(newVal) {
      if (newVal) {
        const search = newVal.toLowerCase();
        this.resultQuery = this.displayedPosts.filter((data) => {
          return (
            data.jobTitle.toLowerCase().includes(search) ||
            data.location.toLowerCase().includes(search) ||
            data.company.toLowerCase().includes(search)
          );
        });
      } else {
        this.resultQuery = this.displayedPosts
      }

    }
  },
  computed: {
    displayedPosts() {
      return this.jobslist
    },
  },
  methods: {
    paginate(jobgrid) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return jobgrid.slice(from, to);
    }
  }
};
</script>
<template>
  <Layout>
    <PageHeader title="Jobs List" pageTitle="Jobs" />

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <BCardBody class="border-bottom">
            <div class="d-flex align-items-center">
              <BCardTitle class="mb-0 flex-grow-1">Jobs Lists</BCardTitle>

              <div class="flex-shrink-0">
                <BLink href="#!" class="btn btn-primary me-1">Add New Job</BLink>
                <BLink href="#!" class="btn btn-light me-1"><i class="mdi mdi-refresh"></i></BLink>

                <BDropdown variant="success" class="job-list-dropdown">
                  <template #button-content><i class="mdi mdi-dots-vertical"></i>
                  </template>
                  <BDropdownItem href="#">Action</BDropdownItem>
                  <BDropdownItem href="#">Another action</BDropdownItem>
                  <BDropdownItem href="#">Something else here</BDropdownItem>
                </BDropdown>
              </div>
            </div>
          </BCardBody>

          <BCardBody class="border-bottom">
            <BRow class="g-3">
              <BCol xxl="4" lg="6">
                <BFormInput type="text" class="form-control search" placeholder="Search for ..." v-model="searchQuery" />
              </BCol>
              
              <BCol xxl="2" lg="6">
                <select v-model="status1" :close-on-select="true" :searchable="true" placeholder="Status" :create-option="true" class="form-select" id="idStatus" aria-label="Default select example">
                  <option value="all">Status</option>
                  <option value="Active">Active</option>
                  <option value="New">New</option>
                  <option value="Close">Close</option>
                </select>
              </BCol>

              <BCol xxl="2" lg="6">
                <select id="idType" aria-label="Default select example" v-model="value1" :close-on-select="true" :searchable="true" :create-option="true" placeholder="Select Type"  class="form-select">
                  <option value="all">Select Type</option>
                  <option value="Full Time">Full Time</option>
                  <option value="Part Time">Part Time</option>
                </select>
              </BCol>

              <BCol xxl="2" lg="6">
                <flat-pickr v-model="date6" :config="defaultDateConfig" class="form-control" placeholder="Select date"></flat-pickr>
              </BCol>

              <BCol xxl="2" lg="6">
                <BButton variant="soft-secondary" @click="SearchData" class="w-100"> <i class="mdi mdi-filter-outline align-middle"></i>
                  Filter
                </BButton>
              </BCol>
            </BRow>
          </BCardBody>

          <BCardBody>
            <div class="table-responsive">
              <BTableSimple class="align-middle dt-responsive nowrap w-100 table-check" id="job-list">
                <BThead>
                  <BTr>
                    <BTh scope="col">No</BTh>
                    <BTh scope="col">Job Title</BTh>
                    <BTh scope="col">Company Name</BTh>
                    <BTh scope="col">Location</BTh>
                    <BTh scope="col">Experience</BTh>
                    <BTh scope="col">Position</BTh>
                    <BTh scope="col">Type</BTh>
                    <BTh scope="col">Posted Date</BTh>
                    <BTh scope="col">Last Date</BTh>
                    <BTh scope="col">Status</BTh>
                    <BTh scope="col">Action</BTh>
                  </BTr>
                </BThead>

                <BTbody>
                  <BTr v-for="job in resultQuery" :key="job.id">
                    <BTh scope="row"> {{ job.id }} </BTh>
                    <BTd> {{ job.jobTitle }} </BTd>
                    <BTd> {{ job.company }} </BTd>
                    <BTd>{{ job.location }}</BTd>
                    <BTd> {{ job.experience }} </BTd>
                    <BTd> {{ job.positionsAvailable }} </BTd>
                    <BTd>
                      <span v-if="job.employmentType === 'Full Time'" class="badge badge-soft-success"> {{ job.employmentType }} </span>
                      <span v-if="job.employmentType === 'Part Time'" class="badge badge-soft-danger"> {{ job.employmentType }} </span>
                    </BTd>
                    <BTd> {{ job.startDate }} </BTd>
                    <BTd> {{ job.endDate }} </BTd>
                    <BTd>
                      <span v-if="job.status === 'Active'" class="badge bg-success"> {{ job.status }} </span>
                      <span v-if="job.status === 'New'" class="badge bg-info"> {{ job.status }} </span>
                      <span v-if="job.status === 'Close'" class="badge bg-danger">{{ job.status }}</span>
                    </BTd>
                    <BTd>
                      <ul class="list-unstyled hstack gap-1 mb-0">
                        <li data-bs-toggle="tooltip" data-bs-placement="top" aria-label="View">
                          <router-link to="/jobs/job-details" class="btn btn-sm btn-soft-primary"><i class="mdi mdi-eye-outline"></i></router-link>
                        </li>
                        <li data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Edit">
                          <Blink href="#" class="btn btn-sm btn-soft-info"><i class="mdi mdi-pencil-outline"></i></Blink>
                        </li>
                        <li data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Delete">
                          <Blink href="#jobDelete" data-bs-toggle="modal" class="btn btn-sm btn-soft-danger"><i class="mdi mdi-delete-outline"></i></Blink>
                        </li>
                      </ul>
                    </BTd>
                  </BTr>
                </BTbody>
              </BTableSimple>
            </div>

            <BRow class="justify-content-between align-items-center">
              <BCol class="col-auto me-auto">
                <p class="text-muted mb-0">Showing <b>1</b> to <b>12</b> of <b>45</b> entries</p>
              </BCol>
              <BCol class="col-auto">
                <BCard no-body class="d-inline-block ms-auto mb-0">
                  <BCardBody class="p-2">
                    <nav aria-label="Page navigation example" class="mb-0">
                      <pagination />
                    </nav>
                  </BCardBody>
                </BCard>
              </BCol>
            </BRow>

          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>
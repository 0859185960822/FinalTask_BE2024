<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import pagination from "@/components/common/pagination";
// import { ref } from "vue";

import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

import { jobData } from "@/views/jobs/jobgridData"
/**
 * Starter component
 */
export default {
    components: { Layout, PageHeader, flatPickr, pagination },
    data() {
        return {
            jobData,
            searchQuery: null,

            defaultDateConfig: {
                dateFormat: "d M, Y",
                defaultDate: "25 Dec, 2021",

            },
            page: 1,
            perPage: 7,
            resultQuery: jobData
        };
    },
    watch: {
        searchQuery(newVal) {
            if (newVal) {
                const search = newVal.toLowerCase();
                this.resultQuery = this.displayedPosts.filter((data) => {
                    return (
                        data.title.toLowerCase().includes(search) ||
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
            return this.jobData
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
        <PageHeader title="Jobs Grid" pageTitle="Jobs" />

        <BRow>
            <BCol lg="12">
                <BCard no-body class="job-filter">
                    <BCardBody class="p-3">
                        <BForm action="javascript:void(0);">
                            <BRow class="g-3">
                                <BCol xxl="4" lg="4">
                                    <div class="position-relative">
                                        <BFormInput type="text" class="form-control" id="searchJob" autocomplete="off" placeholder="Search your job" v-model="searchQuery" />
                                    </div>
                                </BCol>

                                <BCol xxl="2" lg="4">
                                    <div class="position-relative">
                                        <BFormInput type="text" class="form-control" id="locationInput" autocomplete="off" placeholder="San Francisco, LA" />
                                    </div>
                                </BCol>

                                <BCol xxl="2" lg="4">
                                    <div class="position-relative">
                                        <BFormInput type="text" class="form-control" id="jobCategories" autocomplete="off" placeholder="Job Categories" />
                                    </div>
                                </BCol>

                                <BCol xxl="2" lg="6">
                                    <div class="position-relative">
                                        <flat-pickr v-model="date6" :config="defaultDateConfig" class="form-control" placeholder="Select date"></flat-pickr>
                                    </div>
                                </BCol>

                                <BCol xxl="2" lg="6">
                                    <div class="position-relative h-100 hstack gap-3">
                                        <BButton variant="primary" type="submit" class="h-100 w-100"><i class="bx bx-search-alt align-middle"></i> Find Jobs</BButton>
                                        <BLink v-b-toggle.collapseExample data-bs-toggle="collapse" class="btn btn-secondary h-100 w-100"><i class="bx bx-filter-alt align-middle"></i> Advance</BLink>
                                    </div>
                                </BCol>

                                <BCollapse id="collapseExample" class="mt-4">
                                    <div class="pt-4">
                                        <BRow class="g-3">
                                            <BCol xxl="4" lg="6">
                                                <BFormCheckboxGroup>
                                                    <label for="experience" class="form-label d-flex">Experience</label>
                                                    <BFormCheckbox id="inlineCheckbox1" value="option1">All</BFormCheckbox>
                                                    <BFormCheckbox id="inlineCheckbox2" value="option1">Fresher</BFormCheckbox>
                                                    <BFormCheckbox id="inlineCheckbox3" value="option2">1-2</BFormCheckbox>
                                                    <BFormCheckbox id="inlineCheckbox4" value="option2">2-3</BFormCheckbox>
                                                    <BFormCheckbox id="inlineCheckbox5" value="option3">4+</BFormCheckbox>
                                                </BFormCheckboxGroup>
                                            </BCol>
                                            <BCol xxl="4" lg="6">
                                                <BFormCheckboxGroup>
                                                    <label for="jobType" class="form-label d-flex">Job Type</label>
                                                    <BFormCheckbox id="inlineCheckbox6" value="option3">Full Time</BFormCheckbox>
                                                    <BFormCheckbox id="inlineCheckbox7" value="option3">Part Time</BFormCheckbox>
                                                    <BFormCheckbox id="inlineCheckbox8" value="option3">Freelance</BFormCheckbox>
                                                    <BFormCheckbox id="inlineCheckbox9" value="option3">Internship</BFormCheckbox>
                                                </BFormCheckboxGroup>
                                            </BCol>
                                            <BCol xxl="4" lg="4">
                                                <div class="position-relative form-group">
                                                    <label for="qualificationInput" class="form-label">Qualification</label>
                                                    <input type="text" class="form-control" id="qualificationInput" autocomplete="off" placeholder="Qualification">
                                                    <i class="ri-government-line filter-icon"></i>
                                                </div>
                                            </BCol>
                                        </BRow>
                                    </div>
                                </BCollapse>
                            </BRow>
                        </BForm>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow id="jobgrid-list">

            <BCol xl="3" md="6" v-for="job in resultQuery" :key="job.id">
                <BCard no-body>
                    <BCardBody>
                        <!-- Job details using data from the JSON object -->
                        <div class="favorite-icon">
                            <BLink href="javascript:void(0)"><i class="uil uil-heart-alt fs-18"></i></BLink>
                        </div>
                        <img :src="job.imageUrl" alt="" height="50" class="mb-3">
                        <h5 class="fs-17 mb-2">
                            <BLink href="javascript:void(0);" class="text-dark">{{ job.title }}</BLink> <small class="text-muted fw-normal">{{ job.experience }}</small>
                        </h5>
                        <ul class="list-inline mb-0">
                            <li class="list-inline-item">
                                <p class="text-muted fs-14 mb-1">{{ job.company }}</p>
                            </li>
                            <li class="list-inline-item">
                                <p class="text-muted fs-14 mb-0"><i class="mdi mdi-map-marker"></i> {{ job.location }}</p>
                            </li>
                            <li class="list-inline-item">
                                <p class="text-muted fs-14 mb-0"><i class="uil uil-wallet"></i> {{ job.salary }}</p>
                            </li>
                        </ul>
                        <div class="mt-3 hstack gap-2">
                            <span class="badge rounded-1 badge-soft-success">{{ job.employmentType }}</span>
                            <span class="badge rounded-1 badge-soft-warning">{{ job.urgency }}</span>
                            <span class="badge rounded-1 badge-soft-info">{{ job.privacy }}</span>
                        </div>
                        <div class="mt-4 hstack gap-2">
                            <BLink href="#!" data-bs-toggle="modal" class="btn btn-soft-success w-100">View Profile</BLink>
                            <Blink href="#applyJobs" data-bs-toggle="modal" class="btn btn-soft-primary w-100">Apply Now</Blink>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>

        </BRow>

        <BRow class="justify-content-between align-items-center mb-3">
            <BCol class="col-auto me-auto">
                <p class="text-muted mb-0">Showing <b>1</b> to <b>12</b> of <b>45</b> entries</p>
            </BCol>
            <BCol class="col-auto">
                <BCard no-body class="d-inline-block ms-auto mb-0">
                    <BCardBody class="p-0">
                        <nav aria-label="Page navigation example" class="mb-0">
                            <pagination />
                        </nav>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

    </Layout>
</template>
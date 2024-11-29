<script>
import Layout from "../../../layouts/main";
import PageHeader from "@/components/page-header";

import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

import { candidatesData } from "@/views/jobs/candidate/candidateData";

/**
 * Starter component
 */
export default {
    components: { Layout, PageHeader, flatPickr },
    data() {
        return {
            candidatesData,

            DateConfig: {
                dateFormat: "d M, Y",
                defaultDate: "25 Dec, 2021",
            },

            page: 1,
            perPage: 7,
            resultQuery: candidatesData,
            searchQuery: ""
        }
    },
    watch: {
        searchQuery(newVal) {
            if (newVal) {
                const search = newVal.toLowerCase();
                this.resultQuery = this.displayedPosts.filter((data) => {
                    return (
                        data.name.toLowerCase().includes(search) ||
                        data.location.toLowerCase().includes(search) ||
                        data.jobType.toLowerCase().includes(search)
                    );
                });
            } else {
                this.resultQuery = this.displayedPosts
            }

        }
    },
    computed: {
        displayedPosts() {
            return this.candidatesData
        },
    },
    methods: {
        paginate(jobgrid) {
            let page = this.page;
            let perPage = this.perPage;
            let from = page * perPage - perPage;
            let to = page * perPage;
            return jobgrid.slice(from, to);
        },

        getBadgeClass(jobType) {
            // Define classes for badge based on job type
            return {
                "badge-soft-success": jobType === "Full Time",
                "badge-soft-info": jobType === "Freelance",
                "badge-soft-danger": jobType === "Part Time",
                "badge-soft-warning": jobType === "Internship",
            };
        },
    },
};
</script>
<template>
    <Layout>
        <PageHeader title="Candidate List" pageTitle="Jobs" />

        <BRow>
            <BCol lg="12">
                <BCard no-body class="job-filter">
                    <BCardBody class="p-3">
                        <BForm action="javascript:void(0);">
                            <BRow class="g-3">
                                <BCol xxl="4" lg="4">
                                    <div class="position-relative">
                                        <BFormInput type="text" class="form-control" id="searchJob" autocomplete="off" placeholder="Search your candidate" v-model="searchQuery" />
                                    </div>
                                </BCol>

                                <BCol xxl="2" lg="4">
                                    <div class="position-relative">
                                        <BFormInput type="text" class="form-control" id="locationInput" autocomplete="off" placeholder="San Francisco, LA" />
                                    </div>
                                </BCol>

                                <BCol xxl="2" lg="4">
                                    <div class="position-relative">
                                        <select class="form-select" id="idType" aria-label="Default select example">
                                            <option value="all">Select for</option>
                                            <option value="Freelance">Freelance</option>
                                            <option value="Full Time">Full Time</option>
                                            <option value="Part Time">Part Time</option>
                                            <option value="Internship">Internship</option>
                                        </select>
                                    </div>
                                </BCol>

                                <BCol xxl="2" lg="6">
                                    <div class="position-relative">
                                        <flat-pickr v-model="date6" :config="DateConfig" class="form-control" placeholder="Select date"></flat-pickr>
                                    </div>
                                </BCol>

                                <BCol xxl="2" lg="6">
                                    <div class="position-relative h-100 hstack gap-3">
                                        <BButton variant="primary" type="submit" class="h-100 w-100"><i class="bx bx-search-alt align-middle"></i> Find Jobs</BButton>
                                        <BLink v-b-toggle.collapseExample data-bs-toggle="collapse" class="btn btn-secondary h-100 w-100"><i class="bx bx-filter-alt align-middle"></i> Advance</BLink>
                                    </div>
                                </BCol>

                                <BCollapse class="collapse" id="collapseExample">
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
                                                <div class="position-relative">
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

        <BRow id="candidate-list">
            <BCol xl="3" md="6" v-for="candidate in resultQuery" :key="candidate.id">
                <BCard no-body>
                    <BCardBody>
                        <div class="d-flex align-start mb-3">
                            <div class="flex-grow-1">
                                <span class="badge" :class="getBadgeClass(candidate.jobType)">{{ candidate.jobType }}</span>
                            </div>
                            <BButton variant="light" type="button" class="btn-sm like-btn" data-bs-toggle="button"><i class="bx bx-heart"></i></BButton>
                        </div>
                        <div class="text-center mb-3">
                            <img :src="candidate.image" alt="" class="avatar-sm rounded-circle" />
                            <h6 class="font-size-15 mt-3 mb-1">{{ candidate.name }}</h6>
                            <p class="mb-0 text-muted">{{ candidate.jobTitle }}</p>
                        </div>
                        <div class="d-flex mb-3 justify-content-center gap-2 text-muted">
                            <div>
                                <i class='bx bx-map align-middle text-primary'></i> {{ candidate.location }}
                            </div>
                            <p class="mb-0 text-center"><i class='bx bx-money align-middle text-primary'></i>{{ candidate.hourlyRate }}</p>
                        </div>
                        <div class="hstack gap-2 justify-content-center">
                            <span class="badge badge-soft-secondary" v-for="skill in candidate.skills" :key="skill">{{ skill }}</span>
                        </div>

                        <div class="mt-4 pt-1">
                            <router-link to="/jobs/candidate/overview" class="btn btn-soft-primary d-block">View Profile</router-link>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>

<!-- .jobs-categories a {
    color: var(--bs-body-color);
    -webkit-transition: all .5s ease;
    transition: all .5s ease;
} -->
<script>
import { ref } from "vue";
import Datepicker from "vue3-datepicker";

import Layout from "../../../layouts/main";
import PageHeader from "@/components/page-header";
import pagination from "@/components/common/pagination"
import { ordersData } from "./data";

/**
 * Orders component
 */
export default {
    components: {
        Datepicker,
        Layout,
        PageHeader,
        pagination
    },
    data() {
        return {
            ordersData,
            totalRows: 1,
            currentPage: 1,
            perPage: 10,
            pageOptions: [10, 25, 50, 100],
            filter: null,
            filterOn: [],
            sortBy: "value",
            sortDesc: false,
            fields: [
                {
                    key: "date",
                    sortable: true,
                },
                {
                    key: "type",
                    sortable: true,
                },
                {
                    key: "coin",
                    sortable: true,
                },
                {
                    key: "value",
                    sortable: true,
                },
                {
                    key: "usd",
                    sortable: true,
                },
                {
                    key: "status",
                    sortable: true,
                },
            ],
            coinvalue: "",
            statusValue: "",
            typeValue: null,
            datepickervalue: ref(new Date()),
        };
    },
    computed: {
        /**
         * Total no. of records
         */
        rows() {
            return this.ordersData.length;
        },
    },
    methods: {
        /**
         * Search the table data with search input
         */
        onFiltered(filteredItems) {
            // Trigger pagination to update the number of buttons/pages due to filtering
            this.totalRows = filteredItems.length;
            this.currentPage = 1;
        },
    },
};
</script>

<template lang="en">
<Layout>
    <PageHeader title="Orders" pageTitle="Crypto" />

    <BRow>
        <BCol cols=12 >
            <BCard no-body>
                <BCardBody>
                    <BCardTitle class="mb-3">Orders</BCardTitle>
                    <BTabs content-class="p-3" nav-class="nav-tabs-custom">
                        <BTab title="All Orders" active>
                            <BForm>
                                <BRow>
                                    <BCol xl="xl" sm="6">
                                        <div class="form-group mt-3 mb-0">
                                            <label>Date :</label>
                                            <Datepicker v-model="datepickervalue" class="form-control" :first-day-of-week="1" lang="en" confirm></Datepicker>
                                        </div>
                                    </BCol>

                                   <BCol xl="xl" sm="6">
                                        <div class="form-group mt-3 mb-0">
                                            <label>Coin</label>
                                            <select class="form-control select2-search-disable">
                                                <option value="BTC" selected>Bitcoin</option>
                                                <option value="ETH">Ethereum</option>
                                                <option value="LTC">litecoin</option>
                                            </select>
                                        </div>
                                   </BCol>

                                    <BCol xl="xl" sm="6">
                                        <div class="form-group mt-3 mb-0">
                                            <label>Type</label>
                                            <select class="form-control select2-search-disable">
                                                <option value="BU" selected>Buy</option>
                                                <option value="SE">Sell</option>
                                            </select>
                                        </div>
                                    </BCol>

                                   <BCol xl="xl" sm="6">
                                        <div class="form-group mt-3 mb-0">
                                            <label>Status</label>
                                            <select class="form-control select2-search-disable">
                                                <option value="CO" selected>Completed</option>
                                                <option value="PE">Pending</option>
                                            </select>
                                        </div>
                                   </BCol>

                                    <BCol xl="xl" sm="6" class="align-self-end">
                                        <div class="mt-3">
                                            <BButton variant="primary" class="w-md">
                                                Add Order
                                            </BButton>
                                        </div>
                                    </BCol>
                                </BRow>
                            </BForm>
                            <BRow class="mt-3">
                                <BCol sm="12" md="6">
                                    <div id="tickets-table_length" class="dataTables_length">
                                        <label class="d-inline-flex align-items-center fw-normal">
                                            Show&nbsp;
                                            <BFormSelect v-model="perPage" size="sm" class="form-select form-select-sm" :options="pageOptions"></BFormSelect>&nbsp;entries
                                        </label>
                                    </div>
                                </BCol>
                                <BCol sm="12" md="6">
                                    <div id="tickets-table_filter" class="dataTables_filter text-end">
                                        <label class="d-inline-flex align-items-center fw-normal">
                                            Search:
                                            <BFormInput v-model="filter" type="search" class="form-control form-control-sm ms-2"></BFormInput>
                                        </label>
                                    </div>
                                </BCol>
                            </BRow>
                            <div class="table-responsive mt-1 mb-0">
                                <BTable :items="ordersData" :fields="fields" responsive="sm" :per-page="perPage" :current-page="currentPage" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" :filter="filter" :filter-included-fields="filterOn" @filtered="onFiltered"></BTable>
                            </div>
                            <BRow>
                                <BCol>
                                    <div class="dataTables_paginate paging_simple_numbers float-end">
                                        <pagination />
                                    </div>
                                </BCol>
                            </BRow>
                        </BTab>
                        <BTab title="Processing">
                            <BRow>
                                <BCol sm="12" md="6">
                                    <div id="tickets-table_length" class="dataTables_length">
                                        <label class="d-inline-flex align-items-center fw-normal">
                                            Show&nbsp;
                                            <BFormSelect v-model="perPage" size="sm" :options="pageOptions" class="form-select form-select-sm"></BFormSelect>&nbsp;entries
                                        </label>
                                    </div>
                                </BCol>
                                <BCol sm="12" md="6">
                                    <div id="tickets-table_filter" class="dataTables_filter text-md-end">
                                        <label class="d-inline-flex align-items-center fw-normal">
                                            Search:
                                            <BFormInput v-model="filter" type="search" class="form-control form-control-sm ms-2"></BFormInput>
                                        </label>
                                    </div>
                                </BCol>
                            </BRow>
                            <div class="table-responsive mt-3 mb-0">
                                <BTable :items="ordersData" :fields="fields" responsive="sm" :per-page="perPage" :current-page="currentPage" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" :filter="filter" :filter-included-fields="filterOn" @filtered="onFiltered"></BTable>
                            </div>
                        </BTab>
                    </BTabs>
                </BCardBody>
            </BCard>
        </BCol>
    </BRow>
</Layout>
</template>

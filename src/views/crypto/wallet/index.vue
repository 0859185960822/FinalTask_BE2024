<script>
import Layout from "../../../layouts/main";
import PageHeader from "@/components/page-header";
import { OveviewChart, activitiesData, items, walletData } from "./data";
/**
 * Wallets component
 */
export default {
  components: {
    Layout,
    PageHeader,
  },
  data() {
    return {
      OveviewChart, activitiesData, items, walletData,
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [
        { text: '10', value: '10' },
        { text: '25', value: '25' },
        { text: '50', value: '50' },
        { text: '100', value: '100' }
      ],
      filter: null,
      filterOn: [],
      sortBy: "id",
      sortDesc: false,
      fields: [
        {
          key: "id",
          label: "ID No",
          sortable: true,
        },
        {
          key: "date",
          sortable: true,
        },
        {
          key: "type",
          sortable: true,
        },
        {
          key: "currency",
          sortable: true,
        },
        {
          key: "amount",
          sortable: true,
        },
        {
          key: "usd",
          label: "Amount in USD",
          sortable: true,
        },
      ],
    };
  },
  computed: {
    /**
     * Total no. of records
     */
    rows() {
      return this.activitiesData.length;
    },
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.items.length;
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

<template>
  <Layout>
    <PageHeader title="Wallet" pageTitle="Crypto" />

    <BRow>
      <BCol xl="4">
        <BCard no-body>
          <BCardBody>
            <div class="d-flex align-items-start">
              <div class="flex-shrink-0 me-4">
                <i class="mdi mdi-account-circle text-primary h1"></i>
              </div>

              <div class="flex-grow-1">
                <div class="text-muted">
                  <h5>Henry Wells</h5>
                  <p class="mb-1">henrywells@abc.com</p>
                  <p class="mb-0">Id no: #SK0234</p>
                </div>
              </div>
              <BDropdown variant="white" toggle-class="text-muted p-0" toggle-tag="div" class="job-list-dropdown">
                <template v-slot:button-content>
                  <i class="mdi mdi-dots-horizontal font-size-18"></i>
                </template>
                <BDropdownItem>Action</BDropdownItem>
                <BDropdownItem>Another action</BDropdownItem>
                <BDropdownItem>Something else here</BDropdownItem>
              </BDropdown>
            </div>
          </BCardBody>
          <BCardBody class="border-top">
            <BRow>
              <BCol sm="6">
                <div>
                  <p class="text-muted mb-2">Available Balance</p>
                  <h5>$ 9148.23</h5>
                </div>
              </BCol>
              <BCol sm="6">
                <div class="text-sm-end mt-4 mt-sm-0">
                  <p class="text-muted mb-2">Since last month</p>
                  <h5>
                    + $ 248.35
                    <span class="badge bg-success ms-1 align-bottom">+ 1.3 %</span>
                  </h5>
                </div>
              </BCol>
            </BRow>
          </BCardBody>

          <BCardBody class="border-top">
            <p class="text-muted mb-4">In this month</p>
            <div class="text-center">
              <BRow>
                <BCol sm="4" v-for="item in items" :key="item.id">
                  <div>
                    <div class="font-size-24 text-primary mb-2">
                      <i :class="item.iconClass"></i>
                    </div>
                    <p class="text-muted mb-2">{{ item.title }}</p>
                    <h5>{{ item.amount }}</h5>
                    <div class="mt-3">
                      <BLink :class="item.buttonClass">{{ item.buttonLabel }}</BLink>
                    </div>
                  </div>
                </BCol>
              </BRow>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol xl="8">
        <BRow>
          <BCol sm="4" v-for="item in walletData" :key="item.id">
            <BCard no-body class="mini-stats-wid">
              <BCardBody>
                <div class="d-flex">
                  <div class="me-3 align-self-center">
                    <i :class="item.iconClass"></i>
                  </div>
                  <div class="flex-grow-1">
                    <p class="text-muted mb-2">{{ item.walletName }}</p>
                    <h5 class="mb-0">
                      {{ item.balance }}
                      <span class="font-size-14 text-muted">{{ item.conversion }}</span>
                    </h5>
                  </div>
                </div>
              </BCardBody>
            </BCard>
          </BCol>
        </BRow>

        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-3">Overview</BCardTitle>

            <div>
              <apexchart class="apex-charts" height="228" type="line" dir="ltr" :series="OveviewChart.series"
                :options="OveviewChart.chartOptions"></apexchart>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Activities</BCardTitle>
            <BTabs content-class="mt-3" nav-class="nav-tabs-custom">
              <BTab title="All" active>
                <BRow class="mt-4">
                  <BCol sm="12" md="6">
                    <div id="tickets-table_length" class="dataTables_length">
                      <label class="d-inline-flex align-items-center fw-normal">
                        Show&nbsp;
                        <select v-model="perPage" size="sm" class="form-control form-select form-select-sm">
                          <option v-for="option in pageOptions" :key="option.value" :value="option.value">
                            {{ option.text }}
                          </option>
                        </select>
                        &nbsp;entries
                      </label>
                    </div>
                  </BCol>
                  <BCol sm="12" md="6">
                    <div id="tickets-table_filter" class="dataTables_filter text-md-end">
                      <label class="d-inline-flex align-items-center">
                        Search:
                        <BFormInput v-model="filter" type="search" class="form-control form-control-sm ms-2"></BFormInput>
                      </label>
                    </div>
                  </BCol>
                </BRow>
                <div class="table-responsive table-hover mb-0">
                  <BTable :items="activitiesData" :fields="fields" responsive="sm" :per-page="perPage"
                    :current-page="currentPage" :v-model:sort-by="sortBy" :v-model:sort-desc="sortDesc" :filter="filter"
                    :filter-included-fields="filterOn" @filtered="onFiltered"></BTable>
                </div>
                <BRow>
                  <BCol>
                    <div class="dataTables_paginate paging_simple_numbers float-end">
                      <ul class="pagination pagination-rounded mb-0">
                        <BPagination v-model="currentPage" :total-rows="rows" :per-page="perPage"></BPagination>
                      </ul>
                    </div>
                  </BCol>
                </BRow>
              </BTab>
              <BTab title="Buy" disabled> </BTab>
              <BTab title="Sell" disabled> </BTab>
            </BTabs>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>

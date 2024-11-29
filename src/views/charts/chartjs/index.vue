<script>
import Layout from "../../../layouts/main";
import PageHeader from "@/components/page-header";
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";

import { charts } from "./data";


/**
 * Chartjs-chart component
 */
export default {
  components: {
    Layout,
    PageHeader,
    Vue3ChartJs,
  },

  data() {
    return {
      charts
    };
  },
};
</script>

<template>
  <Layout>
    <PageHeader title="Chartjs Charts" pageTitle="Charts" />

    <BRow>
      <BCol lg="6" v-for="(chart, index) in charts" :key="'data-apex-' + index">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">{{ chart.title }}</BCardTitle>

            <BRow class="text-center">
              <BCol sm="4">
                <h5 class="mb-0">{{ chart.activated }}</h5>
                <p class="text-muted">Activated</p>
              </BCol>
              <BCol sm="4">
                <h5 class="mb-0"> {{ chart.pending }} </h5>
                <p class="text-muted">Pending</p>
              </BCol>
              <BCol sm="4">
                <h5 class="mb-0"> {{ chart.deactivated }} </h5>
                <p class="text-muted">Deactivated</p>
              </BCol>
            </BRow>

            <vue3-chart-js class="chartjs-chart" v-bind="{ ...chart.chart }"></vue3-chart-js>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>
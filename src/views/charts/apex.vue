<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

import { apexChartData } from "./data-apex";

/**
 * Apex-chart component
 */
export default {
  components: { Layout, PageHeader },
  data() {
    return {
      apexChartData
    };
  }
};
</script>

<template>
  <Layout>
    <PageHeader title="Apex Charts" pageTitle="Charts" />

    <BRow>
      <BCol lg="6" v-for="(data, index) in apexChartData" :key="'apex-chart-' + index">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">{{ data.title }}</BCardTitle>
            <apexchart class="apex-charts" :height="data.height" :type="data.type" dir="ltr" :series="data.chart.series" :options="data.chart.chartOptions">
            </apexchart>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

  </Layout>
</template>
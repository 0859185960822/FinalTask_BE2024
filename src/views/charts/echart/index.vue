<script>
import { VueEcharts } from "vue3-echarts";

import Layout from "../../../layouts/main";
import PageHeader from "@/components/page-header";

import {
  polarChart,
  lineChart,
  pieChart,
  bubbleChart,
  doughnutChart,
  mixedBarChart,
  guageChart,
  candleStickChart,
} from "./data";

export default {
  components: { Layout, PageHeader, VueEcharts },
  computed: {
    option() {
      return {
        polarChart: polarChart,
        lineChart: lineChart,
        pieChart: pieChart,
        bubbleChart: bubbleChart,
        doughnutChart: doughnutChart,
        mixedBarChart: mixedBarChart,
        candleStickChart: candleStickChart,
        guageChart: guageChart,
      };
    },
  },
};
</script>

<template>
  <Layout>
    <PageHeader title="E Charts" pageTitle="Charts" />

    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Line Chart</BCardTitle>
            <vue-echarts :option="option.lineChart" style="height: 300px" ref="chart" />
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Mix Line-Bar</BCardTitle>
            <vue-echarts :option="option.mixedBarChart" style="height: 300px" ref="chart" />
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Pie Chart</BCardTitle>
            <vue-echarts :option="option.pieChart" style="height: 300px" />
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Doughnut Chart</BCardTitle>
            <vue-echarts :option="option.doughnutChart" style="height: 300px" />
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Candle Stick Chart</BCardTitle>
            <vue-echarts :option="option.candleStickChart" style="height: 300px" />
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Gauge Chart</BCardTitle>
            <vue-echarts :option="option.guageChart" style="height: 300px" />
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Bubble Chart</BCardTitle>
            <vue-echarts :option="option.bubbleChart" style="height: 300px" />
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Polar Chart</BCardTitle>
            <vue-echarts :option="option.polarChart.polar" style="height: 300px" />
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>
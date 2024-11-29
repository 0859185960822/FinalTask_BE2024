<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

import "chartist/dist/chartist.min.css";

import {
  smilAnimationChart,
  simpleLineChart,
  polarBarChart,
  areaLineChart,
  lineSmoothingChart,
  overlappingBarChart,
  stackBarChart,
  horizontalBarChart,
  donutAnimateChart,
  simplePieChart,
  distributedSeries,
  labelPlacementChart,
  extremeConfiguration,
  lineAreaChart
} from "./data-chartist";

/**
 * Chartist-chart component
 */
export default {
  components: { Layout, PageHeader },
  data() {
    return {
      smilAnimationChart: smilAnimationChart,
      simpleLineChart: simpleLineChart,
      polarBarChart: polarBarChart,
      areaLineChart: areaLineChart,
      lineSmoothingChart: lineSmoothingChart,
      overlappingBarChart: overlappingBarChart,
      stackBarChart: stackBarChart,
      horizontalBarChart: horizontalBarChart,
      donutAnimateChart: donutAnimateChart,
      simplePieChart: simplePieChart,
      distributedSeries: distributedSeries,
      labelPlacementChart: labelPlacementChart,
      extremeConfiguration: extremeConfiguration,
      lineAreaChart: lineAreaChart,
    };
  }
};
</script>

<template>
  <Layout>
    <PageHeader title="Chartist Charts" pageTitle="Charts" />

    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody dir="ltr">
            <BCardTitle class="mb-4">Advanced Smil Animations</BCardTitle>
            <!-- Advanced Smil Animations -->
            <chartist ratio="ct-chart" :data="smilAnimationChart.data" :options="smilAnimationChart.options" type="Line"></chartist>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol lg="6">
        <BCard no-body>
          <BCardBody dir="ltr">
            <BCardTitle class="mb-4">Simple Line Chart</BCardTitle>

            <!-- Simple line chart -->
            <chartist ratio="ct-chart" :data="simpleLineChart.data" :options="simpleLineChart.options" type="Line"></chartist>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody dir="ltr">
            <BCardTitle class="mb-4">Line Chart With Area</BCardTitle>

            <!-- Line chart with area -->
            <chartist ratio="ct-chart" :data="areaLineChart.data" :options="areaLineChart.options" type="Line"></chartist>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Bi-polar Line Chart Wth Area Only</BCardTitle>

            <!-- Bi-polar Line chart -->
            <chartist ratio="ct-chart" :data="lineAreaChart.data" :options="lineAreaChart.options" type="Line"></chartist>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody dir="ltr">
            <BCardTitle class="mb-4">Line Interpolation / Smoothing</BCardTitle>

            <!-- Line Interpolation / Smoothing chart -->
            <chartist ratio="ct-chart" type="Line" :data="lineSmoothingChart.data" :options="lineSmoothingChart.options"></chartist>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol lg="6">
        <BCard no-body>
          <BCardBody dir="ltr">
            <BCardTitle class="mb-4">Overlapping Bars On Mobile</BCardTitle>

            <!-- Overlapping bars on mobile -->
            <chartist ratio="ct-chart" :data="overlappingBarChart.data" :options="overlappingBarChart.options" type="Bar"></chartist>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody dir="ltr">
            <BCardTitle class="mb-4">Stacked Bar Chart</BCardTitle>

            <!-- Stacked bar chart -->
            <chartist ratio="ct-chart" :data="stackBarChart.data" :options="stackBarChart.options" type="Bar"></chartist>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Horizontal Bar Chart</BCardTitle>

            <!-- Horizontal bar chart -->
            <chartist ratio="ct-chart" :data="horizontalBarChart.data" :options="horizontalBarChart.options" type="Bar"></chartist>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody dir="ltr">
            <BCardTitle class="mb-4">Distributed Series</BCardTitle>

            <!-- Distributed series -->
            <chartist ratio="ct-chart" :data="distributedSeries.data" :options="distributedSeries.options" type="Bar"></chartist>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol lg="6">
        <BCard no-body>
          <BCardBody dir="ltr">
            <BCardTitle class="mb-4">Label Placement</BCardTitle>

            <!-- Label placement chart -->
            <chartist ratio="ct-chart" :data="labelPlacementChart.data" :options="labelPlacementChart.options" type="Bar"></chartist>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Extreme Responsive Configuration</BCardTitle>

            <chartist ratio="ct-chart" :data="extremeConfiguration.data" :options="extremeConfiguration.options" type="Bar"></chartist>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody dir="ltr">
            <BCardTitle class="mb-4">Bi-polar Bar Chart</BCardTitle>

            <!-- Bi-polar bar -->
            <chartist ratio="ct-chart" :data="polarBarChart.data" :options="polarBarChart.options" type="Bar"></chartist>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Donut With Svg.animate</BCardTitle>

            <!-- Animating a Donut with Svg.animate -->
            <chartist ratio="ct-chart" :data="donutAnimateChart.data" :options="donutAnimateChart.options" type="Pie"></chartist>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Simple Pie Chart</BCardTitle>

            <!-- Simple pie chart -->
            <chartist ratio="ct-chart" :data="simplePieChart.data" :options="simplePieChart.options" type="Pie"></chartist>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>

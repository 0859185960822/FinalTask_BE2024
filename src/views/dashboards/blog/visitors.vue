<script>
import { visitorData } from "./data"

export default {
  data() {
    return {
      visitorData: visitorData,
      chartData: {
        series: [
          {
            name: "Current",
            data: [18, 21, 45, 36, 65, 47, 51, 32, 40, 28, 31, 26],
          },
          {
            name: "Previous",
            data: [30, 11, 22, 18, 32, 23, 58, 45, 30, 36, 15, 34],
          },
        ],
        chartoptions: {
          chart: {
            height: 350,
            type: "area",
            toolbar: {
              show: false,
            },
          },
          colors: ["#556ee6", "#f1b44c"],
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "smooth",
            width: 2,
          },
          fill: {
            type: "gradient",
            gradient: {
              shadeIntensity: 1,
              inverseColors: false,
              opacityFrom: 0.45,
              opacityTo: 0.05,
              stops: [20, 100, 100, 100],
            },
          },
          xaxis: {
            categories: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
          },
          markers: {
            size: 3,
            strokeWidth: 3,

            hover: {
              size: 4,
              sizeOffset: 2,
            },
          },
          legend: {
            position: "top",
            horizontalAlign: "right",
          },
        },
      },
      selection: "all",
    };
  },
  methods: {
    updateData: function (timeline) {
      this.selection = timeline;
      switch (timeline) {
        case "one_month":
          this.chartData.series = [
            {
              name: "Current",
              data: [12, 22, 38, 42, 32, 40, 51, 36, 51, 29, 38, 36],
            },
            {
              name: "Previous",
              data: [22, 31, 36, 26, 47, 56, 42, 64, 61, 52, 42, 31],
            },
          ];
          break;
        case "six_months":
          this.chartData.series = [
            {
              name: "Current",
              data: [31, 40, 28, 51, 42, 40, 51, 36, 40, 39, 31, 36],
            },
            {
              name: "Previous",
              data: [11, 32, 45, 32, 34, 22, 51, 60, 51, 52, 40, 31],
            },
          ];
          break;
        case "one_year":
          this.chartData.series = [
            {
              name: "Current",
              data: [28, 22, 38, 42, 32, 40, 51, 36, 51, 29, 38, 36],
            },
            {
              name: "Previous",
              data: [22, 31, 36, 26, 47, 56, 42, 64, 61, 52, 42, 31],
            },
          ];
          break;
        case "all":
          this.chartData.series = [
            {
              name: "Current",
              data: [18, 21, 45, 36, 65, 47, 51, 32, 40, 28, 31, 26],
            },
            {
              name: "Previous",
              data: [30, 11, 22, 18, 32, 23, 58, 45, 30, 36, 15, 34],
            },
          ];
          break;
        default:
      }
    },
  },
};
</script>

<template>
  <BCardBody>
    <div class="d-flex flex-wrap">
      <BCardTitle class="me-2">Visitors</BCardTitle>
      <div class="ms-auto">
        <div class="toolbar button-items text-end">
          <BButton variant="light" class="ms-2" size="sm" @click="updateData('all')" :class="{ active: selection === 'all' }">
            ALL
          </BButton>
          <BButton variant="light" class="ms-2" size="sm" @click="updateData('one_month')" :class="{ active: selection === 'one_month' }">
            1M
          </BButton>
          <BButton variant="light" class="ms-2" size="sm" @click="updateData('six_months')" :class="{ active: selection === 'six_months' }">
            6M
          </BButton>
          <BButton variant="light" class="ms-2" size="sm" @click="updateData('one_year')" :class="{ active: selection === 'one_year' }">
            1Y
          </BButton>
        </div>
      </div>
    </div>

    <BRow class="text-center">
      <BCol lg="4" v-for="item in visitorData" :key="item.id">
        <div class="mt-4">
          <p class="text-muted mb-1">{{ item.title }}</p>
          <h5>
            {{ item.value }}
            <span class="text-success font-size-13">{{ item.percentChange }} <i :class="`${item.arrow}`"></i></span>
          </h5>
        </div>
      </BCol>
    </BRow>

    <hr class="mb-4" />

    <apexchart class="apex-charts" dir="ltr" height="350" :series="chartData.series" :options="chartData.chartoptions">
    </apexchart>
  </BCardBody>
</template>

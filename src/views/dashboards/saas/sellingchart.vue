<script>
export default {
  props: {
    Chartcolor: {
      type: String,
      default: "",
    },
    seriesvalue: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      series: [100, this.seriesvalue],
      chartOptions: {
        chart: {
          type: "donut",
        },
        dataLabels: {
          enabled: false,
        },
        tooltip: {
          enabled: false,
        },
        legend: {
          show: false,
        },
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: false,
              },
              size: "65%",
            },
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 100,
              },
            },
          },
        ],
        colors: [this.Chartcolor, "#f8f9fa"],
      },
    };
  },
  watch: {
    Chartcolor: {
      immediate: true,
      deep: true,
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          this.chartOptions.colors = [newVal, "#f8f9fa"];
        }
      },
    },
    seriesvalue: {
      immediate: true,
      deep: true,
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          this.series = [100, newVal];
        }
      },
    },
  },
};
</script>

<template>
  <apexchart
    class="apex-charts"
    dir="ltr"
    height="85"
    width="85"
    :series="series"
    :options="chartOptions"
  ></apexchart>
</template>

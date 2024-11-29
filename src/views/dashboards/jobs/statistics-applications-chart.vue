<script>
/**
 * Statistics Applications Chart
 */
export default {
  components: {
  },
  data() {
    return {
      isActive: "year",
      series: [{
        name: 'Companay',
        type: 'column',
        data: [30, 48, 28, 74, 39, 87, 54, 36, 50, 87, 84]
      }, {
        name: 'New Jobs',
        type: 'column',
        data: [20, 50, 42, 10, 24, 28, 60, 35, 47, 64, 78]
      }, {
        name: 'Total Jobs',
        type: 'area',
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
      }, {
        name: 'Job View',
        type: 'line',
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
      }],
      chartOptions: {
        chart: {
          height: 350,
          type: 'line',
          stacked: false,
          toolbar: {
            show: false,
          },
        },
        legend: {
          show: true,
          offsetY: 10,
        },
        stroke: {
          width: [0, 0, 2, 2],
          curve: 'smooth'
        },
        plotOptions: {
          bar: {
            columnWidth: '30%'
          }
        },
        fill: {
          opacity: [1, 1, 0.1, 1],
          gradient: {
            inverseColors: false,
            shade: 'light',
            type: "vertical",
            opacityFrom: 0.85,
            opacityTo: 0.55,
            stops: [0, 100, 100, 100]
          }
        },
        labels: ['01/01/2022', '02/01/2022', '03/01/2022', '04/01/2022', '05/01/2022', '06/01/2022', '07/01/2022',
          '08/01/2022', '09/01/2022', '10/01/2022', '11/01/2022'
        ],
        colors: ["#556ee6", "#34c38f", "#f1b44c", "#50a5f1"],
        markers: {
          size: 0
        },
        xaxis: {
          type: 'datetime'
        },
        tooltip: {
          shared: true,
          intersect: false,
          y: {
            formatter: function (y) {
              if (typeof y !== "undefined") {
                return y.toFixed(0) + " points";
              }
              return y;

            }
          }
        }
      },
    };
  },
  methods: {
    changeVal(value) {
      switch (value) {
        case "month":
          this.isActive = "month";
          this.series = [{
            name: 'Companay',
            type: 'column',
            data: [25, 45, 21, 61, 41, 75, 75, 21, 75, 14, 42]
          }, {
            name: 'New Jobs',
            type: 'column',
            data: [20, 50, 42, 10, 24, 28, 60, 35, 47, 64, 78]
          }, {
            name: 'Total Jobs',
            type: 'area',
            data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
          }, {
            name: 'Job View',
            type: 'line',
            data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
          }];
          break;
        case "week":
          this.isActive = "week";
          this.series = [{
            name: 'Companay',
            type: 'column',
            data: [30, 48, 28, 74, 39, 87, 54, 36, 50, 87, 84]
          }, {
            name: 'New Jobs',
            type: 'column',
            data: [31, 40, 12, 40, 24, 48, 50, 65, 27, 44, 48]
          }, {
            name: 'Total Jobs',
            type: 'area',
            data: [45, 36, 27, 75, 21, 47, 41, 31, 41, 77, 32]
          }, {
            name: 'Job View',
            type: 'line',
            data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
          }];
          break;
        case "year":
          this.isActive = "year";
          this.series = [{
            name: 'Companay',
            type: 'column',
            data: [30, 48, 28, 74, 39, 87, 54, 36, 50, 87, 84]
          }, {
            name: 'New Jobs',
            type: 'column',
            data: [20, 50, 42, 10, 24, 28, 60, 35, 47, 64, 78]
          }, {
            name: 'Total Jobs',
            type: 'area',
            data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
          }, {
            name: 'Job View',
            type: 'line',
            data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
          }];
          break;
        default:
          this.series = [{
            name: 'Companay',
            type: 'column',
            data: [30, 48, 28, 74, 39, 87, 54, 36, 50, 87, 84]
          }, {
            name: 'New Jobs',
            type: 'column',
            data: [20, 50, 42, 10, 24, 28, 60, 35, 47, 64, 78]
          }, {
            name: 'Total Jobs',
            type: 'area',
            data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
          }, {
            name: 'Job View',
            type: 'line',
            data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
          }];
          break;
      }
    },
  },
};
</script>
<template>
    <BCard no-body>
      <BCardBody>
        <div class="d-sm-flex flex-wrap">
          <BCardTitle class="mb-4">Statistics Applications</BCardTitle>
          <div class="ms-auto">
            <ul class="nav nav-pills">
              <li class="nav-item">
                <BLink class="nav-link" href="javascript:void(0);" @click="changeVal('week')"
                  :class="{ 'active': isActive == 'week' }">Week</BLink>
              </li>
              <li class="nav-item">
                <BLink class="nav-link" href="javascript:void(0);" @click="changeVal('month')"
                  :class="{ 'active': isActive == 'month' }">Month</BLink>
              </li>
              <li class="nav-item">
                <BLink class="nav-link" href="javascript:void(0);" @click="changeVal('year')"
                  :class="{ 'active': isActive == 'year' }">Year</BLink>
              </li>
            </ul>
          </div>
        </div>
        <apexchart class="apex-charts" type="line" dir="ltr" height="350" :series="series" :options="chartOptions">
        </apexchart>
      </BCardBody>
    </BCard>
</template>

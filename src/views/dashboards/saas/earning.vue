<script>
export default {
  data() {
    return {
      earnings: [
        {
          name: "This month",
          amount: "$2453.35",
          revenue: "0.2",
          time: "From previous period",
          month: "Last month",
          previousamount: "$2281.04",
          series: [
            {
              name: "series1",
              data: [31, 40, 36, 51, 49, 72, 69, 56, 68, 82, 68, 76],
            },
          ],
        },
      ],
      chartOptions: {
        chart: {
          height: 320,
          type: "line",
          toolbar: "false",
          dropShadow: {
            enabled: true,
            color: "#000",
            top: 18,
            left: 7,
            blur: 8,
            opacity: 0.2,
          },
        },
        dataLabels: {
          enabled: false,
        },
        colors: ["#556ee6"],
        stroke: {
          curve: "smooth",
          width: 3,
        },
      },
    };
  },
  methods: {
    monthlyEarning(event) {
      switch (event.target.value) {
        case "december":
          this.earnings = [
            {
              name: "This month",
              amount: "$2453.35",
              revenue: "0.4",
              time: "From previous period",
              month: "Last month",
              previousamount: "$2281.04",
              series: [
                {
                  name: "series1",
                  data: [31, 40, 36, 51, 49, 72, 69, 56, 68, 82, 68, 76],
                },
              ],
            },
          ];
          break;
        case "november":
          this.earnings = [
            {
              name: "This month",
              amount: "$2887.35",
              revenue: "0.4",
              time: "From previous period",
              month: "Last month",
              previousamount: "$684.04",
              series: [
                {
                  name: "series1",
                  data: [28, 30, 48, 50, 47, 40, 35, 48, 56, 42, 65, 41],
                },
              ],
            },
          ];
          break;

        case "october":
          this.earnings = [
            {
              name: "This month",
              amount: "$2100.35",
              revenue: "0.4",
              time: "From previous period",
              month: "Last month",
              previousamount: "$674.04",
              series: [
                {
                  name: "series1",
                  data: [28, 48, 39, 47, 58, 46, 38, 47, 30, 40, 70, 42],
                },
              ],
            },
          ];
          break;

        case "january":
          this.earnings = [
            {
              name: "This month",
              amount: "$2453.35",
              revenue: "0.4",
              time: "From previous period",
              month: "Last month",
              previousamount: "$2281.04",
              series: [
                {
                  name: "series1",
                  data: [31, 40, 36, 51, 49, 72, 69, 56, 68, 82, 68, 76],
                },
              ],
            },
          ];
          break;

        default:
          this.earnings = [
            {
              name: "This month",
              amount: "$2453.35",
              revenue: "0.4",
              time: "From previous period",
              month: "Last month",
              previousamount: "$2281.04",
              series: [
                {
                  name: "series1",
                  data: [31, 40, 36, 51, 49, 72, 69, 56, 68, 82, 68, 76],
                },
              ],
            },
          ];
      }
    },
  },
};
</script>

<template>
  <BCard no-body>
    <BCardBody>
      <div class="clearfix">
        <div class="float-end">
          <div class="input-group input-group-sm">
            <select class="form-select form-select-sm" @change="monthlyEarning($event)">
              <option value="january" selected>Jan</option>
              <option value="december">Dec</option>
              <option value="november">Nov</option>
              <option value="october">Oct</option>
            </select>
            <label class="input-group-text">Month</label>
          </div>
        </div>
        <BCardTitle class="mb-4">Earning</BCardTitle>
      </div>

      <BRow v-for="(data, index) of earnings" :key="index">
        <BCol lg="4">
          <div class="text-muted">
            <div class="mb-4">
              <p>{{ data.name }}</p>
              <h4>{{ data.amount }}</h4>
              <div>
                <span class="badge badge-soft-success font-size-12 me-1">+ {{ data.revenue }}%</span>
                {{ data.time }}
              </div>
            </div>

            <div>
              <BLink href="javascript: void(0);" class="btn btn-primary btn-sm">
                View Details <i class="mdi mdi-chevron-right ml-1 ms-1"></i>
              </BLink>
            </div>

            <div class="mt-4">
              <p class="mb-2">{{ data.month }}</p>
              <h5>{{ data.previousamount }}</h5>
            </div>
          </div>
        </BCol>
        <BCol lg="8">
          <div id="line-chart"></div>
          <apexchart class="apex-charts" dir="ltr" height="300" :series="data.series" :options="chartOptions"></apexchart>
        </BCol>
      </BRow>
    </BCardBody>
  </BCard>
</template>

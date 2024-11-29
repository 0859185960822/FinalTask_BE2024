<script>
export default {
  data() {
    return {
      walletData: [
        {
          title: "Wallet Balance",
          text: "Available Balance",
          amount: "$ 6134.39",
          subamount: "+ 0.0012.23 ( 0.2 % )",
          income: "$ 2632.46",
          expense: "$ 924.38",
          chartSeries: [76, 67, 61],
          balancelist: [
            {
              class: "primary",
              text: "Ethereum",
              coin: "4.5701 ETH",
              amount: "$ 1123.64",
            },
            {
              class: "warning",
              text: "Bitcoin",
              coin: "0.4412 BTC",
              amount: "$ 4025.32",
            },
            {
              class: "info",
              text: "Litecoin",
              coin: "35.3811 LTC",
              amount: "$ 2263.09",
            },
          ],
        },
      ],
      chartOptions: {
        chart: {
          height: 300,
          type: "radialBar",
        },
        plotOptions: {
          radialBar: {
            offsetY: 0,
            startAngle: 0,
            endAngle: 270,
            hollow: {
              margin: 5,
              size: "35%",
              background: "transparent",
              image: undefined,
            },
            track: {
              show: true,
              startAngle: undefined,
              endAngle: undefined,
              background: "#f2f2f2",
              strokeWidth: "97%",
              opacity: 1,
              margin: 12,
              dropShadow: {
                enabled: false,
                top: 0,
                left: 0,
                blur: 3,
                opacity: 0.5,
              },
            },
            dataLabels: {
              name: {
                show: true,
                fontSize: "16px",
                fontWeight: 600,
                offsetY: -10,
              },
              value: {
                show: true,
                fontSize: "14px",
                offsetY: 4,
                formatter: function (val) {
                  return val + "%";
                },
              },
              total: {
                show: true,
                label: "Total",
                color: "#373d3f",
                fontSize: "16px",
                fontFamily: undefined,
                fontWeight: 600,
                formatter: function (w) {
                  return (
                    w.globals.seriesTotals.reduce(function (a, b) {
                      return a + b;
                    }, 0) + "%"
                  );
                },
              },
            },
          },
        },
        stroke: {
          lineCap: "round",
        },
        colors: ["#3452e1", "#f1b44c", "#50a5f1"],
        labels: ["Ethereum", "Bitcoin", "Ethereum"],
        legend: {
          show: false,
        },
      },
    };
  },
  methods: {
    onChange(event) {
      switch (event.target.value) {
        case "february":
          this.walletData = [
            {
              title: "Wallet Balance",
              text: "Available Balance",
              amount: "$ 2111.39",
              subamount: "+ 0.0014.23 ( 0.2 % )",
              income: "$ 2168.46",
              expense: "$ 927.38",
              chartSeries: [38, 78, 48],
              balancelist: [
                {
                  text: "Ethereum",
                  coin: "2.5701 ETH",
                  amount: "$ 1123.64",
                },
                {
                  text: "Bitcoin",
                  coin: "0.8552 BTC",
                  amount: "$ 4025.32",
                },
                {
                  text: "Litecoin",
                  coin: "35.7411 LTC",
                  amount: "$ 2263.09",
                },
              ],
            },
          ];
          break;

        case "january":
          this.walletData = [
            {
              title: "Wallet Balance",
              text: "Available Balance",
              amount: "$ 1211.39",
              subamount: "+ 0.0014.23 ( 0.2 % )",
              income: "$ 468.46",
              expense: "$ 127.38",
              chartSeries: [47, 68, 49],
              balancelist: [
                {
                  text: "Ethereum",
                  coin: "2.5701 ETH",
                  amount: "$ 723.64",
                },
                {
                  text: "Bitcoin",
                  coin: "0.8552 BTC",
                  amount: "$ 1225.32",
                },
                {
                  text: "Litecoin",
                  coin: "35.7411 LTC",
                  amount: "$ 4563.09",
                },
              ],
            },
          ];
          break;

        case "december":
          this.walletData = [
            {
              title: "Wallet Balance",
              text: "Available Balance",
              amount: "$ 1011.39",
              subamount: "+ 0.0014.23 ( 0.2 % )",
              income: "$ 668.46",
              expense: "$ 427.38",
              chartSeries: [36, 58, 78],
              balancelist: [
                {
                  text: "Ethereum",
                  coin: "2.5701 ETH",
                  amount: "$ 523.64",
                },
                {
                  text: "Bitcoin",
                  coin: "0.8552 BTC",
                  amount: "$ 1025.32",
                },
                {
                  text: "Litecoin",
                  coin: "14.7411 LTC",
                  amount: "$ 6563.09",
                },
              ],
            },
          ];
          break;

        case "march":
          this.walletData = [
            {
              title: "Wallet Balance",
              text: "Available Balance",
              amount: "$ 2111.39",
              subamount: "+ 0.0014.23 ( 0.2 % )",
              income: "$ 2168.46",
              expense: "$ 927.38",
              chartSeries: [38, 78, 48],
              balancelist: [
                {
                  text: "Ethereum",
                  coin: "2.5701 ETH",
                  amount: "$ 1123.64",
                },
                {
                  text: "Bitcoin",
                  coin: "0.8552 BTC",
                  amount: "$ 4025.32",
                },
                {
                  text: "Litecoin",
                  coin: "35.7411 LTC",
                  amount: "$ 2263.09",
                },
              ],
            },
          ];
          break;
        default:
          this.walletData = [
            {
              title: "Wallet Balance",
              text: "Available Balance",
              amount: "$ 1011.39",
              subamount: "+ 0.0014.23 ( 0.2 % )",
              income: "$ 668.46",
              expense: "$ 427.38",
              chartSeries: [25, 58, 47],
              balancelist: [
                {
                  text: "Ethereum",
                  coin: "2.5701 ETH",
                  amount: "$ 523.64",
                },
                {
                  text: "Bitcoin",
                  coin: "0.8552 BTC",
                  amount: "$ 1025.32",
                },
                {
                  text: "Litecoin",
                  coin: "14.7411 LTC",
                  amount: "$ 6563.09",
                },
              ],
            },
          ];
          break;
      }
    },
  },
};
</script>

<template>
  <div>
    <BCard no-body v-for="(data, index) of walletData" :key="index">
      <BCardBody>
        <div class="float-end">
          <select class="form-select form-select-sm ms-2" @change="onChange($event)">
            <option value="march" selected>March</option>
            <option value="february">February</option>
            <option value="january">January</option>
            <option value="december">December</option>
          </select>
        </div>
        <BCardTitle class="mb-3">{{ data.title }}</BCardTitle>

        <BRow>
          <BCol lg="4">
            <div class="mt-4">
              <p>{{ data.text }}</p>
              <h4>{{ data.amount }}</h4>

              <p class="text-muted mb-4">
                {{ data.subamount }}
                <i class="mdi mdi-arrow-up ms-1 text-success"></i>
              </p>

              <BRow>
                <BCol cols="6">
                  <div>
                    <p class="mb-2">Income</p>
                    <h5>{{ data.income }}</h5>
                  </div>
                </BCol>
                <BCol cols="6">
                  <div>
                    <p class="mb-2">Expense</p>
                    <h5>{{ data.expense }}</h5>
                  </div>
                </BCol>
              </BRow>

              <div class="mt-4">
                <BLink class="btn btn-primary btn-sm">View more <i class="mdi mdi-arrow-right ms-1"></i></BLink>
              </div>
            </div>
          </BCol>

          <BCol lg="4" sm="6">
            <div>
              <apexchart class="apex-charts" dir="ltr" type="radialBar" height="300" :series="data.chartSeries" :options="chartOptions"></apexchart>
            </div>
          </BCol>

          <BCol lg="4" sm="6" class="align-self-center">
            <div v-for="(data, i) of data.balancelist" :key="i" class="mt-4 pt-2">
              <p class="mb-2">
                <i :class="`
                    mdi mdi-circle
                    align-middle
                    font-size-10
                    me-2
                    text-${data.class}`
                  "></i>
                {{ data.text }}
              </p>
              <h5>
                {{ data.coin }} =
                <span class="text-muted font-size-14">{{ data.amount }}</span>
              </h5>
            </div>
          </BCol>
        </BRow>
      </BCardBody>
    </BCard>
  </div>
</template>

<script>
import Sellingchart from "./sellingchart";

export default {
  components: {
    Sellingchart,
  },
  data() {
    return {
      products: [
        {
          title: "Product A",
          amount: "$ 6385",
          revenue: "0.6",
          list: [
            {
              name: "Product A",
              text: "Neque quis est",
              sales: 37,
              color: "#556ee6",
            },
            {
              name: "Product B",
              text: "Quis autem iure",
              sales: 72,
              color: "#34c38f",
            },
            {
              name: "Product C",
              text: "Sed aliquam mauris.",
              sales: 54,
              color: "#f46a6a",
            },
          ],
        },
      ],
    };
  },
  methods: {
    productSelling(event) {
      switch (event.target.value) {
        case "december":
          this.products = [
            {
              title: "Product B",
              amount: "$ 7842",
              revenue: "0.4",
              list: [
                {
                  name: "Product D",
                  text: "Neque quis est",
                  sales: 41,
                  color: "#f46a6a",
                },
                {
                  name: "Product E",
                  text: "Quis autem iure",
                  sales: 14,
                  color: "#556ee6",
                },
                {
                  name: "Product F",
                  text: "Sed aliquam mauris.",
                  sales: 85,
                  color: "#34c38f",
                },
              ],
            },
          ];
          break;
        case "january":
          this.products = [
            {
              title: "Product A",
              amount: "$ 6385",
              revenue: "0.6",
              list: [
                {
                  name: "Product A",
                  text: "Neque quis est",
                  sales: 37,
                  color: "#556ee6",
                },
                {
                  name: "Product B",
                  text: "Quis autem iure",
                  sales: 72,
                  color: "#f46a6a",
                },
                {
                  name: "Product C",
                  text: "Sed aliquam mauris.",
                  sales: 54,
                  color: "#34c38f",
                },
              ],
            },
          ];
          break;
        case "november":
          this.products = [
            {
              title: "Product C",
              amount: "$ 4745",
              revenue: "0.8",
              list: [
                {
                  name: "Product G",
                  text: "Neque quis est",
                  sales: 31,
                  color: "#34c38f",
                },
                {
                  name: "Product H",
                  text: "Quis autem iure",
                  sales: 20,
                  color: "#556ee6",
                },
                {
                  name: "Product I",
                  text: "Sed aliquam mauris.",
                  sales: 40,
                  color: "#f46a6a",
                },
              ],
            },
          ];
          break;
        case "october":
          this.products = [
            {
              title: "Product D",
              amount: "$ 8745",
              revenue: "0.4",
              list: [
                {
                  name: "Product J",
                  text: "Neque quis est",
                  sales: 41,
                  color: "#f46a6a",
                },
                {
                  name: "Product K",
                  text: "Quis autem iure",
                  sales: 74,
                  color: "#34c38f",
                },
                {
                  name: "Product L",
                  text: "Sed aliquam mauris.",
                  sales: 52,
                  color: "#556ee6",
                },
              ],
            },
          ];
          break;
        default:
          this.products = [
            {
              title: "Product A",
              amount: "$ 6385",
              revenue: "0.6",
              list: [
                {
                  name: "Product A",
                  text: "Neque quis est",
                  sales: 37,
                },
                {
                  name: "Product B",
                  text: "Quis autem iure",
                  sales: 72,
                },
                {
                  name: "Product C",
                  text: "Sed aliquam mauris.",
                  sales: 54,
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
  <BCard no-body>
    <BCardBody class="pb-0">
      <div class="clearfix">
        <div class="float-end">
          <div class="input-group input-group-sm">
            <select class="form-select form-select-sm" @click="productSelling($event)">
              <option value="january" selected>Jan</option>
              <option value="december">Dec</option>
              <option value="november">Nov</option>
              <option value="october">Oct</option>
            </select>
            <div class="input-group-append">
              <label class="input-group-text">Month</label>
            </div>
          </div>
        </div>
        <BCardTitle class="mb-4">Top Selling product</BCardTitle>
      </div>
      <div v-for="(data, index) of products" :key="index">
        <div class="text-muted text-center">
          <p class="mb-2">{{ data.title }}</p>
          <h4>{{ data.amount }}</h4>
          <p class="mt-4 mb-0">
            <span class="badge badge-soft-success font-size-11 me-2">
              {{ data.revenue }}% <i class="mdi mdi-arrow-up"></i>
            </span>
            From previous period
          </p>
        </div>

        <div class="table-responsive mt-4">
          <BTableSimple class="align-middle mb-0">
            <BTbody>
              <BTr v-for="(item, index) of data.list" :key="index">
                <BTd>
                  <h5 class="font-size-14 mb-1">{{ item.name }}</h5>
                  <p class="text-muted mb-0">{{ item.text }}</p>
                </BTd>
                <BTd>
                  <Sellingchart :seriesvalue="item.sales" :Chartcolor="item.color" />
                </BTd>
                <BTd>
                  <p class="text-muted mb-1">Sales</p>
                  <h5 class="mb-0">{{ item.sales }} %</h5>
                </BTd>
              </BTr>
            </BTbody>
          </BTableSimple>
        </div>
      </div>
    </BCardBody>
  </BCard>
</template>

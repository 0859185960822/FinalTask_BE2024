<script>
import simplebar from "simplebar-vue";

import Layout from "../../../layouts/main";
import PageHeader from "@/components/page-header";
import { avatar1 } from "@/assets/images/users/data";
import { priceCandlestickChart, notificationData, bookData } from "./data";

/**
 * Exchange component
 */
export default {
  components: { Layout, PageHeader, simplebar },
  data() {
    return {
      priceCandlestickChart, notificationData, avatar1, bookData
    };
  },
};
</script>

<template>
  <Layout>
    <PageHeader title="Exchange" pageTitle="Crypto" />

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <BCardBody>
            <div class="d-flex align-items-start">
              <div class="flex-shrink-0 me-3">
                <img :src="avatar1" alt class="avatar-md rounded-circle img-thumbnail" />
              </div>
              <div class="flex-grow-1 align-self-center">
                <div class="text-muted">
                  <h5>Henry wells</h5>
                  <p class="mb-1">henrywells@abc.com</p>
                  <p class="mb-0">Id no: #SK0234</p>
                </div>
              </div>
              <BDropdown ngbDropdown menu-class="dropdown-menu-md dropdown-menu-end" right variant="light">
                <template v-slot:button-content>
                  <i class="mdi mdi-wallet me-1"></i>
                  <span class="d-none d-sm-inline-block ms-1" ngbDropdownToggle>
                    Wallet Balance
                    <i class="mdi mdi-chevron-down"></i>
                  </span>
                </template>
                <BDropdownItem>
                  <div>
                    <p class="text-muted mb-2">Available Balance</p>
                    <h5 class="mb-0">$ 9148.23</h5>
                  </div>
                </BDropdownItem>
                <BDropdownDivider />
                <BDropdownItem>
                  BTC :
                  <span class="float-end">1.02356</span>
                </BDropdownItem>
                <BDropdownItem>
                  ETH :
                  <span class="float-end">0.04121</span>
                </BDropdownItem>
                <BDropdownItem>
                  LTC :
                  <span class="float-end">0.00356</span>
                </BDropdownItem>
                <BDropdownDivider />
                <BDropdownItem variant="primary" href="javascript: void(0);">
                  <div class="text-center"> Learn more</div>
                </BDropdownItem>
              </BDropdown>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol xl="8">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Price</BCardTitle>

            <BRow>
              <BCol xl="3" sm="4">
                <div class="d-flex">
                  <div class="avatar-sm me-3">
                    <span class="avatar-title rounded-circle bg-warning-subtle text-warning font-size-22">
                      <i class="mdi mdi-bitcoin"></i>
                    </span>
                  </div>

                  <div class="flex-grow-1">
                    <p class="text-muted mb-2">Bitcoin</p>
                    <h5>1.02356 BTC</h5>
                  </div>
                </div>
              </BCol>

              <BCol xl="3" sm="4">
                <div class="mt-4 mt-sm-0">
                  <p class="text-muted mb-2">In USD</p>
                  <h5>6310.22 USD</h5>
                </div>
              </BCol>

              <BCol xl="3" sm="4">
                <div class="mt-4 mt-sm-0">
                  <p class="text-muted mb-2">Last 24 hrs</p>
                  <h5>
                    0.24 %
                    <i class="mdi mdi-arrow-up text-success"></i>
                  </h5>
                </div>
              </BCol>
            </BRow>

            <div class="mt-4">
              <apexchart class="apex-charts" height="310" type="candlestick" dir="ltr"
                :series="priceCandlestickChart.series" :options="priceCandlestickChart.chartOptions"></apexchart>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol xl="4">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Buy / Sell</BCardTitle>

            <div>
              <p class="text-muted mb-2">
                <i class="mdi mdi-wallet me-1"></i> Wallet Balance
              </p>
              <h5>$ 9148.23</h5>
            </div>

            <div class="mt-4">
              <BTabs nav-class="bg-light rounded crypto-buy-tabs" pills content-class="mt-4">
                <BTab title="Buy" active>
                  <h5 class="font-size-14 mb-4">Buy Coin</h5>
                  <div>
                    <div>
                      <label>Add Amount :</label>
                      <div class="input-group mb-3">
                        <label class="input-group-text">Amount</label>
                        <select class="form-select" style="max-width: 90px">
                          <option value="BT" selected="">BTC</option>
                          <option value="ET">ETH</option>
                          <option value="LT">LTC</option>
                        </select>
                        <input type="text" class="form-control" />
                      </div>

                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <label class="input-group-text">Price</label>
                        </div>
                        <input type="text" class="form-control" />
                        <div class="input-group-append">
                          <label class="input-group-text">$</label>
                        </div>
                      </div>

                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <label class="input-group-text">Total</label>
                        </div>
                        <input type="text" class="form-control" />
                      </div>
                    </div>

                    <div class="text-center">
                      <BButton variant="success" class="w-md">
                        Buy Coin
                      </BButton>
                    </div>
                  </div>
                </BTab>
                <BTab title="Sell">
                  <h5 class="font-size-14 mb-4">Sell Coin</h5>
                  <div>
                    <div>
                      <label>Add Amount :</label>
                      <div class="input-group mb-3">
                        <label class="input-group-text">Amount</label>
                        <select class="form-select" style="max-width: 90px">
                          <option value="BT" selected="">BTC</option>
                          <option value="ET">ETH</option>
                          <option value="LT">LTC</option>
                        </select>
                        <input type="text" class="form-control" />
                      </div>

                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <label class="input-group-text">Price</label>
                        </div>
                        <input type="text" class="form-control" />
                        <div class="input-group-append">
                          <label class="input-group-text">$</label>
                        </div>
                      </div>

                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <label class="input-group-text">Total</label>
                        </div>
                        <input type="text" class="form-control" />
                      </div>
                    </div>

                    <div class="text-center">
                      <BButton variant="danger" class="w-md">
                        Sell Coin
                      </BButton>
                    </div>
                  </div>
                </BTab>
              </BTabs>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol xl="6">
        <BCard no-body>
          <BCardBody class="pb-0">
            <BCardTitle class="mb-4">Order book</BCardTitle>

            <div class="table-responsive ">
              <BTableSimple class="table-bordered mb-0">
                <BThead>
                  <BTr class="text-center">
                    <BTh colspan="3">Buy</BTh>
                    <BTh colspan="3">Sell</BTh>
                  </BTr>
                  <BTr>
                    <BTh scope="col">Amount</BTh>
                    <BTh scope="col">Total</BTh>
                    <BTh scope="col">Price</BTh>
                    <BTh scope="col">Amount</BTh>
                    <BTh scope="col">Total</BTh>
                    <BTh scope="col">Price</BTh>
                  </BTr>
                </BThead>
                <BTbody>
                  <BTr v-for="row in bookData" :key="row.id">
                    <BTd v-for="cell in row.cells" :key="cell.id">{{ cell.value }}</BTd>
                  </BTr>
                </BTbody>
              </BTableSimple>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol xl="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Notifications</BCardTitle>
            <simplebar style="max-height: 310px">
              <ul class="verti-timeline list-unstyled">
                <li class="event-list" v-for="data of notificationData" :key="data.id">
                  <div class="event-timeline-dot">
                    <i class="bx bx-right-arrow-circle font-size-18"></i>
                  </div>
                  <div class="d-flex">
                    <div class="me-3">
                      <h5 class="font-size-14">
                        {{ data.date }}
                        <i class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                      </h5>
                    </div>
                    <div class="flex-grow-1">
                      <div>{{ data.text }}</div>
                    </div>
                  </div>
                </li>
              </ul>
            </simplebar>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>
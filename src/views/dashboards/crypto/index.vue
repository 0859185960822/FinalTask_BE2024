<script>
import Layout from "../../../layouts/main";
import PageHeader from "@/components/page-header";
import Img1 from "@/assets/images/crypto/features-img/img-1.png"
import simplebar from "simplebar-vue";
import WalletBalance from "./wallet-balance.vue";
import Overview from "./overview.vue";

import {
  walletRadialChart,
  overviewChart,
  transactionsData,
  cryptoData,
  dataList
} from "./data";

/**
 * Crypto Dashboard Component
 */
export default {
  components: { Layout, PageHeader, simplebar, WalletBalance, Overview },
  data() {
    return {
      walletRadialChart: walletRadialChart,
      overviewChart: overviewChart,
      transactionsData: transactionsData,
      cryptoData: cryptoData,
      dataList: dataList,
      Img1
    };
  },
};
</script>

<template>
  <Layout>
    <PageHeader title="Crypto" pageTitle="Dashboards" />

    <BRow>
      <BCol xl="4">
        <BCard no-body>
          <BCardBody>
            <BDropdown class="float-end ms-2" variant="white" right toggle-class="text-muted p-0" menu-class="dropdown-menu-end">
              <template v-slot:button-content>
                <i class="mdi mdi-dots-horizontal font-size-18"></i>
              </template>
              <BDropdownItem>Action</BDropdownItem>
              <BDropdownItem>Another action</BDropdownItem>
              <BDropdownItem>Something else here</BDropdownItem>
            </BDropdown>
            <div>
              <div class="mb-4 me-3">
                <i class="mdi mdi-account-circle text-primary h1"></i>
              </div>

              <div>
                <h5>Henry Wells</h5>
                <p class="text-muted mb-1">henrywells@abc.com</p>
                <p class="text-muted mb-0">Id no: #SK0234</p>
              </div>
            </div>
          </BCardBody>

          <BCardBody class="border-top">
            <BRow>
              <BCol sm="6">
                <div>
                  <p class="fw-medium mb-2">Balance :</p>
                  <h4>$ 6134.39</h4>
                </div>
              </BCol>
              <BCol sm="6">
                <div class="mt-4 mt-sm-0">
                  <p class="fw-medium mb-2">Coin :</p>
                  <div class="d-inline-flex align-items-center mt-1">
                    <BLink href="javascript: void(0);" class="m-1" v-b-tooltip.hover data-placement="top" title="Bitcoin">
                      <div class="avatar-xs">
                        <span class="avatar-title rounded-circle  bg-warning-subtle text-warning font-size-18">
                          <i class="mdi mdi-bitcoin"></i>
                        </span>
                      </div>
                    </BLink>
                    <BLink href="javascript: void(0);" class="m-1" data-placement="top" v-b-tooltip.hover title="Ethereum">
                      <div class="avatar-xs">
                        <span class="avatar-title rounded-circle  bg-primary-subtle text-primary font-size-18">
                          <i class="mdi mdi-ethereum"></i>
                        </span>
                      </div>
                    </BLink>
                    <BLink href="javascript: void(0);" class="m-1" data-placement="top" v-b-tooltip.hover title="Litecoin">
                      <div class="avatar-xs">
                        <span class="avatar-title rounded-circle  bg-info-subtle text-info font-size-18">
                          <i class="mdi mdi-litecoin"></i>
                        </span>
                      </div>
                    </BLink>
                  </div>
                </div>
              </BCol>
            </BRow>
          </BCardBody>

          <BCardFooter class="bg-transparent border-top">
            <div class="text-center">
              <BLink href="javascript: void(0);" class="btn btn-outline-light me-2 w-md text-body">Deposit</BLink>
              <BLink href="javascript: void(0);" class="btn btn-primary me-2 w-md ms-1">Buy / Sell</BLink>
            </div>
          </BCardFooter>
        </BCard>
      </BCol>

      <BCol xl="8">
        <BCard no-body>
          <div>
            <BRow>
              <BCol lg="9" sm="8">
                <div class="p-4">
                  <h5 class="text-primary">Welcome Back !</h5>
                  <p>Skote Crypto Dashboard</p>

                  <div class="text-muted">
                    <p class="mb-1">
                      <i class="mdi mdi-circle-medium align-middle text-primary me-1"></i>
                      If several languages coalesce
                    </p>
                    <p class="mb-1">
                      <i class="mdi mdi-circle-medium align-middle text-primary me-1"></i>
                      Sed ut perspiciatis unde
                    </p>
                    <p class="mb-0">
                      <i class="mdi mdi-circle-medium align-middle text-primary me-1"></i>
                      It would be necessary
                    </p>
                  </div>
                </div>
              </BCol>
              <BCol lg="3" sm="4" class="align-self-center">
                <div>
                  <img :src="Img1" alt class="img-fluid d-block" />
                </div>
              </BCol>
            </BRow>
          </div>
        </BCard>

        <BRow>
          <BCol v-for="(crypto, index) in cryptoData" :key="index" sm="4">
            <BCard no-body>
              <BCardBody>
                <p class="text-muted mb-4">
                  <i :class="`mdi mdi-${crypto.icon} h2 text-${crypto.iconColor} align-middle mb-0 me-3`"></i>
                  {{ crypto.name }}
                </p>
                <BRow>
                  <BCol cols="6">
                    <div>
                      <h5>{{ `$ ${crypto.price}` }}</h5>
                      <p class="text-muted text-truncate mb-0">
                        {{ ` ${crypto.change.value} (${crypto.change.percentage} % )` }}
                        <i :class="`mdi mdi-arrow-${crypto.change.direction} ms-1 text-${crypto.change.color}`"></i>
                      </p>
                    </div>
                  </BCol>
                  <BCol cols="6">
                    <div>
                      <apexchart class="apex-charts" height="40" type="area" dir="ltr" :series="crypto.chartData.series" :options="crypto.chartData.chartOptions"></apexchart>
                    </div>
                  </BCol>
                </BRow>
              </BCardBody>
            </BCard>
          </BCol>
        </BRow>
      </BCol>
    </BRow>
    <BRow>
      <BCol xl="8">
        <WalletBalance />
      </BCol>
      <BCol xl="4">
        <Overview />
      </BCol>
    </BRow>

    <BRow>
      <BCol xl="4">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Transactions</BCardTitle>
            <BTabs pills nav-class="bg-light rounded crypto-buy-tabs" content-class="mt-4">
              <BTab title="All" active>
                <simplebar style="max-height: 330px">
                  <BTableSimple class="table-centered table-nowrap align-middle">
                    <BTbody>
                      <BTr v-for="data of transactionsData" :key="data.icon">
                        <BTd style="width: 50px">
                          <div :class="`font-size-22 text-${data.color}`">
                            <i :class="{
                              'bx bx-down-arrow-circle':
                                `${data.color}` === 'primary',
                              'bx bx-up-arrow-circle':
                                `${data.color}` === 'danger',
                            }"></i>
                          </div>
                        </BTd>
                        <BTd>
                          <div>
                            <h5 class="font-size-14 mb-1">{{ data.name }}</h5>
                            <p class="text-muted mb-0">{{ data.date }}</p>
                          </div>
                        </BTd>
                        <BTd>
                          <div class="text-end">
                            <h5 class="font-size-14 mb-0">{{ data.text }}</h5>
                          </div>
                        </BTd>
                        <BTd>
                          <div class="text-end">
                            <h5 class="font-size-14 text-muted mb-0">
                              {{ data.price }}
                            </h5>
                          </div>
                        </BTd>
                      </BTr>
                    </BTbody>
                  </BTableSimple>
                </simplebar>
              </BTab>
              <BTab title="Buy">
                <simplebar style="max-height: 330px">
                  <BTableSimple class="table-centered table-nowrap align-middle">
                    <BTbody>
                      <BTr v-for="data of transactionsData" :key="data.id">
                        <BTd style="width: 50px">
                          <div :class="`font-size-22 text-${data.color}`">
                            <i :class="{
                              'bx bx-down-arrow-circle':
                                `${data.color}` === 'primary',
                              'bx bx-up-arrow-circle':
                                `${data.color}` === 'danger',
                            }"></i>
                          </div>
                        </BTd>
                        <BTd>
                          <div>
                            <h5 class="font-size-14 mb-1">{{ data.name }}</h5>
                            <p class="text-muted mb-0">{{ data.date }}</p>
                          </div>
                        </BTd>
                        <BTd>
                          <div class="text-end">
                            <h5 class="font-size-14 mb-0">{{ data.text }}</h5>
                          </div>
                        </BTd>
                        <BTd>
                          <div class="text-end">
                            <h5 class="font-size-14 text-muted mb-0">
                              {{ data.price }}
                            </h5>
                          </div>
                        </BTd>
                      </BTr>
                    </BTbody>
                  </BTableSimple>
                </simplebar>
              </BTab>
              <BTab title="Sell">
                <simplebar style="max-height: 330px">
                  <BTableSimple class="table-centered table-nowrap align-middle">
                    <BTbody>
                      <BTr v-for="data of transactionsData" :key="data.id">
                        <BTd style="width: 50px">
                          <div :class="`font-size-22 text-${data.color}`">
                            <i :class="{
                              'bx bx-down-arrow-circle':
                                `${data.color}` === 'primary',
                              'bx bx-up-arrow-circle':
                                `${data.color}` === 'danger',
                            }"></i>
                          </div>
                        </BTd>
                        <BTd>
                          <div>
                            <h5 class="font-size-14 mb-1">{{ data.name }}</h5>
                            <p class="text-muted mb-0">{{ data.date }}</p>
                          </div>
                        </BTd>
                        <BTd>
                          <div class="text-end">
                            <h5 class="font-size-14 mb-0">{{ data.text }}</h5>
                          </div>
                        </BTd>
                        <BTd>
                          <div class="text-end">
                            <h5 class="font-size-14 text-muted mb-0">
                              {{ data.price }}
                            </h5>
                          </div>
                        </BTd>
                      </BTr>
                    </BTbody>
                  </BTableSimple>
                </simplebar>
              </BTab>
            </BTabs>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol xl="4">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Notifications</BCardTitle>
            <ul class="list-group">
              <simplebar style="max-height: 390px">
                <li class="list-group-item border-0" v-for="(item, index) in dataList" :key="index">
                  <div class="d-flex">
                    <div class="avatar-xs me-3">
                      <span class="avatar-title rounded-circle bg-light">
                        <img :src="item.imageSrc" alt height="18" />
                      </span>
                    </div>
                    <div class="flex-grow-1">
                      <h5 class="font-size-14">{{ item.title }}</h5>
                      <p class="text-muted">{{ item.description }}</p>

                      <div class="float-end">
                        <p class="text-muted mb-0">
                          <i class="mdi mdi-account me-1"></i> {{ item.author }}
                        </p>
                      </div>
                      <p class="text-muted mb-0">{{ item.date }}</p>
                    </div>
                  </div>
                </li>
              </simplebar>
            </ul>
          </BCardBody>
        </BCard>
      </BCol>
      
      <BCol xl="4">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Buy / Sell</BCardTitle>
            <BTabs pills nav-class="bg-light rounded crypto-buy-tabs" content-class="mt-4">
              <BTab title="Buy" active>
                <div class="float-end ms-2">
                  <h5 class="font-size-14">
                    <i class="bx bx-wallet text-primary font-size-16 align-middle me-1"></i>
                    $4235.23
                  </h5>
                </div>
                <h5 class="font-size-14 mb-4">Buy Coin</h5>

                <div>
                  <div class="form-group mb-3">
                    <label>Payment method :</label>
                    <select class="form-select">
                      <option>Credit / Debit Card</option>
                      <option>Paypal</option>
                    </select>
                  </div>

                  <div>
                    <label>Add Amount :</label>
                    <div class="input-group mb-3">
                      <label class="input-group-text">Amount</label>
                      <select class="form-select" style="max-width: 90px">
                        <option value="BT" selected>BTC</option>
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
                <div class="float-end ms-2">
                  <h5 class="font-size-14">
                    <i class="bx bx-wallet text-primary font-size-16 align-middle me-1"></i>
                    $4235.23
                  </h5>
                </div>
                <h5 class="font-size-14 mb-4">Sell Coin</h5>

                <div>
                  <div class="form-group mb-3">
                    <label>Email :</label>
                    <input type="email" class="form-control" />
                  </div>
                  <div>
                    <label>Add Amount :</label>
                    <div class="input-group mb-3">
                      <label class="input-group-text">Amount</label>

                      <select class="form-select" style="max-width: 90px">
                        <option value="BT" selected>BTC</option>
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
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>

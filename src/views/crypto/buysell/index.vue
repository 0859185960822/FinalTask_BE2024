<script>
import Layout from "../../../layouts/main";
import PageHeader from "@/components/page-header";

/**
 * Buy/Sell component
 */
export default {
  components: { Layout, PageHeader },
  data() {
    return {
      currencyOptions: [
        {
          id: 1,
          radioName: "currency",
          radioId: "buycurrencyoption1",
          iconClass: "mdi mdi-bitcoin font-size-24 text-warning align-middle me-2",
          currencyName: " Bitcoin",
          currentPrice: "0.00016 BTC",
          checked: true,
        },
        {
          id: 2,
          radioName: "currency",
          radioId: "buycurrencyoption2",
          iconClass: "mdi mdi-ethereum font-size-24 text-primary align-middle me-2",
          currencyName: " Ethereum",
          currentPrice: "0.0073 ETH",
          checked: false,
        },
        {
          id: 3,
          radioName: "currency",
          radioId: "buycurrencyoption3",
          iconClass: "mdi mdi-litecoin font-size-24 text-info align-middle me-2",
          currencyName: " Litecoin",
          currentPrice: "0.025 LTC",
          checked: false,
        },
      ],
    }
  }
};
</script>

<template>
  <Layout>
    <PageHeader title="Buy/Sell" pageTitle="Crypto" />

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <BCardBody>
            <div class="float-end">
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
                <BDropdownItem href="javascript: void(0);">
                  BTC :
                  <span class="float-end">1.02356</span>
                </BDropdownItem>
                <BDropdownItem href="javascript: void(0);">
                  ETH :
                  <span class="float-end">0.04121</span>
                </BDropdownItem>
                <BDropdownItem href="javascript: void(0);">
                  LTC :
                  <span class="float-end">0.00356</span>
                </BDropdownItem>
                <BDropdownDivider />
                <BDropdownItem variant="primary" href="javascript: void(0);">
                  <div style="text-align: center;">Learn more</div>
                </BDropdownItem>
              </BDropdown>
            </div>
            <BCardTitle class="mb-4">Buy/Sell Crypto</BCardTitle>
            <BTabs content-class="crypto-buy-sell-nav-content p-4" nav-class="nav-tabs-custom">
              <BTab title="Buy" active>
                <BForm>
                  <div class="mb-2">
                    <label>Currency :</label>
                    <BRow>
                      <BCol xl="2" sm="4" v-for="item in currencyOptions" :key="item.id">
                        <div class="mb-3">
                          <label class="card-radio-label mb-2">
                            <input type="radio" :name="item.radioName" :id="item.radioId" class="card-radio-input"
                              :checked="item.checked" />

                            <div class="card-radio">
                              <div>
                                <i :class="item.iconClass"></i>
                                <span>{{ item.currencyName }}</span>
                              </div>
                            </div>
                          </label>

                          <div>
                            <p class="text-muted mb-1">Current price :</p>
                            <h5 class="font-size-16">{{ item.currentPrice }}</h5>
                          </div>
                        </div>
                      </BCol>
                    </BRow>
                  </div>

                  <div class="mb-2">
                    <label>Payment method :</label>

                    <BRow>
                      <BCol xl="2" sm="4">
                        <label class="card-radio-label mb-3">
                          <input type="radio" name="pay-method" id="pay-methodoption1" class="card-radio-input" />
                          <div class="card-radio">
                            <i class="fab fa-cc-mastercard font-size-24 text-primary align-middle me-2"></i>
                            <span> Credit / Debit Card</span>
                          </div>
                        </label>
                      </BCol>

                      <BCol xl="2" sm="4">
                        <label class="card-radio-label mb-3">
                          <input type="radio" name="pay-method" id="pay-methodoption3" class="card-radio-input" checked />
                          <div class="card-radio">
                            <i class="fab fa-cc-paypal font-size-24 text-primary align-middle me-2"></i>
                            <span> Paypal</span>
                          </div>
                        </label>
                      </BCol>
                    </BRow>
                  </div>
                  <div class="mb-3">
                    <label>Add value :</label>

                    <BRow>
                      <BCol sm="6">
                        <div class="input-group mb-2 currency-value">
                          <div class="input-group-prepend">
                            <span class="input-group-text">Bitcoin</span>
                          </div>
                          <input type="text" class="form-control" />
                        </div>
                      </BCol>

                      <BCol sm="6">
                        <div class="input-group mb-2">
                          <input type="text" class="form-control text-sm-right" />

                          <div class="input-group-append">
                            <span class="input-group-text">USD Amount</span>
                          </div>
                        </div>
                      </BCol>
                    </BRow>
                  </div>

                  <div class="mb-3">
                    <label>Wallet Address :</label>
                    <input type="text" class="form-control" />
                  </div>
                  <div class="text-center mt-4">
                    <BButton variant="success">Buy Crypto currency</BButton>
                  </div>
                </BForm>
              </BTab>
              <BTab title="Sell">
                <BForm>
                  <div class="mb-2">
                    <label>Currency :</label>

                    <BRow>
                      <BCol xl="2" sm="4" v-for="item in currencyOptions" :key="item.id">
                        <div class="mb-3">
                          <label class="card-radio-label mb-2">
                            <input type="radio" :name="item.radioName" :id="item.radioId" class="card-radio-input"
                              :checked="item.checked" />

                            <div class="card-radio">
                              <div>
                                <i :class="item.iconClass"></i>
                                <span>{{ item.currencyName }}</span>
                              </div>
                            </div>
                          </label>

                          <div>
                            <p class="text-muted mb-1">Current price :</p>
                            <h5 class="font-size-16">{{ item.currentPrice }}</h5>
                          </div>
                        </div>
                      </BCol>
                    </BRow>
                  </div>

                  <div class="mb-3">
                    <label>Email :</label>
                    <input type="email" class="form-control" />
                  </div>

                  <div class="mb-3">
                    <label>Add value :</label>

                    <BRow>
                      <BCol sm="6">
                        <div class="input-group mb-2 currency-value">
                          <div class="input-group-prepend">
                            <span class="input-group-text">Crypto value</span>
                          </div>
                          <input type="text" class="form-control" />
                        </div>
                      </BCol>

                      <BCol sm="6">
                        <div class="input-group mb-2">
                          <input type="text" class="form-control text-sm-right" />

                          <div class="input-group-append">
                            <span class="input-group-text">USD Amount</span>
                          </div>
                        </div>
                      </BCol>
                    </BRow>
                  </div>

                  <div class="mb-3">
                    <label>Wallet Address :</label>
                    <input type="text" class="form-control" />
                  </div>
                  <div class="text-center mt-4">
                    <BButton variant="danger">Sell Crypto currency</BButton>
                  </div>
                </BForm>
              </BTab>
            </BTabs>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>
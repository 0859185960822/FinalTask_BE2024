<script>
import Layout from "../../../layouts/main";
import PageHeader from "@/components/page-header";
import { eventList, cryptocurrencies, assetData } from "./data"

/**
 * Lending component
 */
export default {
  components: { Layout, PageHeader },
  data() {
    return {
      eventList, cryptocurrencies, assetData
    }
  }
};
</script>

<template>
  <Layout>
    <PageHeader title="Lending" pageTitle="Crypto" />

    <BRow>
      <BCol xl="4">
        <BCard no-body>
          <BCardBody class="border-bottom">
            <BDropdown class="float-end ms-2" toggle-class="text-muted p-0" menu-class="dropdown-menu-end" right variant="white">
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
                <h5 class>Henry Wells</h5>
                <p class="text-muted mb-1">henrywells@abc.com</p>
                <p class="text-muted mb-0">Id no: #SK0234</p>
              </div>
            </div>
          </BCardBody>
          <BCardBody class="border-bottom">
            <div>
              <BRow>
                <BCol sm="6">
                  <div>
                    <p class="text-muted mb-2">Available Balance</p>
                    <h5>$ 9148.00</h5>
                  </div>
                </BCol>
                <BCol sm="6">
                  <div class="text-sm-end mt-4 mt-sm-0">
                    <p class="text-muted mb-2">Since last month</p>
                    <h5>
                      + $ 215.53
                      <span class="badge bg-success ms-1 align-bottom">+ 1.3 %</span>
                    </h5>
                  </div>
                </BCol>
              </BRow>
            </div>
          </BCardBody>
        </BCard>

        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">How it work</BCardTitle>
            <div>
              <ul class="verti-timeline list-unstyled">
                <li class="event-list" v-for="event in eventList" :key="event.id">
                  <div class="event-timeline-dot">
                    <i class="bx bx-right-arrow-circle"></i>
                  </div>
                  <div class="d-flex">
                    <div class="me-3">
                      <i :class="event.iconClass"></i>
                    </div>
                    <div class="flex-grow-1">
                      <div>
                        <h5 class="font-size-14">{{ event.title }}</h5>
                        <p class="text-muted">{{ event.description }}</p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol xl="8">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Deposits</BCardTitle>

            <BRow>
              <BCol lg="4" v-for="crypto in cryptocurrencies" :key="crypto.id">
                <div class="border p-3 rounded mt-4">
                  <div class="d-flex align-items-center mb-3">
                    <div class="avatar-xs me-3">
                      <span :class="`avatar-title rounded-circle bg-${crypto.avatarClass}-subtle text-${crypto.avatarClass} font-size-18 mdi mdi-${crypto.avatar}`"></span>
                    </div>
                    <h5 class="font-size-14 mb-0">{{ crypto.name }}</h5>
                  </div>
                  <BRow>
                    <BCol lg="6">
                      <div class="text-muted mt-3">
                        <p>Annual Yield</p>
                        <h4>{{ crypto.annualYield }}</h4>
                        <p class="mb-0">{{ crypto.amount }}</p>
                      </div>
                    </BCol>
                    <BCol lg="6" class="align-self-end">
                      <div class="float-end mt-3">
                        <BLink href="javascript: void(0);" class="btn btn-primary">Select</BLink>
                      </div>
                    </BCol>
                  </BRow>
                </div>
              </BCol>
            </BRow>
          </BCardBody>
        </BCard>
        <BCard no-body>
          <BCardBody class="pb-0">
            <BCardTitle class="mb-4">My Assets</BCardTitle>

            <div class="table-responsive">
              <BTableSimple class="table-nowrap table-centered mb-0 align-middle">
                <BThead>
                  <BTr>
                    <BTh scope="col">Token</BTh>
                    <BTh scope="col">Price</BTh>
                    <BTh scope="col">Invest</BTh>
                    <BTh scope="col">Loans</BTh>
                    <BTh scope="col" colspan="2">Total</BTh>
                  </BTr>
                </BThead>
                <BTbody>

                  <BTr v-for="(crypto, index) in assetData" :key="index">
                    <BTh scope="row">
                      <div class="d-flex align-items-center">
                        <div class="avatar-xs me-3">
                          <span :class="`avatar-title rounded-circle bg-${crypto.avatarClass}-subtle text-${crypto.avatarClass} font-size-18 mdi mdi-${crypto.avatar}`"></span>
                        </div>
                        {{ crypto.symbol }}
                      </div>
                    </BTh>
                    <BTd>
                      <div class="text-muted">{{ crypto.price }}</div>
                    </BTd>
                    <BTd>
                      <h5 class="font-size-14 mb-1">{{ crypto.quantity }}</h5>
                      <div class="text-muted">{{ crypto.value }}</div>
                    </BTd>
                    <BTd>
                      <h5 class="font-size-14 mb-1">{{ crypto.holding }}</h5>
                      <div class="text-muted">{{ crypto.holdingValue }}</div>
                    </BTd>
                    <BTd>
                      <h5 class="font-size-14 mb-1">{{ crypto.total }}</h5>
                      <div class="text-muted">{{ crypto.totalValue }}</div>
                    </BTd>
                    <BTd class="text-center">
                      <BLink href="javascript: void(0);" class="btn btn-primary btn-sm w-xs">View</BLink>
                    </BTd>
                  </BTr>
                </BTbody>
              </BTableSimple>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>
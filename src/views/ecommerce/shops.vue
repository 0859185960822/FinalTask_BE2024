<script>
import Layout from '../../layouts/main';
import PageHeader from '@/components/page-header';

import { shopsData } from './data-shops';

/**
 * Shops component
 */
export default {
  components: { Layout, PageHeader },
  data() {
    return {
      shopsData
    };
  },
};
</script>

<template>
  <Layout>
    <PageHeader title="Shops" pageTitle="Ecommerce" />

    <BRow>
      <BCol xl="4" sm="6" v-for="shops in shopsData" :key="shops.id">
        <BCard no-body>
          <BRow>
            <BCol xl="5">
              <div class="text-center p-4 border-end">
                <div class="avatar-sm mx-auto mb-3 mt-1">
                  <span
                    :class="`avatar-title rounded-circle bg-${shops.color}-subtle text-${shops.color} font-size-16`">{{
                      shops.avatar }}</span>
                </div>
                <h5 class="text-truncate pb-1">{{ shops.name }}</h5>
              </div>
            </BCol>

            <BCol xl="7">
              <div class="p-4 text-center text-xl-start">
                <BRow>
                  <BCol cols="6">
                    <div>
                      <p class="text-muted mb-2 text-truncate">Products</p>
                      <h5>{{ shops.products }}</h5>
                    </div>
                  </BCol>
                  <BCol cols="6">
                    <div>
                      <p class="text-muted mb-2 text-truncate">Wallet Balance</p>
                      <h5>{{ shops.balance }}</h5>
                    </div>
                  </BCol>
                </BRow>
                <div class="mt-4">
                  <BLink class="text-decoration-underline text-reset">See Profile<i
                      class="mdi mdi-arrow-right ms-1"></i></BLink>
                </div>
              </div>
            </BCol>
          </BRow>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol cols="12">
        <div class="text-center my-3">
          <BLink href="javascript:void(0);" class="text-success">
            <i class="bx bx-loader bx-spin font-size-18 align-middle me-2"></i> Load more
          </BLink>
        </div>
      </BCol>
    </BRow>
  </Layout>
</template>

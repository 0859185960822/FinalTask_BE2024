<script>
import Layout from '../../layouts/main'
import PageHeader from '@/components/page-header'

import { pricingData } from './data-pricing'

/**
 * Pricing component
 */
export default {
  components: { Layout, PageHeader },
  data() {
    return {
      pricingData: pricingData,
    }
  },
}
</script>
<template>
  <Layout>
    <PageHeader title="Pricing" pageTitle="Utility" />

    <BRow class="justify-content-center">
      <BCol lg="6">
        <div class="text-center mb-5">
          <h4>Choose your Pricing plan</h4>
          <p class="text-muted">To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words If several languages coalesce</p>
        </div>
      </BCol>
    </BRow>
    
    <BRow>
      <BCol xl="3" md="6" v-for="data in pricingData" :key="data.price">
        <BCard no-body class="plan-box">
          <BCardBody class="p-4">
            <div class="d-flex">
              <div class="flex-grow-1">
                <h5>{{ data.name }}</h5>
                <p class="text-muted">{{ data.text }}</p>
              </div>
              <div class="ms-3">
                <i :class="`bx ${data.icon} h1 text-primary`"></i>
              </div>
            </div>
            <div class="py-4">
              <h2>
                <sup>
                  <small>$</small>
                </sup>
                {{ data.price }}/
                <span class="font-size-13">Per month</span>
              </h2>
            </div>
            <div class="text-center plan-btn">
              <BLink href="javascript: void(0);" class="btn btn-primary btn-sm position-relative">Sign up Now</BLink>
            </div>

            <div class="plan-features mt-5">
              <p>
                <i class="bx bx-checkbox-square text-primary me-2"></i> Free Live Support
              </p>
              <p>
                <i class="bx bx-checkbox-square text-primary me-2"></i> Unlimited User
              </p>
              <p>
                <i class="bx bx-checkbox-square text-primary me-2"></i> No Time Tracking
              </p>
              <p>
                <i class="bx bx-checkbox-square text-primary me-2"></i> Free Setup
              </p>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>
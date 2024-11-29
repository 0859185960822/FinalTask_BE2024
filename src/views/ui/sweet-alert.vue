<script>

import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import { alerts } from '@/views/ui/sweetalert';

/**
 * Sweet-alert component
 */
export default {
  components: { Layout, PageHeader },
  data() {
    return {
      alerts
    }
  },

};
</script>

<template>
  <Layout>
    <PageHeader title="SweetAlert 2" pageTitle="UI Elements" />

    <BRow>
      <BCol cols="12">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Examples</BCardTitle>

            <p class="card-title-desc">
              A beautiful, responsive, customizable
              and accessible (WAI-ARIA) replacement for JavaScript's popup boxes. Zero
              dependencies.
            </p>

            <BRow class="text-center">

              <BCol xl="3" lg="4" sm="6" v-for="(alert, index) in alerts" :key="'alert-' + index" class="mb-2">
                <div class="p-3">
                  <p> {{ alert.message }} </p>
                  <BButton variant="primary" @click="alert.type">Click me</BButton>
                </div>
              </BCol>
            </BRow>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>
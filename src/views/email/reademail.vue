<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

import Toolbar from "./toolbar";
import Sidepanel from "./sidepanel";

import { emailData } from "./data-inbox";

/**
 * Email-read component
 */
export default {
  components: {
    Layout,
    PageHeader,
    Toolbar,
    Sidepanel
  },
  data() {
    return {
      emailread: null,
      emailData: emailData,
    };
  },
  created() {
    this.emailRead = emailData.filter(email => {
      return email.id === parseInt(this.$route.params.id);
    });
  }
};
</script>

<template>
  <Layout>
    <PageHeader title="Read Email" pageTitle="Email" />

    <BRow>
      <BCol cols="12">
        <Sidepanel />

        <div class="email-rightbar mb-3">
          <BCard no-body>
            <div class="btn-toolbar p-3" role="toolbar">
              <Toolbar />
            </div>
            <BCardBody>
              <div class="d-flex mb-4">
                <img class="d-flex me-3 rounded-circle avatar-sm" src="@/assets/images/users/avatar-2.jpg"
                  alt="Generic placeholder image" />
                <div class="flex-grow-1">
                  <h5 class="font-size-14 mt-1">Humberto D. Champion</h5>
                  <small class="text-muted">support@domain.com</small>
                </div>
              </div>

              <h4 class="mt-0 font-size-16">{{ emailRead[0].title }}</h4>

              <p>Dear Lorem Ipsum,</p>
              <p>{{ emailRead[0].subject }}</p>
              <p>Sed elementum turpis eu lorem interdum, sed porttitor eros commodo. Nam eu venenatis tortor, id lacinia
                diam. Sed aliquam in dui et porta. Sed bibendum orci non tincidunt ultrices. Vivamus fringilla, mi lacinia
                dapibus condimentum, ipsum urna lacinia lacus, vel tincidunt mi nibh sit amet lorem.</p>
              <p>Sincerly,</p>
              <hr />

              <BRow>
                <BCol xl="2" cols="6">
                  <BCard no-body>
                    <img class="card-img-top img-fluid" src="@/assets/images/small/img-3.jpg" alt="Card image cap" />
                    <div class="py-2 text-center">
                      <BLink class="fw-medium">Download</BLink>
                    </div>
                  </BCard>
                </BCol>
                <BCol xl="2" cols="6">
                  <BCard no-body>
                    <img class="card-img-top img-fluid" src="@/assets/images/small/img-4.jpg" alt="Card image cap" />
                    <div class="py-2 text-center">
                      <BLink  class="fw-medium">Download</BLink>
                    </div>
                  </BCard>
                </BCol>
              </BRow>

              <BLink href="javascript: void(0);" class="btn btn-secondary waves-effect mt-4">
                <i class="mdi mdi-reply"></i> Reply
              </BLink>
            </BCardBody>
          </BCard>
        </div>
      </BCol>
    </BRow>
  </Layout>
</template>

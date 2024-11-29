<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

// import { ref } from 'vue'

// const dismissCountDown = ref(10000);
// const countdown = ref(0);


/**
 * Alerts component
 */
export default {
  components: { Layout, PageHeader },
  data() {
    return {
      dismissSecs: 5,
      dismissCountDown: 0,

      dismissibleAlert: true,
      dismissibleAlert1: true,
      dismissibleAlert2: true,
      dismissibleAlert3: true,
      dismissibleAlert4: true,
      dismissibleAlert5: true,
      dismissibleAlert6: true,
      dismissibleAlert7: true,
      dismissibleAlert8: true,
      dismissibleAlert9: true,
      dismissibleAlert10: true,
      dismissibleAlert11: true,

    };
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
  },
};
</script>

<template>
  <Layout>
    <PageHeader title="Alerts" pageTitle="UI Elements" />

    <BRow>
      <BCol xl="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Default Alerts</BCardTitle>

            <p class="card-title-desc">Alerts are available for any length of
              text, as well as an optional dismiss button. For proper styling, use one
              of the four <strong>required</strong> contextual classes (e.g., <code>.alert-success</code>). For inline
              dismissal, use the alerts jQuery plugin.</p>

            <div class="">
              <BAlert :model-value="true" variant="primary">
                A simple primary alert—check it out!
              </BAlert>
              <BAlert :model-value="true" variant="secondary">
                A simple secondary alert—check it out!
              </BAlert>
              <BAlert :model-value="true" variant="success">
                A simple success alert—check it out!
              </BAlert>
              <BAlert :model-value="true" variant="danger">
                A simple danger alert—check it out!
              </BAlert>
              <BAlert :model-value="true" variant="warning">
                A simple warning alert—check it out!
              </BAlert>
              <BAlert :model-value="true" variant="info" class="mb-0">
                A simple info alert—check it out!
              </BAlert>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol xl="6">
        <BCard no-body>
          <BCardBody class="pb-0">
            <BCardTitle>Link color</BCardTitle>

            <p class="card-title-desc">Use the <code>.alert-link</code> utility class to
              quickly provide matching colored links within any alert.</p>

            <div class="">
              <BAlert :model-value="true" variant="primary">
                A simple primary alert with <BLink href="javascript: void(0);" class="alert-link">an example link</BLink>. Give it
                a click if you like.
              </BAlert>
              <BAlert :model-value="true" variant="secondary">
                A simple secondary alert with <BLink href="javascript: void(0);" class="alert-link">an example link</BLink>. Give
                it a click if you like.
              </BAlert>
              <BAlert :model-value="true" variant="success">
                A simple success alert with <BLink href="javascript: void(0);" class="alert-link">an example link</BLink>. Give it
                a click if you like.
              </BAlert>
              <BAlert :model-value="true" variant="danger">
                A simple danger alert with <BLink href="javascript: void(0);" class="alert-link">an example link</BLink>. Give it
                a click if you like.
              </BAlert>
              <BAlert :model-value="true" variant="warning">
                A simple warning alert with <BLink href="javascript: void(0);" class="alert-link">an example link</BLink>. Give it
                a click if you like.
              </BAlert>
              <BAlert :model-value="true" variant="info">
                A simple info alert with <BLink href="javascript: void(0);" class="alert-link">an example link</BLink>. Give it a
                click if you like.
              </BAlert>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol xl="6">
        <BCard no-body>
          <BCardBody class="pb-0">

            <BCardTitle>Dismissing</BCardTitle>

            <p class="card-title-desc">
              Add a dismiss button and the <code>.alert-dismissible</code> class, which adds extra padding
              to the right of the alert and positions the <code>.btn-close</code> button.
            </p>

            <div class="">
              <BAlert variant="primary" v-model="dismissibleAlert" show dismissible>
                A simple primary alert—check it out!
              </BAlert>
              <BAlert variant="secondary" v-model="dismissibleAlert1" show dismissible>
                A simple secondary alert—check it out!
              </BAlert>
              <BAlert variant="success" v-model="dismissibleAlert2" show dismissible>
                A simple success alert—check it out!
              </BAlert>
              <BAlert variant="danger" v-model="dismissibleAlert3" show dismissible>
                A simple danger alert—check it out!
              </BAlert>
              <BAlert variant="warning" v-model="dismissibleAlert4" show dismissible>
                A simple warning alert—check it out!
              </BAlert>
              <BAlert variant="info" v-model="dismissibleAlert5" show dismissible>
                A simple info alert—check it out!
              </BAlert>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol xl="6">
        <BCard no-body>
          <BCardBody class="pb-0">
            <BCardTitle class="mb-4">With Icon</BCardTitle>

            <div class="">
              <BAlert variant="primary" dismissible v-model="dismissibleAlert6" show>
                <i class="mdi mdi-bullseye-arrow me-2"></i>
                A simple primary alert—check it out!

              </BAlert>
              <BAlert variant="secondary" dismissible v-model="dismissibleAlert7" show>
                <i class="mdi mdi-grease-pencil me-2"></i>
                A simple secondary alert—check it out!

              </BAlert>
              <BAlert variant="success" dismissible v-model="dismissibleAlert8" show>
                <i class="mdi mdi-check-all me-2"></i>
                A simple success alert—check it out!

              </BAlert>
              <BAlert variant="danger" dismissible v-model="dismissibleAlert9" show>
                <i class="mdi mdi-block-helper me-2"></i>
                A simple danger alert—check it out!

              </BAlert>
              <BAlert variant="warning" dismissible v-model="dismissibleAlert10" show>
                <i class="mdi mdi-alert-outline me-2"></i>
                A simple warning alert—check it out!

              </BAlert>
              <BAlert variant="info" dismissible v-model="dismissibleAlert11" show>
                <i class="mdi mdi-alert-circle-outline me-2"></i>
                A simple info alert—check it out!
              </BAlert>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol xl="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Live Example</BCardTitle>

            <p class="card-title-desc">Click the button below to show an alert (hidden with inline styles to start), then
              dismiss (and destroy) it with the built-in close button.</p>
            <BAlert v-model="dismissCountDown" dismissible variant="warning" @close-countdown="countdown = $event">
              <p>This alert will dismiss after {{ countdown / 1000 }} seconds...</p>
              <BProgress variant="warning" :max="dismissCountDown" :value="countdown" height="4px" />
            </BAlert>
            <BButton @click="dismissCountDown = dismissCountDown + 1000" variant="primary" class="m-1">
              Add a second to the alert with countdown timer
            </BButton>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol xl="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Additional content</BCardTitle>

            <p class="card-title-desc">Alerts can also contain additional HTML elements like headings, paragraphs and
              dividers.</p>

            <div class="">
              <BAlert variant="success" :model-value="true">
                <h4 class="alert-heading">Well done!</h4>
                <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit
                  longer so
                  that you can see how spacing within an alert works with this kind of content.</p>
                <hr>
                <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
              </BAlert>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>

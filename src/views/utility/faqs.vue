<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

/**
 * FAQs component
 */
export default {
  components: { Layout, PageHeader },
};
</script>
<template>
  <Layout>
    <PageHeader title="FAQs" pageTitle="Utility" />

    <div class="checkout-tabs">
      <BTabs pills vertical nav-class="p-0" nav-wrapper-class="col-xl-2 col-sm-3">
        <BTab active>
          <template v-slot:title>
            <i class="bx bx-question-mark d-block check-nav-icon mt-4 mb-2"></i>
            <p class="fw-bold mb-4">General Questions</p>
          </template>
          <BCardText>
            <BCard no-body>
              <BCardBody>
                <div class="tab-pane fade show active">
                  <BCardTitle class="mb-5">General Questions</BCardTitle>

                  <div class="faq-box d-flex mb-4">
                    <div class="faq-icon me-3">
                      <i class="bx bx-help-circle font-size-20 text-success"></i>
                    </div>
                    <div class="flex-grow-1">
                      <h5 class="font-size-15">What is Lorem Ipsum?</h5>
                      <p class="text-muted">New common language will be more simple and regular than the existing European languages. It will be as simple as occidental.</p>
                    </div>
                  </div>
                  <div class="faq-box d-flex mb-4">
                    <div class="faq-icon me-3">
                      <i class="bx bx-help-circle font-size-20 text-success"></i>
                    </div>
                    <div class="flex-grow-1">
                      <h5 class="font-size-15">Where does it come from?</h5>
                      <p class="text-muted">Everyone realizes why a new common language would be desirable one could refuse to pay expensive translators.</p>
                    </div>
                  </div>
                  <div class="faq-box d-flex mb-4">
                    <div class="faq-icon me-3">
                      <i class="bx bx-help-circle font-size-20 text-success"></i>
                    </div>
                    <div class="flex-grow-1">
                      <h5 class="font-size-15">Where can I get some?</h5>
                      <p class="text-muted">If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages.</p>
                    </div>
                  </div>
                  <div class="faq-box d-flex mb-4">
                    <div class="faq-icon me-3">
                      <i class="bx bx-help-circle font-size-20 text-success"></i>
                    </div>
                    <div class="flex-grow-1">
                      <h5 class="font-size-15">Why do we use it?</h5>
                      <p class="text-muted">Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary.</p>
                    </div>
                  </div>
                  <div class="faq-box d-flex">
                    <div class="faq-icon me-3">
                      <i class="bx bx-help-circle font-size-20 text-success"></i>
                    </div>
                    <div class="flex-grow-1">
                      <h5 class="font-size-15">Where can I get some?</h5>
                      <p class="text-muted">To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental</p>
                    </div>
                  </div>
                </div>
              </BCardBody>
            </BCard>
          </BCardText>
        </BTab>

        <BTab>
          <template v-slot:title>
            <i class="bx bx-check-shield d-block check-nav-icon mt-4 mb-2"></i>
            <p class="fw-bold mb-4">Privacy Policy</p>
          </template>
          <BCardText>
            <BCard no-body>
              <BCardBody>
                <div class="tab-pane">
                  <BCardTitle class="mb-5">Privacy Policy</BCardTitle>

                  <div class="faq-box d-flex mb-4">
                    <div class="faq-icon me-3">
                      <i class="bx bx-help-circle font-size-20 text-success"></i>
                    </div>
                    <div class="flex-grow-1">
                      <h5 class="font-size-15">Where does it come from?</h5>
                      <p class="text-muted">Everyone realizes why a new common language would be desirable one could refuse to pay expensive translators.</p>
                    </div>
                  </div>
                  <div class="faq-box d-flex mb-4">
                    <div class="faq-icon me-3">
                      <i class="bx bx-help-circle font-size-20 text-success"></i>
                    </div>
                    <div class="flex-grow-1">
                      <h5 class="font-size-15">Where can I get some?</h5>
                      <p class="text-muted">To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental</p>
                    </div>
                  </div>
                  <div class="faq-box d-flex mb-4">
                    <div class="faq-icon me-3">
                      <i class="bx bx-help-circle font-size-20 text-success"></i>
                    </div>
                    <div class="flex-grow-1">
                      <h5 class="font-size-15">What is Lorem Ipsum?</h5>
                      <p class="text-muted">New common language will be more simple and regular than the existing European languages. It will be as simple as occidental.</p>
                    </div>
                  </div>
                  <div class="faq-box d-flex mb-4">
                    <div class="faq-icon me-3">
                      <i class="bx bx-help-circle font-size-20 text-success"></i>
                    </div>
                    <div class="flex-grow-1">
                      <h5 class="font-size-15">Why do we use it?</h5>
                      <p class="text-muted">Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary.</p>
                    </div>
                  </div>
                  <div class="faq-box d-flex">
                    <div class="faq-icon me-3">
                      <i class="bx bx-help-circle font-size-20 text-success"></i>
                    </div>
                    <div class="flex-grow-1">
                      <h5 class="font-size-15">Where can I get some?</h5>
                      <p class="text-muted">If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages.</p>
                    </div>
                  </div>
                </div>
              </BCardBody>
            </BCard>
          </BCardText>
        </BTab>

        <BTab title-item-class="mb-2">
          <template v-slot:title>
            <i class="bx bx-support d-block check-nav-icon mt-4 mb-2"></i>
            <p class="fw-bold mb-4">Support</p>
          </template>
          <BCardText>
            <BCard no-body>
              <BCardBody>
                <div class="tab-pane">
                  <BCardTitle class="mb-5">Support</BCardTitle>

                  <div class="faq-box d-flex mb-4">
                    <div class="faq-icon me-3">
                      <i class="bx bx-help-circle font-size-20 text-success"></i>
                    </div>
                    <div class="flex-grow-1">
                      <h5 class="font-size-15">Where can I get some?</h5>
                      <p class="text-muted">To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental</p>
                    </div>
                  </div>
                  <div class="faq-box d-flex mb-4">
                    <div class="faq-icon me-3">
                      <i class="bx bx-help-circle font-size-20 text-success"></i>
                    </div>
                    <div class="flex-grow-1">
                      <h5 class="font-size-15">Where does it come from?</h5>
                      <p class="text-muted">Everyone realizes why a new common language would be desirable one could refuse to pay expensive translators.</p>
                    </div>
                  </div>

                  <div class="faq-box d-flex mb-4">
                    <div class="faq-icon me-3">
                      <i class="bx bx-help-circle font-size-20 text-success"></i>
                    </div>
                    <div class="flex-grow-1">
                      <h5 class="font-size-15">Why do we use it?</h5>
                      <p class="text-muted">Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary.</p>
                    </div>
                  </div>
                  <div class="faq-box d-flex mb-4">
                    <div class="faq-icon me-3">
                      <i class="bx bx-help-circle font-size-20 text-success"></i>
                    </div>
                    <div class="flex-grow-1">
                      <h5 class="font-size-15">Where can I get some?</h5>
                      <p class="text-muted">If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages.</p>
                    </div>
                  </div>

                  <div class="faq-box d-flex">
                    <div class="faq-icon me-3">
                      <i class="bx bx-help-circle font-size-20 text-success"></i>
                    </div>
                    <div class="flex-grow-1">
                      <h5 class="font-size-15">What is Lorem Ipsum?</h5>
                      <p class="text-muted">New common language will be more simple and regular than the existing European languages. It will be as simple as occidental.</p>
                    </div>
                  </div>
                </div>
              </BCardBody>
            </BCard>
          </BCardText>
        </BTab>
      </BTabs>
    </div>
  </Layout>
</template>
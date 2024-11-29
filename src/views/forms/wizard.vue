<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

/**
 * Form wizard component
 */
export default {
  data() {
    return {
      activeTab: 1,
      activeVerticalTab: 1,
    }
  },
  components: {
    Layout, PageHeader,
  },

  methods: {
    toggleTab(tab) {
      this.activeTab = tab;
    },
    toggleVerticalTab(tab) {
      this.activeVerticalTab = tab;
    }
  },
};
</script>

<template>
  <Layout>
    <PageHeader title="Form Wizard" pageTitle="Forms" />

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Basic Wizard</BCardTitle>

            <div id="basic-example" role="application" class="wizard clearfix">
              <div class="steps clearfix">
                <ul role="tablist">
                  <li role="tab" :class="{ current: activeTab == 1, done: activeTab > 1 }" @click="toggleTab(1);"><a id="basic-example-t-0" href="#" aria-controls="basic-example-p-0"><span class="number">1.</span> Seller Details</a></li>
                  <li role="tab" :class="{ current: activeTab == 2, done: activeTab > 2 }" @click="toggleTab(2);"><a id="basic-example-t-1" href="#" aria-controls="basic-example-p-1"><span class="number">2.</span> Company Document</a></li>
                  <li role="tab" :class="{ current: activeTab == 3, done: activeTab > 3 }" @click="toggleTab(3);"><a id="basic-example-t-2" href="#" aria-controls="basic-example-p-2"><span class="number">3.</span> Bank Details</a></li>
                  <li role="tab" :class="{ current: activeTab == 4, done: activeTab > 4 }" @click="toggleTab(4);"><a id="basic-example-t-3" href="#" aria-controls="basic-example-p-3"><span class="number">4.</span> Confirm Detail</a></li>
                </ul>
              </div>
              <div class="content clearfix">
                <!-- Seller Details -->
                <h3 id="basic-example-h-0" tabindex="-1" class="title current">Seller Details</h3>
                <section id="basic-example-p-0" role="tabpanel" :class="activeTab == 1 ? 'body current' : 'd-none'">
                  <BForm>
                    <BRow>
                      <BCol lg="6">
                        <div class="mb-3">
                          <label for="basicpill-firstname-input">First name</label>
                          <BFormInput type="text" class="form-control" id="basicpill-firstname-input" placeholder="Enter Your First Name" />
                        </div>
                      </BCol>
                      <BCol lg="6">
                        <div class="mb-3">
                          <label for="basicpill-lastname-input">Last name</label>
                          <BFormInput type="text" class="form-control" id="basicpill-lastname-input" placeholder="Enter Your Last Name" />
                        </div>
                      </BCol>
                    </BRow>

                    <BRow>
                      <BCol lg="6">
                        <div class="mb-3">
                          <label for="basicpill-phoneno-input">Phone</label>
                          <BFormInput type="text" class="form-control" id="basicpill-phoneno-input" placeholder="Enter Your Phone No." />
                        </div>
                      </BCol>
                      <BCol lg="6">
                        <div class="mb-3">
                          <label for="basicpill-email-input">Email</label>
                          <BFormInput type="email" class="form-control" id="basicpill-email-input" placeholder="Enter Your Email ID" />
                        </div>
                      </BCol>
                    </BRow>
                    <BRow>
                      <BCol lg="12">
                        <div class="mb-3">
                          <label for="basicpill-address-input">Address</label>
                          <BFormTextarea id="basicpill-address-input" class="form-control" rows="2" placeholder="Enter Your Address"></BFormTextarea>
                        </div>
                      </BCol>
                    </BRow>
                  </BForm>
                </section>

                <!-- Company Document -->
                <h3 id="basic-example-h-1" tabindex="-1" class="title">Company Document</h3>
                <section id="basic-example-p-1" role="tabpanel" :class="activeTab == 2 ? 'body current' : 'd-none'">
                  <BForm>
                    <BRow>
                      <BCol lg="6">
                        <div class="mb-3">
                          <label for="basicpill-pancard-input">PAN Card</label>
                          <BFormInput type="text" class="form-control" id="basicpill-pancard-input" placeholder="Enter Your PAN No." />
                        </div>
                      </BCol>

                      <BCol lg="6">
                        <div class="mb-3">
                          <label for="basicpill-vatno-input">VAT/TIN No.</label>
                          <BFormInput type="text" class="form-control" id="basicpill-vatno-input" placeholder="Enter Your VAT/TIN No." />
                        </div>
                      </BCol>
                    </BRow>
                    <BRow>
                      <BCol lg="6">
                        <div class="mb-3">
                          <label for="basicpill-cstno-input">CST No.</label>
                          <BFormInput type="text" class="form-control" id="basicpill-cstno-input" placeholder="Enter Your CST No." />
                        </div>
                      </BCol>

                      <BCol lg="6">
                        <div class="mb-3">
                          <label for="basicpill-servicetax-input">Service Tax No.</label>
                          <BFormInput type="text" class="form-control" id="basicpill-servicetax-input" placeholder="Enter Your Service Tax No." />
                        </div>
                      </BCol>
                    </BRow>
                    <BRow>
                      <BCol lg="6">
                        <div class="mb-3">
                          <label for="basicpill-companyuin-input">Company UIN</label>
                          <BFormInput type="text" class="form-control" id="basicpill-companyuin-input" placeholder="Enter Your Company UIN" />
                        </div>
                      </BCol>

                      <BCol lg="6">
                        <div class="mb-3">
                          <label for="basicpill-declaration-input">Declaration</label>
                          <BFormInput type="text" class="form-control" id="basicpill-Declaration-input" placeholder="Declaration Details" />
                        </div>
                      </BCol>
                    </BRow>
                  </BForm>
                </section>

                <!-- Bank Details -->
                <h3 id="basic-example-h-2" tabindex="-1" class="title">Bank Details</h3>
                <section id="basic-example-p-2" role="tabpanel" :class="activeTab == 3 ? 'body current' : 'd-none'">
                  <div>
                    <BForm>
                      <BRow>
                        <BCol lg="6">
                          <div class="mb-3">
                            <label for="basicpill-namecard-input">Name on Card</label>
                            <BFormInput type="text" class="form-control" id="basicpill-namecard-input" placeholder="Enter Your Name on Card" />
                          </div>
                        </BCol>

                        <BCol lg="6">
                          <div class="mb-3">
                            <label>Credit Card Type</label>
                            <select class="form-select">
                              <option selected="">Select Card Type</option>
                              <option value="AE">American Express</option>
                              <option value="VI">Visa</option>
                              <option value="MC">MasterCard</option>
                              <option value="DI">Discover</option>
                            </select>
                          </div>
                        </BCol>
                      </BRow>
                      <BRow>
                        <BCol lg="6">
                          <div class="mb-3">
                            <label for="basicpill-cardno-input">Credit Card Number</label>
                            <BFormInput type="text" class="form-control" id="basicpill-cardno-input" placeholder="Credit Card Number" />
                          </div>
                        </BCol>

                        <BCol lg="6">
                          <div class="mb-3">
                            <label for="basicpill-card-verification-input">Card Verification Number</label>
                            <BFormInput type="text" class="form-control" id="basicpill-card-verification-input" placeholder="Credit Verification Number" />
                          </div>
                        </BCol>
                      </BRow>
                      <BRow>
                        <BCol lg="6">
                          <div class="mb-3">
                            <label for="basicpill-expiration-input">Expiration Date</label>
                            <BFormInput type="text" class="form-control" id="basicpill-expiration-input" placeholder="Card Expiration Date" />
                          </div>
                        </BCol>
                      </BRow>
                    </BForm>
                  </div>
                </section>

                <!-- Confirm Details -->
                <h3 id="basic-example-h-3" tabindex="-1" class="title">Confirm Detail</h3>
                <section id="basic-example-p-3" role="tabpanel" :class="activeTab == 4 ? 'body current' : 'd-none'">
                  <BRow class="justify-content-center">
                    <BCol lg="6">
                      <div class="text-center">
                        <div class="mb-4">
                          <i class="mdi mdi-check-circle-outline text-success display-4"></i>
                        </div>
                        <div>
                          <h5>Confirm Detail</h5>
                          <p class="text-muted">If several languages coalesce, the grammar of the resulting</p>
                        </div>
                      </div>
                    </BCol>
                  </BRow>
                </section>
              </div>
              <div class="actions clearfix">
                <ul role="menu" aria-label="Pagination">
                  <li :class="{ disabled: activeTab <= 1 }">
                    <BLink href="#" :disabled="activeTab <= 1" @click="activeTab--">Previous</BLink>
                  </li>
                  <li :class="{ disabled: activeTab == 4 }">
                    <BLink href="#" :disabled="activeTab == 4" @click="activeTab++">{{ activeTab == 4 ? "Finish" : "Next" }}</BLink>
                  </li>
                </ul>
              </div>
            </div>

          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Vertical Wizard</BCardTitle>

            <div id="vertical-example" class="vertical-wizard wizard clearfix vertical" role="application">
              <div class="steps clearfix">
                <ul role="tablist">
                  <li role="tab" :class="{ current: activeVerticalTab == 1, done: activeVerticalTab > 1 }" @click="toggleVerticalTab(1);"><a id="vertical-example-t-0" href="#" aria-controls="vertical-example-p-0"><span class="number">1.</span> Seller Details</a></li>
                  <li role="tab" :class="{ current: activeVerticalTab == 2, done: activeVerticalTab > 2 }" @click="toggleVerticalTab(2);"><a id="vertical-example-t-1" href="#" aria-controls="vertical-example-p-1"><span class="number">2.</span> Company Document</a></li>
                  <li role="tab" :class="{ current: activeVerticalTab == 3, done: activeVerticalTab > 3 }" @click="toggleVerticalTab(3);"><a id="vertical-example-t-2" href="#" aria-controls="vertical-example-p-2"><span class="number">3.</span> Bank Details</a></li>
                  <li role="tab" :class="{ current: activeVerticalTab == 4, done: activeVerticalTab > 4 }" @click="toggleVerticalTab(4);"><a id="vertical-example-t-3" href="#" aria-controls="vertical-example-p-3"><span class="number">4.</span> Confirm Detail</a></li>
                </ul>
              </div>
              <div class="content clearfix">
                <!-- Seller Details -->
                <h3 id="vertical-example-h-0" tabindex="-1" class="title current">Seller Details</h3>
                <section id="vertical-example-p-0" role="tabpanel" aria-labelledby="vertical-example-h-0" :class="activeVerticalTab == 1 ? 'body current' : 'd-none'">
                  <BForm>
                    <BRow>
                      <BCol lg="6">
                        <div class="mb-3">
                          <label for="verticalnav-firstname-input">First name</label>
                          <BFormInput type="text" class="form-control" id="verticalnav-firstname-input" placeholder="Enter Your First Name" />
                        </div>
                      </BCol>
                      <BCol lg="6">
                        <div class="mb-3">
                          <label for="verticalnav-lastname-input">Last name</label>
                          <BFormInput type="text" class="form-control" id="verticalnav-lastname-input" placeholder="Enter Your Last Name" />
                        </div>
                      </BCol>
                    </BRow>

                    <BRow>
                      <BCol lg="6">
                        <div class="mb-3">
                          <label for="verticalnav-phoneno-input">Phone</label>
                          <BFormInput type="text" class="form-control" id="verticalnav-phoneno-input" placeholder="Enter Your Phone No." />
                        </div>
                      </BCol>
                      <BCol lg="6">
                        <div class="mb-3">
                          <label for="verticalnav-email-input">Email</label>
                          <BFormInput type="email" class="form-control" id="verticalnav-email-input" placeholder="Enter Your Email ID" />
                        </div>
                      </BCol>
                    </BRow>
                    <BRow>
                      <div lg="12">
                        <div class="mb-3">
                          <label for="verticalnav-address-input">Address</label>
                          <BFormTextarea id="verticalnav-address-input" class="form-control" rows="2" placeholder="Enter Your Address"></BFormTextarea>
                        </div>
                      </div>
                    </BRow>
                  </BForm>
                </section>

                <!-- Company Document -->
                <h3 id="vertical-example-h-1" tabindex="-1" class="title">Company Document</h3>
                <section id="vertical-example-p-1" role="tabpanel" aria-labelledby="vertical-example-h-1" :class="activeVerticalTab == 2 ? 'body current' : 'd-none'">
                  <BForm>
                    <BRow>
                      <BCol lg="6">
                        <div class="mb-3">
                          <label for="verticalnav-pancard-input">PAN Card</label>
                          <BFormInput type="text" class="form-control" id="verticalnav-pancard-input" placeholder="Enter Your PAN Card No." />
                        </div>
                      </BCol>

                      <BCol lg="6">
                        <div class="mb-3">
                          <label for="verticalnav-vatno-input">VAT/TIN No.</label>
                          <BFormInput type="text" class="form-control" id="verticalnav-vatno-input" placeholder="Enter Your VAT/TIN No." />
                        </div>
                      </BCol>
                    </BRow>
                    <BRow>
                      <BCol lg="6">
                        <div class="mb-3">
                          <label for="verticalnav-cstno-input">CST No.</label>
                          <BFormInput type="text" class="form-control" id="verticalnav-cstno-input" placeholder="Enter Your CST No." />
                        </div>
                      </BCol>

                      <BCol lg="6">
                        <div class="mb-3">
                          <label for="verticalnav-servicetax-input">Service Tax No.</label>
                          <BFormInput type="text" class="form-control" id="verticalnav-servicetax-input" placeholder="Enter Your Service Tax No." />
                        </div>
                      </BCol>
                    </BRow>
                    <BRow>
                      <BCol lg="6">
                        <div class="mb-3">
                          <label for="verticalnav-companyuin-input">Company UIN</label>
                          <BFormInput type="text" class="form-control" id="verticalnav-companyuin-input" placeholder="Company UIN No." />
                        </div>
                      </BCol>

                      <BCol lg="6">
                        <div class="mb-3">
                          <label for="verticalnav-declaration-input">Declaration</label>
                          <BFormInput type="text" class="form-control" id="verticalnav-Declaration-input" placeholder="Declaration Details" />
                        </div>
                      </BCol>
                    </BRow>
                  </BForm>
                </section>

                <!-- Bank Details -->
                <h3 id="vertical-example-h-2" tabindex="-1" class="title">Bank Details</h3>
                <section id="vertical-example-p-2" role="tabpanel" aria-labelledby="vertical-example-h-2" :class="activeVerticalTab == 3 ? 'body current' : 'd-none'">
                  <div>
                    <BForm>
                      <BRow>
                        <BCol lg="6">
                          <div class="mb-3">
                            <label for="verticalnav-namecard-input">Name on Card</label>
                            <BFormInput type="text" class="form-control" id="verticalnav-namecard-input" placeholder="Enter Your Name on Card" />
                          </div>
                        </BCol>

                        <BCol lg="6">
                          <div class="mb-3">
                            <label>Credit Card Type</label>
                            <select class="form-select">
                              <option selected="">Select Card Type</option>
                              <option value="AE">American Express</option>
                              <option value="VI">Visa</option>
                              <option value="MC">MasterCard</option>
                              <option value="DI">Discover</option>
                            </select>
                          </div>
                        </BCol>
                      </BRow>
                      <BRow>
                        <BCol lg="6">
                          <div class="mb-3">
                            <label for="verticalnav-cardno-input">Credit Card Number</label>
                            <BFormInput type="text" class="form-control" id="verticalnav-cardno-input" placeholder="Enter Your Card Number" />
                          </div>
                        </BCol>

                        <BCol lg="6">
                          <div class="mb-3">
                            <label for="verticalnav-card-verification-input">Card Verification Number</label>
                            <BFormInput type="text" class="form-control" id="verticalnav-card-verification-input" placeholder="Card Verification Number" />
                          </div>
                        </BCol>
                      </BRow>
                      <BRow>
                        <BCol lg="6">
                          <div class="mb-3">
                            <label for="verticalnav-expiration-input">Expiration Date</label>
                            <BFormInput type="text" class="form-control" id="verticalnav-expiration-input" placeholder="Card Expiration Date" />
                          </div>
                        </BCol>
                      </BRow>
                    </BForm>
                  </div>
                </section>

                <!-- Confirm Details -->
                <h3 id="vertical-example-h-3" tabindex="-1" class="title">Confirm Detail</h3>
                <section id="vertical-example-p-3" role="tabpanel" aria-labelledby="vertical-example-h-3" :class="activeVerticalTab == 4 ? 'body current' : 'd-none'">
                  <BRow class="justify-content-center">
                    <BCol lg="6">
                      <div class="text-center">
                        <div class="mb-4">
                          <i class="mdi mdi-check-circle-outline text-success display-4"></i>
                        </div>
                        <div>
                          <h5>Confirm Detail</h5>
                          <p class="text-muted">If several languages coalesce, the grammar of the resulting</p>
                        </div>
                      </div>
                    </BCol>
                  </BRow>
                </section>
              </div>
              <div class="actions clearfix">
                <ul role="menu" aria-label="Pagination">
                  <li :class="{ disabled: activeVerticalTab <= 1 }">
                    <BLink href="#" :disabled="activeVerticalTab <= 1" @click="activeVerticalTab--">Previous</BLink>
                  </li>
                  <li :class="{ disabled: activeVerticalTab == 4 }">
                    <BLink href="#" :disabled="activeVerticalTab == 4" @click="activeVerticalTab++">{{ activeVerticalTab == 4 ? "Finish" : "Next" }}</BLink>
                  </li>
                </ul>
              </div>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

  </Layout>
</template>




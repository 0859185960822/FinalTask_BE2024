<script>
import DropZone from "@/components/widgets/dropZone";
import { ref } from "vue";
import useVuelidate from "@vuelidate/core";
import Layout from "../../../layouts/main";
import PageHeader from "@/components/page-header";
import verification from "@/assets/images/verification-img.png"
/**
 * KYC Application component
 */
export default {
  methods: {
    onComplete: function () {
      this.$refs.iswizard.reset();
    },
    toggleTab(tab) {
      this.activeTab = tab;
    },
    toggleVerticalTab(tab) {
      this.activeVerticalTab = tab;
    }
  },
  components: {
    Layout,
    PageHeader,
    DropZone
  },
  data() {
    return {
      activeTab: 1,
      activeVerticalTab: 1,
      showModal: false,
      verification,
    };
  },
  setup() {
    let dropzoneFile = ref("");
    const drop = (e) => {
      dropzoneFile.value = e.dataTransfer.files[0];
    };
    const selectedFile = () => {
      dropzoneFile.value = document.querySelector(".dropzoneFile").files[0];
    };
    return { dropzoneFile, drop, selectedFile, v$: useVuelidate() };
  },
};
</script>

<template>
  <Layout>
    <PageHeader title="KYC Application" pageTitle="Crypto" />

    <BRow class="justify-content-center mt-lg-5">
      <BCol xl="5" sm="8">
        <BCard no-body>
          <BCardBody>
            <div class="text-center">
              <BRow class="justify-content-center">
                <BCol lg="10">
                  <h4 class="mt-4 fw-semibold">KYC Verification</h4>
                  <p class="text-muted mt-3">
                    Itaque earum rerum hic tenetur a sapiente delectus ut aut
                    reiciendis perferendis asperiores repellat.
                  </p>
                  <div class="mt-4">
                    <BButton variant="primary" @click="showModal = true">
                      Click here for Verification
                    </BButton>
                  </div>
                </BCol>
                <BRow class="justify-content-center mt-5 mb-2">
                  <BCol sm="6" cols="8">
                    <div>
                      <img :src=verification alt class="img-fluid" />
                    </div>
                  </BCol>
                </BRow>
              </BRow>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BModal v-model="showModal" size="lg" centered title="Verify your Account" hide-footer>
      <div id="basic-example" role="application" class="wizard clearfix">
        <div class="steps clearfix">
          <ul role="tablist">
            <li role="tab" :class="{ current: activeTab == 1, done: activeTab > 1 }" @click="toggleTab(1);"><a
                id="basic-example-t-0" href="#" aria-controls="basic-example-p-0"><span class="number">1.</span> Personal
                info</a></li>
            <li role="tab" :class="{ current: activeTab == 2, done: activeTab > 2 }" @click="toggleTab(2);"><a
                id="basic-example-t-1" href="#" aria-controls="basic-example-p-1"><span class="number">2.</span> Confirm
                email</a></li>
            <li role="tab" :class="{ current: activeTab == 3, done: activeTab > 3 }" @click="toggleTab(3);"><a
                id="basic-example-t-2" href="#" aria-controls="basic-example-p-2"><span class="number">3.</span> Document
                verification</a></li>
          </ul>
        </div>
        <div class="content clearfix">
          <!-- Personal info -->
          <h3 id="basic-example-h-0" tabindex="-1" class="title current">Personal info</h3>
          <section id="basic-example-p-0" role="tabpanel" :class="activeTab == 1 ? 'body current' : 'd-none'">
            <BForm>
              <BRow>
                <BCol lg="6">
                  <div class="mb-3">
                    <label for="basicpill-firstname-input">First name</label>
                    <BFormInput type="text" class="form-control" id="basicpill-firstname-input"
                      placeholder="Enter Your First Name" />
                  </div>
                </BCol>
                <BCol lg="6">
                  <div class="mb-3">
                    <label for="basicpill-lastname-input">Last name</label>
                    <BFormInput type="text" class="form-control" id="basicpill-lastname-input"
                      placeholder="Enter Your Last Name" />
                  </div>
                </BCol>
              </BRow>

              <BRow>
                <BCol lg="6">
                  <div class="mb-3">
                    <label for="basicpill-phoneno-input">Phone</label>
                    <BFormInput type="text" class="form-control" id="basicpill-phoneno-input"
                      placeholder="Enter Your Phone No." />
                  </div>
                </BCol>
                <BCol lg="6">
                  <div class="mb-3">
                    <label for="basicpill-email-input">Email</label>
                    <BFormInput type="email" class="form-control" id="basicpill-email-input"
                      placeholder="Enter Your Email ID" />
                  </div>
                </BCol>
              </BRow>
              <BRow>
                <BCol lg="12">
                  <div class="mb-3">
                    <label for="basicpill-address-input">Address</label>
                    <BFormTextarea id="basicpill-address-input" class="form-control" rows="2"
                      placeholder="Enter Your Address"></BFormTextarea>
                  </div>
                </BCol>
              </BRow>
            </BForm>
          </section>

          <!-- Confirm email -->
          <h3 id="basic-example-h-1" tabindex="-1" class="title">Confirm email</h3>
          <section id="basic-example-p-1" role="tabpanel" :class="activeTab == 2 ? 'body current' : 'd-none'">
            <BForm>
              <BRow>
                <BCol lg="6">
                  <div class="mb-3">
                    <label for="basicpill-pancard-input">PAN Card</label>
                    <BFormInput type="text" class="form-control" id="basicpill-pancard-input"
                      placeholder="Enter Your PAN No." />
                  </div>
                </BCol>

                <BCol lg="6">
                  <div class="mb-3">
                    <label for="basicpill-vatno-input">VAT/TIN No.</label>
                    <BFormInput type="text" class="form-control" id="basicpill-vatno-input"
                      placeholder="Enter Your VAT/TIN No." />
                  </div>
                </BCol>
              </BRow>
              <BRow>
                <BCol lg="6">
                  <div class="mb-3">
                    <label for="basicpill-cstno-input">CST No.</label>
                    <BFormInput type="text" class="form-control" id="basicpill-cstno-input"
                      placeholder="Enter Your CST No." />
                  </div>
                </BCol>

                <BCol lg="6">
                  <div class="mb-3">
                    <label for="basicpill-servicetax-input">Service Tax No.</label>
                    <BFormInput type="text" class="form-control" id="basicpill-servicetax-input"
                      placeholder="Enter Your Service Tax No." />
                  </div>
                </BCol>
              </BRow>
              <BRow>
                <BCol lg="6">
                  <div class="mb-3">
                    <label for="basicpill-companyuin-input">Company UIN</label>
                    <BFormInput type="text" class="form-control" id="basicpill-companyuin-input"
                      placeholder="Enter Your Company UIN" />
                  </div>
                </BCol>

                <BCol lg="6">
                  <div class="mb-3">
                    <label for="basicpill-declaration-input">Declaration</label>
                    <BFormInput type="text" class="form-control" id="basicpill-Declaration-input"
                      placeholder="Declaration Details" />
                  </div>
                </BCol>
              </BRow>
            </BForm>
          </section>

          <!-- Document Verification -->
          <h3 id="basic-example-h-2" tabindex="-1" class="title">Document Verification</h3>
          <section id="basic-example-p-2" role="tabpanel" :class="activeTab == 3 ? 'body current' : 'd-none'">
            <div>
              <h5 class="font-size-14 mb-3">Upload document file for a verification</h5>
              <DropZone @drop.prevent="drop" @change="selectedFile" />
              <!-- <span class="file-info">{{ dropzoneFile.name }}</span> -->
            </div>
          </section>
        </div>
        <div class="actions clearfix">
          <ul role="menu" aria-label="Pagination">
            <li :class="{ disabled: activeTab <= 1 }">
              <BLink href="#" :disabled="activeTab <= 1" @click="activeTab--">Previous</BLink>
            </li>
            <li :class="{ disabled: activeTab == 3 }">
              <BLink href="#" :disabled="activeTab == 3" @click="activeTab++">{{ activeTab == 4 ? "Finish" : "Next" }}
              </BLink>
            </li>
          </ul>
        </div>
      </div>
    </BModal>
  </Layout>
</template>
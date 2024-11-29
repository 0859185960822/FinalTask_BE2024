<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import { Img1, Img7 } from "@/assets/images/product/data"
import Multiselect from '@vueform/multiselect'
import { formFields, paymentOptions } from "./data"

/**
 * Product-checkout Component
 */
export default {
  components: { Multiselect, Layout, PageHeader },
  data() {
    return {
      formFields, paymentOptions,
      stateValue: null,
      countryValue: null,
      Img1, Img7,
      stateOptions: [
        "Alaska",
        "Hawaii",
        "California",
        "Nevada",
        "Oregon",
        "Washington",
        "Arizona",
        "Colorado",
        "Idaho",
        "Montana",
        "Nebraska",
        "New Mexico",
        "North Dakota",
        "Utah",
        "Wyoming",
        "Alabama",
        "Arkansas",
        "Illinois",
        "Iowa",
      ],
      countryOptions: [
        "Afghanistan",
        "Albania",
        "Algeria",
        "American Samoa",
        "Andorra",
        "Angola",
        "Anguilla",
        "Antarctica",
        "Argentina",
        "Hawaii",
        "California",
        "Colombia",
        "Congo",
        "Dominica",
        "Denmark",
        "Nevada",
        "Oregon",
        "Washington",
        "Ecuador",
        "Idaho",
        "Montana",
        "Namibia",
        "Nauru",
        "Nepal",
        "Netherlands",
        "Nicaragua",
        "New Caledonia",
        "North Dakota",
        "Tonga",
        "Tunisia",
        "Thailand",
        "Turkey",
        "Illinois",
        "Tuvalu",
        "Uganda",
        "Uruguay",
        "United Arab Emirates",
        "United Kingdom",
        "Venezuela",
        "Zimbabwe",
        "Uruguay",
      ],
    };
  },
};
</script>

<template>
  <Layout>
    <PageHeader title="Checkout" pageTitle="Ecommerce" />

    <div class="checkout-tabs">
      <BTabs pills vertical nav-class="p-0" nav-wrapper-class="col-xl-2 col-md-3 col-sm-12 col-12" content-class="w-100" class="ecommerce-checkout-tabs">
        <BTab active>
          <template v-slot:title>
            <i class="bx bxs-truck d-block check-nav-icon mt-4 mb-2"></i>
            <p class="fw-bold mb-4">Shipping Info</p>
          </template>
          <BCard no-body>
            <BCardBody class="pb-0">
              <BCardTitle>Shipping information</BCardTitle>
              <p class="card-title-desc">Fill all information below</p>
              <BForm>
                <BRow class="mb-4" v-for="field in formFields" :key="field.id">
                  <BCol md="2">
                    <label :for="field.id">{{ field.label }}</label>
                  </BCol>
                  <BCol md="10">
                    <BFormInput :id="field.id" :placeholder="field.placeholder"></BFormInput>
                  </BCol>
                </BRow>

                <BRow class="mb-4">
                  <BCol md="2">
                    <label for="billing-address">Address</label>
                  </BCol>
                  <BCol md="10">
                    <BFormTextarea id="billing-address" rows="3" placeholder="Enter full address"></BFormTextarea>
                  </BCol>
                </BRow>

                <BRow class="form-group mb-4">
                  <label class="col-md-2 col-form-label">Country</label>
                  <BCol md="10">
                    <multiselect v-model="countryValue" :options="countryOptions" class="checkout-multiselect-form"></multiselect>
                  </BCol>
                </BRow>

                <BRow class="form-group mb-4">
                  <label class="col-md-2 col-form-label">States</label>
                  <BCol md="10">
                    <multiselect v-model="stateValue" :options="stateOptions" class="checkout-multiselect-form"></multiselect>
                  </BCol>
                </BRow>
                <BRow class="mb-4">
                  <BCol md="2">
                    <label for="example-textarea">Order Notes:</label>
                  </BCol>
                  <BCol md="10">
                    <BFormTextarea id="example-textarea" rows="3" placeholder="Write some note.."></BFormTextarea>
                  </BCol>
                </BRow>
              </BForm>
            </BCardBody>
          </BCard>
          <BRow class="mt-4">
            <BCol sm="6">
              <router-link to="/ecommerce/cart" class="btn text-muted d-none d-sm-inline-block btn-link">
                <i class="mdi mdi-arrow-left me-1"></i> Back to Shopping Cart
              </router-link>
            </BCol>
            <BCol sm="6">
              <div class="text-end">
                <router-link to="/ecommerce/checkout" class="btn btn-success">
                  <i class="mdi mdi-truck-fast me-1"></i> Proceed to Shipping
                </router-link>
              </div>
            </BCol>
          </BRow>
        </BTab>
        <BTab>
          <template v-slot:title>
            <i class="bx bx-money d-block check-nav-icon mt-4 mb-2"></i>
            <p class="fw-bold mb-4">Payment Info</p>
          </template>
          <BCard no-body>
            <BCardBody>
              <div>
                <BCardTitle>Payment information</BCardTitle>
                <p class="card-title-desc">Fill all information below</p>

                <div>
                  <div class="form-check form-check-inline font-size-16" v-for="option in paymentOptions" :key="option.id">
                    <input class="form-check-input" type="radio" :name="option.name" :id="option.id" :checked="option.checked" />
                    <label class="form-check-label font-size-13" :for="option.id">
                      <i  :class="option.iconClass"></i>
                      {{ option.label }}
                    </label>
                  </div>
                </div>

                <h5 class="mt-5 mb-3 font-size-15">For card Payment</h5>
                <div class="p-4 border">
                  <BForm>
                    <BFormGroup id="input-group-2" label="Card Number" label-for="input-card" class="mb-0">
                      <BFormInput id="input-card" placeholder="0000 0000 0000 0000"></BFormInput>
                    </BFormGroup>

                    <BRow class="mt-4">
                      <BCol lg="6">
                        <BFormGroup id="input-group-2" label="Name on card" label-for="input-number" class="mb-0">
                          <BFormInput id="input-number" placeholder="Name on Card"></BFormInput>
                        </BFormGroup>
                      </BCol>
                      <BCol lg="3">
                        <BFormGroup id="input-group-2" label="Expiry date" label-for="input-date" class="mb-0">
                          <BFormInput id="input-date" placeholder="MM/YY"></BFormInput>
                        </BFormGroup>
                      </BCol>

                      <BCol lg="3">
                        <BFormGroup id="input-group-2" label="CVV Code" label-for="cvvcodeInput" class="mb-0">
                          <BFormInput id="cvvcodeInput" placeholder="Enter CVV Code"></BFormInput>
                        </BFormGroup>
                      </BCol>
                    </BRow>
                  </BForm>
                </div>
              </div>
            </BCardBody>
          </BCard>
          <BRow class="mt-4">
            <BCol sm="6">
              <router-link to="/ecommerce/cart" class="btn text-muted d-none d-sm-inline-block btn-link">
                <i class="mdi mdi-arrow-left me-1"></i> Back to Shopping Cart
              </router-link>
            </BCol>
            <BCol sm="6">
              <div class="text-end">
                <router-link to="/ecommerce/checkout" class="btn btn-success">
                  <i class="mdi mdi-truck-fast me-1"></i> Proceed to Shipping
                </router-link>
              </div>
            </BCol>
          </BRow>
        </BTab>
        <BTab>
          <template v-slot:title>
            <i class="bx bx-badge-check d-block check-nav-icon mt-4 mb-2"></i>
            <p class="fw-bold mb-4">Confirmation</p>
          </template>
          <BCard no-body>
            <BCardBody>
              <BCard no-body class="shadow-none border mb-0">
                <BCardBody class="pb-0">
                  <BCardTitle class="mb-4">Order Summary</BCardTitle>

                  <div class="table-responsive">
                    <BTableSimple class="align-middle mb-0 table-nowrap">
                      <BThead class="table-light">
                        <BTr>
                          <BTh scope="col">Product</BTh>
                          <BTh scope="col">Product Desc</BTh>
                          <BTh scope="col">Price</BTh>
                        </BTr>
                      </BThead>
                      <BTbody>
                        <BTr>
                          <BTh scope="row">
                            <img :src="Img1" alt="product-img" title="product-img" class="avatar-md" />
                          </BTh>
                          <BTd>
                            <h5 class="font-size-14 text-truncate">
                              <router-link to="/ecommerce/product-detail/1" class="text-dark">Half sleeve T-shirt
                                (64GB)</router-link>
                            </h5>
                            <p class="text-muted mb-0">$ 450 x 1</p>
                          </BTd>
                          <BTd>$ 450</BTd>
                        </BTr>
                        <BTr>
                          <BTh scope="row">
                            <img :src="Img7" alt="product-img" title="product-img" class="avatar-md" />
                          </BTh>
                          <BTd>
                            <h5 class="font-size-14 text-truncate">
                              <router-link to="/ecommerce/product-detail/1" class="text-dark">Wirless
                                Headphone</router-link>
                            </h5>
                            <p class="text-muted mb-0">$ 225 x 1</p>
                          </BTd>
                          <BTd>$ 225</BTd>
                        </BTr>
                        <BTr>
                          <BTd colspan="2">
                            <h6 class="m-0 text-end">Sub Total:</h6>
                          </BTd>
                          <td>$ 675</td>
                        </BTr>
                        <BTr>
                          <BTd colspan="3">
                            <div class="bg-primary-subtle p-3 rounded">
                              <h5 class="font-size-14 text-primary mb-0">
                                <i class="fas fa-shipping-fast me-2"></i>
                                Shipping
                                <span class="float-end">Free</span>
                              </h5>
                            </div>
                          </BTd>
                        </BTr>
                        <BTr>
                          <BTd colspan="2">
                            <h6 class="m-0 text-end">Total:</h6>
                          </BTd>
                          <td>$ 675</td>
                        </BTr>
                      </BTbody>
                    </BTableSimple>
                  </div>
                </BCardBody>
              </BCard>
            </BCardBody>
          </BCard>

          <BRow class="mt-4">
            <BCol sm="6">
              <router-link to="/ecommerce/cart" class="btn text-muted d-none d-sm-inline-block btn-link">
                <i class="mdi mdi-arrow-left me-1"></i> Back to Shopping Cart
              </router-link>
            </BCol>
            <BCol sm="6">
              <div class="text-end">
                <router-link to="/ecommerce/checkout" class="btn btn-success">
                  <i class="mdi mdi-truck-fast me-1"></i> Proceed to Shipping
                </router-link>
              </div>
            </BCol>
          </BRow>
        </BTab>
      </BTabs>
    </div>
  </Layout>
</template>

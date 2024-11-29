<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

import { required, helpers } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";

import { customersData } from "./data-customers";
import pagination from "@/components/common/pagination"

/**
 * Customers component
 */
export default {
  components: { Layout, PageHeader, pagination },
  data() {
    return {
      customersData,
      showModal: false,
      submitted: false,
      customers: {
        username: "",
        phone: "",
        email: "",
        address: "",
        balance: "",
      },
    };
  },
  setup() {
    return { v$: useVuelidate() };
  },
  validations: {
    customers: {
      username: {
        required: helpers.withMessage("Username is required", required),
      },

      phone: {
        required: helpers.withMessage("Phone is required", required),
      },
      email: { required: helpers.withMessage("Email is required", required) },
      address: {
        required: helpers.withMessage("Address is required", required),
      },
      balance: {
        required: helpers.withMessage("Balance is required", required),
      },
    },
  },
  methods: {
    /**
     * Modal form submit
     */
    // eslint-disable-next-line no-unused-vars
    handleSubmit(e) {
      this.submitted = true;

      // stop here if form is invalid
      this.v$.$touch();
      if (this.v$.$invalid) {
        return;
      } else {
        const currentDate = new Date();
        this.customersData.push({
          username: this.customers.username,
          phone: this.customers.phone,
          email: this.customers.email,
          address: this.customers.address,
          balance: this.customers.balance,
          rating: "4.3",
          date: currentDate.getHours() + ":" + currentDate.getMinutes(),
        });
        this.showModal = false;
        this.customers = {};
      }
      this.submitted = false;
    },
  },
};
</script>

<template>
  <Layout>
    <PageHeader title="Customers" pageTitle="Ecommerce" />

    <BRow>
      <BCol cols="12">
        <BCard no-body>
          <BCardBody>
            <BRow class="mb-2">
              <BCol sm="4">
                <div class="search-box me-2 mb-2 d-inline-block">
                  <div class="position-relative">
                    <input type="text" class="form-control" placeholder="Search..." />
                    <i class="bx bx-search-alt search-icon"></i>
                  </div>
                </div>
              </BCol>
              <BCol sm="8">
                <div class="text-sm-end">
                  <BButton variant="success" class="btn-rounded mb-2 me-2" @click="showModal = !showModal">
                    <i class="mdi mdi-plus me-1"></i>New Customers
                  </BButton>
                  <BModal v-model="showModal" title="Add New Customer" title-class="font-18" body-class="p-3" hide-footer class="v-modal-custom">
                    <BForm @submit.prevent="handleSubmit">
                      <BRow>
                        <BCol cols="12">
                          <div class="mb-3">
                            <label for="name">Event Name</label>
                            <input id="name" v-model="customers.username" type="text" class="form-control" placeholder="Insert username" :class="{
                              'is-invalid':
                                submitted && v$.customers.username.$error,
                            }" />

                            <div v-if="submitted && v$.customers.username.$error" class="invalid-feedback">
                              <span v-if="v$.customers.username.required.$message">{{
                                v$.customers.username.required.$message
                              }}</span>
                            </div>
                          </div>
                        </BCol>
                        <BCol cols="12">
                          <div class="mb-3">
                            <label for="phone">Phone</label>
                            <input id="phone" v-model="customers.phone" type="text" class="form-control" placeholder="Insert phone" :class="{
                              'is-invalid':
                                submitted && v$.customers.phone.$error,
                            }" />
                            <div v-if="submitted && v$.customers.phone.$error" class="invalid-feedback">
                              <span v-if="v$.customers.phone.required.$message">{{
                                v$.customers.phone.required.$message
                              }}</span>
                            </div>
                          </div>
                        </BCol>
                        <BCol cols="12">
                          <div class="mb-3">
                            <label for="email">Email</label>
                            <input id="email" v-model="customers.email" type="email" class="form-control" placeholder="Insert email" :class="{
                              'is-invalid':
                                submitted && v$.customers.email.$error,
                            }" />
                            <div v-if="submitted && v$.customers.email.$error" class="invalid-feedback">
                              <span v-if="v$.customers.email.required.$message">{{
                                v$.customers.email.required.$message
                              }}</span>
                            </div>
                          </div>
                        </BCol>
                        <BCol cols="12">
                          <div class="mb-3">
                            <label for="address">Address</label>
                            <input id="address" v-model="customers.address" type="text" class="form-control" placeholder="Insert address" :class="{
                              'is-invalid':
                                submitted && v$.customers.address.$error,
                            }" />
                            <div v-if="submitted && v$.customers.address.$error" class="invalid-feedback">
                              <span v-if="v$.customers.address.required.$message">{{
                                v$.customers.address.required.$message
                              }}</span>
                            </div>
                          </div>
                        </BCol>
                        <BCol cols="12">
                          <div class="mb-3">
                            <label for="balance">Balance</label>
                            <input id="balance" v-model="customers.balance" type="text" class="form-control" placeholder="Insert balance" :class="{
                              'is-invalid':
                                submitted && v$.customers.balance.$error,
                            }" />
                            <div v-if="submitted && v$.customers.balance.$error" class="invalid-feedback">
                              <span v-if="v$.customers.balance.required.$message">{{
                                v$.customers.balance.required.$message
                              }}</span>
                            </div>
                          </div>
                        </BCol>
                      </BRow>

                      <div class="text-end pt-5 mt-3">
                        <BButton variant="light" @click="showModal = false">Close</BButton>
                        <BButton type="submit" variant="success" class="ms-1">Create event</BButton>
                      </div>
                    </BForm>
                  </BModal>
                </div>
              </BCol>
            </BRow>
            <div class="table-responsive">
              <BTableSimple class="table-centered table-nowrap align-middle">
                <BThead>
                  <BTr>
                    <BTh>#</BTh>
                    <BTh>Username</BTh>
                    <BTh>Phone / Email</BTh>
                    <BTh>Address</BTh>
                    <BTh>Rating</BTh>
                    <BTh>Wallet Balance</BTh>
                    <BTh>Joining Date</BTh>
                    <BTh>Action</BTh>
                  </BTr>
                </BThead>
                <BTbody>
                  <BTr v-for="customers in customersData" :key="customers.id">
                    <BTd>
                      <div class="form-check font-size-16">
                        <input :id="`customCheck${customers.id}`" type="checkbox" class="form-check-input" />
                        <label class="form-check-label" :for="`customCheck${customers.id}`">&nbsp;</label>
                      </div>
                    </BTd>
                    <BTd>{{ customers.username }}</BTd>
                    <BTd>
                      <p class="mb-1">{{ customers.phone }}</p>
                      <p class="mb-0">{{ customers.email }}</p>
                    </BTd>
                    <BTd>{{ customers.address }}</BTd>
                    <BTd>
                      <span class="badge bg-success font-size-12">
                        <i class="mdi mdi-star me-1"></i>
                        {{ customers.rating }}
                      </span>
                    </BTd>
                    <BTd>{{ customers.balance }}</BTd>
                    <BTd>{{ customers.date }}</BTd>
                    <BTd>
                      <BDropdown class="card-drop" variant="white" right toggle-class="p-0" menu-class="dropdown-menu-end">
                        <template v-slot:button-content>
                          <i class="mdi mdi-dots-horizontal font-size-18"></i>
                        </template>

                        <BDropdownItem>
                          <i class="fas fa-pencil-alt text-success me-1"></i>
                          Edit
                        </BDropdownItem>

                        <BDropdownItem>
                          <i class="fas fa-trash-alt text-danger me-1"></i>
                          Delete
                        </BDropdownItem>
                      </BDropdown>
                    </BTd>
                  </BTr>
                </BTbody>
              </BTableSimple>
            </div>
            <pagination />
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>

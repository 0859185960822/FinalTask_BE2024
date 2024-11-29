<script>
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import 'swiper/css/pagination';

import { required, email, helpers } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";


/**
 * Recoverpwd-2 component
 */
export default {
  setup() {
    return { v$: useVuelidate() };
  },
  components: { Swiper, SwiperSlide },
  data() {
    return {
      email: "",
      submitted: false,
      error: null,
      tryingToReset: false,
      isResetError: false,
      Autoplay: Autoplay,
    };
  },
  methods: {
    // Try to register the user in with the email, fullname
    // and password they provided.
    tryToReset() {
      this.submitted = true;
      // stop here if form is invalid
      this.v$.$touch();

      if (this.v$.$invalid) {
        return;
      } else {
        if (process.env.VUE_APP_DEFAULT_AUTH === "firebase") {
          this.tryingToReset = true;
          // Reset the authError if it existed.
          this.error = null;
          return (
            this.resetPassword({
              email: this.email,
            })
              // eslint-disable-next-line no-unused-vars
              .then((token) => {
                this.tryingToReset = false;
                this.isResetError = false;
              })
              .catch((error) => {
                this.tryingToReset = false;
                this.error = error ? error : "";
                this.isResetError = true;
              })
          );
        } else if (process.env.VUE_APP_DEFAULT_AUTH === "authapi") {
          axios
            .post("http://127.0.0.1:8000/api/password/create", {
              email: this.email,
            })
            .then((res) => {
              this.isResetError = true;
              this.error = res.data;
              return res;
            });
        }
      }
    },
  },
  validations: {
    email: {
      required: helpers.withMessage("Email is required", required),
      email: helpers.withMessage("Please enter valid email", email),
    },
  },
  mounted() {
    document.body.classList.add("auth-body-bg");
  },
};
</script>

<template>
  <div>
    <BContainer fluid class="p-0">
      <BRow class="g-0">
        <BCol xl="9">
          <div class="auth-full-bg pt-lg-5 p-4">
            <div class="w-100">
              <div class="bg-overlay"></div>
              <div class="d-flex h-100 flex-column">
                <div class="p-4 mt-auto">
                  <BRow class="justify-content-center">
                    <BCol lg="7">
                      <div class="text-center">
                        <h4 class="mb-3">
                          <i class="bx bxs-quote-alt-left text-primary h1 align-middle me-3">
                          </i><span class="text-primary">5k</span>+ Satisfied
                          clients
                        </h4>

                        <div dir="ltr" class="owl-theme">
                          <swiper class="mySwiper" :loop="true" :modules="[Autoplay]" :space-between="20" :autoplay="{ delay: 2500, disableOnInteraction: false }">
                            <swiper-slide>
                              <p class="font-size-16 mb-4">
                                " Fantastic theme with a ton of options. If you
                                just want the HTML to integrate with your
                                project, then this is the package. You can find
                                the files in the 'dist' folder...no need to
                                install git and all the other stuff the
                                documentation talks about. "
                              </p>
                              <div>
                                <h4 class="font-size-16 text-primary">
                                  Abs1981
                                </h4>
                                <p class="font-size-14 mb-0">- Skote User</p>
                              </div>
                            </swiper-slide>

                            <swiper-slide>
                              <p class="font-size-16 mb-4">
                                " If Every Vendor on Envato are as supportive as
                                Themesbrand, Development with be a nice
                                experience. You guys are Wonderful. Keep us the
                                good work. "
                              </p>
                              <div>
                                <h4 class="font-size-16 text-primary">
                                  nezerious
                                </h4>
                                <p class="font-size-14 mb-0">- Skote User</p>
                              </div>
                            </swiper-slide>
                          </swiper>
                        </div>
                      </div>
                    </BCol>
                  </BRow>
                </div>
              </div>
            </div>
          </div>
        </BCol>

        <BCol xl="3">
          <div class="auth-full-page-content p-md-5 p-4">
            <div class="w-100">
              <div class="d-flex flex-column h-100">
                <div class="mb-4 mb-md-5">
                  <router-link to="/" class="d-block auth-logo">
                    <img src="@/assets/images/logo-dark.png" alt="" height="18" class="auth-logo-dark" />
                    <img src="@/assets/images/logo-light.png" alt="" height="18" class="auth-logo-light" />
                  </router-link>
                </div>
                <div class="my-auto">
                  <div>
                    <h5 class="text-primary">Reset Password</h5>
                    <p class="text-muted">Reset Password with Skote.</p>
                  </div>

                  <div class="mt-4">
                    <BAlert :model-value="true" variant="success" class="text-center mb-4">
                      Enter your Email and instructions will be sent to you!
                    </BAlert>
                    <BForm @submit.prevent="tryToReset">
                      <BAlert v-model="isResetError" class="mb-4" variant="danger" dismissible>{{ error }}</BAlert>
                      <div class="mb-3">
                        <label for="useremail">Email</label>
                        <BFormInput v-model="email" id="useremail" placeholder="Enter email" :class="{
                          'is-invalid': submitted && v$.email.$error,
                          'is-valid': submitted && !v$.email.$error,
                        }" />
                        <div v-for="(item, index) in v$.email.$errors" :key="index" class="invalid-feedback">
                          <span v-if="item.$message">{{ item.$message }}</span>
                        </div>
                      </div>

                      <BRow class="mb-0">
                        <BCol cols="12" class="text-end">
                          <BButton variant="primary" class="w-md waves-effect waves-light" type="submit">
                            Reset
                          </BButton>
                        </BCol>
                      </BRow>
                    </BForm>
                    <div class="mt-5 text-center">
                      <p>
                        Remember It ?
                        <router-link to="/auth/login-2" class="fw-medium text-primary">
                          Sign In here</router-link>
                      </p>
                    </div>
                  </div>
                </div>

                <div class="mt-4 mt-md-5 text-center">
                  <p class="mb-0">
                    © {{ new Date().getFullYear() }} Skote. Crafted with
                    <i class="mdi mdi-heart text-danger"></i> by Themesbrand
                  </p>
                </div>
              </div>
            </div>
          </div>
        </BCol>
      </BRow>
    </BContainer>
  </div>
</template>

<style lang="scss" scoped>
.carousel-caption {
  position: relative !important;
  right: 0;
  left: 0;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  color: #495057;
}

.carousel-indicators li {
  background-color: rgba(85, 110, 230, 0.25);
}
</style>
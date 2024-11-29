<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import 'swiper/css/pagination';

import { required, email, helpers } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";

/**
 * Login-2 component
 */
export default {
  setup() {
    return {
      v$: useVuelidate(),
    };

  },
  components: { Swiper, SwiperSlide },

  data() {
    return {
      email: "admin@themesbrand.com",
      password: "123456",
      submitted: false,
      Autoplay: Autoplay,
    };
  },
  validations: {
    email: {
      required: helpers.withMessage("Email is required", required),
      email: helpers.withMessage("Please enter valid email", email),
    },
    password: {
      required: helpers.withMessage("Password is required", required),
    },
  },
  methods: {
    // Try to log the user in with the username
    // and password they provided.
    tryToLogIn() {
      this.submitted = true;
      // stop here if form is invalid
      this.v$.$touch();
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
                          </i><span class="text-primary">5k</span>+ Satisfied clients
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
        <!-- end col -->

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
                    <h5 class="text-primary">Welcome Back !</h5>
                    <p class="text-muted">Sign in to continue to Skote.</p>
                  </div>
                
                  <div class="mt-4">
                    <BForm @submit.prevent="tryToLogIn">
                      <BFormGroup class="mb-3" id="input-group-1" label="Email" label-for="input-1">
                        <BFormInput id="input-1" v-model="email" type="text" placeholder="Enter email" :class="{
                          'is-invalid': submitted && v$.email.$error,
                          'is-valid': submitted && !v$.email.$error,
                        }">
                        </BFormInput>
                        <div v-if="submitted && v$.email.$error" class="invalid-feedback">
                          <span v-if="!v$.email.required">Email is required.</span>
                          <span v-if="!v$.email.email">Please enter valid email.</span>
                        </div>
                      </BFormGroup>
                      <BFormGroup class="mb-3" id="input-group-2" label="Password" label-for="input-2">
                        <BFormInput id="input-2" v-model="password" type="password" placeholder="Enter password" :class="{
                          'is-invalid': submitted && v$.password.$error,
                          'is-valid': submitted && !v$.password.$error,
                        }">
                        </BFormInput>
                        <div v-if="submitted && v$.password.$error" class="invalid-feedback">
                          <span v-if="v$.password.required.$message">{{
                            v$.password.required.$message
                          }}</span>
                        </div>
                      </BFormGroup>

                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="remember-check" />
                        <label class="form-check-label" for="remember-check">
                          Remember me
                        </label>
                      </div>

                      <div class="mt-3 d-grid">
                        <BButton type="submit" variant="primary">Log In</BButton>
                      </div>

                      <div class="mt-4 text-center">
                        <h5 class="font-size-14 mb-3">Sign in with</h5>

                        <ul class="list-inline">
                          <li class="list-inline-item">
                            <BLink href="javascript::void()" class="social-list-item bg-primary text-white border-primary">
                              <i class="mdi mdi-facebook"></i>
                            </BLink>
                          </li>
                          <li class="list-inline-item">
                            <BLink href="javascript::void()" class="social-list-item bg-info text-white border-info ms-1">
                              <i class="mdi mdi-twitter"></i>
                            </BLink>
                          </li>
                          <li class="list-inline-item">
                            <BLink href="javascript::void()" class="social-list-item bg-danger text-white border-danger ms-1">
                              <i class="mdi mdi-google"></i>
                            </BLink>
                          </li>
                        </ul>
                      </div>
                    </BForm>
                    <div class="mt-5 text-center">
                      <p>
                        Don't have an account ?
                        <router-link to="/auth/register-2" class="fw-medium text-primary">
                          Signup now
                        </router-link>
                      </p>
                    </div>
                  </div>
                </div>

                <div class="mt-4 mt-md-5 text-center">
                  <p class="mb-0">
                    ©
                    {{ new Date().getFullYear() }} Skote. Crafted with
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
  bottom: 1.25rem;
  left: 0;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  color: #495057;
  text-align: center;
}

.carousel-indicators li {
  background-color: rgba(85, 110, 230, 0.25);
}
</style>
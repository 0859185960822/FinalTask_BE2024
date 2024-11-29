<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import 'swiper/css/pagination';

import { required, email, helpers } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";

/**
 * Register-2 component
 */
export default {
  setup() {
    return { v$: useVuelidate() };
  },
  components: { Swiper, SwiperSlide },
  data() {
    return {
      user: {
        username: "",
        email: "",
        password: "",
      },
      submitted: false,
      Autoplay: Autoplay,
    };
  },
  validations: {
    user: {
      username: {
        required: helpers.withMessage("Username is required", required),
      },
      email: {
        required: helpers.withMessage("Email is required", required),
        email: helpers.withMessage("Please enter valid email", email),
      },
      password: {
        required: helpers.withMessage("Password is required", required),
      },
    },
  },
  mounted() {
    document.body.classList.add("auth-body-bg");
  },
  methods: {
    // Try to register the user in with the email, username
    // and password they provided.
    tryToRegisterIn() {
      this.submitted = true;
      // stop here if form is invalid
      this.v$.$touch();
    },
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
                          <swiper class="mySwiper" :loop="true" :modules="[Autoplay]" :space-between="20"
                            :autoplay="{ delay: 2500, disableOnInteraction: false }">
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
                    <h5 class="text-primary">Register account</h5>
                    <p class="text-muted">Get your free Skote account now.</p>
                  </div>

                  <div class="mt-4">
                    <BForm @submit.prevent="tryToRegisterIn">
                      <BFormGroup class="mb-3" id="email-group" label="Username" label-for="username">
                        <BFormInput id="username" v-model="user.username" type="text" placeholder="Enter username" :class="{
                          'is-invalid': submitted && v$.user.username.$error,
                          'is-valid': submitted && !v$.user.username.$error,
                        }"></BFormInput>
                        <div v-if="submitted && v$.user.username.$error" class="invalid-feedback">
                          <span v-if="v$.user.username.required.$message">{{
                            v$.user.username.required.$message
                          }}</span>
                        </div>
                      </BFormGroup>

                      <BFormGroup class="mb-3" id="fullname-group" label="Email" label-for="email">
                        <BFormInput id="email" v-model="user.email" type="email" placeholder="Enter email" :class="{
                          'is-invalid': submitted && v$.user.email.$error,
                          'is-valid': submitted && !v$.user.email.$error,
                        }"></BFormInput>
                        <div v-for="(item, index) in v$.user.email.$errors" :key="index" class="invalid-feedback">
                          <span v-if="item.$message">{{ item.$message }}</span>
                        </div>
                      </BFormGroup>

                      <BFormGroup class="mb-3" id="password-group" label="Password" label-for="password">
                        <BFormInput id="password" v-model="user.password" type="password" placeholder="Enter password"
                          :class="{
                            'is-invalid': submitted && v$.user.password.$error,
                            'is-valid': submitted && !v$.user.password.$error,
                          }"></BFormInput>
                        <div v-if="submitted && v$.user.password.$error" class="invalid-feedback">
                          <span v-if="v$.user.password.required.$message">{{
                            v$.user.password.required.$message
                          }}</span>
                        </div>
                      </BFormGroup>

                      <div class="mt-4 text-center">
                        <p class="mb-0">
                          By registering you agree to the Skote
                          <BLink href="javascript: void(0);" class="text-primary">Terms of Use</BLink>
                        </p>
                      </div>

                      <div class="mt-4 d-grid">
                        <BButton type="submit" variant="primary" class="btn-block">Register</BButton>
                      </div>

                      <div class="mt-4 text-center">
                        <h5 class="font-size-14 mb-3">Sign up using</h5>

                        <ul class="list-inline">
                          <li class="list-inline-item">
                            <BLink href="javascript::void()"
                              class="social-list-item bg-primary text-white border-primary">
                              <i class="mdi mdi-facebook"></i>
                            </BLink>
                          </li>
                          <li class="list-inline-item">
                            <BLink href="javascript::void()" class="social-list-item bg-info text-white border-info">
                              <i class="mdi mdi-twitter"></i>
                            </BLink>
                          </li>
                          <li class="list-inline-item">
                            <BLink href="javascript::void()" class="social-list-item bg-danger text-white border-danger">
                              <i class="mdi mdi-google"></i>
                            </BLink>
                          </li>
                        </ul>
                      </div>
                    </BForm>

                    <div class="mt-5 text-center">
                      <p>
                        Already have an account ?
                        <router-link to="/auth/login-2" class="fw-medium text-primary">
                          Login</router-link>
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

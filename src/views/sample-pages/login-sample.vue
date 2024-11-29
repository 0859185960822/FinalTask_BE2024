<script>
import axios from "axios";

import Layout from "../../layouts/auth";

import { required, email, helpers } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";

import { useAuthStore, useNotificationStore } from '@/state/pinia'
const auth = useAuthStore()
const notificationStore = useNotificationStore();

/**
 * Login component
 */
export default {
  setup() {
    return { v$: useVuelidate() };
  },

  components: {
    Layout,
  },
  data() {
    return {
      email: "admin@themesbrand.com",
      password: "123456",
      submitted: false,
      authError: null,
      tryingToLogIn: false,
      isAuthError: false,
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
  computed: {
    notification() {
      return notificationStore || {};
    },
  },
  methods: {
    // Try to log the user in with the username
    // and password they provided.
    tryToLogIn() {
      this.submitted = true;
      // stop here if form is invalid
      this.v$.$touch();

      if (this.v$.$invalid) {
        return;
      } else {
        if (process.env.VUE_APP_DEFAULT_AUTH === "firebase") {
          this.tryingToLogIn = true;
          // Reset the authError if it existed.
          this.authError = null;
          auth.logIn({
            email: this.email,
            password: this.password,
          }).then(response => {
            this.tryingToLogIn = false;
            this.isAuthError = false;
            auth.setUser(response)
            window.location.href = "/"
          }).catch((error) => {
            this.tryingToLogIn = false
            this.authError = error ? error : "";
            this.isAuthError = true;
          })
        } else if (process.env.VUE_APP_DEFAULT_AUTH === "authapi") {

          axios
            .post("http://127.0.0.1:8000/api/login", {
              email: this.email,
              password: this.password,
            })
            .then((res) => {
              return res;
            });
        }
      }
    },
  },
};
</script>

<template>
  <Layout>
    <BRow class="justify-content-center">
      <BCol md="8" lg="6" xl="5">
        <BCard no-body class="overflow-hidden">
          <div class="bg-primary-subtle">
            <BRow>
              <BCol cols="7">
                <div class="text-primary p-4">
                  <h5 class="text-primary">Welcome Back !</h5>
                  <p>Sign in to continue to Skote.</p>
                </div>
              </BCol>
              <BCol cols="5" class="align-self-end">
                <img src="@/assets/images/profile-img.png" alt class="img-fluid" />
              </BCol>
            </BRow>
          </div>
          <BCardBody class="pt-0">
            <div>
              <router-link to="/">
                <div class="avatar-md profile-user-wid mb-4">
                  <span class="avatar-title rounded-circle bg-light">
                    <img src="@/assets/images/logo.svg" alt height="34" />
                  </span>
                </div>
              </router-link>
            </div>
            <BAlert v-model="isAuthError" variant="danger" class="mt-3" dismissible>{{ authError }}</BAlert>
            <div v-if="notification.message" :class="'alert ' + notification.type">
              {{ notification.message }}
            </div>

            <BForm class="p-2" @submit.prevent="tryToLogIn">
              <BFormGroup class="mb-3" id="input-group-1" label="Email" label-for="input-1">
                <BFormInput id="input-1" v-model="email" type="text" placeholder="Enter email" :class="{
                  'is-invalid': submitted && v$.email.$error,
                }"></BFormInput>
                <div v-for="(item, index) in v$.email.$errors" :key="index" class="invalid-feedback">
                  <span v-if="item.$message">{{ item.$message }}</span>
                </div>
              </BFormGroup>

              <BFormGroup class="mb-3" id="input-group-2" label="Password" label-for="input-2">
                <BFormInput id="input-2" v-model="password" type="password" placeholder="Enter password" :class="{
                  'is-invalid': submitted && v$.password.$error,
                }"></BFormInput>
                <div v-if="submitted && v$.password.$error" class="invalid-feedback">
                  <span v-if="v$.password.required.$message">{{
                    v$.password.required.$message
                  }}</span>
                </div>
              </BFormGroup>

              <div class="mb-2">
                      <BFormCheckbox class="me-2 form-check-input" id="customControlInline"  name="checkbox-1" value="accepted" unchecked-value="not_accepted"> Remember me</BFormCheckbox>
                    </div>

              <!-- <BFormCheckboxGroup class="form-check me-2" id="customControlInline" name="checkbox-1" value="accepted" unchecked-value="not_accepted">
                Remember me
              </BFormCheckboxGroup> -->

              <div class="mt-3 d-grid">
                <BButton type="submit" variant="primary" class="btn-block">Log In</BButton>
              </div>
              <div class="mt-4 text-center">
                <h5 class="font-size-14 mb-3">Sign in with</h5>

                <ul class="list-inline">
                  <li class="list-inline-item">
                    <BLink href="javascript: void(0);" class="
                        social-list-item
                        bg-primary
                        text-white
                        border-primary
                      ">
                      <i class="mdi mdi-facebook"></i>
                    </BLink>
                  </li>
                  <li class="list-inline-item">
                    <BLink href="javascript: void(0);" class="social-list-item bg-info text-white border-info">
                      <i class="mdi mdi-twitter"></i>
                    </BLink>
                  </li>
                  <li class="list-inline-item">
                    <BLink href="javascript: void(0);" class="
                        social-list-item
                        bg-danger
                        text-white
                        border-danger
                      ">
                      <i class="mdi mdi-google"></i>
                    </BLink>
                  </li>
                </ul>
              </div>
              <div class="mt-4 text-center">
                <router-link to="/forgot-password" class="text-muted">
                  <i class="mdi mdi-lock me-1"></i> Forgot your password?
                </router-link>
              </div>
            </BForm>
          </BCardBody>
        </BCard>

        <div class="mt-5 text-center">
          <p>
            Don't have an account ?
            <router-link to="/register" class="fw-medium text-primary">Signup now</router-link>
          </p>
          <p>
            © {{ new Date().getFullYear() }} Skote. Crafted with
            <i class="mdi mdi-heart text-danger"></i> by Themesbrand
          </p>
        </div>
      </BCol>
    </BRow>
  </Layout>
</template>
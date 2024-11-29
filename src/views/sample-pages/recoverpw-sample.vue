<script>
// import axios from "axios";
import { required, email, helpers } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";

/**
 * Recover password Sample page
 */
export default {
  setup() {
    return { v$: useVuelidate() };
  },
  validations: {
    email: {
      required: helpers.withMessage("Email is required", required),
      email: helpers.withMessage("Please enter valid email", email),
    },
    password: {
      required: helpers.withMessage("Password is required", required),
    },
    password_confirmation: {
      required: helpers.withMessage("Confirm password is required", required),
    },
  },
  data() {
    return {
      submitted: false,
      email: "",
      password: "",
      password_confirmation: "",
    };
  },
  methods: {
    tryToResetpwd() {
      this.submitted = true;
      // stop here if form is invalid
      this.v$.$touch();

      if (this.v$.$invalid) {
        return;
      } else {
        // axios
        //     .post("http://127.0.0.1:8000/api/password/reset", {
        //         token: this.$route.query.token,
        //         email: this.email,
        //         password: this.password,
        //         password_confirmation: this.password_confirmation,
        //     })
        //     .then((result) => {
        //        return result;
        //     });
      }
    },
  },

};
</script>

<template>
  <div class="account-pages my-5 pt-5">
    <BContainer>
      <BRow class="justify-content-center">
        <BCol md="8" lg="6" xl="5">
          <BCard no-body class="overflow-hidden">
            <div class="bg-primary-subtle">
              <BRow>
                <BCol cols="7">
                  <div class="text-primary p-4">
                    <h5 class="text-primary">Reset Password</h5>
                    <p>Re-Password with Skote.</p>
                  </div>
                </BCol>
                <BCol cols="5">
                  <img src="@/assets/images/profile-img.png" alt class="img-fluid" />
                </BCol>
              </BRow>
            </div>
            <BCardBody class="pt-0">
              <div>
                <BLink href="/">
                  <div class="avatar-md profile-user-wid mb-4">
                    <span class="avatar-title rounded-circle bg-light">
                      <img src="@/assets/images/logo.svg" alt class="rounded-circle" height="34" />
                    </span>
                  </div>
                </BLink>
              </div>

              <div class="p-2">
                <BAlert :model-value="true" variant="success" class="text-center mb-4">
                  Enter your Email and instructions will be sent to you!
                </BAlert>
                <BForm class="form-horizontal" @submit.prevent="tryToResetpwd">
                  <BFormGroup>
                    <label for="useremail">Email</label>
                    <BFormInput class="mb-2" v-model="email" id="useremail" placeholder="Enter email" :class="{ 'is-invalid': submitted && v$.email.$error }" />
                    <div v-for="(item, index) in v$.email.$errors" :key="index" class="invalid-feedback">
                      <span v-if="item.$message">{{ item.$message }}</span>
                    </div>
                  </BFormGroup>

                  <BFormGroup>
                    <label for="pwd">Password</label>
                    <BFormInput class="mb-2" type="password" v-model="password" id="pwd" placeholder="Enter password" :class="{
                      'is-invalid': submitted && v$.password.$error,
                    }" />
                    <div v-if="submitted && v$.password.$error" class="invalid-feedback">
                      <span v-if="v$.password.required.$message">{{
                        v$.password.required.$message
                      }}</span>
                    </div>
                  </BFormGroup>

                  <BFormGroup>
                    <label for="confirm_pwd">Confirm Password</label>
                    <BFormInput class="mb-2" v-model="password_confirmation" type="password" id="confirm_pwd" placeholder="Enter confirm password" :class="{
                      'is-invalid':
                        submitted && v$.password_confirmation.$error,
                    }" />
                    <div v-if="submitted && v$.password_confirmation.$error" class="invalid-feedback">
                      <span v-if="v$.password_confirmation.required.$message">{{
                        v$.password_confirmation.required.$message
                      }}</span>
                    </div>
                  </BFormGroup>

                  <div class="form-group row mb-0">
                    <BCol cols="12" class="text-end">
                      <BButton variant="primary" class="w-md" type="submit">
                        Reset
                      </BButton>
                    </BCol>
                  </div>

                </BForm>
              </div>
            </BCardBody>
          </BCard>
          <div class="mt-5 text-center">
            <p>
              Remember It ?
              <router-link to="/auth/login-1" class="fw-medium text-primary">Sign In here</router-link>
            </p>
            <p>
              © {{ new Date().getFullYear() }} Skote. Crafted with
              <i class="mdi mdi-heart text-danger"></i> by Themesbrand
            </p>
          </div>
        </BCol>
      </BRow>
    </BContainer>
  </div>
</template>

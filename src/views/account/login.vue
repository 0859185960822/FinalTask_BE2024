<script>
import axios from "axios";
import { required, helpers } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import Swal from "sweetalert2";

// Pinia State Management
import { useAuthStore, useLayoutStore, useNotificationStore } from '@/state/pinia'
const auth = useAuthStore()
const layouts = useLayoutStore()
const notification = useNotificationStore()

/**
 * Login component
 */
export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      url_apps: process.env.VUE_APP_BACKEND_URL,
      konfig_login: layouts.configApps,
      username: null,
      password: null,
      submitted: false,
      swalNotif: notification
    };
  },
  async mounted(){
    if(this.konfig_login == null){
      await this.konfigLogin();
    }
  },
  validations: {
    username: {
      required: helpers.withMessage("Username wajib diisikan", required),
    },
    password: {
      required: helpers.withMessage("Password wajib diisikan", required),
    },
  },
  methods: {
    async konfigLogin(){
      Swal.fire(this.swalNotif.swalLoading);

      await axios.get(process.env.VUE_APP_BACKEND_URL_API + "auth/konfig-login").then((res)=>{
        this.konfig_login = res.data.data;
        layouts.changeConfigApps(res.data.data);
        Swal.close();
      });
    },
    // Try to log the user in with the username
    // and password they provided.
    tryToLogIn() {
      let self = this;
      this.submitted = true;
      // stop here if form is invalid
      this.v$.$touch();

      if (this.v$.$invalid) {
        return;
      } else {
        Swal.fire(this.swalNotif.swalLoading);

        axios.post(process.env.VUE_APP_BACKEND_URL_API + "auth/login", {
          username: this.username,
          password: this.password,
        }).then((res) => {
          let dataLogin = res.data.data;
          console.log(dataLogin)
          // set accessToken
          auth.setAccessToken(dataLogin.token)
          auth.setUserData(dataLogin.user)
          auth.setActiveRole(dataLogin.activeRole)
          auth.setUserRole(dataLogin.user.user_role)
          auth.setUserMenu(dataLogin.menu)

          let timerInterval;
          Swal.fire({
            icon: "success",
            title: "Berhasil",
            text: "Anda akan diarahkan ke halaman dashboard segera",
            timer: 2000,
            timerProgressBar: true,
            showCancelButton: false,
            showConfirmButton: false,
            willClose: () => {
              clearInterval(timerInterval);
            },
          }).then((result) => {
            if (localStorage.accessToken) {
              if (result.dismiss === Swal.DismissReason.timer) {
                self.$router.push({ name: "default" });
              }
            }
          });

        }).catch((error) => {
          this.swalNotif.setSwalAlert("error","Oops...",error.response.data.data.error);
          Swal.fire(this.swalNotif.swalAlert);
        });
      }
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
              <div class="bg-overlay"
                v-bind:style="{
                  background: 'url(' + url_apps + konfig_login?.LOGIN_BACKGROUND + ')',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no repeat',
                  backgroundPosition: 'center',
                }"
              ></div>
            </div>
          </div>
        </BCol>
        <!-- end col -->

        <BCol xl="3">
          <div class="auth-full-page-content p-md-5 p-4">
            <div class="w-100">
              <div class="d-flex flex-column h-100">
                <div class="mb-4 mb-md-5">
                  <router-link to="/" class="d-flex justify-content-center auth-logo">
                    <img :src="url_apps + konfig_login?.LOGO_FULL_DARK" alt="" height="35" class="auth-logo-dark" />
                    <img :src="url_apps + konfig_login?.LOGO_FULL_LIGHT" alt="" height="35" class="auth-logo-light" />
                  </router-link>
                </div>
                <div class="my-auto">
                  <div>
                    <h5 class="text-primary">Halo !</h5>
                    <p class="text-muted">Silahkan login masuk ke Aplikasi</p>
                  </div>
                
                  <div class="mt-4">
                    <BForm @submit.prevent="tryToLogIn">
                      <BFormGroup class="mb-3" id="input-group-1" label="Username" label-for="input-1">
                        <BFormInput id="input-1" v-model="username" type="text" placeholder="Masukkan Username..." :class="{
                          'is-invalid': submitted && v$.username.$error,
                          'is-valid': submitted && !v$.username.$error,
                        }">
                        </BFormInput>
                        <div v-if="submitted && v$.username.$error" class="invalid-feedback">
                          <span v-if="v$.username.required.$message">{{ v$.username.required.$message }}</span>
                        </div>
                      </BFormGroup>
                      <BFormGroup class="mb-3" id="input-group-2" label="Password" label-for="input-2">
                        <BFormInput id="input-2" v-model="password" type="password" placeholder="Masukkan Password..." :class="{
                          'is-invalid': submitted && v$.password.$error,
                          'is-valid': submitted && !v$.password.$error,
                        }">
                        </BFormInput>
                        <div v-if="submitted && v$.password.$error" class="invalid-feedback">
                          <span v-if="v$.password.required.$message">
                            {{ v$.password.required.$message }}
                          </span>
                        </div>
                      </BFormGroup>

                      <div class="mt-3 d-grid">
                        <BButton type="submit" variant="primary">Masuk</BButton>
                      </div>
                    </BForm>
                  </div>
                </div>

                <div class="mt-4 mt-md-5 text-center">
                  <p class="mb-0">
                    © {{ new Date().getFullYear() }} {{ konfig_login?.COPYRIGHT_COPORATION }}.
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
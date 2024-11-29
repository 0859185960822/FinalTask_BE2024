<script>
import axios from "axios";
import Swal from "sweetalert2";
import { avatar9 } from "@/assets/images/users/data"

// pinia stateful management
import { useAuthStore, useLayoutStore, useNotificationStore } from '@/state/pinia'
const auth = useAuthStore()
const layouts = useLayoutStore()
const notification = useNotificationStore()

/**
 * Nav-bar Component
 */
export default {
  data() {
    return {
      avatar9,
      url_apps: process.env.VUE_APP_BACKEND_URL,
      userData: auth.userData,
      userRole: auth.userRole,
      activeRole: auth.activeRole,
      configApps: layouts.configApps,
      swalNotif: notification
    };
  },
  mounted() {},
  methods: {
    toggleMenu() {
      this.$parent.toggleMenu();
    },
    initFullScreen() {
      document.body.classList.toggle("fullscreen-enable");
      if (
        !document.fullscreenElement &&
        /* alternative standard method */ !document.mozFullScreenElement &&
        !document.webkitFullscreenElement
      ) {
        // current working methods
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen(
            Element.ALLOW_KEYBOARD_INPUT
          );
        }
      } else {
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        }
      }
    },
    async changeRole(roleId){
      Swal.fire(this.swalNotif.swalLoading);
      let config = {
        method: 'get',
        url: process.env.VUE_APP_BACKEND_URL_API + 'roles/' + roleId + '/checkout',
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
        },
      }

      await axios.request(config).then((response) => {
        let dataRole = response.data.data;
        auth.setAccessToken(dataRole.token)
        auth.setActiveRole(dataRole.role)

        this.swalNotif.setSwalAlert("success","Berhasil","Berhasil Ganti Role");
        Swal.fire(this.swalNotif.swalAlert);
        window.setTimeout(() => {
          window.location.reload();
        }, 2000)
      }).catch((error) => {
        this.swalNotif.setSwalAlert("error", "Oops...", error.response.data.meta.message);
        Swal.fire(this.swalNotif.swalAlert);
      });
    }
  },
};
</script>

<template>
  <header id="page-topbar">
    <div class="navbar-header">
      <div class="d-flex">
        <!-- LOGO -->
        <div class="navbar-brand-box">
          <router-link to="/" class="logo logo-dark">
            <span class="logo-sm">
              <img :src="url_apps + configApps.LOGO_SMALL" alt height="22" />
            </span>
            <span class="logo-lg">
              <img :src="url_apps + configApps.LOGO_FULL_DARK" alt height="30" />
            </span>
          </router-link>

          <router-link to="/" class="logo logo-light">
            <span class="logo-sm">
              <img :src="url_apps + configApps.LOGO_SMALL" alt height="22" />
            </span>
            <span class="logo-lg">
              <img :src="url_apps + configApps.LOGO_FULL_LIGHT" alt height="30" />
            </span>
          </router-link>
        </div>

        <BButton variant="white" id="vertical-menu-btn" type="button" class="btn btn-sm px-3 font-size-16 header-item" @click="toggleMenu">
          <i class="fa fa-fw fa-bars"></i>
        </BButton>
      </div>

      <div class="d-flex">

        <BDropdown class="d-none d-lg-inline-block noti-icon" menu-class="dropdown-menu-lg dropdown-menu-end" right toggle-class="header-item" variant="black">
          <template v-slot:button-content>
            <i class="bx bx-user-pin"></i>
          </template>

          <div class="px-lg-2">
            <BRow class="no-gutters">
              <BCol  v-for="(data, index) in userRole" :key="index">
                <BLink v-if="data.role_id == activeRole.role_id" style="color: black;" class="dropdown-icon-item" href="javascript: void(0);">
                  <img src="@/assets/images/user.png" :alt="data.role.role_name" />
                  <span>{{ data.role.role_name }}</span>
                </BLink>
                <BLink v-else class="dropdown-icon-item" href="javascript: void(0);" @click="changeRole(data.role_id)">
                  <img src="@/assets/images/user.png" :alt="data.role.role_name" />
                  <span>{{ data.role.role_name }}</span>
                </BLink>
              </BCol>
            </BRow>
          </div>
        </BDropdown>
 
        <div class="dropdown d-none d-lg-inline-block ms-1">
          <BButton variant="white" type="button" class="btn header-item noti-icon" @click="initFullScreen">
            <i class="bx bx-fullscreen"></i>
          </BButton>
        </div> 
       
        <BDropdown right variant="black" toggle-class="header-item" menu-class="dropdown-menu-end">
          <template v-slot:button-content>
            <img class="rounded-circle header-profile-user" :src="userData.avatar == null ? avatar9 : url_apps + userData.avatar" alt="User Avatar" />
            <span class="d-none d-xl-inline-block ms-1">
              {{ userData.name }}
            </span>
            <i class="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
          </template>
          <BDropdownItem>
            <router-link to="/accout/profile-user" v-slot="{ navigate }">
              <span @click="navigate" @keypress.enter="navigate" class="text-body">
                <i class="bx bx-user font-size-16 align-middle me-1"></i>
                {{ $t("navbar.dropdown.henry.list.profile") }}
              </span>
            </router-link>
          </BDropdownItem>
          <BDropdownDivider></BDropdownDivider>
          <a href="/logout" class="dropdown-item text-danger">
            <i class="bx bx-power-off font-size-16 align-middle me-1 text-danger"></i>
            {{ $t("navbar.dropdown.henry.list.logout") }}
          </a>
        </BDropdown>
      </div>
    </div>
  </header>
</template>

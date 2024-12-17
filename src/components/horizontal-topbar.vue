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
 * Horizontal-topbar component
 */
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      required: true,
    },
    mode: {
      type: String,
      required: true
    }
  },
  components: {},
  data() {
    return {
      avatar9,
      url_apps: process.env.VUE_APP_BACKEND_URL,
      userData: auth.userData,
      userRole: auth.userRole,
      activeRole: auth.activeRole,
      configApps: layouts.configApps,
      swalNotif: notification,
      menuItems: auth.userMenu,
      isMobileView: false,
    };
  },
  mounted() {},
  created() {
    this.checkMobileView();
    window.addEventListener("resize", this.checkMobileView);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.checkMobileView);
  },
  methods: {
    checkMobileView() {
      this.isMobileView = window.matchMedia("(max-width: 992px)").matches;
    },
    hasItems(item) {
      return item.subItems !== undefined ? item.subItems.length > 0 : false;
    },
    toggleRightSidebar() {
      this.$parent.toggleRightSidebar();
    },
    toggleMenu() {
      let element = document.getElementById("topnav-menu-content");
      element.classList.toggle("show");
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
        auth.setUserMenu(dataRole.menu)

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
  }
};
</script>

<template>
  <div>
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

        <BButton variant="white" id="toggle" type="button" class="btn btn-sm me-2 font-size-16 d-lg-none header-item" @click="toggleMenu">
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
       
        <BDropdown right variant="black" toggle-class="header-item">
          <template v-slot:button-content>
            <img class="rounded-circle header-profile-user" :src="userData.avatar == null ? avatar9 : url_apps + userData.avatar" alt="User Avatar" />
            <span class="d-none d-xl-inline-block ms-1">{{ userData.name }}</span>
            <i class="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
          </template>
          <BDropdownItem>
            <router-link to="/accout/profile-user" v-slot="{ navigate }" custom>
              <span @click="navigate" @keypress.enter="navigate">
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
  <div class="topnav" v-show="isMobileView">
    <BContainer fluid>
      <nav class="navbar navbar-light navbar-expand-lg topnav-menu active">
        <div class="collapse navbar-collapse active" id="topnav-menu-content">
          <ul class="navbar-nav">
            <!-- Menu data -->
            <template v-for="(item, index) of menuItems" :key="index">
              <li class="nav-item dropdown">

                <router-link v-if="item.subItems.length == 0 && item.isTitle == false" class="nav-link dropdown-toggle arrow-none side-nav-link-ref" id="topnav-components" :to="{name:item.link}" role="button">
                  <i :class="`${item.icon} me-2`"></i>{{ $t(item.label) }}
                  <div class="arrow-down" v-if="hasItems(item)"></div>
                </router-link>

                <BLink v-if="item.subItems.length != 0 && item.isTitle == false" class="nav-link dropdown-toggle arrow-none" id="topnav-components" role="button">
                  <i :class="`${item.icon} me-1`"></i>
                  {{ $t(item.label) }}
                  <div class="arrow-down"></div>
                </BLink>

                <div class="dropdown-menu" aria-labelledby="topnav-dashboard" v-if="hasItems(item)" :class="{ 'dropdown-mega-menu-xl px-2': item.subItems.length > 11 }">
                  <template v-for="(subitem, index) of item.subItems">
                    <router-link class="col dropdown-item side-nav-link-ref" :key="index" v-if="item.subItems.length < 12 && !hasItems(subitem)" :to="{name:subitem.link}">{{ $t(subitem.label) }}</router-link>
                    <div v-if="item.subItems.length > 11" :key="index">
                      <BRow v-if="index % 3 == 0">
                        <BCol lg="4"><router-link class="dropdown-item side-nav-link-ref" :to="{name:subitem.link}">{{ $t(item.subItems[index].label) }}</router-link></BCol>
                        <BCol lg="4" v-if="item.subItems[index + 1].link"><router-link class="dropdown-item side-nav-link-ref" :to="{name:item.subItems[index + 1].link}">{{ $t(item.subItems[index + 1].label) }}</router-link></BCol>
                        <BCol lg="4" v-if="item.subItems[index + 2]"><router-link class="dropdown-item side-nav-link-ref" :to="{name:item.subItems[index + 2].link}">{{ $t(item.subItems[index + 2].label) }}</router-link></BCol>
                      </BRow>
                    </div>

                    <div class="dropdown" v-if="hasItems(subitem)" :key="index">

                      <BLink class="dropdown-item dropdown-toggle" href="javascript: void(0);">{{ $t(subitem.label) }}
                        <div class="arrow-down"></div>
                      </BLink>
                      <div class="dropdown-menu">
                        <template v-for="(subSubitem, index) of subitem.subItems">
                          <router-link class="dropdown-item side-nav-link-ref" :key="index" v-if="!hasItems(subSubitem)" :to="{name:subSubitem.link}">{{ $t(subSubitem.label) }}</router-link>
                          <div class="dropdown" v-if="hasItems(subSubitem)" :key="index">
                            <BLink class="dropdown-item dropdown-toggle" href="javascript: void(0);">{{ $t(subSubitem.label) }}
                              <div class="arrow-down"></div>
                            </BLink>
                            <div class="dropdown-menu">
                              <template v-for="(
                                  subSubSubitem, index
                                ) of subSubitem.subItems" :key="index">
                                <router-link class="dropdown-item side-nav-link-ref" :to="{name:subSubSubitem.link}" routerLinkActive="active">{{ $t(subSubSubitem.label) }}</router-link>
                              </template>
                            </div>
                          </div>
                          
                        </template>
                      </div>
                    </div>

                    <!-- <div class="dropdown" v-if="!hasItems(subitem)" :key="'nested-child' + index">
                      <router-link class="dropdown-item side-nav-link-ref" :key="index" :to="subitem.link">{{ $t(subitem.label) }}</router-link>
                    </div> -->
                  </template>
                </div>
              </li>
            </template>
          </ul>
        </div>
      </nav>
    </BContainer>
  </div>
  </div>
</template>

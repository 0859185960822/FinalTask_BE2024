<script>
import simplebar from "simplebar-vue";
import { layout1, layout2, layout3 } from "../assets/images/layouts/data";
import { useLayoutStore } from "@/state/pinia";
const layoutStore = useLayoutStore();
/**
 * Right sidebar component
 */
export default {
  setup() {
    
  },
  components: {
    simplebar
  },
  data() {
    return {
      layout1, layout2, layout3,
      config: {
        handler: this.handleRightBarClick,
        middleware: this.middleware,
        events: ["click"]
      }
    };
  },
  methods: {
    hide() {
      this.$parent.toggleRightSidebar();
    },
    handleRightBarClick() {
      this.$parent.hideRightSidebar();
    },
    middleware(event) {
      if (event.target.classList)
        return !event.target.classList.contains("toggle-right");
    }
  },
  computed: {
    layout: {
      get() {
        return layoutStore.layoutType;
      },
      set(layout) {
        layoutStore.changeLayoutType(layout);
      }
    },
    mode: {
      get() {
        return layoutStore.mode;
      },
      set(mode) {
        layoutStore.changeMode(mode);
      }
    },
    width: {
      get() {
        return layoutStore.layoutWidth;
      },
      set(width) {
        layoutStore.changeLayoutWidth(width);

        if (width == "boxed") {
          layoutStore.changeLeftSidebarType("icon");
        } else if (width == "fluid" || width == "scrollable") {
          layoutStore.changeLeftSidebarType("dark");
        }
      }
    },
    topbar: {
      get() {
        return layoutStore.topbar;
      },
      set(topbar) {
        layoutStore.changeTopbar(topbar);
      }
    },
    sidebarType: {
      get() {
        return layoutStore.leftSidebarType;
      },
      set(type) {
        layoutStore.changeLeftSidebarType(type);
      }
    },
    loader: {
      get() {
        return layoutStore.loader;
      },
      set(value) {
        layoutStore.changeLoaderValue(value);
      }
    }
  }
};
</script>

<template>
  <div>
    <div v-click-outside="config" class="right-bar">
      <simplebar class="h-100">
        <div class="rightbar-title px-3 py-4 d-flex">
          <h5 class="m-0">Settings</h5>
          <BLink href="javascript:void(0);" class="right-bar-toggle ms-auto" @click="hide">
            <i class="mdi mdi-close noti-icon"></i>
          </BLink>
        </div>
        <hr class="mt-0" />
        <div class="p-3">
          <h6 class="mb-0">Layout</h6>
          <hr class="mt-1" />

          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="layout" id="layout-radio1" value="vertical"
              v-model="layout" />
            <label class="form-check-label" for="layout-radio1">Vertical</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="layout" id="layout-radio2" value="horizontal"
              v-model="layout" />
            <label class="form-check-label" for="layout-radio2">Horizontal</label>
          </div>

          <!-- theme -->

          <h6 class="mt-3">Theme Modes</h6>
          <hr class="mt-1" />

          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="mode" id="mode-radio1" value="light"
              v-model="mode" />
            <label class="form-check-label" for="mode-radio1">Light</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="mode" id="mode-radio2" value="dark"
              v-model="mode" />
            <label class="form-check-label" for="mode-radio2">Dark</label>
          </div>

          <!-- Width -->
          <h6 class="mt-3">Width</h6>
          <hr class="mt-1" />

          <div class="form-check">
            <input class="form-check-input" type="radio" name="widthradio" id="width-radio1" value="fluid"
              v-model="width" />
            <label class="form-check-label" for="width-radio1"> Fluid </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="widthradio" id="width-radio2" value="boxed"
              v-model="width" />
            <label class="form-check-label" for="width-radio2"> Boxed </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="widthradio" id="width-radio3" value="scrollable"
              v-model="width" />
            <label class="form-check-label" for="width-radio3">
              Scrollable
            </label>
          </div>

          <!-- Sidebar -->
          <div v-if="layout === 'vertical'">
            <h6 class="mt-3">Sidebar</h6>
            <hr class="mt-1" />

            <div class="form-check">
              <input class="form-check-input" type="radio" name="sidebar-radio" id="sidebar-dark" value="dark"
                v-model="sidebarType" />
              <label class="form-check-label" for="sidebar-dark"> Dark </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="sidebar-radio" id="sidebar-light" value="light"
                v-model="sidebarType" />
              <label class="form-check-label" for="sidebar-light">
                Light
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="sidebar-radio" id="sidebar-compact" value="compact"
                v-model="sidebarType" />
              <label class="form-check-label" for="sidebar-compact">
                Compact
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="sidebar-radio" id="sidebar-icon" value="icon"
                v-model="sidebarType" />
              <label class="form-check-label" for="sidebar-icon"> Icon </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="sidebar-radio" id="sidebar-colored" value="colored"
                v-model="sidebarType" />
              <label class="form-check-label" for="sidebar-colored">
                Colored
              </label>
            </div>
          </div>

          <!-- Topbar -->
          <div v-if="layout === 'horizontal'">
            <h6 class="mt-3">Topbar</h6>
            <hr class="mt-1" />
            <div class="form-check">
              <input class="form-check-input" type="radio" name="sidebar-radio" id="topbar-dark" value="dark"
                v-model="topbar" />
              <label class="form-check-label" for="topbar-dark"> Dark </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="topbar-radio" id="topbar-light" value="light"
                v-model="topbar" />
              <label class="form-check-label" for="topbar-light"> Light </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="topbar-radio" id="topbar-colored" value="colored"
                v-model="topbar" />
              <label class="form-check-label" for="topbar-colored">
                Colored
              </label>
            </div>
          </div>

          <!-- Preloader -->
          <h6 class="mt-3">Preloader</h6>
          <hr class="mt-1" />

          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" id="is-loader" v-model="loader" />
            <label class="form-check-label" for="is-loader">Preloader</label>
          </div>
        </div>
        <h6 class="text-center mb-0">Choose Mode</h6>
        <div class="p-4">
          <div class="mb-2">
            <router-link target="_blank" to="//skote.vuejs-light.themesbrand.com/">
              <img :src="layout1" class="img-fluid img-thumbnail" alt />
            </router-link>
          </div>

          <div class="mb-2">
            <router-link target="_blank" to="//skote.vuejs-dark.themesbrand.com/">
              <img :src="layout2" class="img-fluid img-thumbnail" alt />
            </router-link>
          </div>

          <div class="mb-2">
            <router-link target="_blank" to="//skote.vuejs-rtl.themesbrand.com/">
              <img :src="layout3" class="img-fluid img-thumbnail" alt />
            </router-link>
          </div>
        </div>
      </simplebar>
    </div>
    <!-- Right bar overlay-->
    <div class="rightbar-overlay"></div>
  </div>
</template>
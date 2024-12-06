<script>
import HorizontalTopbar from "@/components/horizontal-topbar";
import Sidebar from "../components/side-bar.vue";
import RightBar from "@/components/right-bar";
import Footer from "@/components/footer";

import { useLayoutStore } from "@/state/pinia";
const layoutStore = useLayoutStore();

export default {
  components: {
    HorizontalTopbar,
    Sidebar,
    Footer,
    RightBar,
  },
  data() {
    return {
      isSidebarVisible: true, // State untuk toggle sidebar
    };
  },
  computed: {
    layoutWidth() {
      return layoutStore.layoutWidth;
    },
    topbar() {
      return layoutStore.topbar;
    },
    loader() {
      return layoutStore.loader;
    },
    mode() {
      return layoutStore.mode;
    },
  },
  methods: {
    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible;
    },
  },
  mounted() {
    if (this.loader === true) {
      document.getElementById("preloader").style.display = "block";
      document.getElementById("status").style.display = "block";

      setTimeout(function () {
        document.getElementById("preloader").style.display = "none";
        document.getElementById("status").style.display = "none";
      }, 2500);
    } else {
      document.getElementById("preloader").style.display = "none";
      document.getElementById("status").style.display = "none";
    }
  },
};
</script>

<template>
  <div>
    <div id="preloader">
      <div id="status">
        <div class="spinner-chase">
          <div class="chase-dot"></div>
          <div class="chase-dot"></div>
          <div class="chase-dot"></div>
          <div class="chase-dot"></div>
          <div class="chase-dot"></div>
          <div class="chase-dot"></div>
        </div>
      </div>
    </div>
    <!-- Begin page -->
    <div id="layout-wrapper">
      <HorizontalTopbar :type="topbar" :width="layoutWidth" :mode="mode" />

      <!-- Main Layout -->
      <div class="layout-content">
        <!-- Sidebar -->
        <Sidebar :isVisible="isSidebarVisible" @toggle="toggleSidebar" />

        <!-- Main Content -->
        <div :class="['page-content', { 'content-expanded': !isSidebarVisible }]">
          <slot />
        </div>
      </div>

      <!-- Footer -->
      <Footer />
    </div>
    <RightBar />
  </div>
</template>

<style scoped>
/* Main Layout Styles */
.layout-content {
  display: flex;
}

.page-content {
  flex: 1;
  margin-left: 250px; /* Match sidebar width */
  transition: margin-left 0.3s ease;
}

.content-expanded {
  margin-left: 0;
}

/* Media Queries */
@media (max-width: 768px) {
  .page-content {
    margin-left: 0;
  }
  .sidebar {
    transform: translateX(-100%);
  }
  .sidebar-hidden {
    transform: translateX(-100%);
  }
}
</style>

<script>
import HorizontalTopbar from "@/components/horizontal-topbar";
// import HorizontalNav from "@/components/horizontal-nav";
// import Sidebar from "../components/side-bar.vue";
import RightBar from "@/components/right-bar";
import Footer from "@/components/footer";

import { useLayoutStore } from "@/state/pinia";
const layoutStore = useLayoutStore();

/**
 * Horizontal-layout
 */
export default {
  props: {},
  components: {
    HorizontalTopbar,
    // HorizontalNav,
    // Sidebar,
    Footer,
    RightBar
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
    mode(){
      return layoutStore.mode
    }

  },
  created: () => {
    document.body.setAttribute("data-layout", "horizontal");
    document.body.setAttribute("data-topbar", "dark");
    document.body.removeAttribute("data-sidebar");
    document.body.removeAttribute("data-layout-size");
    document.body.classList.remove("auth-body-bg");
  },
  methods: {
    toggleRightSidebar() {
      document.body.classList.toggle("right-bar-enabled");
    },
    hideRightSidebar() {
      document.body.classList.remove("right-bar-enabled");
    }
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
  }
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
      <HorizontalTopbar :type="topbar" :width="layoutWidth"  :mode="mode"/>
      <!-- <HorizontalNav /> -->
      <!-- ============================================================== -->
      <!-- Start right Content here -->
      <!-- ============================================================== -->
      <div class="main-content">
        <Sidebar/>
        <div class="page-content">
          <BContainer fluid>
            <slot />
          </BContainer>
          <!-- container-fluid -->
        </div>
        <!-- End Page-content -->
        <Footer />
     
      <!-- end main content-->
    </div>
    </div>
    <!-- END layout-wrapper -->
    <RightBar />
  </div>
</template>

<style scoped>
/* Main Layout Styles */
/* Wrapper utama */
#layout-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Pastikan tinggi minimum sesuai layar */
}

/* Konten utama */
.main-content {
  flex: 1; /* Buat area ini fleksibel */
  display: flex;
  flex-direction: column;
}

/* Page Content */
.page-content {
  flex: 1; /* Pastikan ini mengisi ruang kosong */
  position: relative;
  margin-left: 250px; /* Sesuaikan dengan lebar sidebar */
  transition: margin-left 0.3s ease;
}

/* Footer */
footer {
  background-color: #f8f9fa;
  text-align: center;
  padding: 1rem 0;
  width: 100%;
  position: relative; /* Tetap responsif */
  z-index: 10;
}

/* Media Queries */
@media (max-width: 768px) {
  .page-content {
    margin-left: 0;
  }
}

</style>
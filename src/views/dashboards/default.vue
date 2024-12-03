<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
// import Profile from "@/components/widgets/profile";
import Earning from "@/components/widgets/earning";
// import Stat from "@/components/widgets/stat";
// import Transaction from "@/components/widgets/transaction";
// import Emailsent from "@/components/widgets/emailsent";
// import SocialSource from "@/components/widgets/social-source";
// import Activity from "@/components/widgets/activity";
// import SellingProduct from "@/components/widgets/selling-product";
import ProjectStats from "../../components/widgets/progress1.vue";
import Sidebar from "../../components/side-bar.vue";

/**
 * Dashboard Component
 */
export default {
  components: {
    Layout,
    PageHeader,
    // Profile,
    // Stat,
    // Transaction,
    Sidebar,
    Earning,
    ProjectStats,
  //   Emailsent,
  //   SocialSource,
  //   Activity,
  //   SellingProduct,
  },
  data() {
    return {
      statData: [
      
      ],
      // showModal: false,
      // isLoading: false,
      // fullPage: true,
      // canCancel: false,
      // useSlot: false,
      // loader: "spinner",
      // color: "#007bff",
      // bgColor: "#ffffff",
      // height: 128,
      // width: 128,
      // timeout: 3000, //ms
      // fetchingStats: true,
      // earningStatus: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.showModal = false;
    }, 1500);
  },
};
</script>

<template>
      <Sidebar />
  <Layout>
    <PageHeader title="Dashboard" pageTitle="Dashboards" />
    <ProjectStats />
    <BRow>
      <BCol xl="4">
        <Profile :updating="fetchingStats" />
        <Earning :updating="earningStatus" />
      </BCol>
      <BCol xl="8">
        <BRow>
          <BCol md="4" v-for="stat of statData" :key="stat.icon">
            <Stat :icon="stat.icon" :title="stat.title" :value="stat.value" />
          </BCol>
        </BRow>
        <Emailsent :updating="fetchingStats" />
        </BCol>
    </BRow>

    

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">List Project</BCardTitle>
            <Transaction :transactions="transactions" :updating="fetchingStats" />
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

  </Layout>
</template>

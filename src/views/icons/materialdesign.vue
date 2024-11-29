<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

import { icons } from "./data-material";

/**
 * Material-design-icon component
 */
export default {

  components: { Layout, PageHeader },
  data() {
    return {
      icons: icons,

      iconsCount: 0,
      newIconsCount: 0
    };
  },
  mounted() {
    this.icons.push({ name: "blank", hex: "f68c" });

    this.icons.forEach(icon => {
      var item = this.getIconItem(icon, this.isNew(icon));
      document.getElementById("icons").appendChild(item);
      if (this.isNew(icon)) {
        var newItem = this.getIconItem(icon, false);
        document.getElementById("newIcons").appendChild(newItem);
        this.newIconsCount++;
      }
      this.iconsCount++;
    });
  },
  methods: {
    isNew(icon) {
      return icon.version === "5.0.45";
    },

    getIconItem(icon) {
      var div = document.createElement("div"),
        i = document.createElement("i");
      div.className = "col-xl-3 col-lg-4 col-sm-6";
      i.className = "mdi mdi-" + icon.name;
      div.appendChild(i);
      var span = document.createElement("span");
      span.appendChild(document.createTextNode("mdi-" + icon.name));
      div.appendChild(span);
      return div;
    },

    isDeprecated(icon) {
      return typeof icon.deprecated == "undefined" ? false : icon.deprecated;
    }
  }
};
</script>

<template>
  <Layout>
    <PageHeader title="Material Design" pageTitle="Icons" />

    <BRow class="icons-demo-content">
      <BCol cols="12">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>New Icons</BCardTitle>

            <p class="card-title-desc mb-2">
              Use
              <code>&lt;i class="mdi mdi-speedometer-slow"&gt;&lt;/i&gt;</code>
              <span class="badge bg-success">v 5.8.55</span>.
            </p>

            <BRow class="icon-demo-content" id="newIcons"></BRow>
          </BCardBody>
        </BCard>

        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">All Icons</BCardTitle>

            <BRow class="icon-demo-content" id="icons"></BRow>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol cols="12">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Size</BCardTitle>

            <BRow class="icon-demo-content">
              <BCol xl="3" lg="4" sm="6">
                <i class="mdi mdi-18px mdi-account"></i> mdi-18px
              </BCol>

              <BCol xl="3" lg="4" sm="6">
                <i class="mdi mdi-24px mdi-account"></i> mdi-24px
              </BCol>

              <BCol xl="3" lg="4" sm="6">
                <i class="mdi mdi-36px mdi-account"></i> mdi-36px
              </BCol>

              <BCol xl="3" lg="4" sm="6">
                <i class="mdi mdi-48px mdi-account"></i> mdi-48px
              </BCol>
            </BRow>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol cols="12">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Rotate</BCardTitle>

            <BRow class="icon-demo-content">
              <BCol xl="3" lg="4" sm="6">
                <i class="mdi mdi-rotate-45 mdi-account"></i> mdi-rotate-45
              </BCol>
              <BCol xl="3" lg="4" sm="6">
                <i class="mdi mdi-rotate-90 mdi-account"></i> mdi-rotate-90
              </BCol>
              <BCol xl="3" lg="4" sm="6">
                <i class="mdi mdi-rotate-135 mdi-account"></i> mdi-rotate-135
              </BCol>
              <BCol xl="3" lg="4" sm="6">
                <i class="mdi mdi-rotate-180 mdi-account"></i> mdi-rotate-180
              </BCol>
              <BCol xl="3" lg="4" sm="6">
                <i class="mdi mdi-rotate-225 mdi-account"></i> mdi-rotate-225
              </BCol>
              <BCol xl="3" lg="4" sm="6">
                <i class="mdi mdi-rotate-270 mdi-account"></i> mdi-rotate-270
              </BCol>
              <BCol xl="3" lg="4" sm="6">
                <i class="mdi mdi-rotate-315 mdi-account"></i> mdi-rotate-315
              </BCol>
            </BRow>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol cols="12">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Spin</BCardTitle>

            <BRow class="icon-demo-content">
              <BCol xl="3" lg="4" sm="6">
                <i class="mdi mdi-spin mdi-loading"></i> mdi-spin
              </BCol>
              <BCol xl="3" lg="4" sm="6">
                <i class="mdi mdi-spin mdi-star"></i> mdi-spin
              </BCol>
            </BRow>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>
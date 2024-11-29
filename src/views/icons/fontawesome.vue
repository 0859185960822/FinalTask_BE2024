<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

import { icons } from "./data-fontawesome";

/**
 * Font-awesome component
 */
export default {
  components: { Layout, PageHeader },
  data() {
    return {
      icons: icons,

      solid: "",
      regular: "",
      brand: ""
    };
  },
  mounted() {
    for (let entry of icons) {
      if (entry.attributes.membership.free.length) {
        for (let value of entry.attributes.membership.free) {
          switch (value) {
            case "brands":
              this.brand +=
                '<div class="col-xl-3 col-lg-4 col-sm-6">\
                          <i class="fab fa-' +
                entry.id +
                '"></i> fab fa-' +
                entry.id +
                "\
                      </div>";
              break;
            case "solid":
              this.solid +=
                '<div class="col-xl-3 col-lg-4 col-sm-6">\
                    <i class="fas fa-' +
                entry.id +
                '"></i> fas fa-' +
                entry.id +
                "\
                </div>";
              break;
            default:
              this.regular +=
                '<div class="col-xl-3 col-lg-4 col-sm-6">\
                          <i class="far fa-' +
                entry.id +
                '"></i> far fa-' +
                entry.id +
                "\
                      </div>";
          }
        }
      }
    }

    document.getElementById("solid").innerHTML = this.solid;
    document.getElementById("brand").innerHTML = this.brand;
    document.getElementById("regular").innerHTML = this.regular;
  }
};
</script>

<template>
  <Layout>
    <PageHeader title="Font Awesome" pageTitle="Icons" />

    <BRow>
      <BCol cols="12">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Solid</BCardTitle>

            <p class="card-title-desc mb-2">
              Use
              <code>&lt;i class="fas fa-ad"&gt;&lt;/i&gt;</code>
              <span class="badge bg-success">v 5.13.0</span>.
            </p>
            <BRow class="icon-demo-content" id="solid"></BRow>
          </BCardBody>
        </BCard>

        <BCard no-body>
          <BCardBody>
            <BCardTitle>Regular</BCardTitle>

            <p class="card-title-desc mb-2">
              Use
              <code>&lt;i class="far fa-address-book"&gt;&lt;/i&gt;</code>
              <span class="badge badge-success">v 5.13.0</span>.
            </p>
            <BRow class="icon-demo-content" id="regular"></BRow>
          </BCardBody>
        </BCard>

        <BCard no-body>
          <BCardBody>
            <BCardTitle>Brands</BCardTitle>

            <p class="card-title-desc mb-2">
              Use
              <code>&lt;i class="fab fa-500px"&gt;&lt;/i&gt;</code>
              <span class="badge badge-success">v 5.13.0</span>.
            </p>
            <BRow class="icon-demo-content" id="brand"></BRow>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>
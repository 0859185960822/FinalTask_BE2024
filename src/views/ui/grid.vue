<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

/**
 * Grid component
 */
export default {
  components: { Layout, PageHeader },
};
</script>

<template>
  <Layout>
    <PageHeader title="Grid" pageTitle="UI Elements" />

    <BRow>
      <BCol cols="12">
        <BCard no-body>
          <BCardBody class="pb-0">
            <BCardTitle>Grid Options</BCardTitle>
            <p class="card-title-desc">
              See how aspects of the Bootstrap grid system work across multiple
              devices with a handy table.
            </p>

            <div class="table-responsive">
              <BTableSimple class="table-bordered table-striped table-nowrap mb-0">
                <BThead>
                  <BTr>
                    <BTh scope="col"></BTh>
                    <BTh scope="col" class="text-center">
                      xs<br />
                      <span class="fw-normal">&lt;576px</span>
                    </BTh>
                    <BTh scope="col" class="text-center">
                      sm<br />
                      <span class="fw-normal">≥576px</span>
                    </BTh>
                    <BTh scope="col" class="text-center">
                      md<br />
                      <span class="fw-normal">≥768px</span>
                    </BTh>
                    <BTh scope="col" class="text-center">
                      lg<br />
                      <span class="fw-normal">≥992px</span>
                    </BTh>
                    <BTh scope="col" class="text-center">
                      xl<br />
                      <span class="fw-normal">≥1200px</span>
                    </BTh>
                    <BTh scope="col" class="text-center">
                      xxl<br />
                      <span class="fw-normal">≥1400px</span>
                    </BTh>
                  </BTr>
                </BThead>
                <BTbody>
                  <BTr>
                    <BTh class="text-nowrap" scope="row">Grid behavior</BTh>
                    <BTd>Horizontal at all times</BTd>
                    <BTd colspan="5">
                      Collapsed to start, horizontal above breakpoints
                    </BTd>
                  </BTr>
                  <BTr>
                    <BTh class="text-nowrap" scope="row">Max container width</BTh>
                    <BTd>None (auto)</BTd>
                    <BTd>540px</BTd>
                    <BTd>720px</BTd>
                    <BTd>960px</BTd>
                    <BTd>1140px</BTd>
                    <BTd>1320px</BTd>
                  </BTr>
                  <BTr>
                    <BTh class="text-nowrap" scope="row">Class prefix</BTh>
                    <BTd><code>.col-</code></BTd>
                    <BTd><code>.col-sm-</code></BTd>
                    <BTd><code>.col-md-</code></BTd>
                    <BTd><code>.col-lg-</code></BTd>
                    <BTd><code>.col-xl-</code></BTd>
                    <BTd><code>.col-xxl-</code></BTd>
                  </BTr>
                  <BTr>
                    <BTh class="text-nowrap" scope="row"># of columns</BTh>
                    <BTd colspan="6">12</BTd>
                  </BTr>
                  <BTr>
                    <BTh class="text-nowrap" scope="row">Gutter width</BTh>
                    <BTd colspan="6">24px (12px on each side of a column)</BTd>
                  </BTr>
                  <BTr>
                    <BTh class="text-nowrap" scope="row">Custom gutters</BTh>
                    <BTd colspan="6">Yes</BTd>
                  </BTr>
                  <BTr>
                    <BTh class="text-nowrap" scope="row">Nestable</BTh>
                    <BTd colspan="6">Yes</BTd>
                  </BTr>
                  <BTr>
                    <BTh class="text-nowrap" scope="row">Offsets</BTh>
                    <BTd colspan="6">Yes</BTd>
                  </BTr>
                  <BTr>
                    <BTh class="text-nowrap" scope="row">Column ordering</BTh>
                    <BTd colspan="6">Yes</BTd>
                  </BTr>
                </BTbody>
              </BTableSimple>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>
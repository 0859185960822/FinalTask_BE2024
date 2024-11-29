<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

/**
 * General-ui component
 */
export default {
  components: {
    Layout,
    PageHeader,
  },
  data() {
    return {
      defaultvalue: 3,
      currentpage: 3,
    };
  },
};
</script>

<template>
  <Layout>
    <PageHeader title="General" pageTitle="UI Elements" />

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <BCardBody>
            <BRow>
              <BCol lg="6">
                <div>
                  <BCardTitle>Badges</BCardTitle>
                  <p class="card-title-desc">
                    Add any of the below mentioned modifier classes to change
                    the appearance of a badge.
                  </p>
                  <div>
                    <BBadge variant="primary">Primary</BBadge>
                    <BBadge variant="success" class="ms-1">Success</BBadge>
                    <BBadge variant="info" class="ms-1">Info</BBadge>
                    <BBadge variant="warning" class="ms-1">Warning</BBadge>
                    <BBadge variant="danger" class="ms-1">Danger</BBadge>
                    <BBadge variant="dark" class="ms-1">Dark</BBadge>
                  </div>
                </div>
              </BCol>
              <BCol lg="6">
                <div class="mt-4 mt-lg-0">
                  <BCardTitle>Pill Badges</BCardTitle>
                  <p class="card-title-desc">
                    Use the
                    <code>.badge-pill</code> modifier class to make badges more
                    rounded (with a larger
                    <code>border-radius</code>
                    and additional horizontal
                    <code>padding</code>). Useful if you miss the badges from
                    v3.
                  </p>

                  <div>
                    <BBadge variant="primary" pill>Primary</BBadge>
                    <BBadge variant="success" class="ms-1" pill>Success</BBadge>
                    <BBadge variant="info" class="ms-1" pill>Info</BBadge>
                    <BBadge variant="warning" class="ms-1" pill>Warning</BBadge>
                    <BBadge variant="danger" class="ms-1" pill>Danger</BBadge>
                    <BBadge variant="dark" class="ms-1" pill>Dark</BBadge>
                  </div>
                </div>
              </BCol>
            </BRow>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Popovers</BCardTitle>
            <p class="card-title-desc">
              Add small overlay content, like those found in iOS, to any element
              for housing secondary information.
            </p>

            <div class="button-items">
              <BButton class="me-2" v-b-popover.top="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'
                " variant="secondary">Popover on top</BButton>
              <BButton class="me-2" v-b-popover.bottom="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'
                " variant="secondary">Popover on bottom</BButton>
              <BButton class="me-2" v-b-popover.right="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'
                " variant="secondary">Popover on right</BButton>
              <BButton v-b-popover.left="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'
                " variant="secondary">Popover on left</BButton>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Pagination</BCardTitle>
            <BRow>
              <BCol lg="6">
                <h5 class="font-size-14">Default Example</h5>
                <p class="card-title-desc">
                  Pagination links indicate a series of related content exists
                  across multiple pages.
                </p>
                <BPagination v-model="defaultvalue" :total-rows="50" :per-page="10" aria-controls="my-table"></BPagination>
              </BCol>

              <BCol lg="6">
                <div class="mt-4">
                  <BCardTitle>Alignment</BCardTitle>
                  <p class="card-title-desc">
                    Change the alignment of pagination components with flexbox
                    utilities.
                  </p>

                  <BPagination :total-rows="50" prev-text="Previous" next-text="Next" align="center"></BPagination>

                  <BPagination :total-rows="50" prev-text="Previous" next-text="Next" align="right"></BPagination>
                </div>
              </BCol>
            </BRow>

            <BRow>
              <BCol lg="6">
                <div class="mt-4">
                  <h5 class="font-size-14">Sizing</h5>
                  <p class="card-title-desc">
                    Fancy larger or smaller pagination? Add
                    <code>.pagination-lg</code> or
                    <code>.pagination-sm</code> for additional sizes.
                  </p>
                  <BPagination size="lg" :total-rows="30" :per-page="10" aria-controls="my-table"></BPagination>

                  <BPagination size="sm" :total-rows="30" :per-page="10" aria-controls="my-table"></BPagination>
                </div>
              </BCol>
            </BRow>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Border spinner</BCardTitle>
            <p class="card-title-desc">
              Use the border spinners for a lightweight loading indicator.
            </p>
            <div>
              <BSpinner class="m-2" variant="primary" role="status"></BSpinner>
              <BSpinner class="m-2" variant="secondary" role="status"></BSpinner>
              <BSpinner class="m-2" variant="success" role="status"></BSpinner>
              <BSpinner class="m-2" variant="info" role="status"></BSpinner>
              <BSpinner class="m-2" variant="warning" role="status"></BSpinner>
              <BSpinner class="m-2" variant="danger" role="status"></BSpinner>
              <BSpinner class="m-2" variant="dark" role="status"></BSpinner>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Growing spinner</BCardTitle>
            <p class="card-title-desc">
              If you don’t fancy a border spinner, switch to the grow spinner.
              While it doesn’t technically spin, it does repeatedly grow!
            </p>
            <div>
              <BSpinner type="grow" class="m-2" variant="primary" role="status"></BSpinner>
              <BSpinner type="grow" class="m-2" variant="secondary" role="status"></BSpinner>
              <BSpinner type="grow" class="m-2" variant="success" role="status"></BSpinner>
              <BSpinner type="grow" class="m-2" variant="info" role="status"></BSpinner>
              <BSpinner type="grow" class="m-2" variant="warning" role="status"></BSpinner>
              <BSpinner type="grow" class="m-2" variant="danger" role="status"></BSpinner>
              <BSpinner type="grow" class="m-2" variant="dark" role="status"></BSpinner>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>

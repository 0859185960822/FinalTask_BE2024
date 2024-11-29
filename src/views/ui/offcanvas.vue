<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

export default {
  data() {
    return {
      defaultOffcanvas: false,
      topOffcanvas: false,
      rightOffcanvas: false,
      bottomOffcanvas: false,
      leftOffcanvas: false,
      backdropOff: false,
      OffcanvasBackdropOff: false,
      backdropOffScroll: false,
      backdrop: null,
    }
  },
  components: {
    Layout,
    PageHeader,
  },
  methods: {
    backdropType(type, backdropType) {
      if (type == false) {
        this.backdropOff = true;
        this.backdrop = backdropType;
      } else {
        this.backdropOff = true;
        this.backdrop = backdropType;
      }
    }
  }
};
</script>

<template>
  <div>
    <Layout>
      <PageHeader title="Offcanvas" pageTitle="UI Elements" />

      <BRow>
        <BCol lg="6">
          <BCard no-body>
            <BCardBody>
              <BCardTitle>Demo</BCardTitle>
              <p class="card-title-desc">
                Use the buttons below to show and hide an offcanvas element via
                JavaScript that toggles the <code>.show</code> class on an
                element with the <code>.offcanvas</code> class.
              </p>

              <div class="d-flex flex-wrap gap-2">
                <BButton @click="defaultOffcanvas = true" variant="primary">
                  Link with href
                </BButton>
                <BButton @click="defaultOffcanvas = true" variant="primary">
                  Button with data-bs-target
                </BButton>
              </div>

              <BOffcanvas v-model="defaultOffcanvas" title="Offcanvas" class="offcanvas-start">
                <div>
                  Some text as placeholder. In real life you can have the
                  elements you have chosen. Like, text, images, lists, etc.
                </div>
                <BDropdown v-model="show" variant="primary" class="mt-3">
                  <template #button-content>
                    <div>
                      Dropdown button
                      <i class="mdi mdi-chevron-down"></i>
                    </div>
                  </template>
                  <BDropdownItem>Action</BDropdownItem>
                  <BDropdownItem>Another action</BDropdownItem>
                  <BDropdownItem>Something else here</BDropdownItem>
                </BDropdown>
              </BOffcanvas>
            </BCardBody>
          </BCard>
        </BCol>

        <BCol lg="6">
          <BCard no-body>
            <BCardBody>
              <BCardTitle>Placement</BCardTitle>
              <p class="card-title-desc">
                Offcanvas Diffrent Placement Example: Top, Right & Bottom
              </p>

              <div class="d-flex flex-wrap gap-2">
                <BButton variant="primary" @click="topOffcanvas = true">
                  Toggle top offcanvas
                </BButton>

                <BButton variant="primary" @click="rightOffcanvas = true">
                  Toggle right offcanvas
                </BButton>

                <BButton variant="primary" @click="bottomOffcanvas = true">
                  Toggle bottom offcanvas
                </BButton>
              </div>

              <BOffcanvas v-model="topOffcanvas" placement="top" title="Offcanvas top">
                ...
              </BOffcanvas>

              <BOffcanvas v-model="rightOffcanvas" placement="end" title="Offcanvas Right">
                ...
              </BOffcanvas>

              <BOffcanvas v-model="bottomOffcanvas" placement="bottom" title="Offcanvas Bottom">
                ...
              </BOffcanvas>
            </BCardBody>
          </BCard>
        </BCol>
      </BRow>

      <BRow>
        <BCol lg="12">
          <BCard no-body>
            <BCardBody>
              <BCardTitle>Backdrop</BCardTitle>
              <p class="card-title-desc">
                Scrolling the <code>&lt;body&gt;</code> element is disabled when
                an offcanvas and its backdrop are visible. Use the
                <code>data-bs-scroll</code> attribute to toggle
                <code>&lt;body&gt;</code> scrolling and
                <code>data-bs-backdrop</code> to toggle the backdrop.
              </p>

              <div class="d-flex flex-wrap gap-2">
                <BButton @click="backdropType(false, false)" variant="primary">
                  Enable body scrolling
                </BButton>
                <BButton @click="backdropType(false, true)" variant="primary">
                  Enable backdrop (default)
                </BButton>
                <BButton @click="backdropType(true, true)" variant="primary">
                  Enable both scrolling & backdrop
                </BButton>
              </div>

              <BOffcanvas v-model="backdropOff" title="Colored with scrolling" class="offcanvas-start">
                <p>
                  Try scrolling the rest of the page to see this option in
                  action.
                </p>
              </BOffcanvas>
            </BCardBody>
          </BCard>
        </BCol>
      </BRow>
    </Layout>
  </div>
</template>

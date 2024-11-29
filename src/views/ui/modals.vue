<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

import { ref } from "vue";
/**
 * Modals component
 */
export default {
  setup() {
    const isOpen = ref(false);
    const isOpen1 = ref(false);
    const isOpen2 = ref(false);
    const isOpen3 = ref(false);
    const isOpen4 = ref(false);
    const isOpen5 = ref(false);

    return {
      isOpen,
      isOpen1,
      isOpen2,
      isOpen3,
      isOpen4,
      isOpen5,
    };
  },
  components: { Layout, PageHeader },
};
</script>

<template>
  <Layout>
    <PageHeader title="Modals" pageTitle="UI Elements" />

    <BRow>
      <BCol cols="12">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Modals Examples</BCardTitle>
            <p class="card-title-desc">
              Modals are streamlined, but flexible dialog prompts powered by
              JavaScript. They support a number of use cases from user
              notification to completely custom content and feature a handful of
              helpful subcomponents, sizes, and more.
            </p>

            <!-- /.modal -->

            <BRow>
              <BCol sm="6" md="4" xl="3">
                <div class="my-4 text-center">
                  <p class="text-muted">Standard modal</p>
                  <BButton @click="isOpen = true" variant="primary">Standard modal</BButton>
                  <BModal v-model="isOpen" id="modal-standard" title="Modal Heading" title-class="font-18">
                    <h5>Overflowing text to show scroll behavior</h5>
                    <p>
                      Cras mattis consectetur purus sit amet fermentum. Cras
                      justo odio, dapibus ac facilisis in, egestas eget quam.
                      Morbi leo risus, porta ac consectetur ac, vestibulum at
                      eros.
                    </p>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur et. Vivamus sagittis lacus vel augue laoreet
                      rutrum faucibus dolor auctor.
                    </p>
                    <p>
                      Aenean lacinia bibendum nulla sed consectetur. Praesent
                      commodo cursus magna, vel scelerisque nisl consectetur et.
                      Donec sed odio dui. Donec ullamcorper nulla non metus
                      auctor fringilla.
                    </p>
                    <p>
                      Cras mattis consectetur purus sit amet fermentum. Cras
                      justo odio, dapibus ac facilisis in, egestas eget quam.
                      Morbi leo risus, porta ac consectetur ac, vestibulum at
                      eros.
                    </p>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur et. Vivamus sagittis lacus vel augue laoreet
                      rutrum faucibus dolor auctor.
                    </p>
                    <p>
                      Aenean lacinia bibendum nulla sed consectetur. Praesent
                      commodo cursus magna, vel scelerisque nisl consectetur et.
                      Donec sed odio dui. Donec ullamcorper nulla non metus
                      auctor fringilla.
                    </p>
                    <p>
                      Cras mattis consectetur purus sit amet fermentum. Cras
                      justo odio, dapibus ac facilisis in, egestas eget quam.
                      Morbi leo risus, porta ac consectetur ac, vestibulum at
                      eros.
                    </p>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur et. Vivamus sagittis lacus vel augue laoreet
                      rutrum faucibus dolor auctor.
                    </p>
                    <p>
                      Aenean lacinia bibendum nulla sed consectetur. Praesent
                      commodo cursus magna, vel scelerisque nisl consectetur et.
                      Donec sed odio dui. Donec ullamcorper nulla non metus
                      auctor fringilla.
                    </p>
                  </BModal>
                </div>
              </BCol>
              <BCol sm="6" md="4" xl="3">
                <div class="my-4 text-center">
                  <p class="text-muted">Extra large modal</p>
                  <BButton @click="isOpen1 = true" variant="primary">Extra large modal</BButton>
                  <BModal v-model="isOpen1" id="modal-xl" size="xl" title="Extra large modal" title-class="font-18" hide-footer>
                    <p>
                      Cras mattis consectetur purus sit amet fermentum. Cras
                      justo odio, dapibus ac facilisis in, egestas eget quam.
                      Morbi leo risus, porta ac consectetur ac, vestibulum at
                      eros.
                    </p>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur et. Vivamus sagittis lacus vel augue laoreet
                      rutrum faucibus dolor auctor.
                    </p>
                    <p class="mb-0">
                      Aenean lacinia bibendum nulla sed consectetur. Praesent
                      commodo cursus magna, vel scelerisque nisl consectetur et.
                      Donec sed odio dui. Donec ullamcorper nulla non metus
                      auctor fringilla.
                    </p>
                  </BModal>
                </div>
              </BCol>
              <BCol sm="6" md="4" xl="3">
                <div class="my-4 text-center">
                  <p class="text-muted">Large modal</p>
                  <BButton @click="isOpen2 = true" variant="primary">Large modal</BButton>
                  <BModal v-model="isOpen2" id="modal-lg" size="lg" title="Large modal" title-class="font-18" hide-footer>
                    <p>
                      Cras mattis consectetur purus sit amet fermentum. Cras
                      justo odio, dapibus ac facilisis in, egestas eget quam.
                      Morbi leo risus, porta ac consectetur ac, vestibulum at
                      eros.
                    </p>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur et. Vivamus sagittis lacus vel augue laoreet
                      rutrum faucibus dolor auctor.
                    </p>
                    <p class="mb-0">
                      Aenean lacinia bibendum nulla sed consectetur. Praesent
                      commodo cursus magna, vel scelerisque nisl consectetur et.
                      Donec sed odio dui. Donec ullamcorper nulla non metus
                      auctor fringilla.
                    </p>
                  </BModal>
                </div>
              </BCol>
              <BCol sm="6" md="4" xl="3">
                <div class="my-4 text-center">
                  <p class="text-muted">Small modal</p>
                  <BButton @click="isOpen3 = true" variant="primary">Small modal</BButton>
                  <BModal v-model="isOpen3" id="modal-sm" size="sm" title="Small modal" title-class="font-18" hide-footer>
                    <p>
                      Cras mattis consectetur purus sit amet fermentum. Cras
                      justo odio, dapibus ac facilisis in, egestas eget quam.
                      Morbi leo risus, porta ac consectetur ac, vestibulum at
                      eros.
                    </p>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur et. Vivamus sagittis lacus vel augue laoreet
                      rutrum faucibus dolor auctor.
                    </p>
                    <p class="mb-0">
                      Aenean lacinia bibendum nulla sed consectetur. Praesent
                      commodo cursus magna, vel scelerisque nisl consectetur et.
                      Donec sed odio dui. Donec ullamcorper nulla non metus
                      auctor fringilla.
                    </p>
                  </BModal>
                </div>
              </BCol>
              <BCol sm="6" md="4" xl="3">
                <div class="my-4 text-center">
                  <p class="text-muted">Center modal</p>
                  <BButton @click="isOpen4 = true" variant="primary">Center modal</BButton>
                  <BModal v-model="isOpen4" id="modal-center" centered title="Center modal" title-class="font-18" hide-footer>
                    <p>
                      Cras mattis consectetur purus sit amet fermentum. Cras
                      justo odio, dapibus ac facilisis in, egestas eget quam.
                      Morbi leo risus, porta ac consectetur ac, vestibulum at
                      eros.
                    </p>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur et. Vivamus sagittis lacus vel augue laoreet
                      rutrum faucibus dolor auctor.
                    </p>
                    <p class="mb-0">
                      Aenean lacinia bibendum nulla sed consectetur. Praesent
                      commodo cursus magna, vel scelerisque nisl consectetur et.
                      Donec sed odio dui. Donec ullamcorper nulla non metus
                      auctor fringilla.
                    </p>
                  </BModal>
                </div>
              </BCol>
              <BCol sm="6" md="4" xl="3">
                <div class="my-4 text-center">
                  <p class="text-muted">Scrollable modal</p>
                  <BButton @click="isOpen5 = true" variant="primary">Scrollable</BButton>
                  <BModal v-model="isOpen5" id="modal-scrollable" scrollable title="Scrollable Modal" title-class="font-18">
                    <p v-for="i in 15" :key="i">
                      Cras mattis consectetur purus sit amet fermentum. Cras
                      justo odio, dapibus ac facilisis in, egestas eget quam.
                      Morbi leo risus, porta ac consectetur ac, vestibulum at
                      eros.
                    </p>
                  </BModal>
                </div>
              </BCol>
            </BRow>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>
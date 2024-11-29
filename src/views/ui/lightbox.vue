<script>
import VueEasyLightbox from "vue-easy-lightbox";

import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

/**
 * Lightbox component
 */
export default {
  components: { VueEasyLightbox, Layout, PageHeader },
  data() {
    return {
      visible: false,
      singleImage: false,
      visibleCaption: false,
      isVisible: false,
      index: 0,
      imgs: [
        require("@/assets/images/small/img-1.jpg"),
        require("@/assets/images/small/img-2.jpg"),
        require("@/assets/images/small/img-3.jpg"),
        require("@/assets/images/small/img-4.jpg"),
        require("@/assets/images/small/img-5.jpg"),
        require("@/assets/images/small/img-6.jpg"),
      ],
      captionimgs: [
        { src: require("@/assets/images/small/img-3.jpg"), title: "Caption 1" },
        { src: require("@/assets/images/small/img-7.jpg"), title: "Caption 2" },
      ],
    };
  },
  methods: {
    showImg(index) {
      this.index = index;
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    },
    showCaptiomImg(index) {
      this.index = index;
      this.visibleCaption = true;
    },
    handleCaptionHide() {
      this.visibleCaption = false;
    },
  },
};
</script>

<template>
  <Layout>
    <PageHeader title="Lightbox" pageTitle="UI Elements" />

    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Single image lightbox</BCardTitle>
            <p class="card-title-desc">Example of image popup.</p>
            <div class="popup-gallery">
              <img src="@/assets/images/small/img-1.jpg" width="120" @click="singleImage = true" />
              <vue-easy-lightbox :visible="singleImage" :imgs="require('@/assets/images/small/img-1.jpg')" @hide="singleImage = false"></vue-easy-lightbox>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Lightbox gallery</BCardTitle>
            <p class="card-title-desc">
              In this example lazy-loading of images is enabled for the next
              image based on move direction.
            </p>
            <div class="popup-gallery d-flex flex-wrap">
              <div v-for="(src, index) in imgs" :key="index" class="float-left" @click="() => showImg(index)">
                <img :src="src" width="120" />
              </div>
              <vue-easy-lightbox :visible="visible" :imgs="imgs" :index="index" @hide="handleHide"></vue-easy-lightbox>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Caption</BCardTitle>
            <p class="card-title-desc">Show caption with popup.</p>
            <div class="popup-gallery d-flex flex-wrap">
              <div v-for="(src, index) in captionimgs" :key="index" class="float-left" @click="() => showCaptiomImg(index)">
                <img :src="src.src" width="275" />
              </div>
              <vue-easy-lightbox :visible="visibleCaption" :imgs="captionimgs" :index="index" @hide="handleCaptionHide"></vue-easy-lightbox>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Popup with form</BCardTitle>
            <div>
              <BLink class="popup-form btn btn-primary" href="javascript: void(0);" @click="isVisible = true">Popup form</BLink>

              <BModal v-model="isVisible" id="modal-1" title="Form" hide-footer size="lg" centered>
                <BCardBody>
                  <BForm>
                    <BRow>
                      <BCol lg="4">
                        <div class="mb-3">
                          <label for="name">Name</label>
                          <BFormInput type="text" class="form-control" id="name" placeholder="Enter Name" />
                        </div>
                      </BCol>
                      <BCol lg="4">
                        <div class="mb-3">
                          <label for="email">Email</label>
                          <BFormInput type="email" class="form-control" id="email" placeholder="Enter Email" />
                        </div>
                      </BCol>
                      <BCol lg="4">
                        <div class="mb-3">
                          <label for="password">Password</label>
                          <BFormInput type="password" class="form-control" id="password" placeholder="Enter Password" />
                        </div>
                      </BCol>
                    </BRow>
                    <BRow>
                      <BCol lg="12">
                        <div class="mb-3">
                          <label for="subject">Subject</label>
                          <BFormTextarea id="subject" rows="3"></BFormTextarea>
                        </div>
                      </BCol>
                    </BRow>
                    <BRow>
                      <BCol lg="12">
                        <div class="text-end">
                          <BButton variant="primary" type="submit" @click="isVisible = false">
                            Submit
                          </BButton>
                        </div>
                      </BCol>
                    </BRow>
                  </BForm>
                </BCardBody>
              </BModal>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>
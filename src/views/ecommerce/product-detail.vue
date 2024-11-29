<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

import { clothsData } from "./data-products";
import { Img7, Img4, Img6 } from "@/assets/images/product/data";
import { avatar2, avatar4, avatar5 } from "@/assets/images/users/data"
/**
 * Product detail component
 */
export default {
  components: { Layout, PageHeader },
  data() {
    return {
      avatar2, avatar4, avatar5,
      productDetail: null,
      clothsData,
      productData: [
        {
          imageSrc: Img7,
          productName: "Wireless Headphone",
          rating: [1, 2, 3, 4],
          originalPrice: 240,
          discountedPrice: 225
        },
        {
          imageSrc: Img4,
          productName: "Phone patterned cases",
          rating: [1, 2, 3, 4],
          originalPrice: 150,
          "discountedPrice": 145
        },
        {
          imageSrc: Img6,
          productName: "Phone Dark Patterned cases",
          rating: [1, 2, 3, 4],
          originalPrice: 138,
          discountedPrice: 135
        }
      ]
    };
  },
  created() {
    this.productDetail = clothsData.filter((product) => {
      return product.id === parseInt(this.$route.params.id);
    });
  },
  methods: {
    /**
     * Selected image shows
     */
    imageShow(event) {
      const image = event.target.src;
      const expandImg = document.getElementById("expandedImg");
      expandImg.src = image;
    },
  },
};
</script>

<template>
  <Layout>
    <PageHeader title="Product Detail" pageTitle="Ecommerce" />

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <BCardBody>
            <BRow>
              <BCol xl="6">
                <div class="product-detai-imgs">
                  <BTabs pills vertical nav-wrapper-class="col-md-2 col-sm-3 col-4">
                    <BTab>
                      <template v-slot:title>
                        <img :src="productDetail[0].images[0]" alt class="img-fluid mx-auto d-block tab-img rounded" />
                      </template>
                      <div class="product-img">
                        <img :src="productDetail[0].images[0]" alt class="img-fluid mx-auto d-block" />
                      </div>
                    </BTab>
                    <BTab>
                      <template v-slot:title>
                        <img :src="productDetail[0].images[1]" alt class="img-fluid mx-auto d-block tab-img rounded" />
                      </template>
                      <div class="product-img">
                        <img :src="productDetail[0].images[1]" alt class="img-fluid mx-auto d-block" />
                      </div>
                    </BTab>
                    <BTab>
                      <template v-slot:title>
                        <img :src="productDetail[0].images[2]" alt class="img-fluid mx-auto d-block tab-img rounded" />
                      </template>
                      <div class="product-img">
                        <img :src="productDetail[0].images[2]" alt class="img-fluid mx-auto d-block" />
                      </div>
                    </BTab>
                    <BTab>
                      <template v-slot:title>
                        <img :src="productDetail[0].images[3]" alt class="img-fluid mx-auto d-block tab-img rounded" />
                      </template>
                      <div class="product-img">
                        <img :src="productDetail[0].images[3]" alt class="img-fluid mx-auto d-block" />
                      </div>
                    </BTab>
                  </BTabs>
                </div>
              </BCol>

              <BCol xl="6">
                <div class="mt-3">
                  <h4 class="mt-1 mb-3">{{ productDetail[0].name }}</h4>

                  <p class="text-muted float-left me-3">
                    <span class="bx bx-star text-warning"></span>
                    <span class="bx bx-star text-warning ml-1"></span>
                    <span class="bx bx-star text-warning ml-1"></span>
                    <span class="bx bx-star text-warning ml-1"></span>
                    <span class="bx bx-star ml-1"></span>
                  </p>
                  <p class="text-muted mb-4">( 152 Customers Review )</p>

                  <h6 class="text-success text-uppercase">
                    {{ productDetail[0].discount }} Off
                  </h6>
                  <h5 class="mb-4">
                    Price :
                    <span class="text-muted me-2">
                      <del>${{ productDetail[0].oldprice }} USD</del>
                    </span>
                    <b>${{ productDetail[0].newprice }} USD</b>
                  </h5>
                  <p class="text-muted mb-4">
                    To achieve this, it would be necessary to have uniform
                    grammar pronunciation and more common words If several
                    languages coalesce
                  </p>
                  <BRow class="mb-3">
                    <BCol md="6">
                      <div v-for="(item, index) in productDetail[0].feature" :key="index">
                        <p class="text-muted">
                          <i class="bx bx-unlink font-size-16 align-middle text-primary me-1"></i>
                          {{ item }}
                        </p>
                      </div>
                    </BCol>
                    <BCol md="6">
                      <div>
                        <p class="text-muted">
                          <i class="bx bx-user-voice font-size-16 align-middle text-primary me-1"></i>
                          Bass
                        </p>
                        <p class="text-muted">
                          <i class="bx bx-cog font-size-16 align-middle text-primary me-1"></i>
                          Warranty : 1 Year
                        </p>
                      </div>
                    </BCol>
                  </BRow>

                  <div class="product-color">
                    <h5 class="font-size-15">Color :</h5>
                    <BLink href="javascript: void(0);" class="active"
                      v-for="(item, index) in productDetail[0].colorVariant" :key="index">
                      <div class="product-color-item border rounded">
                        <img :src="item.value" alt class="avatar-md" />
                      </div>
                      <p>{{ item.key }}</p>
                    </BLink>
                  </div>
                </div>
              </BCol>
            </BRow>

            <div class="mt-5">
              <h5 class="mb-3">Specifications :</h5>

              <div class="table-responsive">
                <BTableSimple class="mb-0 table-bordered">
                  <BTbody>
                    <BTr v-for="(i, index) in productDetail[0].specification" :key="index">
                      <BTh scope="row" style="width: 400px">{{ i.key }}</BTh>
                      <BTd>{{ i.value }}</BTd>
                    </BTr>
                  </BTbody>
                </BTableSimple>
              </div>
            </div>

            <div class="mt-5">
              <h5 class="mb-4">Reviews :</h5>

              <div class="d-flex py-3 border-bottom">
                <img :src="avatar2" class="avatar-xs me-3 rounded-circle" alt="img" />
                <div class="flex-grow-1">
                  <h5 class="mt-0 font-size-15">Brian</h5>
                  <p class="text-muted">
                    If several languages coalesce, the grammar of the resulting
                    language.
                  </p>
                  <ul class="list-inline float-sm-end">
                    <li class="list-inline-item">
                      <BLink href="javascript: void(0);">
                        <i class="far fa-thumbs-up me-1"></i> Like
                      </BLink>
                    </li>
                    <li class="list-inline-item">
                      <BLink href="javascript: void(0);">
                        <i class="far fa-comment-dots me-1"></i> Comment
                      </BLink>
                    </li>
                  </ul>
                  <div class="text-muted">
                    <i class="far fa-calendar-alt text-primary me-1"></i> 5 hrs
                    ago
                  </div>
                </div>
              </div>
              <div class="d-flex py-3 border-bottom">
                <img :src="avatar4" class="avatar-xs me-3 rounded-circle" alt="img" />
                <div class="flex-grow-1">
                  <h5 class="mt-0 font-size-15">Denver</h5>
                  <p class="text-muted">
                    To an English person, it will seem like simplified English,
                    as a skeptical Cambridge
                  </p>
                  <ul class="list-inline float-sm-end">
                    <li class="list-inline-item">
                      <BLink href="javascript: void(0);">
                        <i class="far fa-thumbs-up me-1"></i> Like
                      </BLink>
                    </li>
                    <li class="list-inline-item">
                      <BLink href="javascript: void(0);">
                        <i class="far fa-comment-dots me-1"></i> Comment
                      </BLink>
                    </li>
                  </ul>
                  <div class="text-muted">
                    <i class="far fa-calendar-alt text-primary me-1"></i> 07
                    Oct, 2019
                  </div>
                  <div class="d-flex mt-4">
                    <img :src="avatar5" class="avatar-xs me-3 rounded-circle" alt="img" />
                    <div class="flex-grow-1">
                      <h5 class="mt-0 font-size-15">Henry</h5>
                      <p class="text-muted">
                        Their separate existence is a myth. For science, music,
                        sport, etc.
                      </p>
                      <ul class="list-inline float-sm-end">
                        <li class="list-inline-item">
                          <BLink href="javascript: void(0);">
                            <i class="far fa-thumbs-up me-1"></i> Like
                          </BLink>
                        </li>
                        <li class="list-inline-item">
                          <BLink href="javascript: void(0);">
                            <i class="far fa-comment-dots me-1"></i> Comment
                          </BLink>
                        </li>
                      </ul>
                      <div class="text-muted">
                        <i class="far fa-calendar-alt text-primary me-1"></i> 08
                        Oct, 2019
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="d-flex mt-3 border-bottom">
                <div class="avatar-xs me-3">
                  <span class="avatar-title bg-primary-subtle text-primary rounded-circle font-size-16">N</span>
                </div>
                <div class="flex-grow-1">
                  <h5 class="mt-0 font-size-15">Neal</h5>
                  <p class="text-muted">
                    Everyone realizes why a new common language would be
                    desirable.
                  </p>
                  <ul class="list-inline float-sm-end">
                    <li class="list-inline-item">
                      <BLink href="javascript: void(0);">
                        <i class="far fa-thumbs-up me-1"></i> Like
                      </BLink>
                    </li>
                    <li class="list-inline-item">
                      <BLink href="javascript: void(0);">
                        <i class="far fa-comment-dots me-1"></i> Comment
                      </BLink>
                    </li>
                  </ul>
                  <div class="text-muted">
                    <i class="far fa-calendar-alt text-primary me-1"></i> 05
                    Oct, 2019
                  </div>
                </div>
              </div>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow class="mt-3">
      <BCol lg="12">
        <div>
          <h5 class="mb-3">Recent product :</h5>

          <BRow>
            <BCol v-for="( product, index ) of productData" :key="index" xl="4" sm="6">
              <BCard no-body>
                <BCardBody>
                  <BRow class="align-items-center">
                    <BCol md="4">
                      <img :src="product.imageSrc" alt class="img-fluid mx-auto d-block" />
                    </BCol>
                    <BCol md="8">
                      <div class="text-center text-md-start pt-3 pt-md-0">
                        <h5 class="mb-3 text-truncate">
                          <BLink href="javascript: void(0);" class="text-dark">{{ product.productName }}</BLink>
                        </h5>
                        <p class="text-muted mb-4">
                          <i v-for="star in product.rating" class="bx bxs-star text-warning" :key="star"></i>
                          <i class="bx bxs-star"></i>
                        </p>
                        <h5 class="my-0">
                          <span class="text-muted me-2">
                            <del>${{ product.originalPrice }}</del>
                          </span>
                          <b>${{ product.discountedPrice }}</b>
                        </h5>
                      </div>
                    </BCol>
                  </BRow>
                </BCardBody>
              </BCard>
            </BCol>
          </BRow>
        </div>
      </BCol>
    </BRow>
  </Layout>
</template>

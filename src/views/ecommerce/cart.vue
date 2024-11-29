<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import { productData, columns, orderData } from "./data"
/**
 * Product-cart component
 */
export default {
  data() {
    return {
      productData,
      columns, orderData
    }
  },
  components: { Layout, PageHeader },
};
</script>

<template>
  <Layout>
    <PageHeader title="Cart" pageTitle="Ecommerce" />

    <BRow>
      <BCol xl="8">
        <BCard no-body>
          <BCardBody>
            <div class="table-responsive">
              <BTableSimple class="align-middle mb-0 table-nowrap">
                <BThead class="table-light">
                  <BTr>
                    <BTh>Product</BTh>
                    <BTh>Product Desc</BTh>
                    <BTh>Price</BTh>
                    <BTh>Quantity</BTh>
                    <BTh colspan="2">Total</BTh>
                  </BTr>
                </BThead>
                <BTbody>
                  <BTr v-for="(product, index) in productData" :key="index" class="product">
                    <BTd>
                      <img :src="product.image" alt="product-img" title="product-img" class="avatar-md" />
                    </BTd>
                    <BTd>
                      <h5 class="font-size-14 text-truncate">
                        <router-link to="/ecommerce/product-detail/1" class="text-dark">{{ product.name }}</router-link>
                      </h5>
                      <p class="mb-0">
                        Color:
                        <span class="fw-medium">{{ product.color }}</span>
                      </p>
                    </BTd>
                    <BTd>$<span class="product-price">{{ product.price }}</span></BTd>
                    <BTd>
                      <input type="number" :value="product.quantity" name="demo_vertical"
                        class="form-control product-quantity" style="width: 120px" />
                    </BTd>
                    <BTd>$<span class="product-line-price">{{ product.price * product.quantity }}</span></BTd>
                    <BTd>
                      <BLink href="javascript:void(0);" class="action-icon text-danger">
                        <i class="mdi mdi-trash-can font-size-18"></i>
                      </BLink>
                    </BTd>
                  </BTr>
                </BTbody>
              </BTableSimple>
            </div>
            <BRow class="mt-4">
              <BCol sm="6">
                <router-link to="/ecommerce/product-detail/1" class="btn btn-secondary">
                  <i class="mdi mdi-arrow-left me-1"></i> Continue Shopping
                </router-link>
              </BCol>
              <BCol sm="6">
                <div class="text-sm-end mt-2 mt-sm-0">
                  <router-link to="/ecommerce/checkout" class="btn btn-success">
                    <i class="mdi mdi-cart-arrow-right me-1"></i> Checkout
                  </router-link>
                </div>
              </BCol>
            </BRow>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol xl="4">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Card Details</BCardTitle>

            <BCard class="bg-primary text-white visa-card mb-0" no-body>
              <BCardBody>
                <div>
                  <i class="bx bxl-visa visa-pattern"></i>

                  <div class="float-end">
                    <i class="bx bxl-visa visa-logo display-3"></i>
                  </div>

                  <div>
                    <i class="bx bx-chip h1 text-warning"></i>
                  </div>
                </div>

                <BRow class="mt-5">
                  <BCol cols="4" v-for="column in columns" :key="column.id">
                    <p>
                      <i v-for="star in column.stars" :key="star.id" class="fas fa-star-of-life m-1"></i>
                    </p>
                  </BCol>
                </BRow>

                <div class="mt-5">
                  <h5 class="text-white float-end mb-0">12/22</h5>
                  <h5 class="text-white mb-0">Fredrick Taylor</h5>
                </div>
              </BCardBody>
            </BCard>
          </BCardBody>
        </BCard>
        <BCard no-body>
          <BCardBody class="pb-0">
            <BCardTitle class="mb-3">Order Summary</BCardTitle>

            <div class="table-responsive">
              <BTableSimple class="mb-0">
                <BTbody>
                  <BTr v-for="item in orderData" :key="item.id">
                    <BTd>{{ item.label }}</BTd>
                    <BTd :id="item.id">{{ item.value }}</BTd>
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

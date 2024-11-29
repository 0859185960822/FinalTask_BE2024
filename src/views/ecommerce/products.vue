<script>
import Slider from "@vueform/slider";
import Pagination from "@/components/common/pagination"
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

import { clothsData, checkboxesData, ratingData } from "./data-products";

/**
 * Products component
 */
export default {
  components: { Slider, Layout, PageHeader, Pagination },
  data() {
    return {
      clothsData, checkboxesData, ratingData,
      sliderPrice: 800,
      currentPage: 1,
      discountRates: [],
      productCategories: [
        { name: "All" },
        { name: "T-shirts" },
        { name: "Shirts" },
        { name: "Jeans" },
        { name: "Jackets" },
      ],
    };
  },
  methods: {
    valuechange(value) {
      this.clothsData = clothsData.filter(function (product) {
        return product.newprice <= value;
      });
    },

    searchFilter(e) {
      const searchStr = e.target.value;
      this.clothsData = clothsData.filter((product) => {
        return (
          product.name.toLowerCase().search(searchStr.toLowerCase()) !== -1
        );
      });
    },

    discountLessFilter(e, percentage) {
      if (e === "accepted" && this.discountRates.length === 0) {
        this.clothsData = clothsData.filter((product) => {
          return product.discount < percentage;
        });
      } else {
        this.clothsData = clothsData.filter((product) => {
          return product.discount >= Math.max.apply(null, this);
        }, this.discountRates);
      }
    },

    discountMoreFilter(e, percentage) {
      if (e === "accepted") {
        this.discountRates.push(percentage);
      } else {
        this.discountRates.splice(this.discountRates.indexOf(percentage), 1);
      }
      this.clothsData = clothsData.filter((product) => {
        return product.discount >= Math.max.apply(null, this);
      }, this.discountRates);
    },
  },
};
</script>

<template>
  <Layout>
    <PageHeader title="Product" pageTitle="Ecommerce" />

    <BRow>
      <BCol lg="3">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Filter</BCardTitle>

            <div>
              <h5 class="font-size-14 mb-3">Clothes</h5>
              <ul class="list-unstyled product-list">
                <li v-for="(item, index) in productCategories" :key="index">
                  <BLink href="javascript: void(0);">
                    <i class="mdi mdi-chevron-right me-1"></i>
                    <span class="tablist-name">{{ item.name }}</span>
                  </BLink>
                </li>
              </ul>
            </div>
            <div class="mt-4 pt-3">
              <h5 class="font-size-14 mb-3">Price</h5>
              <Slider v-model="sliderPrice" :min="0" :max="1000" @change="valuechange" />
            </div>

            <div class="mt-4 pt-3">
              <h5 class="font-size-14 mb-3">Discount</h5>

              <BFormCheckbox v-for="(checkbox, index) in checkboxesData" :key="index" :id="checkbox.id"
                :value="checkbox.value" :name="checkbox.name" :unchecked-value="checkbox.uncheckedValue">
                {{ checkbox.label }}
              </BFormCheckbox>
            </div>

            <div class="mt-4 pt-3">
              <h5 class="font-size-14 mb-3">Customer Rating</h5>
              <div>
                <BFormCheckbox v-for="(checkbox, index) in ratingData" :key="index" :id="checkbox.id"
                  :name="checkbox.name" :value="checkbox.value" :unchecked-value="checkbox.uncheckedValue">
                  <span class="rate-value">{{ checkbox.rateValue }}</span>
                  <i class="bx bx-star text-warning"></i> & Above
                </BFormCheckbox>
              </div>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="9">
        <BRow class="mb-3">
          <BCol xl="4" sm="6">
            <div class="mt-2">
              <h5>Clothes</h5>
            </div>
          </BCol>
          <BCol lg="8" sm="6">
            <BForm class="mt-4 mt-sm-0 float-sm-end d-flex align-items-center">
              <div class="search-box me-2">
                <div class="position-relative">
                  <input type="text" class="form-control border-0" id="searchProductList" autocomplete="off"
                    placeholder="Search..." @input="searchFilter($event)" />
                  <i class="bx bx-search-alt search-icon"></i>
                </div>
              </div>
              <ul class="nav nav-pills product-view-nav">
                <li class="nav-item">
                  <BLink class="nav-link active" href="javascript: void(0);">
                    <i class="bx bx-grid-alt align-middle"></i>
                  </BLink>
                </li>
                <li class="nav-item">
                  <BLink class="nav-link" href="javascript: void(0);">
                    <i class="bx bx-list-ul align-middle"></i>
                  </BLink>
                </li>
              </ul>
            </BForm>
          </BCol>
        </BRow>
        <BRow id="product-list">
          <BCol xl="4" sm="6" v-for="data in clothsData" :key="data.id">
            <BCard no-body>
              <BCardBody>
                <div class="product-img position-relative">
                  <div v-if="data.discount" class="avatar-sm product-ribbon">
                    <span class="avatar-title rounded-circle bg-primary">-{{ data.discount }}%</span>
                  </div>
                  <router-link :to="`/ecommerce/product-detail/${data.id}`">
                    <img :src="`${data.product}`" alt class="img-fluid mx-auto d-block" />
                  </router-link>
                </div>
                <div class="mt-4 text-center">
                  <h5 class="mb-3 text-truncate">
                    <router-link class="text-dark" :to="`/ecommerce/product-detail/${data.id}`">{{ data.name
                    }}</router-link>
                  </h5>
                  <p class="text-muted">
                    <i class="bx bxs-star text-warning"></i>
                    <i class="bx bxs-star text-warning"></i>
                    <i class="bx bxs-star text-warning"></i>
                    <i class="bx bxs-star text-warning"></i>
                    <i class="bx bxs-star"></i>
                  </p>
                  <h5 class="my-0">
                    <span class="text-muted me-2">
                      <del>${{ data.oldprice }}</del>
                    </span>
                    <b>${{ data.newprice }}</b>
                  </h5>
                </div>
              </BCardBody>
            </BCard>
          </BCol>
        </BRow>

        <BRow>
          <BCol lg="12">
            <Pagination />
          </BCol>
        </BRow>
      </BCol>
    </BRow>
  </Layout>
</template>
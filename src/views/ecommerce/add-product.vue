<script>
import axios from "axios";

import DropZone from "@/components/widgets/dropZone";
import { ref } from "vue";

import Multiselect from "@vueform/multiselect";

import { required, helpers } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";

import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

/**
 * Add-product component
 */
export default {
  setup() {
    let dropzoneFile = ref("");
    const drop = (e) => {
      dropzoneFile.value = e.dataTransfer.files[0];
    };
    const selectedFile = () => {
      dropzoneFile.value = document.querySelector(".dropzoneFile").files[0];
    };
    return { dropzoneFile, drop, selectedFile, v$: useVuelidate() };
  },
  components: {
    DropZone,
    Multiselect,
    Layout,
    PageHeader,
  },
  data() {
    return {
      value: null,
      value1: null,
      product: {
        name: "",
        manufacture_name: "",
        manufacture_brand: "",
        price: null,
      },
      formData: new FormData(),
      submitted: false,
      options: [
        "Alaska",
        "Hawaii",
        "California",
        "Nevada",
        "Oregon",
        "Washington",
        "Arizona",
        "Colorado",
        "Idaho",
        "Montana",
        "Nebraska",
        "New Mexico",
        "North Dakota",
        "Utah",
        "Wyoming",
        "Alabama",
        "Arkansas",
        "Illinois",
        "Iowa",
      ],
      image: "",
      file: "",
    };
  },
  validations: {
    product: {
      name: {
        required: helpers.withMessage("Name is required", required),
      },
      manufacture_name: {
        required: helpers.withMessage("manufacture name is required", required),
      },
      manufacture_brand: {
        required: helpers.withMessage(
          "Manufacture brand is required",
          required
        ),
      },
      price: {
        required: helpers.withMessage("Price is required", required),
      },
    },
  },
  methods: {
    onAccept(file) {
      this.image = file.name;
      this.file = file;
    },
    productAdd() {
      this.submitted = true;
      // stop here if form is invalid
      this.v$.$touch();

      if (this.v$.$invalid) {
        return;
      } else {
        let formData = new FormData();
        formData.append("name", this.product.name);
        formData.append("manufacture_name", this.product.manufacture_name);
        formData.append("manufacture_brand", this.product.manufacture_brand);
        formData.append("price", this.product.price);
        formData.append("image", this.file, this.image);

        //** Add product in api using post method *//
        axios
          .post(`http://localhost:8000/api/products`, formData)
          .then((res) => {
            return res;
          })
          .catch((err) => {
            return err;
          });
      }
    },
  },
};
</script>

<template>
  <Layout>
    <PageHeader title="Add Product" pageTitle="Ecommerce" />

    <BRow>
      <BCol cols="12">
        <BCard>
          <BCard no-body>
            <BCardTitle>Basic Information</BCardTitle>
            <p class="card-title-desc">Fill all information below</p>

            <BForm @submit.prevent="productAdd">
              <BRow>
                <BCol sm="6">
                  <div class="mb-3">
                    <label for="productname">Product Name</label>
                    <input id="productname" v-model="product.name" name="name" type="text" class="form-control" placeholder="Product Name" :class="{
                      'is-invalid': submitted && v$.product.name.$error,
                    }" />
                    <div v-if="submitted && v$.product.name.$error" class="invalid-feedback">
                      <span v-if="v$.product.name.required.$message">{{
                        v$.product.name.required.$message
                      }}</span>
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="manufacturername">Manufacturer Name</label>
                    <input id="manufacturername" v-model="product.manufacture_name" name="manufacture_name"  placeholder="Manufacturer Name" type="text"
                      class="form-control" :class="{
                        'is-invalid':
                          submitted && v$.product.manufacture_name.$error,
                      }" />
                    <div v-if="submitted && v$.product.manufacture_name.$error" class="invalid-feedback">
                      <span v-if="v$.product.manufacture_name.required.$message">{{
                        v$.product.manufacture_name.required.$message
                      }}</span>
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="manufacturerbrand">Manufacturer Brand</label>
                    <input id="manufacturerbrand" v-model="product.manufacture_brand" name="manufacture_brand" placeholder="Manufacturer Brand" type="text"
                      class="form-control" :class="{
                        'is-invalid':
                          submitted && v$.product.manufacture_brand.$error,
                      }" />
                    <div v-if="submitted && v$.product.manufacture_brand.$error" class="invalid-feedback">
                      <span v-if="v$.product.manufacture_brand.required.$message">{{
                        v$.product.manufacture_brand.required.$message
                      }}</span>
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="price">Price</label>
                    <input id="price" name="price" v-model="product.price" placeholder="Price" :class="{
                      'is-invalid': submitted && v$.product.price.$error,
                    }" type="text" class="form-control" />
                    <div v-if="submitted && v$.product.price.$error" class="invalid-feedback">
                      <span v-if="v$.product.price.required.$message">{{
                        v$.product.price.required.$message
                      }}</span>
                    </div>
                  </div>
                </BCol>

                <BCol sm="6">
                  <div class="mb-3">
                    <label class="control-label">Category</label>
                    <multiselect v-model="value" :options="options" class="checkout-multiselect-form" placeholder="Select"></multiselect>
                  </div>
                  <div class="mb-3">
                    <label class="control-label">Features</label>
                    <multiselect v-model="value1" :options="options" :multiple="true" class="checkout-multiselect-form" placeholder="Choose..."></multiselect>
                  </div>
                  <div class="mb-3">
                    <label for="productdesc">Product Description</label>
                    <BFormTextarea id="productdesc" class="form-control" placeholder="Product Description" rows="5"></BFormTextarea>
                  </div>
                </BCol>
              </BRow>
              <div class="mt-2">
                <BButton variant="primary" class="me-1">
                  Save Changes
                </BButton>
                <BButton variant="secondary">Cancel</BButton>
              </div>
            </BForm>
          </BCard>
        </BCard>

        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-3">Product Images</BCardTitle>
            <DropZone @drop.prevent="drop" @change="selectedFile" />
            <span class="file-info">{{ dropzoneFile.name }}</span>
          </BCardBody>
        </BCard>

        <BCard no-body>
          <BCardBody>
            <BCardTitle>Meta Data</BCardTitle>
            <p class="card-title-desc">Fill all information below</p>
            <BForm>
              <BRow>
                <BCol sm="6">
                  <div class="mb-3">
                    <label for="metatitle">Meta title</label>
                    <input id="metatitle" name="productname" type="text" class="form-control" placeholder="Meta Title" />
                  </div>
                  <div class="mb-3">
                    <label for="metakeywords">Meta Keywords</label>
                    <input id="metakeywords" name="manufacturername" type="text" class="form-control" placeholder="Meta Keywords" />
                  </div>
                </BCol>

                <BCol sm="6">
                  <div class="mb-3">
                    <label for="metadescription">Meta Description</label>
                    <BFormTextarea id="metadescription" class="form-control" rows="5" placeholder="Meta Description"></BFormTextarea>
                  </div>
                </BCol>
              </BRow>

              <BButton variant="primary" class="me-1">
                Save Changes
              </BButton>
              <BButton variant="secondary">Cancel</BButton>
            </BForm>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>

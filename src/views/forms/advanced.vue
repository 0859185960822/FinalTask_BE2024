<script>
import { ref } from 'vue'

import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

import Switches from "vue-switches";
import Multiselect from "@vueform/multiselect";

import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

/**
 * Advanced-form component
 */
export default {
  components: {
    flatPickr,
    Switches,
    Multiselect,
    Layout,
    PageHeader,
  },
  data() {
    return {
      picked: ref(new Date()),

      defaultdate: "",
      autoClose: ref(new Date()),
      daterange: ref(new Date()),

      demoMonth: ref(new Date()),
      demoYear: ref(new Date()),
      time: ref(new Date()),
      enabled: true,
      enabled1: false,
      enabled2: false,
      enabled3: false,
      enabled4: false,
      enabled5: false,
      small: false,
      small1: false,
      small2: false,
      small3: false,
      danger: false,
      info: false,
      success: false,
      primary: false,
      secondary: false,
      customColor: false,
      customColor1: false,
      customColor2: false,
      customColor3: false,
      value: null,
      value1: null,
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
      maxlen: "",
      data: "",
      option: "",
      textarea: "",
      defaultNull: null,
      defaultspinval: 1,
    };
  },
};
</script>

<template>
  <Layout>
    <PageHeader title="Form Advanced" pageTitle="Forms" />

    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Select2</BCardTitle>

            <p class="card-title-desc">A mobile and touch friendly input spinner component for Bootstrap</p>
            <BCol sm="8">
              <label>Single Select</label>
              <Multiselect v-model="value" :options="options"></Multiselect>

              <label class="mt-3">Multiple Select</label>
              <Multiselect v-model="value1" :options="options" :mode="'multiple'"></Multiselect>
            </BCol>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody class="advance-form-switches">
            <BCardTitle>Css Switch</BCardTitle>
            <p class="card-title-desc">Here are a few types of switches.</p>

            <switches v-model="enabled" theme="custom" type-bold="true" class="mb-0" color="secondary"></switches>
            <switches v-model="enabled1" theme="custom" type-bold="false" color="warning" class="ms-1 mb-0"></switches>
            <switches v-model="enabled2" theme="custom" type-bold="false" color="danger" class="ms-1 mb-0"></switches>
            <switches v-model="enabled3" theme="custom" type-bold="false" color="primary" class="ms-1 mb-0"></switches>
            <switches v-model="enabled4" theme="custom" type-bold="false" color="success" class="ms-1 mb-0"></switches>
            <switches v-model="enabled5" theme="custom" type-bold="false" color="info" class="ms-1 mb-0"></switches>
            <h5 class="mt-4 font-size-14 mb-4">Small switch</h5>

            <div>
              <switches theme="custom" v-model="small" color="secondary"></switches>
              <switches theme="custom" v-model="small1" color="warning" class="ms-1"></switches>
              <switches theme="custom" v-model="small2" color="danger" class="ms-1"></switches>
              <switches theme="custom" v-model="small3" color="success" class="ms-1"></switches>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
    <BRow>

      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Date Picker</BCardTitle>
            <p class="card-title-desc">Examples of bootstrap datepicker.</p>

            <div>
              <div class="mb-3">
                <label>Default Date Picker</label>
                <br />
                <flat-pickr v-model="picked" :first-day-of-week="1" lang="en" confirm class="form-control"></flat-pickr>
              </div>

              <div class="mb-3">
                <label>Auto close</label>
                <br />
                <flat-pickr v-model="autoClose" :first-day-of-week="1" lang="en" class="form-control"></flat-pickr>
              </div>

              <div class="mb-3">
                <label>Date Range</label>
                <br />
                <flat-pickr class="form-control" v-model="daterange" range append-to-body lang="en" confirm></flat-pickr>
              </div>

              <div class="mb-3">
                <label>Month View</label>
                <br />
                <flat-pickr class="form-control" v-model="demoMonth" :startingView="'month'" lang="en" confirm placeholder="Select Month"></flat-pickr>
              </div>

              <div class="mb-3">
                <label>Year View</label>
                <br />
                <flat-pickr class="form-control" v-model="demoYear" :startingView="'year'" lang="en" confirm placeholder="Select Year"></flat-pickr>
              </div>

              <div class="mb-3">
                <label>Time View</label>
                <br />
                <flat-pickr class="form-control" v-model="time" :minimumView="'time'" placeholder="hh:mm:ss a"></flat-pickr>
              </div>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Bootstrap MaxLength</BCardTitle>

            <p class="card-title-desc">Uses the HTML5 attribute "maxlength" to work.</p>

            <label class="mb-1 fw-medium">Default usage</label>
            <p class="text-muted font-13">The badge will show up by default when the remaining chars are 10 or less:</p>
            <BFormInput v-model="maxlen" type="text" class="form-control" :maxlength="10" />
            <div v-if="maxlen" class="text-center">
              <p class="badge position-absolute" :class="{
                'bg-success': maxlen.length !== 10,
                'bg-danger': maxlen.length === 10
              }">{{ maxlen.length }} / 10</p>
            </div>

            <div>
              <label class="mb-1 mt-3 fw-medium">Threshold value</label>
              <p class="text-muted font-13">
                Do you want the badge to show up when there are 20 chars or less? Use the
                <code>threshold</code>
                option:
              </p>
              <BFormInput v-model="data" type="text" :maxlength="25" />
              <div class="text-center">
                <p v-if="data" class="badge position-absolute" :class="{
                  'bg-success': data.length !== 25,
                  'bg-danger': data.length === 25
                }">{{ data.length }} / 25</p>
              </div>
            </div>

            <div>
              <label class="mb-1 mt-3 fw-medium">All the options</label>
              <p class="text-muted font-13">
                Please note: if the
                <code>alwaysShow</code> option is enabled, the
                <code>threshold</code> option
                is
                ignored.
              </p>
              <BFormInput v-model="option" type="text" :maxlength="25" />
              <div class="text-center">
                <p v-if="option" class="badge position-absolute" :class="{
                  'bg-success': option.length !== 25,
                  'bg-danger': option.length === 25
                }">
                  You typed
                  {{ option.length }} out of 25 chars available.
                </p>
              </div>
            </div>

            <div>
              <label class="mb-1 mt-3 fw-medium">Textarea</label>
              <p class="text-muted font-13">Bootstrap maxlength supports textarea as well as inputs. Even on old IE.</p>
              <BFormTextarea v-model="textarea" :maxlength="225" rows="3" placeholder="This textarea has a limit of 225 chars."></BFormTextarea>
              <div class="text-center">
                <p v-if="textarea" class="badge position-absolute" :class="{
                  'bg-success': textarea.length !== 225,
                  'bg-danger': textarea.length === 225
                }">
                  {{ textarea.length }} /
                  225
                </p>
              </div>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>

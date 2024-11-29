<script>
import Layout from "../../../layouts/main";
import PageHeader from "@/components/page-header";
import { avatar1 } from "@/assets/images/users/data";
import profile from "@/assets/images/profile-img.png"
import Earning from "./earning";
import TopSelling from "./top-selling.vue";

import simplebar from "simplebar-vue";

import { required, helpers } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";

import { salesAnalyticsDonutChart, ChatData, widgetData, productsData, tasksData } from "./data";

/**
 * Saas Dashboard Component
 */
export default {
  components: {
    simplebar,
    Layout,
    PageHeader,
    Earning,
    TopSelling,
  },
  data() {
    return {
      salesAnalyticsDonutChart, ChatData, widgetData, productsData, tasksData,
      submitted: false,
      avatar1, profile,
      chat: {
        message: "",
      },
    };
  },
  setup() {
    return { v$: useVuelidate() };
  },
  validations: {
    chat: {
      message: {
        required: helpers.withMessage("Message is required", required),
      },
    },
  },
  methods: {
    /**
     * Char form Submit
     */
    // eslint-disable-next-line no-unused-vars
    formSubmit(e) {
      this.submitted = true;

      // stop here if form is invalid
      this.v$.$touch();

      if (this.v$.$invalid) {
        return;
      } else {
        const id = this.ChatData.length;
        const message = this.chat.message;
        const currentDate = new Date();
        this.ChatData.push({
          id: id + 1,
          align: "right",
          name: "Henry Wells",
          message,
          time: currentDate.getHours() + ":" + currentDate.getMinutes(),
        });
        this.handleScroll();
      }
      this.submitted = false;
      this.chat = {};
    },

    handleScroll() {
      if (this.$refs.current.$el) {
        setTimeout(() => {
          // this.$refs.current.SimpleBar.value.getScrollElement().scrollTop =
          //   this.$refs.current.SimpleBar.value.getScrollElement().scrollHeight + 1500;
        }, 500);
      }
    },
  },
  mounted() {
    var container2 = document.querySelector(
      "#containerElement .simplebar-content-wrapper"
    );
    container2.scrollTo({ top: 500, behavior: "smooth" });
  },
};
</script>

<template>
  <Layout>
    <PageHeader title="Saas" pageTitle="Dashboards" />

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <BCardBody>
            <BRow>
              <BCol lg="4">
                <div class="d-flex">
                  <div class="me-3">
                    <img :src="avatar1" alt class="avatar-md rounded-circle img-thumbnail" />
                  </div>
                  <div class="flex-grow-1 align-self-center">
                    <div class="text-muted">
                      <p class="mb-2">Welcome to skote dashboard</p>
                      <h5 class="mb-1">Henry wells</h5>
                      <p class="mb-0">UI / UX Designer</p>
                    </div>
                  </div>
                </div>
              </BCol>

              <BCol lg="4" class="align-self-center">
                <div class="text-lg-center mt-4 mt-lg-0">
                  <BRow>
                    <BCol cols="4">
                      <div>
                        <p class="text-muted text-truncate mb-2">
                          Total Projects
                        </p>
                        <h5 class="mb-0">48</h5>
                      </div>
                    </BCol>
                    <BCol cols="4">
                      <div>
                        <p class="text-muted text-truncate mb-2">Projects</p>
                        <h5 class="mb-0">40</h5>
                      </div>
                    </BCol>
                    <BCol cols="4">
                      <div>
                        <p class="text-muted text-truncate mb-2">Clients</p>
                        <h5 class="mb-0">18</h5>
                      </div>
                    </BCol>
                  </BRow>
                </div>
              </BCol>

              <BCol lg="4" class="d-none d-lg-block">
                <div class="clearfix mt-4 mt-lg-0">
                  <BDropdown class="float-end" right variant="primary" menu-class="dropdown-menu-end">
                    <template v-slot:button-content>
                      <i class="bx bxs-cog align-middle me-1"></i> Setting
                    </template>
                    <BDropdownItem>Action</BDropdownItem>
                    <BDropdownItem>Another action</BDropdownItem>
                    <BDropdownItem>Something else</BDropdownItem>
                  </BDropdown>
                </div>
              </BCol>
            </BRow>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
    <BRow>
      <BCol xl="4">
        <BCard no-body class="bg-primary-subtle">
          <div>
            <BRow>
              <BCol cols="7">
                <div class="text-primary p-3">
                  <h5 class="text-primary">Welcome Back !</h5>
                  <p>Skote Saas Dashboard</p>

                  <ul class="ps-3 mb-0">
                    <li class="py-1">7 + Layouts</li>
                    <li class="py-1">Multiple apps</li>
                  </ul>
                </div>
              </BCol>
              <BCol cols="5" class="align-self-end">
                <img :src="profile" alt class="img-fluid" />
              </BCol>
            </BRow>
          </div>
        </BCard>
      </BCol>
      <BCol xl="8">
        <BRow>
          <BCol v-for="(item, index) in widgetData" :key="index" sm="4">
            <BCard no-body>
              <BCardBody>
                <div class="d-flex align-items-center mb-3">
                  <div class="avatar-xs me-3">
                    <span class="
                        avatar-title
                        rounded-circle
                        bg-primary-subtle
                        text-primary
                        font-size-18
                      ">
                      <i :class="`bx ${item.iconClass}`"></i>
                    </span>
                  </div>
                  <h5 class="font-size-14 mb-0">{{ item.title }}</h5>
                </div>
                <div class="text-muted mt-4">
                  <h4>
                    {{ item.value }}
                    <i class="mdi mdi-chevron-up ms-1 text-success"></i>
                  </h4>
                  <div class="d-flex">
                    <span :class="`badge badge-${item.colorClass} font-size-12`">{{ item.percentageChange }}</span>
                    <span class="ms-2 text-truncate">From previous period</span>
                  </div>
                </div>
              </BCardBody>
            </BCard>
          </BCol>
        </BRow>
      </BCol>
    </BRow>
    <BRow>
      <BCol xl="8">
        <Earning />
      </BCol>

      <BCol xl="4">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Sales Analytics</BCardTitle>

            <div>
              <apexchart class="apex-charts" dir="ltr" height="240" :series="salesAnalyticsDonutChart.series"
                :options="salesAnalyticsDonutChart.chartOptions"></apexchart>
            </div>

            <div class="text-center text-muted">
              <BRow>
                <BCol v-for="(product, index) in productsData" :key="index" cols="4">
                  <div class="mt-4">
                    <p class="mb-2 text-truncate">
                      <i :class="`mdi mdi-circle ${product.colorClass} me-1`"></i>
                      {{ product.name }}
                    </p>
                    <h5>{{ product.price }}</h5>
                  </div>
                </BCol>
              </BRow>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol xl="4">
        <TopSelling />
      </BCol>
      <BCol xl="4">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Tasks</BCardTitle>

            <BTabs pills nav-class="bg-light rounded" content-class="mt-4">
              <BTab title="In Process" active>
                <simplebar style="max-height: 250px">
                  <div class="table-responsive">
                    <BTableSimple class="table-nowrap align-mid table-hover mb-0">
                      <BTbody>
                        <BTr v-for="task in tasksData" :key="task.id">
                          <BTd style="width: 50px">
                            <div class="form-check">
                              <input class="form-check-input" :id="task.id" type="checkbox" />
                              <label class="form-check-label" :for="task.id"></label>
                            </div>
                          </BTd>
                          <BTd>
                            <h5 class="text-truncate font-size-14 mb-1">
                              <BLink href="javascript: void(0);" class="text-dark">{{ task.title }}</BLink>
                            </h5>
                            <p class="text-muted mb-0">Assigned to {{ task.assignedTo }}</p>
                          </BTd>
                          <BTd style="width: 90px">
                            <div>
                              <ul class="list-inline mb-0 font-size-16">
                                <li class="list-inline-item">
                                  <BLink href="javascript: void(0);" class="text-success p-1">
                                    <i class="bx bxs-edit-alt"></i>
                                  </BLink>
                                </li>
                                <li class="list-inline-item">
                                  <BLink href="javascript: void(0);" class="text-danger p-1">
                                    <i class="bx bxs-trash"></i>
                                  </BLink>
                                </li>
                              </ul>
                            </div>
                          </BTd>
                        </BTr>
                      </BTbody>
                    </BTableSimple>
                  </div>
                </simplebar>
              </BTab>
              <BTab title="Upcoming">
                <simplebar style="max-height: 250px">
                  <div class="table-responsive">
                    <BTableSimple class="table-nowrap align-mid table-hover mb-0">
                      <BTbody>
                        <BTr v-for="task in tasksData" :key="task.id">
                          <BTd style="width: 50px">
                            <div class="form-check">
                              <input class="form-check-input" :id="task.id" type="checkbox" />
                              <label class="form-check-label" :for="task.id"></label>
                            </div>
                          </BTd>
                          <BTd>
                            <h5 class="text-truncate font-size-14 mb-1">
                              <BLink href="javascript: void(0);" class="text-dark">{{ task.title }}</BLink>
                            </h5>
                            <p class="text-muted mb-0">Assigned to {{ task.assignedTo }}</p>
                          </BTd>
                          <BTd style="width: 90px">
                            <div>
                              <ul class="list-inline mb-0 font-size-16">
                                <li class="list-inline-item">
                                  <BLink href="javascript: void(0);" class="text-success p-1">
                                    <i class="bx bxs-edit-alt"></i>
                                  </BLink>
                                </li>
                                <li class="list-inline-item">
                                  <BLink href="javascript: void(0);" class="text-danger p-1">
                                    <i class="bx bxs-trash"></i>
                                  </BLink>
                                </li>
                              </ul>
                            </div>
                          </BTd>
                        </BTr>
                      </BTbody>
                    </BTableSimple>
                  </div>
                </simplebar>
              </BTab>
            </BTabs>
          </BCardBody>

          <BCardFooter class="bg-transparent border-top">
            <div class="text-center">
              <BLink href="javascript: void(0);" class="btn btn-primary">
                Add new Task
              </BLink>
            </div>
          </BCardFooter>
        </BCard>
      </BCol>
      <BCol xl="4">
        <BCard no-body>
          <BCardBody class="border-bottom">
            <BRow>
              <BCol md="4" cols="9">
                <h5 class="font-size-15 mb-1">Steven Franklin</h5>
                <p class="text-muted mb-0">
                  <i class="mdi mdi-circle text-success align-middle me-1"></i>
                  Active now
                </p>
              </BCol>
              <BCol md="8" cols="3">
                <ul class="list-inline user-chat-nav text-end mb-0">
                  <li class="list-inline-item d-none d-sm-inline-block">
                    <BDropdown menu-class="dropdown-menu-end py-0 dropdown-menu-md" variant="white"
                      toggle-class="p-0 nav-btn" auto-close="outside"
                      :offset="{ alignmentAxis: 0, crossAxis: -50, mainAxis: 0 }">
                      <template v-slot:button-content>
                        <i class="bx bx-search-alt-2"></i>
                      </template>
                      <BForm class="p-3">
                        <div class="form-group m-0">
                          <div class="input-group">
                            <input type="text" class="form-control" placeholder="Search ..."
                              aria-label="Recipient's username" />
                            <div class="input-group-append">
                              <BButton variant="primary" type="submit">
                                <i class="mdi mdi-magnify"></i>
                              </BButton>
                            </div>
                          </div>
                        </div>
                      </BForm>
                    </BDropdown>
                  </li>
                  <li class="list-inline-item d-none d-sm-inline-block">
                    <BDropdown toggle-class="nav-btn" menu-class="dropdown-menu-end" right variant="white">
                      <template v-slot:button-content>
                        <i class="bx bx-cog"></i>
                      </template>
                      <BDropdownItem>View Profile</BDropdownItem>
                      <BDropdownItem>Clear chat</BDropdownItem>
                      <BDropdownItem>Muted</BDropdownItem>
                      <BDropdownItem>Delete</BDropdownItem>
                    </BDropdown>
                  </li>

                  <li class="list-inline-item">
                    <BDropdown toggle-class="nav-btn" menu-class="dropdown-menu-end" right variant="white">
                      <template v-slot:button-content>
                        <i class="bx bx-dots-horizontal-rounded"></i>
                      </template>
                      <BDropdownItem>Action</BDropdownItem>
                      <BDropdownItem>Another action</BDropdownItem>
                      <BDropdownItem>Something else</BDropdownItem>
                    </BDropdown>
                  </li>
                </ul>
              </BCol>
            </BRow>
          </BCardBody>
          <BCardBody class="pb-0">
            <div>
              <div class="chat-conversation">
                <ul class="list-unstyled">
                  <simplebar style="max-height: 260px" ref="current" id="containerElement">
                    <li>
                      <div class="chat-day-title">
                        <span class="title">Today</span>
                      </div>
                    </li>
                    <li v-for="data of ChatData" :key="data.id" :class="{ right: `${data.align}` === 'right' }">
                      <div class="conversation-list">
                        <BDropdown variant="white" menu-class="dropdown-menu-end" class="chat-dropdown">
                          <template v-slot:button-content>
                            <i class="bx bx-dots-vertical-rounded"></i>
                          </template>
                          <BDropdownItem>Copy</BDropdownItem>
                          <BDropdownItem>Save</BDropdownItem>
                          <BDropdownItem>Forward</BDropdownItem>
                          <BDropdownItem>Delete</BDropdownItem>
                        </BDropdown>
                        <div class="ctext-wrap">
                          <div class="conversation-name">{{ data.name }}</div>
                          <p>{{ data.message }}</p>
                          <p class="chat-time mb-0">
                            <i class="bx bx-time-five align-middle me-1"></i>
                            {{ data.time }}
                          </p>
                        </div>
                      </div>
                    </li>
                  </simplebar>
                </ul>
              </div>
            </div>
          </BCardBody>
          <div class="p-3 chat-input-section">
            <BForm @submit.prevent="formSubmit" class="row">
              <BCol>
                <div class="position-relative">
                  <input type="text" v-model="chat.message" class="form-control chat-input" placeholder="Enter Message..."
                    :class="{
                      'is-invalid': submitted && v$.chat.message.$error,
                    }" />
                  <div v-if="submitted && v$.chat.message.$error" class="invalid-feedback">
                    <span v-if="v$.chat.message.required.$message">{{
                      v$.chat.message.required.$message
                    }}</span>
                  </div>
                  <div class="chat-input-links">
                    <ul class="list-inline mb-0">
                      <li class="list-inline-item">
                        <BLink href="javascript: void(0);" placement="top" v-b-tooltip.hover title="Emoji">
                          <i class="mdi mdi-emoticon-happy-outline"></i>
                        </BLink>
                      </li>
                      <li class="list-inline-item">
                        <BLink href="javascript: void(0);" placement="top" v-b-tooltip.hover title="Images">
                          <i class="mdi mdi-file-image-outline"></i>
                        </BLink>
                      </li>
                      <li class="list-inline-item">
                        <BLink href="javascript: void(0);" placement="top" v-b-tooltip.hover title="Add Files">
                          <i class="mdi mdi-file-document-outline"></i>
                        </BLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </BCol>
              <div class="col-auto">
                <BButton variant="primary" type="submit" class="chat-send w-md">
                  <span class="d-none d-sm-inline-block me-2">Send</span>
                  <i class="mdi mdi-send"></i>
                </BButton>
              </div>
            </BForm>
          </div>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>

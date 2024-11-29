<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import { items, cardsData, recentData, storageData } from "./data"
/**
 * File-manager component
 */
export default {
  components: { Layout, PageHeader },
  data() {
    return {
      items, cardsData, recentData, storageData,
      series: [76],
      dismissibleAlert: true,
      chartOptions: {
        chart: {
          height: 150,
          type: "radialBar",
          sparkline: {
            enabled: true,
          },
        },
        colors: ["#556ee6"],
        plotOptions: {
          radialBar: {
            startAngle: -90,
            endAngle: 90,
            track: {
              background: "#e7e7e7",
              strokeWidth: "97%",
              margin: 5, // margin is in pixels
            },
            hollow: {
              size: "60%",
            },

            dataLabels: {
              name: {
                show: false,
              },
              value: {
                offsetY: -2,
                fontSize: "16px",
              },
            },
          },
        },
        grid: {
          padding: {
            top: -10,
          },
        },
        stroke: {
          dashArray: 3,
        },
        labels: ["Storage"],
      },
    };
  },
};
</script>

<template>
  <Layout>
    <PageHeader title="File Manager" pageTitle="Apps" />

    <div class="d-xl-flex">
      <div class="w-100">
        <div class="d-md-flex">
          <BCard no-body class="filemanager-sidebar me-md-2">
            <BCardBody>
              <div class="d-flex flex-column h-100">
                <div class="mb-4">
                  <div class="mb-3 d-grid">
                    <BDropdown toggle-class="btn-block w-100" variant="light">
                      <template #button-content>
                        <i class="mdi mdi-plus me-1"></i> Create New
                      </template>

                      <BDropdownItem href="#"><i class="bx bx-folder me-1"></i>Folder</BDropdownItem>
                      <BDropdownItem href="#"><i class="bx bx-file me-1"></i> File</BDropdownItem>
                    </BDropdown>
                  </div>
                  <ul class="list-unstyled categories-list">
                    <li>
                      <div class="custom-accordion">
                        <Blink class="text-body fw-medium py-1 d-flex align-items-center" data-toggle="collapse"
                          v-b-toggle.categories-collapse role="button" aria-expanded="false"
                          aria-controls="categories-collapse">
                          <i class="mdi mdi-folder font-size-16 text-warning me-2"></i>
                          Files
                          <i class="mdi mdi-chevron-up accor-down-icon ms-auto"></i>
                        </Blink>
                        <BCollapse visible class="collapse show" id="categories-collapse">
                          <BCard class="border-0 shadow-none ps-2 mb-0" no-body>
                            <ul class="list-unstyled mb-0">
                              <li>
                                <Blink class="d-flex align-items-center"><span class="me-auto">Design</span></Blink>
                              </li>
                              <li>
                                <Blink class="d-flex align-items-center"><span class="me-auto">Development</span>
                                  <i class="mdi mdi-pin ms-auto"></i>
                                </Blink>
                              </li>
                              <li>
                                <Blink class="d-flex align-items-center"><span class="me-auto">Project A</span></Blink>
                              </li>
                              <li>
                                <Blink class="d-flex align-items-center"><span class="me-auto">Admin</span>
                                  <i class="mdi mdi-pin ms-auto"></i>
                                </Blink>
                              </li>
                            </ul>
                          </BCard>
                        </BCollapse>
                      </div>
                    </li>
                    <li v-for="(item, index) in items" :key="index" class="p-2">
                      <Blink href="javascript:void(0);" class="text-body d-flex align-items-center">
                        <i :class="item.iconClass"></i>
                        <span class="me-auto">{{ item.text }}</span>
                        <span v-if="item.badge" class="badge" :class="item.badgeClass">{{ item.badge }}</span>
                      </Blink>
                    </li>
                  </ul>
                </div>

                <div class="mt-auto">
                  <BAlert :model-value="true" variant="success" v-model="dismissibleAlert" dismissible
                    class="fade show px-3 mb-0">
                    <BButton class="btn-close" data-bs-dismiss="alert" aria-label="Close"></BButton>
                    <div class="mb-3">
                      <i class="bx bxs-folder-open h1 text-success"></i>
                    </div>

                    <div>
                      <h5 class="text-success">Upgrade Features</h5>
                      <p>Cum sociis natoque penatibus et</p>
                      <div class="text-center">
                        <BLink variant="success" tclass="text-decoration-none text-success">Upgrade <i
                            class="mdi mdi-arrow-right"></i></BLink>
                      </div>
                    </div>
                  </BAlert>
                </div>
              </div>
            </BCardBody>
          </BCard>

          <div class="w-100">
            <BCard no-body>
              <BCardBody class="pb-0">
                <div>
                  <BRow class="mb-3">
                    <BCol xl="3" sm="6">
                      <div class="mt-2">
                        <h5>My Files</h5>
                      </div>
                    </BCol>
                    <BCol xl="9" sm="6">
                      <BForm class="mt-4 mt-sm-0 float-sm-end d-flex align-items-center">
                        <div class="search-box mb-2 me-2">
                          <div class="position-relative">
                            <input type="text" class="form-control bg-light border-light rounded"
                              placeholder="Search..." />
                            <i class="bx bx-search-alt search-icon"></i>
                          </div>
                        </div>

                        <BDropdown class="mb-0" toggle-class="btn btn-link text-muted" menu-class="dropdown-menu-end"
                          right variant="white">
                          <template #button-content>
                            <i class="mdi mdi-dots-vertical font-size-20"></i>
                          </template>
                          <BDropdownItem href="#">Share Files</BDropdownItem>
                          <BDropdownItem href="#">Share with me</BDropdownItem>
                          <BDropdownItem href="#">Other Actions</BDropdownItem>
                        </BDropdown>
                      </BForm>
                    </BCol>
                  </BRow>
                </div>

                <div>
                  <BRow>
                    <BCol xl="4" sm="6" v-for="(card, index) in cardsData" :key="index">
                      <BCard no-body class="shadow-none border">
                        <BCardBody class="p-3">
                          <div>
                            <div class="float-end ms-2">
                              <BDropdown toggle-class="font-size-16 text-muted p-0" menu-class="dropdown-menu-end"
                                class="mb-2" variant="white" right>
                                <template #button-content>
                                  <i class="mdi mdi-dots-horizontal"></i>
                                </template>
                                <BDropdownItem href="#">Open</BDropdownItem>
                                <BDropdownItem href="#">Edit</BDropdownItem>
                                <BDropdownItem href="#">Rename</BDropdownItem>
                                <BDropdownDivider />
                                <BDropdownItem href="#">Remove</BDropdownItem>
                              </BDropdown>
                            </div>
                            <div class="avatar-xs me-3 mb-3">
                              <div class="avatar-title bg-transparent rounded">
                                <i :class="card.icon"></i>
                              </div>
                            </div>
                            <div class="d-flex">
                              <div class="overflow-hidden me-auto">
                                <h5 class="font-size-14 text-truncate mb-1">
                                  <Blink href="javascript: void(0);" class="text-body">{{ card.title }}</Blink>
                                </h5>
                                <p class="text-muted text-truncate mb-0">{{ card.files }}</p>
                              </div>
                              <div class="align-self-end ms-2">
                                <p class="text-muted mb-0">{{ card.storage }}</p>
                              </div>
                            </div>
                          </div>
                        </BCardBody>
                      </BCard>
                    </BCol>
                  </BRow>
                </div>

                <div class="mt-4">
                  <div class="d-flex flex-wrap">
                    <h5 class="font-size-16 me-3">Recent Files</h5>

                    <div class="ms-auto">
                      <Blink href="javascript: void(0);" class="fw-medium text-reset">View All</Blink>
                    </div>
                  </div>
                  <hr class="mt-2" />

                  <div class="table-responsive">
                    <BTableSimple class="align-middle table-nowrap table-hover mb-0">
                      <BThead>
                        <BTr>
                          <BTh scope="col">Name</BTh>
                          <BTh scope="col">Date modified</BTh>
                          <BTh scope="col" colspan="2">Size</BTh>
                        </BTr>
                      </BThead>
                      <BTbody>
                        <BTr v-for="(item, index) in recentData" :key="index">
                          <BTd>
                            <Blink href="javascript:void(0);" class="text-dark fw-medium">
                              <i :class="item.icon" class="font-size-16 align-middle"></i> {{ item.fileName }}
                            </Blink>
                          </BTd>
                          <BTd>{{ item.date }}</BTd>
                          <BTd>{{ item.size }}</BTd>
                          <BTd>
                            <BDropdown toggle-class="font-size-16 text-muted p-0" menu-class="dropdown-menu-end"
                              variant="white" right>
                              <template #button-content>
                                <i class="mdi mdi-dots-horizontal"></i>
                              </template>
                              <BDropdownItem href="#">Open</BDropdownItem>
                              <BDropdownItem href="#">Edit</BDropdownItem>
                              <BDropdownItem href="#">Rename</BDropdownItem>
                              <BDropdownDivider />
                              <BDropdownItem href="#">Remove</BDropdownItem>
                            </BDropdown>
                          </BTd>
                        </BTr>
                      </BTbody>
                    </BTableSimple>
                  </div>
                </div>
              </BCardBody>
            </BCard>
          </div>
        </div>
      </div>

      <BCard no-body class="filemanager-sidebar ms-lg-2">
        <BCardBody>
          <div class="text-center">
            <h5 class="font-size-15 mb-4">Storage</h5>
            <apexchart class="apex-charts" type="radialBar" height="150" dir="ltr" :series="series"
              :options="chartOptions"></apexchart>

            <p class="text-muted mt-4">48.02 GB (76%) of 64 GB used</p>
          </div>

          <div class="mt-4">
            <BCard v-for="(item, index) in storageData" :key="index" class="border shadow-none mb-2" no-body>
              <Blink href="javascript:void(0);" class="text-body">
                <div class="p-2">
                  <div class="d-flex">
                    <div class="avatar-xs align-self-center me-2">
                      <div :class="`avatar-title rounded bg-transparent text-${item.iconclass} font-size-20`">
                        <i :class="item.icon"></i>
                      </div>
                    </div>

                    <div class="overflow-hidden me-auto">
                      <h5 class="font-size-13 text-truncate mb-1">{{ item.title }}</h5>
                      <p class="text-muted text-truncate mb-0">{{ item.description }}</p>
                    </div>

                    <div class="ms-2">
                      <p class="text-muted">{{ item.size }}</p>
                    </div>
                  </div>
                </div>
            </Blink>
          </BCard>
        </div>
      </BCardBody>
    </BCard>
  </div>
</Layout></template>
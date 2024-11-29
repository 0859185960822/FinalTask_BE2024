<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import { Img2, Img6 } from "@/assets/images/small/data";
import Pagination from "@/components/common/pagination";
import { archiveData } from "./data";
import Rightbar from "./rightbar.vue";

export default {
  data() {
    return {
      Img2, Img6, archiveData,
    }
  },
  components: {
    Layout,
    PageHeader,
    Pagination,
    Rightbar
  },
};
</script>

<template>
  <Layout>
    <PageHeader title="Blog List" pageTitle="Blog" />

    <BRow>
      <BCol xl="9" lg="8">
        <BCard no-body>
          <BTabs content-class="p-4" class="pt-2" nav-wrapper-class="nav-item"
            nav-class="justify-content-center nav-tabs-custom">
            <BTab title="All Post" active>
              <div>
                <BRow class="justify-content-center">
                  <BCol xl="8">
                    <div>
                      <BRow class="align-items-center">
                        <BCol cols="4">
                          <div>
                            <h5 class="mb-0">Blog List</h5>
                          </div>
                        </BCol>

                        <BCol cols="8">
                          <div class="float-end">
                            <ul class="nav nav-pills">
                              <li class="nav-item">
                                <BLink class="nav-link disabled" href="javascript:void(0);" tabindex="-1"
                                  aria-disabled="true">View :</BLink>
                              </li>
                              <li class="nav-item" data-toggle="tooltip" data-placement="top" title="List">
                                <router-link class="nav-link active text-white" to="/blog/list">
                                  <i class="mdi mdi-format-list-bulleted"></i>
                                </router-link>
                              </li>
                              <li class="nav-item" data-toggle="tooltip" data-placement="top" title="Grid">
                                <router-link class="nav-link" to="/blog/grid">
                                  <i class="mdi mdi-view-grid-outline"></i>
                                </router-link>
                              </li>
                            </ul>
                          </div>
                        </BCol>
                      </BRow>

                      <hr class="mb-4" />

                      <div>
                        <h5>
                          <router-link to="/blog/detail" class="text-dark">Beautiful Day with Friends</router-link>
                        </h5>
                        <p class="text-muted">10 Apr, 2020</p>

                        <div class="position-relative mb-3">
                          <img :src="Img2" alt="" class="img-thumbnail" />
                        </div>

                        <ul class="list-inline">
                          <li class="list-inline-item me-3">
                            <BLink href="javascript:void(0);" class="text-muted">
                              <i class="bx bx-purchase-tag-alt align-middle text-muted me-1"></i>
                              Project
                            </BLink>
                          </li>
                          <li class="list-inline-item me-3">
                            <BLink href="javascript:void(0);" class="text-muted">
                              <i class="bx bx-comment-dots align-middle text-muted me-1 ms-1"></i>
                              12 Comments
                            </BLink>
                          </li>
                        </ul>
                        <p>
                          Neque porro quisquam est, qui dolorem ipsum quia dolor
                          sit amet, consectetur, adipisci velit, aliquam quaerat
                          voluptatem. Ut enim ad minima veniam, quis
                        </p>

                        <div>
                          <BLink href="javascript:void(0);" class="text-primary">Read more <i
                              class="mdi mdi-arrow-right"></i></BLink>
                        </div>
                      </div>

                      <hr class="my-5" />

                      <div>
                        <h5>
                          <router-link to="/blog/detail" class="text-dark">Project discussion with team</router-link>
                        </h5>
                        <p class="text-muted">24 Mar, 2020</p>

                        <div class="position-relative mb-3">
                          <img :src="Img6" alt="" class="img-thumbnail" />

                          <div class="blog-play-icon">
                            <Blink href="javascript: void(0);" class="avatar-sm d-block mx-auto">
                              <span class="avatar-title rounded-circle font-size-18"><i class="mdi mdi-play"></i></span>
                            </Blink>
                          </div>
                        </div>

                        <ul class="list-inline">
                          <li class="list-inline-item me-3">
                            <BLink href="javascript:void(0);" class="text-muted">
                              <i class="bx bx-purchase-tag-alt align-middle text-muted me-1"></i>
                              Development
                            </BLink>
                          </li>
                          <li class="list-inline-item me-3">
                            <BLink href="javascript:void(0);" class="text-muted">
                              <i class="bx bx-comment-dots align-middle text-muted me-1 ms-1"></i>
                              08 Comments
                            </BLink>
                          </li>
                        </ul>

                        <p>
                          At vero eos et accusamus et iusto odio dignissimos
                          ducimus qui blanditiis praesentium voluptatum deleniti
                          atque corrupti quos dolores similique sunt in culpa
                          qui officia deserunt mollitia animi est
                        </p>

                        <div>
                          <BLink href="javascript:void(0);" class="text-primary">Read more <i
                              class="mdi mdi-arrow-right"></i></BLink>
                        </div>
                      </div>

                      <hr class="my-5" />

                      <div class="text-center">
                        <Pagination />
                      </div>
                    </div>
                  </BCol>
                </BRow>
              </div>
            </BTab>
            <BTab title="Archive">
              <div>
                <BRow class="justify-content-center">
                  <BCol xl="8">
                    <h5>Archive</h5>
                    <div class="mt-5" v-for="(year, index) in archiveData" :key="index">
                      <div class="d-flex flex-wrap">
                        <div class="me-2">
                          <h4>{{ year.year }}</h4>
                        </div>
                        <div class="ms-auto">
                          <span class="badge badge-soft-success rounded-pill float-end ms-1 font-size-12">{{ year.total
                          }}</span>
                        </div>
                      </div>
                      <hr class="mt-2" />

                      <div class="list-group list-group-flush">
                        <router-link v-for="(blog, blogIndex) in year.blogs" :key="blogIndex" to="/blog/detail"
                          class="list-group-item text-muted">
                          <i class="mdi mdi-circle-medium me-1"></i> {{ blog.title }}
                        </router-link>
                      </div>
                    </div>
                  </BCol>
                </BRow>
              </div>
            </BTab>
          </BTabs>
        </BCard>
      </BCol>

      <BCol xl="3" lg="4">
        <Rightbar />
      </BCol>
    </BRow>
  </Layout>
</template>
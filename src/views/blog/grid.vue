<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import { gridData1, archiveData } from "./data";
import pagination from "@/components/common/pagination";
import Rightbar from "./rightbar.vue";

/**
 * Blog-grid component
 */
export default {
  components: {
    Layout,
    PageHeader,
    pagination,
    Rightbar
  },
  data() {
    return {
      gridData1, archiveData
    }
  }
};
</script>

<template>
  <Layout>
    <PageHeader title="Blog Grid" pageTitle="Blog" />

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
                                <router-link class="nav-link" to="/blog/list">
                                  <i class="mdi mdi-format-list-bulleted"></i>
                                </router-link>
                              </li>
                              <li class="nav-item" data-toggle="tooltip" data-placement="top" title="Grid">
                                <router-link class="nav-link active text-white" to="/blog/grid">
                                  <i class="mdi mdi-view-grid-outline"></i>
                                </router-link>
                              </li>
                            </ul>
                          </div>
                        </BCol>
                      </BRow>

                      <hr class="mb-4" />
                      <BRow>
                        <BCol sm="6" v-for="card in gridData1" :key="card.title">
                          <BCard no-body class="p-1 border shadow-none">
                            <div class="p-3">
                              <h5>
                                <router-link to="/blog/detail" class="text-dark">{{ card.title }}</router-link>
                              </h5>
                              <p class="text-muted mb-0">{{ card.date }}</p>
                            </div>

                            <div class="position-relative">
                              <img :src="card.imageSrc" alt="" class="img-thumbnail" />
                            </div>

                            <div class="p-3">
                              <ul class="list-inline">
                                <li class="list-inline-item me-3">
                                  <BLink href="javascript:void(0);" class="text-muted">
                                    <i class="bx bx-purchase-tag-alt align-middle text-muted me-1"></i>
                                    {{ card.category }}
                                  </BLink>
                                </li>
                                <li class="list-inline-item me-3">
                                  <BLink href="javascript:void(0);" class="text-muted">
                                    <i class="bx bx-comment-dots align-middle text-muted me-1 ms-1"></i>
                                    {{ card.commentCount }} Comments
                                  </BLink>
                                </li>
                              </ul>
                              <p>{{ card.description }}</p>

                              <div>
                                <BLink href="javascript:void(0);" class="text-primary">Read more <i
                                    class="mdi mdi-arrow-right"></i></BLink>
                              </div>
                            </div>
                          </BCard>
                        </BCol>
                      </BRow>

                      <hr class="my-4" />

                      <div class="text-center">
                        <pagination />
                      </div>
                    </div>
                  </BCol>
                </BRow>
              </div>
            </BTab>
            <BTab title="Archive">
              <div>
                <BRow class="justify-content-center">
                  <BCol cols="8">
                    <h5>Archive</h5>
                    <div class="mt-5" v-for="(year, index) in archiveData" :key="index">
                      <div class="d-flex flex-wrap">
                        <div class="me-2">
                          <h4>{{ year.year }}</h4>
                        </div>
                        <div class="ms-auto">
                          <span class="badge badge-soft-success badge-pill float-end ms-1 font-size-12">{{ year.total
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
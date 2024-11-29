<script>
import Layout from "../../../layouts/main";
import PageHeader from "@/components/page-header";
import { avatar1 } from "@/assets/images/users/data"
import Visitors from "./visitors";
import Posts from "./posts";
import Comments from "./comment";
import TopVisitor from "./top-visitor";
import Activity from "./activity";
import BlogPost from "./blog-post";
import { items } from "./data"

/**
 * Blog dashboard component
 */
export default {
  data() {
    return {
      items: items,
      avatar1
    }
  },
  components: {
    Layout,
    PageHeader,
    Visitors,
    Posts,
    Comments,
    TopVisitor,
    Activity,
    BlogPost,
  },
};
</script>

<template>
  <Layout>
    <PageHeader title="Blog" pageTitle="Dashboards" />

    <div>
      <BRow>
        <BCol xl="8">
          <BRow>
            <BCol lg="4" v-for="item in items" :key="item.id">
              <BCard no-body :class="item.cardClass">
                <BCardBody>
                  <div class="d-flex flex-wrap">
                    <div class="me-3">
                      <p class="text-muted mb-2">{{ item.label }}</p>
                      <h5 class="mb-0">{{ item.value }}</h5>
                    </div>

                    <div class="avatar-sm ms-auto">
                      <div class="avatar-title bg-light rounded-circle text-primary font-size-20">
                        <i :class="item.iconClass"></i>
                      </div>
                    </div>
                  </div>
                </BCardBody>
              </BCard>
            </BCol>
          </BRow>

          <BCard no-body>
            <Visitors />
          </BCard>
        </BCol>

        <BCol xl="4">
          <BCard no-body>
            <BCardBody>
              <div class="d-flex">
                <div class="me-3">
                  <img :src="avatar1" alt="" class="avatar-sm rounded-circle img-thumbnail" />
                </div>
                <div class="flex-grow-1">
                  <div class="d-flex">
                    <div class="flex-grow-1">
                      <div class="text-muted">
                        <h5 class="mb-1">Henry wells</h5>
                        <p class="mb-0">UI / UX Designer</p>
                      </div>
                    </div>

                    <BDropdown toggle-class="btn-sm" variant="light" right class="ms-2 p-0" menu-class="dropdown-menu-end">
                      <template #button-content>
                        <i class="bx bxs-cog align-middle me-1"></i> Setting
                      </template>
                      <BDropdownItem class="dropdown-item" href="#">Action</BDropdownItem>
                      <BDropdownItem class="dropdown-item" href="#">Another action</BDropdownItem>
                      <BDropdownItem class="dropdown-item" href="#">Something else</BDropdownItem>
                    </BDropdown>
                  </div>
                  <hr />
                  <BRow>
                    <BCol cols="4">
                      <div>
                        <p class="text-muted text-truncate mb-2">Total Post</p>
                        <h5 class="mb-0">32</h5>
                      </div>
                    </BCol>
                    <BCol cols="4">
                      <div>
                        <p class="text-muted text-truncate mb-2">Subscribes</p>
                        <h5 class="mb-0">10k</h5>
                      </div>
                    </BCol>
                  </BRow>
                </div>
              </div>
            </BCardBody>
          </BCard>

          <BCard no-body>
            <BCardBody>
              <div class="d-flex flex-wrap">
                <BCardTitle class="mb-3 me-2">Subscribes</BCardTitle>

                <BDropdown toggle-class="text-muted font-size-16 p-0" variant="white" right class="ms-auto" menu-class="dropdown-menu-end">
                  <template #button-content>
                    <i class="mdi mdi-dots-horizontal"></i>
                  </template>
                  <BDropdownItem href="#">Action</BDropdownItem>
                  <BDropdownItem href="#">Another action</BDropdownItem>
                  <BDropdownItem href="#">Something else here</BDropdownItem>
                  <BDropdownDivider />
                  <BDropdownItem href="#">Separated link</BDropdownItem>
                </BDropdown>
              </div>

              <div class="d-flex flex-wrap">
                <div>
                  <p class="text-muted mb-1">Total Subscribe</p>
                  <h4 class="mb-3">10,512</h4>
                  <p class="text-success mb-0">
                    <span>0.6 % <i class="mdi mdi-arrow-top-right ms-1"></i></span>
                  </p>
                </div>
                <div class="ms-auto align-self-end">
                  <i class="bx bx-group display-4 text-light"></i>
                </div>
              </div>
            </BCardBody>
          </BCard>

          <BCard no-body>
            <BCardBody class="p-4">
              <div class="text-center">
                <div class="avatar-md mx-auto mb-4">
                  <div class="avatar-title bg-light rounded-circle text-primary h1">
                    <i class="mdi mdi-email-open"></i>
                  </div>
                </div>

                <BRow class="justify-content-center">
                  <BCol xl="10">
                    <h4 class="text-primary">Subscribe !</h4>
                    <p class="text-muted font-size-14 mb-4">
                      Subscribe our newletter and get notification to stay
                      update.
                    </p>

                    <div class="input-group bg-light rounded">
                      <input type="email" class="form-control bg-transparent border-0" placeholder="Enter Email address" aria-label="Recipient's username" aria-describedby="button-addon2" />
                      <div class="input-group-append">
                        <BButton variant="primary" class="rounded" id="button-addon2">
                          <i class="bx bxs-paper-plane"></i>
                        </BButton>
                      </div>
                    </div>
                  </BCol>
                </BRow>
              </div>
            </BCardBody>
          </BCard>
        </BCol>
      </BRow>

      <BRow>
        <BCol xl="4" lg="6">
          <Posts />
        </BCol>

        <BCol xl="4" lg="6">
          <Comments />
        </BCol>

        <BCol xl="4">
          <TopVisitor />
        </BCol>
      </BRow>

      <BRow>
        <BCol xl="4">
          <Activity />
        </BCol>
        <BCol xl="8">
          <BlogPost />
        </BCol>
      </BRow>
    </div>
  </Layout>
</template>
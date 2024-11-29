<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import { detailData } from "./data"
import { Img2 } from "@/assets/images/small/data";
import { avatar2 } from "@/assets/images/users/data"
/**
 * Blog-detail component
 */
export default {
  components: {
    Layout,
    PageHeader,
  },
  data() {
    return {
      detailData, Img2, avatar2
    }
  }
};
</script>

<template>
  <Layout>
    <PageHeader title="Blog Details" pageTitle="Blog" />

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <BCardBody>
            <div class="pt-3">
              <BRow class="justify-content-center">
                <BCol xl="8">
                  <div>
                    <div class="text-center">
                      <div class="mb-4">
                        <BLink class="badge bg-light font-size-12">
                          <i class="bx bx-purchase-tag-alt align-middle text-muted me-1"></i>
                          Project
                        </BLink>
                      </div>
                      <h4>Beautiful Day with Friends</h4>
                      <p class="text-muted mb-4">
                        <i class="mdi mdi-calendar me-1"></i> 10 Apr, 2020
                      </p>
                    </div>

                    <hr />
                    <div class="text-center">
                      <BRow>
                        <BCol sm="4" v-for="(detail, index) in detailData" :key="index">
                          <div :class="`${detail.class}`">
                            <p class="text-muted mb-2">{{ detail.title }}</p>
                            <h5 class="font-size-15">{{ detail.data }}</h5>
                          </div>
                        </BCol>
                      </BRow>
                    </div>
                    <hr />

                    <div class="my-5">
                      <img :src="Img2" alt="" class="img-thumbnail mx-auto d-block" />
                    </div>

                    <hr />

                    <div class="mt-4">
                      <div class="text-muted font-size-14">
                        <p>
                          Neque porro quisquam est, qui dolorem ipsum quia dolor
                          sit amet, consectetur, adipisci velit, sed quia non
                          numquam eius modi tempora incidunt ut labore et dolore
                          magnam enim ad minima veniam quis
                        </p>

                        <p class="mb-4">
                          Ut enim ad minima veniam, quis nostrum exercitationem
                          ullam corporis suscipit laboriosam, nisi ut aliquid ex
                          ea reprehenderit qui in ea voluptate velit esse quam
                          nihil molestiae consequatur, vel illum qui dolorem eum
                          fugiat quo voluptas nulla pariatur? At vero eos et
                          accusamus et iusto odio dignissimos ducimus qui
                          blanditiis praesentium voluptatum deleniti atque
                          corrupti quos dolores et quas molestias excepturi sint
                          occaecati cupiditate non provident, similique sunt
                        </p>

                        <blockquote class="p-4 border-light border rounded mb-4">
                          <div class="d-flex">
                            <div class="me-3">
                              <i class="bx bxs-quote-alt-left text-dark font-size-24"></i>
                            </div>
                            <div>
                              <p class="mb-0">
                                At vero eos et accusamus et iusto odio
                                dignissimos ducimus qui blanditiis praesentium
                                deleniti atque corrupti quos dolores et quas
                                molestias excepturi sint quidem rerum facilis
                                est
                              </p>
                            </div>
                          </div>
                        </blockquote>

                        <p>
                          Itaque earum rerum hic tenetur a sapiente delectus, ut
                          aut reiciendis voluptatibus maiores alias consequatur
                          aut perferendis doloribus asperiores repellat. Sed ut
                          perspiciatis unde omnis iste natus error sit
                        </p>

                        <div class="mt-4">
                          <h5 class="mb-3">Title:</h5>

                          <div>
                            <BRow>
                              <BCol lg="4" sm="6">
                                <div>
                                  <ul class="pl-4">
                                    <li class="py-1">Donec sodales sagittis</li>
                                    <li class="py-1">Sed consequat leo eget</li>
                                    <li class="py-1">Aliquam lorem ante</li>
                                  </ul>
                                </div>
                              </BCol>
                              <BCol lg="4" sm="6">
                                <div>
                                  <ul class="pl-4">
                                    <li class="py-1">Aenean ligula eget</li>
                                    <li class="py-1">Cum sociis natoque</li>
                                  </ul>
                                </div>
                              </BCol>
                            </BRow>
                          </div>
                        </div>
                      </div>

                      <hr />

                      <div class="mt-5">
                        <h5 class="font-size-15">
                          <i class="bx bx-message-dots text-muted align-middle me-1"></i>
                          Comments :
                        </h5>

                        <div>
                          <div class="d-flex py-3">
                            <div class="avatar-xs me-3">
                              <div class="avatar-title rounded-circle bg-light text-primary">
                                <i class="bx bxs-user"></i>
                              </div>
                            </div>
                            <div class="flex-grow-1">
                              <h5 class="font-size-14 mb-1">
                                Delores Williams
                                <small class="text-muted float-end">1 hr Ago</small>
                              </h5>
                              <p class="text-muted">
                                If several languages coalesce, the grammar of
                                the resulting language is more simple and
                                regular than that of the individual
                              </p>
                              <div>
                                <BLink href="javascript: void(0);" class="text-success"><i class="mdi mdi-reply"></i>
                                  Reply</BLink>
                              </div>
                            </div>
                          </div>
                          <div class="d-flex py-3 border-top">
                            <div class="avatar-xs me-3">
                              <img :src="avatar2" alt="" class="img-fluid d-block rounded-circle" />
                            </div>
                            <div class="flex-grow-1">
                              <h5 class="font-size-14 mb-1">
                                Clarence Smith
                                <small class="text-muted float-end">2 hrs Ago</small>
                              </h5>
                              <p class="text-muted">
                                Neque porro quisquam est, qui dolorem ipsum quia
                                dolor sit amet
                              </p>
                              <div>
                                <BLink href="javascript: void(0);" class="text-success"><i class="mdi mdi-reply"></i>
                                  Reply</BLink>
                              </div>

                              <div class="d-flex pt-3">
                                <div class="avatar-xs me-3">
                                  <div class="avatar-title rounded-circle bg-light text-primary">
                                    <i class="bx bxs-user"></i>
                                  </div>
                                </div>
                                <div class="flex-grow-1">
                                  <h5 class="font-size-14 mb-1">
                                    Silvia Martinez
                                    <small class="text-muted float-end">2 hrs Ago</small>
                                  </h5>
                                  <p class="text-muted">
                                    To take a trivial example, which of us ever
                                    undertakes laborious physical exercise
                                  </p>
                                  <div>
                                    <BLink href="javascript: void(0);" class="text-success"><i class="mdi mdi-reply"></i>
                                      Reply</BLink>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="d-flex py-3 border-top">
                            <div class="avatar-xs me-3">
                              <div class="avatar-title rounded-circle bg-light text-primary">
                                <i class="bx bxs-user"></i>
                              </div>
                            </div>
                            <div class="flex-grow-1">
                              <h5 class="font-size-14 mb-1">
                                Keith McCoy
                                <small class="text-muted float-end">12 Aug</small>
                              </h5>
                              <p class="text-muted">
                                Donec posuere vulputate arcu. phasellus accumsan
                                cursus velit
                              </p>
                              <div>
                                <BLink href="javascript: void(0);" class="text-success"><i class="mdi mdi-reply"></i>
                                  Reply</BLink>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="mt-4">
                        <h5 class="font-size-16 mb-3">Leave a Message</h5>

                        <BForm>
                          <BRow>
                            <BCol md="6">
                              <div class="mb-3">
                                <label for="commentname-input">Name</label>
                                <input type="text" class="form-control" id="commentname-input" placeholder="Enter name" />
                              </div>
                            </BCol>
                            <BCol md="6">
                              <div class="mb-3">
                                <label for="commentemail-input">Email</label>
                                <input type="email" class="form-control" id="commentemail-input"
                                  placeholder="Enter email" />
                              </div>
                            </BCol>
                          </BRow>

                          <div class="mb-3">
                            <label for="commentmessage-input">Message</label>
                            <BFormTextarea class="form-control" id="commentmessage-input" placeholder="Your message..."
                              rows="3"></BFormTextarea>
                          </div>

                          <div class="text-end">
                            <BButton variant="success" class="w-sm">
                              Submit
                            </BButton>
                          </div>
                        </BForm>
                      </div>
                    </div>
                  </div>
                </BCol>
              </BRow>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>
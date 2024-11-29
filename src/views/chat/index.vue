<script>
import simplebar from "simplebar-vue";

import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

import { chatData, chatMessagesData, groupData } from "./data";

import { required, helpers } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import { avatar1 } from "@/assets/images/users/data"

/**
 * Chat Component
 */
export default {
  setup() {
    return { v$: useVuelidate() };
  },
  components: {
    Layout,
    PageHeader,
    simplebar,
  },
  data() {
    return {
      chatData, avatar1, chatMessagesData, groupData,
      submitted: false,
      form: {
        message: "",
      },
      username: "Steven Franklin",
      items: [
        { title: "Emoji", icon: "mdi mdi-emoticon-happy-outline" },
        { title: "Images", icon: "mdi mdi-file-image-outline" },
        { title: "Add Files", icon: "mdi mdi-file-document-outline" }
      ]
    };
  },
  validations: {
    form: {
      message: {
        required: helpers.withMessage("Message is required", required),
      },
    },
  },
  methods: {
    /**
     * Get the name of user
     */
    chatUsername(name) {
      this.username = name;
      this.usermessage = "Hello";
      this.chatMessagesData = [];
      const currentDate = new Date();

      this.chatMessagesData.push({
        name: this.username,
        message: this.usermessage,
        time: currentDate.getHours() + ":" + currentDate.getMinutes(),
      });
    },

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
        const message = this.form.message;
        const currentDate = new Date();
        this.chatMessagesData.push({
          align: "right",
          name: "Henry Wells",
          message,
          time: currentDate.getHours() + ":" + currentDate.getMinutes(),
        });
        this.handleScroll();
      }
      this.submitted = false;
      this.form = {};
    },

    handleScroll() {
      if (this.$refs.current.$el) {
        setTimeout(() => {
          //   this.$refs.current.SimpleBar.value.getScrollElement().scrollTop =
          //     this.$refs.current.SimpleBar.value.getScrollElement().scrollHeight + 1500;
        }, 500);
      }
    },
  },
  mounted() {
    var container1 = document.querySelector(
      "#chat-list .simplebar-content-wrapper"
    );
    container1.scrollTo({ top: 500, behavior: "smooth" });

    var container2 = document.querySelector(
      "#containerElement .simplebar-content-wrapper"
    );
    container2.scrollTo({ top: 500, behavior: "smooth" });
  },
};
</script>

<template>
  <Layout>
    <PageHeader title="Chat" pageTitle="Skote" />

    <div class="d-lg-flex">
      <div class="chat-leftsidebar me-lg-4">
        <div class>
          <div class="py-4 border-bottom">
            <div class="d-flex">
              <div class="align-self-center me-3">
                <img :src="avatar1" class="avatar-xs rounded-circle" alt />
              </div>
              <div class="flex-grow-1">
                <h5 class="font-size-15 mt-0 mb-1">Henry Wells</h5>
                <p class="text-muted mb-0">
                  <i class="mdi mdi-circle text-success align-middle me-1"></i>
                  Active
                </p>
              </div>

              <BDropdown menu-class="dropdown-menu-end" class="chat-noti-dropdown active" right variant="white">
                <template v-slot:button-content>
                  <i class="bx bx-bell bx-tada"></i>
                </template>
                <BDropdownItem>Action</BDropdownItem>
                <BDropdownItem>Another action</BDropdownItem>
                <BDropdownItem>Something else here</BDropdownItem>
              </BDropdown>
            </div>
          </div>
        </div>

        <div class="search-box chat-search-box py-4">
          <div class="position-relative">
            <input type="text" class="form-control" placeholder="Search..." />
            <i class="bx bx-search-alt search-icon"></i>
          </div>
        </div>

        <div class="chat-leftsidebar-nav">
          <BTabs pills fill content-class="py-4">
            <BTab title="Tab 1" active>
              <template v-slot:title>
                <i class="bx bx-chat font-size-20 d-sm-none"></i>
                <span class="d-none d-sm-block">Chat</span>
              </template>
              <div>
                <h5 class="font-size-14 mb-3">Recent</h5>
                <simplebar style="max-height: 410px" id="chat-list">
                  <ul class="list-unstyled chat-list">
                    <li class v-for="data of chatData" :key="data.id" @click="chatUsername(data.name)"
                      :class="{ active: username == data.name }">
                      <BLink href="javascript: void(0);">
                        <div class="d-flex">
                          <div class="align-self-center me-3">
                            <i :class="`mdi mdi-circle text-${data.color} font-size-10`"></i>
                          </div>
                          <div class="align-self-center me-3" v-if="data.image">
                            <img :src="`${data.image}`" class="rounded-circle avatar-xs" alt />
                          </div>
                          <div class="avatar-xs align-self-center me-3" v-if="!data.image">
                            <span class="
                                    avatar-title
                                    rounded-circle
                                    bg-primary-subtle
                                    text-primary
                                  ">{{ data.name.charAt(0) }}</span>
                          </div>
                          <div class="flex-grow-1 overflow-hidden">
                            <h5 class="text-truncate font-size-14 mb-1">
                              {{ data.name }}
                            </h5>
                            <p class="text-truncate mb-0">
                              {{ data.message }}
                            </p>
                          </div>
                          <div class="font-size-11">{{ data.time }}</div>
                        </div>
                      </BLink>
                    </li>
                  </ul>
                </simplebar>
              </div>
            </BTab>
            <BTab>
              <template v-slot:title>
                <i class="bx bx-group font-size-20 d-sm-none"></i>
                <span class="d-none d-sm-block">Groups</span>
              </template>
              <h5 class="font-size-14 mb-3">Groups</h5>
              <ul class="list-unstyled chat-list">
                <li v-for="(chatRoom, index) in groupData" :key="index">
                  <BLink>
                    <div class="d-flex align-items-center">
                      <div class="avatar-xs me-3">
                        <span class="avatar-title rounded-circle bg-primary-subtle text-primary">{{ chatRoom.initial
                        }}</span>
                      </div>

                      <div class="flex-grow-1">
                        <h5 class="font-size-14 mb-0">{{ chatRoom.name }} ccdc</h5>
                      </div>
                    </div>
                  </BLink>
                </li>
              </ul>
            </BTab>
            <BTab>
              <template v-slot:title>
                <i class="bx bx-book-content font-size-20 d-sm-none"></i>
                <span class="d-none d-sm-block">Contacts</span>
              </template>
              <h5 class="font-size-14 mb-3">Contacts</h5>
              <simplebar style="height: 410px">
                <div>
                  <div class="avatar-xs mb-3">
                    <span class="
                            avatar-title
                            rounded-circle
                            bg-primary-subtle
                            text-primary
                          ">A</span>
                  </div>

                  <ul class="list-unstyled chat-list">
                    <li>
                      <BLink>
                        <h5 class="font-size-14 mb-0">Adam Miller</h5>
                      </BLink>
                    </li>

                    <li>
                      <BLink>
                        <h5 class="font-size-14 mb-0">Alfonso Fisher</h5>
                      </BLink>
                    </li>
                  </ul>
                </div>

                <div class="mt-4">
                  <div class="avatar-xs mb-3">
                    <span class="
                            avatar-title
                            rounded-circle
                            bg-primary-subtle
                            text-primary
                          ">B</span>
                  </div>

                  <ul class="list-unstyled chat-list">
                    <li>
                      <BLink>
                        <h5 class="font-size-14 mb-0">Bonnie Harney</h5>
                      </BLink>
                    </li>
                  </ul>
                </div>

                <div class="mt-4">
                  <div class="avatar-xs mb-3">
                    <span class="
                            avatar-title
                            rounded-circle
                            bg-primary-subtle
                            text-primary
                          ">C</span>
                  </div>

                  <ul class="list-unstyled chat-list">
                    <li>
                      <BLink>
                        <h5 class="font-size-14 mb-0">Charles Brown</h5>
                      </BLink>
                      <BLink>
                        <h5 class="font-size-14 mb-0">Carmella Jones</h5>
                      </BLink>
                      <BLink>
                        <h5 class="font-size-14 mb-0">Carrie Williams</h5>
                      </BLink>
                    </li>
                  </ul>
                </div>

                <div class="mt-4">
                  <div class="avatar-xs mb-3">
                    <span class="
                            avatar-title
                            rounded-circle
                            bg-primary-subtle
                            text-primary
                          ">D</span>
                  </div>

                  <ul class="list-unstyled chat-list">
                    <li>
                      <BLink>
                        <h5 class="font-size-14 mb-0">Dolores Minter</h5>
                      </BLink>
                    </li>
                  </ul>
                </div>
              </simplebar>
            </BTab>
          </BTabs>
        </div>
      </div>
      <div class="w-100 user-chat">
        <BCard no-body>
          <div class="p-4 border-bottom">
            <BRow>
              <BCol md="4" cols="9">
                <h5 class="font-size-15 mb-1">{{ username }}</h5>
                <p class="text-muted mb-0">
                  <i class="mdi mdi-circle text-success align-middle me-1"></i>
                  Active now
                </p>
              </BCol>
              <BCol md="8" cols="3">
                <ul class="list-inline user-chat-nav text-end mb-0">
                  <li class="list-inline-item d-none d-sm-inline-block">
                    <BDropdown menu-class="dropdown-menu-md dropdown-menu-end" variant="white" right
                      toggle-class="nav-btn" auto-close="outside">
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
          </div>

          <div class="chat-users">
            <div class="chat-conversation p-3">
              <simplebar style="max-height: 470px" id="containerElement" ref="current">
                <ul class="list-unstyled">
                  <li>
                    <div class="chat-day-title">
                      <span class="title">Today</span>
                    </div>
                  </li>
                  <li v-for="data of chatMessagesData" :key="data.message"
                    :class="{ right: `${data.align}` === 'right' }">
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
                </ul>
              </simplebar>
            </div>
            <div class="p-3 chat-input-section">
              <BForm @submit.prevent="formSubmit" class="row">
                <BCol>
                  <div class="position-relative">
                    <input type="text" v-model="form.message" class="form-control chat-input rounded"
                      placeholder="Enter Message..." :class="{
                        'is-invalid': submitted && v$.form.message.$error,
                      }" />
                    <div v-if="submitted && v$.form.message.$error" class="invalid-feedback">
                      <span v-if="v$.form.message.required.$message">{{
                        v$.form.message.required.$message
                      }}</span>
                    </div>
                    <div class="chat-input-links">
                      <ul class="list-inline mb-0">
                        <li class="list-inline-item" v-for="(item, index) in items" :key="index">
                          <BLink href="javascript:void(0);" v-b-tooltip.hover placement="top" :title="item.title">
                            <i :class="item.icon"></i>
                          </BLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </BCol>
                <div class="col-auto">
                  <BButton variant="primary" type="submit" class="btn-rounded chat-send w-md">
                    <span class="d-none d-sm-inline-block me-2">Send</span>
                    <i class="mdi mdi-send"></i>
                  </BButton>
                </div>
              </BForm>
            </div>
          </div>
        </BCard>
      </div>
    </div>
  </Layout>
</template>

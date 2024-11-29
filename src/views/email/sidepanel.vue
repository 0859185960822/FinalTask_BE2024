<script>
import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { sidepanelData, labelData, chatData } from "./data-inbox"
export default {
  components: { ckeditor: CKEditor.component },
  data() {
    return {
      sidepanelData, labelData, chatData,
      showModal: false,
      editor: ClassicEditor,
      editorData: "<p>Content of the editor.</p>"
    };
  }
};
</script>

<template>
  <div class="email-leftbar card">
    <BButton variant="danger" @click="showModal = true">Compose</BButton>
    <div class="mail-list mt-4">
      <router-link v-for="(linkItem, index) in sidepanelData" :key="index" to="/email/inbox"
        :class="{ active: linkItem.active }">
        <i :class="linkItem.iconClass"></i> {{ linkItem.text }}
        <span class="ms-1 float-end" v-if="linkItem.count">({{ linkItem.count }})</span>
      </router-link>
    </div>

    <h6 class="mt-4">Labels</h6>

    <div class="mail-list mt-1">
      <BLink v-for="(linkItem, index) in labelData" :key="index" href="javascript:void(0)">
        <span :class="linkItem.iconClass"></span> {{ linkItem.text }}
      </BLink>
    </div>

    <h6 class="mt-4">Chat</h6>

    <div class="mt-2">
      <BLink v-for="(chatUser, index) in chatData" :key="index" href="javascript:void(0)" class="d-flex">
        <img class="d-flex me-3 rounded-circle" :src="chatUser.imgSrc" alt="Generic placeholder image" height="36" />
        <div class="flex-grow-1 chat-user-box">
          <p class="user-title m-0">{{ chatUser.userTitle }}</p>
          <p class="text-muted">{{ chatUser.text }}</p>
        </div>
      </BLink>
    </div>

    <BModal v-model="showModal" title="New Message" centered>
      <BForm>
        <div class="mb-3">
          <input type="email" class="form-control" placeholder="To" />
        </div>

        <div class="mb-3">
          <input type="text" class="form-control" placeholder="Subject" />
        </div>
        <div class="mb-3">
          <ckeditor v-model="editorData" :editor="editor"></ckeditor>
        </div>
      </BForm>
      <template v-slot:modal-footer>
        <BButton variant="secondary" @click="showModal = false">Close</BButton>
        <BButton variant="primary">
          Send
          <i class="fab fa-telegram-plane ms-1"></i>
        </BButton>
      </template>
    </BModal>
  </div>
</template>
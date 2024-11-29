<script>
import Loader from "./loader";
import profile from "@/assets/images/profile-img.png";
import { avatar1 } from "@/assets/images/users/data"
/**
 * Profile component
 */
export default {
  components: {
    Loader,
  },
  data() {
    return { profile, avatar1 };
  },
  mounted() { },
  props: {
    updating: {
      type: Boolean,
    },
  },
};
</script>
<template>
  <Loader :loading="updating">
    <BCard class="overflow-hidden" no-body>
      <div class="bg-primary-subtle">
        <BRow>
          <BCol cols="7">
            <div class="text-primary p-3">
              <h5 class="text-primary">Welcome Back !</h5>
              <p>Skote Dashboard</p>
            </div>
          </BCol>
          <BCol cols="5" class="align-self-end">
            <img :src="profile" alt class="img-fluid" />
          </BCol>
        </BRow>
      </div>
      <BCardBody class="pt-0">
        <BRow>
          <BCol sm="4">
            <div class="avatar-md profile-user-wid mb-4">
              <img :src="avatar1" alt class="img-thumbnail rounded-circle" />
            </div>
            <h5 class="font-size-15 text-truncate">Henry Price</h5>
            <p class="text-muted mb-0 text-truncate">UI/UX Designer</p>
          </BCol>

          <BCol sm="8">
            <div class="pt-4">
              <BRow>
                <BCol cols="6">
                  <h5 class="font-size-15">125</h5>
                  <p class="text-muted mb-0">Projects</p>
                </BCol>
                <BCol cols="6">
                  <h5 class="font-size-15">$1245</h5>
                  <p class="text-muted mb-0">Revenue</p>
                </BCol>
              </BRow>
              <div class="mt-4">
                <BLink class="btn btn-primary btn-sm">
                  View Profile
                  <i class="mdi mdi-arrow-right ms-1"></i>
                </BLink>
              </div>
            </div>
          </BCol>
        </BRow>
      </BCardBody>
    </BCard>
  </Loader>
</template>

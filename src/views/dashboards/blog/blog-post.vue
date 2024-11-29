<script>
import { blogPostData } from "./data"
/**
 * Blog-post component
 */
export default {
  data() {
    return {
      blogPostData: blogPostData
    };
  },
};
</script>

<template>
  <BCard no-body>
    <BCardBody>
      <div class="d-flex">
        <div class="me-2">
          <BCardTitle class="mb-4">Popular post</BCardTitle>
        </div>
        <BDropdown toggle-tag="a" class="ms-auto" menu-class="dropdown-menu-end" toggle-class="font-size-16 p-0"
          variant="white" right>
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

      <div class="table-responsive mb-0">
        <BTableSimple class="table-centered table-nowrap mb-0">
          <BTbody>
            <BTr>
              <BTh scope="col" colspan="2">Post</BTh>
              <BTh scope="col">Likes</BTh>
              <BTh scope="col">Comments</BTh>
              <BTh scope="col">Action</BTh>
            </BTr>
            <BTr v-for="item in blogPostData" :key="item.id">
              <BTd style="width: 100px">
                <img :src="item.imageSrc" alt="" class="avatar-md h-auto d-block rounded" />
              </BTd>
              <BTd>
                <h5 class="font-size-13 text-truncate mb-1">
                  <BLink :href="item.link" class="text-dark">{{ item.title }}</BLink>
                </h5>
                <p class="text-muted mb-0">{{ item.date }}</p>
              </BTd>
              <BTd class="pt-4"><i class="bx bx-like align-middle me-1"></i> {{ item.likes }}</BTd>
              <BTd class="pt-4"><i class="bx bx-comment-dots align-middle me-1"></i> {{ item.comments }}</BTd>
              <BTd>
                <BDropdown toggle-class="text-muted font-size-16" variant="white" right>
                  <template #button-content>
                    <i class="mdi mdi-dots-horizontal"></i>
                  </template>
                  <BDropdownItem href="#">Action</BDropdownItem>
                  <BDropdownItem href="#">Another action</BDropdownItem>
                  <BDropdownItem href="#">Something else here</BDropdownItem>
                  <BDropdownDivider />
                  <BDropdownItem href="#">Separated link</BDropdownItem>
                </BDropdown>
              </BTd>
            </BTr>
          </BTbody>
        </BTableSimple>
      </div>
    </BCardBody>
  </BCard>
</template>
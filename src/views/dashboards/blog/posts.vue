<script>
import { Img2, Img6, Img1 } from "@/assets/images/small/data";
import simplebar from "simplebar-vue";

export default {
  data() {
    return {
      postData: [
        {
          image: Img2,
          title: "Beautiful Day with Friends",
          date: "10 Nov, 2020",
        },
        {
          image: Img6,
          title: "Drawing a sketch",
          date: "02 Nov, 2020",
        },
        {
          image: Img2,
          title: "Project discussion with team",
          date: "24 Oct, 2020",
        },
        {
          image: Img1,
          title: "Riding bike on road",
          date: "20 Oct, 2020",
        },
      ],
    };
  },
  components: {simplebar}
};
</script>

<template>
  <BCard no-body style="position: relative;">
    <BCardHeader class="bg-transparent border-bottom">
      <div class="flex-wrap blog-card">
        <BCardTitle class="mt-2">Posts</BCardTitle>
        <BTabs nav-class="nav-tabs-custom card-header-tabs ms-auto tamp" nav-wrapper-class="nav-item" align="right">
          <BTab title="Recent" active>
            <BCardBody class="pb-1 mb-3 mt-2">
              <simplebar data-simplebar style="max-height: 285px">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item" v-for="data of postData" :key="data.title">
                    <div class="d-flex">
                      <div class="me-3">
                        <img :src="data.image" alt="" class="avatar-md h-auto d-block rounded" />
                      </div>

                      <div class="align-self-center overflow-hidden me-auto">
                        <div>
                          <h5 class="font-size-14 text-truncate">
                            <BLink class="text-dark">{{ data.title }}</BLink>
                          </h5>
                          <p class="text-muted mb-0">{{ data.date }}</p>
                        </div>
                      </div>

                      <BDropdown class="ms-2" toggle-class="text-muted font-size-16 p-0" toggle-tag="a" variant="white"
                        menu-class="dropdown-menu-end" right>
                        <template #button-content>
                          <i class="mdi mdi-dots-horizontal"></i>
                        </template>
                        <BDropdownItem>Action</BDropdownItem>
                        <BDropdownItem>Another Action</BDropdownItem>
                        <BDropdownItem>Third Action</BDropdownItem>
                        <BDropdownItem>Something else here</BDropdownItem>
                      </BDropdown>
                    </div>
                  </li>
                </ul>
              </simplebar>
            </BCardBody>
          </BTab>
          <BTab title="Popular">
            <BCardBody class="pb-1">
              <simplebar data-simplebar style="max-height: 285px">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item" v-for="data of postData" :key="data.title">
                    <div class="d-flex">
                      <div class="me-3">
                        <img :src="data.image" alt="" class="avatar-md h-auto d-block rounded" />
                      </div>

                      <div class="align-self-center overflow-hidden me-auto">
                        <div>
                          <h5 class="font-size-14 text-truncate">
                            <BLink class="text-dark">{{ data.title }}</BLink>
                          </h5>
                          <p class="text-muted mb-0">{{ data.date }}</p>
                        </div>
                      </div>

                      <BDropdown class="ms-2" toggle-class="text-muted font-size-14 p-0" variant="white"
                        menu-class="dropdown-menu-end" right>
                        <template #button-content>
                          <i class="mdi mdi-dots-horizontal"></i>
                        </template>
                        <BDropdownItem>Action</BDropdownItem>
                        <BDropdownItem>Another Action</BDropdownItem>
                        <BDropdownItem>Third Action</BDropdownItem>
                        <BDropdownItem>Something else here</BDropdownItem>
                      </BDropdown>
                    </div>
                  </li>
                </ul>
              </simplebar>
            </BCardBody>
          </BTab>
        </BTabs>
      </div>
    </BCardHeader>
  </BCard>
</template>

<style>
.tamp {
  position: absolute;
  right: 18px;
  top: 9px;
}
</style>
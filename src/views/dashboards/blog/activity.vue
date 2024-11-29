<script>
import simplebar from 'simplebar-vue';
import { activityData } from "./data"
export default {
  components: {
    simplebar
  },
  data() {
    return {
      activityData: activityData
    };
  },
};
</script>

<template>
  <BCard no-body>
    <BCardBody>
      <div class="d-flex">
        <div class="me-2">
          <BCardTitle class="mb-4">Activity</BCardTitle>
        </div>
        <BDropdown toggle-tag="a" toggle-class="text-muted font-size-16 p-0" variant="white"
          menu-class="dropdown-menu-end" right class="ms-auto">
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
      <simplebar data-simplebar class="mt-2" style="max-height: 280px">
        <ul class="verti-timeline list-unstyled">
          <li class="event-list" v-for="item in activityData" :key="item.id">
            <div class="event-timeline-dot">
              <i class="bx" :class="item.iconClass"></i>
            </div>
            <div class="d-flex">
              <div class="me-3">
                <h5 class="font-size-14">
                  {{ item.date }}
                  <i class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                </h5>
              </div>
              <div class="flex-grow-1">
                <div>
                  {{ item.content }}
                  <BLink :href="item.link"> {{ item.linkText }}</BLink>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </simplebar>

      <div class="text-center mt-4">
        <BLink class="btn btn-primary waves-effect waves-light btn-sm">View More <i
            class="mdi mdi-arrow-right ms-1"></i></BLink>
      </div>
    </BCardBody>
  </BCard>
</template>
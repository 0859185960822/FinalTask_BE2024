<script>
import { topVisitorsData } from "./data"
export default {
  data() {
    return {
      topVisitorsData: topVisitorsData
    };
  },
};
</script>

<template>
  <BCard no-body>
    <BCardBody>
      <div class="d-flex flex-wrap">
        <div class="me-2">
          <BCardTitle class="mb-3">Top Visitors</BCardTitle>

        </div>
        <BDropdown class="ms-auto" toggle-tag="a" menu-class="dropdown-menu-end" toggle-class="font-size-16 p-0" variant="white" right>
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
      <BRow class="text-center">
        <BCol cols="6">
          <div class="mt-3">
            <p class="text-muted mb-1">Today</p>
            <h5>1024</h5>
          </div>
        </BCol>

        <BCol cols="6">
          <div class="mt-3">
            <p class="text-muted mb-1">This Month</p>
            <h5>
              12356
              <span class="text-success font-size-13">0.2 % <i class="mdi mdi-arrow-up ms-1"></i></span>
            </h5>
          </div>
        </BCol>
      </BRow>

      <hr />

      <div>
        <BListGroup class="list-group-flush">
          <BListGroupItem v-for="item in  topVisitorsData " :key="item.id">
            <div class="py-2">
              <h5 class="font-size-14">
                {{ item.location }} <span class="float-end">{{ item.percentage }}</span>
              </h5>
              <BProgress class="animated-progess progress-sm">
                <BProgressBar :variant="`${item.progressColor}`" role="progressbar" :style="{ width: item.percentage }" :aria-valuenow="item.percentage" aria-valuemin="0" aria-valuemax="100"></BProgressBar>
              </BProgress>
            </div>
          </BListGroupItem>
        </BListGroup>
      </div>
    </BCardBody>
  </BCard>
</template>
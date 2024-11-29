<script>
import { avatar2 } from "@/assets/images/users/data"
import simplebar from "simplebar-vue";
export default {
  data() {
    return {
      avatar2
    }
  },
  components: {
    simplebar
  },
};
</script>

<template>
  <BCard no-body>
    <BCardBody>
      <div class="d-flex flex-wrap">
        <div class="me-2">
          <BCardTitle class="mb-3">Comments</BCardTitle>
        </div>
        <BDropdown class="ms-auto" variant="white" menu-class="dropdown-menu-end" toggle-class="font-size-16 p-0" right>
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

      <simplebar data-simplebar style="max-height: 310px">
        <BListGroup>
          <BListGroupItem class="py-3">
            <div class="d-flex">
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
                  If several languages coalesce, the grammar of the resulting of
                  the individual
                </p>
                <div>
                  <BLink href="javascript: void(0);" class="text-success"><i class="mdi mdi-reply me-1"></i> Reply</BLink>
                </div>
              </div>
            </div>
          </BListGroupItem>

          <BListGroupItem class="py-3">
            <div class="d-flex">
              <div class="avatar-xs me-3">
                <img :src="avatar2" alt="" class="img-fluid d-block rounded-circle" />
              </div>
              <div class="flex-grow-1">
                <h5 class="font-size-14 mb-1">
                  Clarence Smith
                  <small class="text-muted float-end">2 hrs Ago</small>
                </h5>
                <p class="text-muted">
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet
                </p>
                <div>
                  <BLink href="javascript: void(0);" class="text-success"><i class="mdi mdi-reply"></i> Reply</BLink>
                </div>

                <div class="d-flex">
                  <div class="flex-shrink-0 me-3">
                    <div class="avatar-xs">
                      <div class="avatar-title rounded-circle bg-light text-primary">
                        <i class="bx bxs-user"></i>
                      </div>
                    </div>
                  </div>
                  <div class="flex-grow-1">
                    <h5 class="font-size-14 mb-1">
                      Delores Williams
                      <small class="text-muted float-end">1 hr Ago</small>
                    </h5>
                    <p class="text-muted">
                      If several languages coalesce, the grammar of the
                      resulting of the individual
                    </p>
                    <div>
                      <BLink href="javascript: void(0);" class="text-success"><i class="mdi mdi-reply me-1"></i> Reply
                      </BLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </BListGroupItem>

          <BListGroupItem class="py-3">
            <div class="d-flex">
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
                  Donec posuere vulputate arcu. phasellus accumsan cursus velit
                </p>
                <div>
                  <BLink href="javascript: void(0);" class="text-success"><i class="mdi mdi-reply"></i> Reply</BLink>
                </div>
              </div>
            </div>
          </BListGroupItem>
        </BListGroup>
      </simplebar>
    </BCardBody>
  </BCard>
</template>

<template>
  <div>
    <div class="btn-group me-2 mb-2 mb-sm-0">
      <BButton variant="primary">
        <i class="fa fa-inbox"></i>
      </BButton>
      <BButton variant="primary">
        <i class="fa fa-exclamation-circle"></i>
      </BButton>
      <BButton variant="primary">
        <i class="far fa-trash-alt"></i>
      </BButton>
    </div>

    <BDropdown class="btn-group me-2 mb-2 mb-sm-0" variant="primary">
      <template v-slot:button-content>
        <i class="fa fa-folder"></i>
        <i class="mdi mdi-chevron-down ms-2"></i>
      </template>

      <BDropdownItem href="javascript: void(0);">Updates</BDropdownItem>
      <BDropdownItem href="javascript: void(0);">Social</BDropdownItem>
      <BDropdownItem href="javascript: void(0);">Team Manage</BDropdownItem>
    </BDropdown>

    <BDropdown class="btn-group me-2 mb-2 mb-sm-0" variant="primary">
      <template v-slot:button-content>
        <i class="fa fa-tag"></i>
        <i class="mdi mdi-chevron-down ms-2"></i>
      </template>
      <BDropdownItem href="javascript: void(0);">Updates</BDropdownItem>
      <BDropdownItem href="javascript: void(0);">Social</BDropdownItem>
      <BDropdownItem href="javascript: void(0);">Team Manage</BDropdownItem>
    </BDropdown>

    <BDropdown class="btn-group me-2 mb-2 mb-sm-0" variant="primary">
      <template v-slot:button-content>
        More
        <i class="mdi mdi-dots-vertical ms-2"></i>
      </template>
      <BDropdownItem href="javascript: void(0);">Mark as Unread</BDropdownItem>
      <BDropdownItem href="javascript: void(0);">Add to Tasks</BDropdownItem>
      <BDropdownItem href="javascript: void(0);">Add Star</BDropdownItem>
      <BDropdownItem href="javascript: void(0);">Mute</BDropdownItem>
    </BDropdown>
  </div>
</template>
<script>
/**
 * Stat component -- specify the widget icon, title, value, and background color.
 */
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    },
    backgroundColor: {
      type: String,
      default: "bg-primary"
    }
  }
};
</script>

<template>
  <BCard class="mini-stats-wid" no-body>
    <BCardBody>
      <div class="d-flex">
        <div class="flex-grow-1">
          <p class="text-muted fw-medium mb-2">{{title}}</p>
          <h4 class="mb-0">{{value}}</h4>
        </div>

        <div class="avatar-sm align-self-center mini-stat-icon rounded-circle" :class="backgroundColor">
          <span class="avatar-title">
            <i :class="`${icon} font-size-24`"></i>
          </span>
        </div>
      </div>
    </BCardBody>
  </BCard>
</template>
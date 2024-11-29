<script>
import draggable from "vuedraggable";

export default {
  props: {
    tasks: {
      required: true,
      type: Array,
    },
  },
  components: {
    draggable,
  },
  name: "nested-draggable",
};
</script>

<template>
  <draggable tag="ul" :list="tasks" :group="{ name: 'g1' }" item-key="id">
    <template #item="{ element }">
      <li style="padding: 5px">
        <p><i :class="element.icon"></i> {{ element.label }}</p>
        <nested-draggable :tasks="element.subItems" />
      </li>
    </template>
  </draggable>
</template>

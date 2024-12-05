<script>
import Vertical from "./vertical";
import Horizontal from "./horizontal";
// import Sidebar from "../components/side-bar.vue";

import { useLayoutStore } from "@/state/pinia";
const layoutStore = useLayoutStore();

export default {
  components: {
    Vertical,
    Horizontal,
    // Sidebar
  },
  data() {
    return {};
  },
  computed: {
    layoutType() {
      return layoutStore.layoutType;
    }
  },
  methods: {},
  mounted() {
    // document.querySelector("html").setAttribute('dir', 'rtl');
  }
};
</script>

<template>
  <div>
    <Vertical v-if="layoutType === 'vertical'" :layout="layoutType">
      <slot />
    </Vertical>
    <!-- <Sidebar/> -->
    <Horizontal v-if="layoutType === 'horizontal'" :layout="layoutType">
      <slot />
    </Horizontal>
  </div>
</template>

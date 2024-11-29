<script>
// pinia auth store
import { useLayoutStore } from '@/state/pinia'
const layouts  = useLayoutStore();

export default {
  data() {
    return {
      configApps: layouts.configApps
    };
  },
}
</script>
<template>
  <footer class="footer">
    <BContainer fluid>
      <BRow>
        <BCol sm="6">{{ new Date().getFullYear() }} © {{ configApps.COPYRIGHT_COPORATION }}.</BCol>
        <BCol sm="6">
          <div class="text-sm-end d-none d-sm-block">Ver. {{ configApps.VERSION }}</div>
        </BCol>
      </BRow>
    </BContainer>
  </footer>
</template> 

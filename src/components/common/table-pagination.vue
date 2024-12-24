<script>
export default {
  props: ["pagination"],
};
</script>

<template>
  <div class="row">
    <div class="col-md-6">
      <div class="pt-3">
        Show {{ pagination.from ? pagination.from : 0 }} -
        {{ pagination.to ? pagination.to : 0 }} of
        {{ pagination.total }}
      </div>
    </div>
    <div class="col-md-6">
      <div style="float: right !important">
        <!-- Previous Button -->
        <ul class="pagination justify-content-start pt-3">
          <li
            v-for="(page, key_page) in pagination.links"
            v-bind:class="{ active: page.active }"
            :key="key_page"
            class="page-item"
          >
            <button

              @click="$emit('to-page', page.url)"
              class="page-link c-page-link-number"
            >
              <div v-html="page.label"></div>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<template>
  <div class="flex space-x-4">
    <div class="bg-gray-300 p-4 rounded text-center">
      <h2 class="text-lg font-bold">Total Project</h2>
      <p class="text-2xl font-bold">30</p>
    </div>
    <div class="bg-gray-300 p-4 rounded text-center">
      <h2 class="text-lg font-bold">On Going</h2>
      <p class="text-2xl font-bold">10</p>
    </div>
    <div class="bg-gray-300 p-4 rounded text-center">
      <h2 class="text-lg font-bold">Done</h2>
      <p class="text-2xl font-bold">4</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectStats',
};
</script>

<style scoped>
.card{
  padding: 2rem;
  text-align: center;
}
</style>
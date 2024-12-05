<template>
<div class="d-flex justify-content-center gap-4 pb-5 pt-3">
  <div class="bg-white p-4 rounded text-center flex-grow-1" style="max-width: 200px;">
    <h2 class="fs-5 fw-bold">Total Project</h2>
    <p class="fs-2 fw-bold">30</p>
  </div>
  <div class="bg-white p-4 rounded text-center flex-grow-1" style="max-width: 200px;">
    <h2 class="fs-5 fw-bold">On Going</h2>
    <p class="fs-2 fw-bold">10</p>
  </div>
  <div class="bg-white p-4 rounded text-center flex-grow-1" style="max-width: 200px;">
    <h2 class="fs-5 fw-bold">Done</h2>
    <p class="fs-2 fw-bold">4</p>
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
  
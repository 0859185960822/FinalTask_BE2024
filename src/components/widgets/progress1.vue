<template>
    <div style="display: flex; margin-bottom:1rem; gap: 2rem; margin-left: 7rem;">
      <div class="card">
        <h2 style="font-size: 2rem;">Total Project</h2>
        <p style="font-size: 1.5rem;">30</p>
      </div>
      <div class="card">
        <h2 style="font-size: 2rem;">On Going</h2>
        <p style="font-size: 1.5rem;">10</p>
      </div>
      <div class="card">
        <h2 style="font-size: 2rem;">Done</h2>
        <p style="font-size: 1.5rem;">4</p>
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
  
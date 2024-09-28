<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
  <div class="side-bar">
    <h3>Sidebar</h3>
    <nav>
      <RouterLink to="/" class="router-link">Home</RouterLink>
      <RouterLink to="/about" class="router-link">About</RouterLink>
      <RouterLink to="/todo" class="router-link">To Do List</RouterLink>
    </nav>
  </div>
</template>

<style scoped>
.side-bar {
  width: 20rem;
  padding: 1rem;
  border-right: solid 1px #42b883aa;
}

.router-link {
  display: block;
  width: 100%;
}
</style>
<script setup>
</script>
<template>
  <div class="side-bar">
    <h3>Sidebar</h3>
    <nav>
      <router-link to="/" class="router-link">Home</router-link>
      <router-link to="/about" class="router-link">About</router-link>
      <router-link to="/todo" class="router-link">To Do List</router-link>
    </nav>
  </div>
</template>

<style scoped>
.side-bar {
  width: 20rem;
  padding: 1rem;
  border-right: solid 1px #646cff;
}

.router-link {
  display: block;
  width: 100%;
}
</style>
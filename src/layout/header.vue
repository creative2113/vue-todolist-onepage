<script setup></script>
<template>
  <header class="header">
    <div>
      <a href="/">
        <img src="../assets/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="/">
        <img src="../assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>
    <h3>Header</h3>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
}

.logo {
  height: 4rem;
  padding: 1rem;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
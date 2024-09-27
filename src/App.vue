<script setup>
import { RouterView } from 'vue-router';
import FooterView from './layout/footer.vue';
import HeaderView from './layout/header.vue';
import Sidebar from './layout/sidebar.vue';
</script>

<template>
  <HeaderView />
  <main class="main">
    <Sidebar />
    <div class="main-view">
      <RouterView />
    </div>
  </main>
  <FooterView />
</template>

<style scoped>
.main {
  display: flex;
  flex-grow: 1;
  border-block: solid 1px #42b883aa;
}

.main-view {
  padding: 0;
  flex-grow: 1;
}
</style>

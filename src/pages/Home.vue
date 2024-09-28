<script setup>
import { onMounted, onUpdated, ref } from 'vue'

// defineProps({
//   msg: String,
// })

const number = ref(0)

function plusNumber() {
  number.value++;
}

onMounted(() => {
  console.log(`The initial number is ${number.value}.`)
})

onUpdated(() => {
  console.log(`The initial number is ${number.value}.`)
})
</script>

<template>
  <h1>Home</h1>
  <div class="card">
    <button type="button" @click="plusNumber">number is {{ number }}</button>
  </div>
</template>

<style scoped></style>

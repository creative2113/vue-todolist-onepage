<script setup>
import { ref } from "vue";

// defineProps({
//   msg: String,
// });

const todos = ref([{ message: "Asdfasdf" }]);
const newtext = ref("");

function addTodo() {
  todos.value.push({ message: newtext.value });
  newtext.value = "";
}

function removeTodo(index) {
  todos.value = [...todos.value.filter((todo, id) => id !== index)];
}
</script>

<template>
  <div class="container">
    <h1>To Do List</h1>
    <div>
      <p>Message is: {{ newtext }}</p>
      <input v-model="newtext" placeholder="edit me" />
      <button @click="addTodo">Add</button>
    </div>
    <div>
      <li v-for="({ message }, index) in todos">
        <span>{{ index }}</span>
        {{ message }}
        <button @click="removeTodo(index)">X</button>
      </li>
    </div>
  </div>
</template>

<style scoped>
li {
  list-style: none;
}
</style>

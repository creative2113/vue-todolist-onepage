<script setup>
import { ref } from "vue";

// defineProps({
//   msg: String,
// });

const todos = ref([{ title: "React", desc: "this is flexible and " }]);
const newtodo = ref({
  title: "",
  desc: ""
});

function addTodo() {
  if (newtodo.value.title === "" || newtodo.value.desc === "") return alert("All field is required!");
  todos.value.push({ title: newtodo.value.title, desc: newtodo.value.desc });
  newtodo.value = { title: "", desc: "" };
}

function removeTodo(index) {
  todos.value = [...todos.value.filter((todo, id) => id !== index)];
}
</script>

<template>
  <div class="container">
    <h1>To Do List</h1>
    <div class="todo-form">
      <label for="title">Title: </label>
      <input id="title" v-model="newtodo.title" placeholder="Enter Title!" />
    </div>
    <div class="todo-form">
      <label for="desc">Description: </label>
      <input id="desc" v-model="newtodo.desc" placeholder="Enter Description!" />
    </div>
    <button @click="addTodo">Add</button>
    <table class="todo-table">
      <div>
        <div>No</div>
        <div>Title</div>
        <div>Description</div>
        <div>Delete</div>
      </div>
      <div v-for="({ title, desc }, index) in todos">
        <div>{{ index + 1 }}</div>
        <div>{{ title }}</div>
        <div>{{ desc }}</div>
        <div><button @click="removeTodo(index)">X</button></div>
      </div>
    </table>
  </div>
</template>

<style scoped>
input {
  margin-block: 0.5rem;
}

.container {
  padding: 2rem;
}

.todo-form {
  padding-top: 1rem;
}

.todo-form>input {
  display: block;
  width: 100%;
}

.todo-table {
  width: 100%;
}

.todo-table>div {
  display: flex;
  width: 100%;
}

.todo-table>div>div {
  padding: 0.5rem;
  text-align: center;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.todo-table>div>div:nth-of-type(1) {
  width: 10%;
}

.todo-table>div>div:nth-of-type(2) {
  width: 10%;
}

.todo-table>div>div:nth-of-type(3) {
  width: 70%;
}

.todo-table>div>div:nth-of-type(4) {
  width: 10%;
}
</style>

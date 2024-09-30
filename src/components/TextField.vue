<!-- TextField.vue -->
<script setup>
import { defineProps, defineEmits } from 'vue';

// Define the props
const props = defineProps({
    title: String,
    modelValue: String, // Use modelValue for v-model
});

// Define emits
const emit = defineEmits(['update:modelValue']);

// Emit changes to the parent when the input changes
function updateValue(event) {
    emit('update:modelValue', event.target.value);
    console.log(modelValue);
}
</script>

<template>
    <div>
        <label :for="title">{{ title }}</label>
        <input
            :placeholder="'Enter ' + title"
            :model="modelValue"
            @input="updateValue"
        />
    </div>
</template>

<style scoped>
/* Add your styles here */
</style>
<template>
	<input
		type="checkbox"
		:checked='props.todo.done'
	>
	{{props.todo.title}}
	<button @click="emit('deleteTodo')">delete</button>
</template>

<script setup>
import { defineProps, defineEmit } from '@vue/runtime-core'
const props = defineProps(['todo'])
const emit = defineEmit(['deleteTodo']);
</script>
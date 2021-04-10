<template>
	<h2>Add Todo</h2>
	<input
		type="text"
		v-model='newTodo'
		@keyup.enter="addTodo"
	>
	<button @click="addTodo">ADD</button>
	<h2>List Todos</h2>
	<hr />
	<ul>
		<li
			v-for="todo in todos"
			:key="todo.id"
		>
			<Todo
				:todo='todo'
				@deleteTodo='deleteTodo(todo.id)'
			/>
		</li>
	</ul>
</template>

<script setup>
import { ref } from '@vue/reactivity';
import Todo from '../components/Todo';

const newTodo = ref();

const todos = ref([
	{
		id: 1,
		title: 'Go to market',
		done: false
	},
	{
		id: 2,
		title: 'Meet with boss',
		done: true
	}
]);
function deleteTodo (id) {
	todos.value = todos.value.filter(todo => todo.id != id)
}
function addTodo () {
	if (newTodo.value) {
		todos.value.push({ id: todos.value.length + 1, title: newTodo.value, done: false });
		newTodo.value = null;
	}
}
</script>
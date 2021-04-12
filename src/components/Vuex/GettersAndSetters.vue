<template>
	<hr />
	<p>Getters and Setters</p>
	<input
		v-model="color"
		type="text"
		placeholder="Color Code"
	/>
</template>

<script>
import { computed } from '@vue/runtime-core';
export default {
	computed: {
		color: {
			get () {
				return this.$store.state.color;
			},
			set (value) {
				this.$store.commit('setColor', value);
			}
		}
	}
};
</script>
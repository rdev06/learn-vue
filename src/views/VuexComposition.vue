<template>
  <h2>
    Counter:
    <h3 :style="{ color }">{{ counter }} <sup>2</sup> = {{ square }}</h3>
  </h2>
  <button @click="dec">-</button>
  <button @click="inc">+</button>
  <hr />
  <button @click="assignValue">Assign Random value</button>
</template>

<script>
import { useState, useGetter, useMutation, useAction } from '../store/helper';
export default {
  setup() {
    // const store = useStore();
    // const counter = computed(() => store.state.counter);
    // const color = computed(() => store.state.color);
    // const square = computed(() => store.getters.square);
    // const inc = () => store.commit('inc');
    // const dec = () => store.commit('dec');
    // const assignValue = () => store.dispatch('assignValue');
    const { counter, color } = useState(['counter', 'color']);
    const { inc, dec } = useMutation(['inc', 'dec']);
    const { square } = useGetter(['square']);
    const { assignValue } = useAction(['assignValue']);
    return { counter, color, inc, dec, square, assignValue };
  }
};
</script>

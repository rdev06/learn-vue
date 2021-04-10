<template>
  <h2>
    Counter:
    <h3>{{ counter }}</h3>
  </h2>
  <button @click="dec">-</button>
  <button @click="inc">+</button>
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
  setup() {
    const counter = ref(0);
    function dec() {
      return counter.value--;
    }
    function inc() {
      return counter.value++;
    }
    return { counter, inc, dec };
  }
};
</script>
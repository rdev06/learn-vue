<template>
  <h2>
    Counter:
    <h3>{{ counter }}</h3>
  </h2>
  <button @click="dec">-</button>
  <button @click="inc">+</button>
</template>

<script>
export default {
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    inc() {
      this.counter++;
    },
    dec() {
      this.counter--;
    }
  }
};
</script>

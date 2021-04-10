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
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
export default {
  computed: {
    ...mapState(['counter', 'color']),
    ...mapGetters(['square'])
  },
  methods: {
    ...mapMutations(['inc', 'dec', 'randomNumber', 'setColor']),
    ...mapActions(['assignValue'])
  }
};
</script>

<template>
  <h2>
    Counter:
    <h3 :style="{ color: $store.state.color }">{{ $store.state.counter }}</h3>
  </h2>
  <Mutation />
  <Action />
  <Getters />
  <GettersAndSetters />
</template>

<script>
import Mutation from '@/components/Vuex/Mutation';
import Action from '@/components/Vuex/Action';
import Getters from '@/components/Vuex/Getters';
import GettersAndSetters from '@/components/Vuex/GettersAndSetters';

export default {
  components: { Mutation, Action, Getters, GettersAndSetters }
};
</script>

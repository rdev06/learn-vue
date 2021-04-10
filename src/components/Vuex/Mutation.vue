<template>
  <hr />
  <p>Mutation</p>
  <button @click="$store.commit('dec')">-</button>
  <button @click="$store.commit('inc')">+</button>
</template>
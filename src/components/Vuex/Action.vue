<template>
  <hr />
  <p>Action</p>
  <button @click="$store.dispatch('assignValue', 'roshan')">
    Assign Random Value
  </button>
</template>
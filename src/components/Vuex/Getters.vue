<template>
  <hr />
  <p>Getters</p>
  {{ $store.state.counter }}<sup>2</sup> = {{ $store.getters.square }}
</template>
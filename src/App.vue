<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script setup>
</script>

<style>
#app {
  min-height: 100vh;
}

/* Add scroll margin for anchor links to account for sticky nav */
[id] {
  scroll-margin-top: 80px;
}
</style>

<template>
  <div class="layout-wrapper layout-blank">
    <RouterView />
  </div>
</template>

<style>
.layout-wrapper.layout-blank {
  flex-direction: column;
}
</style>

<script setup>
console.log(import.meta.env.VITE_BASE_URL)
</script>

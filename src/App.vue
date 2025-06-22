<template>
  <div class="wrap-x wrap-b">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  document.body.classList.add('theme-light')
})
</script>

<style lang="scss">
@use '@/assets/scss/main.scss';
</style>

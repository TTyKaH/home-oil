<template>
  <div class="wrap-x wrap-b">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import UseTheme from '@/composables/UseTheme'

UseTheme()
</script>

<style lang="scss">
@use '@/assets/scss/main.scss';
</style>

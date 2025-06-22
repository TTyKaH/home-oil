<template>
  <div class="default">
    <Header />
    <div class="default__view">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
</script>

<style scoped lang="scss">
.default {
  &__view {
    padding-top: calc(58px + 20px);
  }
}
</style>

<template>
  <div class="default">
    <Header />
    <div class="default__view">
      <RouterView v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
</script>

<style scoped lang="scss">
.default {
  &__view {
    padding-top: calc(83px + 20px);
  }
}
</style>

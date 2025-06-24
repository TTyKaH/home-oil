<template>
  <div class="wrap-x wrap-b">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { useFavicon } from '@vueuse/core'

import UseTheme from '@/composables/UseTheme'

UseTheme()

const icon = useFavicon()

icon.value = 'favicon.svg'
</script>

<style lang="scss">
@use '@/assets/scss/main.scss';
</style>

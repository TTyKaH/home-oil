<template>
  <div class="wrap-x wrap-b">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { useFavicon } from '@vueuse/core'
import { onMounted } from 'vue'

import UseTheme from '@/composables/UseTheme'

UseTheme()

const icon = useFavicon()

icon.value = 'favicon.svg'

onMounted(() => {
  document.documentElement.classList.add('custom-scrollbar')
  document.title = 'Домашнее масло'
})
</script>

<style lang="scss">
// TODO: уЧИТЫВАТЬ ШИРИНУ СКРОЛА НА ПК ДЛЯ ПОЗИЦИОНИРОВАНИЯ МОДАЛКИ, ИНАЧЕ ОНА СМЕЩАЕТСЯ
// TODO: у хежера есть скачки, Так как он фиксирован и скачет из-за скрола
@use '@/assets/scss/main.scss';
</style>

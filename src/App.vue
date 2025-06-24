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
// TODO: ИЗМЕНИТЬ СКРОЛ БАР ДЛЯ ПК
// TODO: уЧИТЫВАТЬ ШИРИНУ СКРОЛА НА ПК ДЛЯ ПОЗИЦИОНИРОВАНИЯ МОДАЛКИ, ИНАЧЕ ОНА СМЕЩАЕТСЯ
// TODO: у хежера есть скачки, Так как он фиксирован и скачет из-за скрола
// TODO: ПЕРЕИМЕНОВАТЬ ПРИЛОЖЕНИЕ (ДЛЯ ВКЛАДКИ)
// TODO: Контакты выровнять по центру для таблетки и более
@use '@/assets/scss/main.scss';
</style>

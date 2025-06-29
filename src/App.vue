<template>
  <NConfigProvider :theme="currentTheme" :theme-overrides="themeOverrides">
    <div class="wrap-x wrap-b">
      <RouterView />
    </div>
  </NConfigProvider>
</template>

<script setup lang="ts">
import { useFavicon } from '@vueuse/core'
import type { GlobalThemeOverrides } from 'naive-ui'
import { darkTheme, lightTheme, NConfigProvider } from 'naive-ui'
import { computed, ref } from 'vue'
import { onMounted } from 'vue'

import UseTheme from '@/composables/UseTheme'

const icon = useFavicon()

icon.value = 'favicon.svg'

onMounted(() => {
  document.documentElement.classList.add('custom-scrollbar')
  document.title = 'Домашнее масло'
})

const { themeName } = UseTheme()

// настройка темы naive

const isDark = computed(() => themeName.value === 'dark')
const currentTheme = computed(() => (isDark.value ? darkTheme : lightTheme))

// Определяем переопределения для тем
const themeOverrides = computed<GlobalThemeOverrides>(() => {
  if (isDark.value) {
    return {
      Skeleton: {
        color: 'rgba(255, 255, 255, 0.10)',
        colorEnd: 'rgba(255, 255, 255, 0.05)',
      },
    }
  } else {
    return {
      Skeleton: {
        color: 'rgba(0, 0, 0, 0.10)',
        colorEnd: 'rgba(0, 0, 0, 0.05)',
      },
    }
  }
})
</script>

<style lang="scss">
// TODO: уЧИТЫВАТЬ ШИРИНУ СКРОЛА НА ПК ДЛЯ ПОЗИЦИОНИРОВАНИЯ МОДАЛКИ, ИНАЧЕ ОНА СМЕЩАЕТСЯ
// TODO: у хежера есть скачки, Так как он фиксирован и скачет из-за скрола
@use '@/assets/scss/main.scss';
</style>

<template>
  <NConfigProvider :theme="currentTheme" :theme-overrides="themeOverrides">
    <div class="wrap-x wrap-b">
      <RouterView />
    </div>
  </NConfigProvider>
</template>

<script setup lang="ts">
import type { GlobalThemeOverrides } from 'naive-ui'
import { darkTheme, lightTheme, NConfigProvider } from 'naive-ui'
import { computed } from 'vue'

// theme
import UseTheme from '@/composables/UseTheme'

const { themeName } = UseTheme()

// настройка темы naive
const isDark = computed(() => themeName.value === 'dark')
const currentTheme = computed(() => (isDark.value ? darkTheme : lightTheme))

// переопределения для тем naive
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

// сделать превью изображние
@use '@/assets/scss/main.scss';
</style>

<template>
  <div class="header wrap-x">
    <NButton class="header__theme" quaternary circle>
      <template #icon>
        <NIcon
          v-if="themeName === 'light'"
          size="28"
          :component="LightModeFilled"
          color="var(--text-color-main)"
          @click="setTheme('dark')"
        />
        <NIcon
          v-else
          size="28"
          :component="DarkModeFilled"
          color="var(--text-color-main)"
          @click="setTheme('light')"
        />
      </template>
    </NButton>

    <div class="header__logo">
      <NIcon size="18" color="var(--oil)" :component="WaterDropFilled" />
      Домашнее масло
    </div>

    <NDropdown
      class="header__menu"
      trigger="click"
      :options="menu"
      size="huge"
      @select="handleSelect"
    >
      <NButton quaternary circle>
        <template #icon>
          <NIcon size="28" :component="DehazeFilled" color="var(--text-color-main)" />
        </template>
      </NButton>
    </NDropdown>
  </div>
</template>

<script setup lang="ts">
import { DarkModeFilled, DehazeFilled, LightModeFilled, WaterDropFilled } from '@vicons/material'
import { useRouter } from 'vue-router'

import UseTheme from '@/composables/UseTheme'

const { themeName, setTheme } = UseTheme()

const menu = [
  {
    label: 'Масла',
    key: 'oil-list',
  },
  {
    label: 'Контактные данные',
    key: 'contacts',
  },
]

const router = useRouter()

const handleSelect = (routeName: string) => {
  router.push({ name: routeName })
}
</script>

<style scoped lang="scss">
.header {
  @apply flex items-center justify-between fixed z-50;

  padding-top: 12px;
  padding-bottom: 12px;
  top: 0;
  left: 0;
  right: 0;

  background: linear-gradient(
    to top,
    rgba(var(--bg-main-rgb), 0.5),
    rgba(var(--bg-main-rgb), 0.7),
    rgba(var(--bg-main-rgb), 0.8),
    rgba(var(--bg-main-rgb), 0.9),
    rgba(var(--bg-main-rgb), 0.9),
    rgba(var(--bg-main-rgb), 1)
  );
  backdrop-filter: blur(7px);

  // box-shadow:
  //   0px 1px 4px rgba(3, 7, 18, 0),
  //   0px 5px 18px rgba(3, 7, 18, 0),
  //   0px 12px 40px rgba(3, 7, 18, 0.01),
  //   0px 20px 70px rgba(3, 7, 18, 0.01),
  //   0px 32px 110px rgba(3, 7, 18, 0.01);

  &__logo {
    @apply flex items-center;
    gap: 4px;
    font-weight: 400;
    font-size: 18px;
    user-select: none;
  }
}
</style>

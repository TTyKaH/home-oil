<template>
  <div class="header">
    <div class="header__wrap wrap-x">
      <div class="header__top">
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

        <RouterLink to="/">
          <div class="header__logo">
            <NIcon size="18" color="var(--oil)" :component="WaterDropFilled" />
            Домашнее масло
          </div>
        </RouterLink>

        <!-- <NDropdown
        class="header__menu"
        trigger="click"
        :options="menu"
        size="huge"
        :value="routeName"
        @select="handleSelect"
      >
        <NButton quaternary circle>
          <template #icon>
            <NIcon size="28" :component="DehazeFilled" color="var(--text-color-main)" />
          </template>
        </NButton>
      </NDropdown> -->
      </div>
    </div>
    <div class="header__bottom">
      <div class="header__nav">
        <div
          v-for="(link, idx) in menu"
          :key="idx"
          class="header__link"
          @click="handleSelect(link.key)"
        >
          {{ link.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DarkModeFilled, DehazeFilled, LightModeFilled, WaterDropFilled } from '@vicons/material'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import UseTheme from '@/composables/UseTheme'

const { themeName, setTheme } = UseTheme()

const menu = [
  {
    label: 'Масла',
    key: 'oil-list',
  },
  {
    label: 'Цены',
    key: 'prices',
  },
  {
    label: 'Доставка',
    key: 'delivery',
  },
  {
    label: 'Контакты',
    key: 'contacts',
  },
]

const router = useRouter()
const route = useRoute()

const routeName = ref(route.name)

const handleSelect = (newRouteName: string) => {
  router.push({ name: newRouteName })
  routeName.value = newRouteName
}
</script>

<style scoped lang="scss">
.header {
  @apply fixed z-50;

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

  &__wrap {
    @apply flex flex-col;

    padding-top: 12px;
  }

  &__top {
    @apply flex justify-center relative;
  }

  &__theme {
    @apply absolute;
    top: -1px;
    right: 0;
  }

  &__logo {
    @apply flex items-center;
    gap: 4px;
    font-weight: 400;
    font-size: 20px;
    user-select: none;
  }

  &__nav {
    @apply flex justify-center;
    padding: 0 10px;
  }

  &__link {
    padding: 5px 10px 8px;
    text-wrap: nowrap;
    text-shadow: 0px 2px 2px rgba(255, 255, 255, 0.4);
    cursor: pointer;

    &:hover {
      color: var(--text-color-hover);
      transition: color 0.2s ease-in-out;
    }
  }
}
</style>

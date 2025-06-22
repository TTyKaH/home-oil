<template>
  <div class="header wrap-x">
    <NButton class="header__theme" quaternary circle>
      <template #icon>
        <NIcon size="28" :component="LightModeFilled" />
        <!-- <NIcon size="28" :component="DarkModeFilled" /> -->
      </template>
    </NButton>

    <div class="header__logo">
      <NIcon size="18" :component="WaterDropFilled" />
      Домашнее масло
    </div>

    <NButton class="header__menu" quaternary circle>
      <template #icon>
        <NIcon size="28" :component="DehazeFilled" />
      </template>
    </NButton>
  </div>
</template>

<script setup lang="ts">
import { DarkModeFilled, DehazeFilled, LightModeFilled, WaterDropFilled } from '@vicons/material'
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
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.9),
    rgba(255, 255, 255, 0.9),
    rgba(255, 255, 255)
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

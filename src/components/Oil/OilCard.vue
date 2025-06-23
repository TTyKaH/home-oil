<template>
  <NCard class="oil-card shadow">
    <template #cover>
      <div
        class="oil-card__img"
        :style="{
          backgroundImage: `url('/src/assets/img/oils/${oil.img}.jpg')`,
        }"
      />

      <div class="oil-card__content">
        <div class="oil-card__description">
          <div class="oil-card__name">
            {{ oil.name }}
          </div>
          <div class="oil-card__type">
            {{ oil.type }}
          </div>
        </div>

        <NButton class="oil-card__open" quaternary circle @click="setActiveOil(oil)">
          <template #icon>
            <NIcon color="var(--text-color-sub)" size="28" :component="VisibilityOutlined" />
          </template>
        </NButton>
      </div>
    </template>
  </NCard>
</template>

<script setup lang="ts">
import { VisibilityOutlined } from '@vicons/material'

import UseOilList from '@/composables/UseOilList.ts'

defineProps({
  oil: {
    type: [Object, null],
    required: true,
  },
})

const { setActiveOil } = UseOilList()
</script>

<style scoped lang="scss">
.oil-card {
  border-radius: 20px;

  &__img {
    @apply w-full bg-cover;
    border-radius: 15px 15px 0 0;
    height: 450px;
    background-repeat: no-repeat;
    background-position: center top;
    background-size: cover;

    box-shadow: inset 0 0 25px 5px rgba(43, 45, 51, 0.5);
  }

  &__content {
    @apply flex justify-between items-end;
    padding: 12px 16px;
  }

  &__description {
    @apply grid;
  }

  &__name {
    font-weight: 700;
    font-size: 24px;
    color: var(--text-color-main);
  }

  &__type {
    font-weight: 600;
    font-size: 16px;
    color: var(--text-color-sub);
  }
}
</style>

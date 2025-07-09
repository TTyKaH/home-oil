<template>
  <NCard class="oil-card shadow">
    <template #cover>
      <NSkeleton v-if="isLoadingImg" class="oil-card__skeleton" sharp animated height="450px" />
      <div v-else class="oil-card__img" :style="backgroundImageStyle" />

      <div class="oil-card__content">
        <div class="oil-card__description w-full">
          <div class="flex justify-between items-center pb-0.5">
            <div class="oil-card__name">
              {{ oil.name }}
            </div>
            <div class="oil-card__open" @click="setActiveOil(oil)">
              подробнее
              <NButton quaternary circle>
                <template #icon>
                  <NIcon color="var(--text-color-sub)" size="28" :component="TouchAppOutlined" />
                </template>
              </NButton>
            </div>
          </div>
          <div class="flex gap-3 justify-between">
            <div class="oil-card__type">
              {{ oil.type }}
            </div>
            <div class="oil-card__price">{{ oil.price.sum }} ₽ / {{ oil.price.volume }} л</div>
          </div>
        </div>
      </div>
    </template>
  </NCard>
</template>

<script setup lang="ts">
import { TouchAppOutlined } from '@vicons/material'
import { computed, ref, watchEffect } from 'vue'

import UseOilList from '@/composables/UseOilList.ts'
import type { IOil } from '@/types/index'

const props = defineProps<{
  oil: IOil
}>()

const { setActiveOil } = UseOilList()

const isLoadingImg = ref(true)

const imageUrl = computed(() => {
  return new URL(`/src/assets/img/oils/${props.oil.img}.jpg`, import.meta.url).href
})

const backgroundImageStyle = computed(() => {
  return {
    backgroundImage: `url('${imageUrl.value}')`,
  }
})

watchEffect(() => {
  const img = new Image()
  img.src = imageUrl.value
  img.onload = () => {
    isLoadingImg.value = false
  }
  img.onerror = () => {
    isLoadingImg.value = false
  }
})
</script>

<style scoped lang="scss">
.oil-card {
  border-radius: 20px;

  &__skeleton {
    border-radius: 20px 20px 0 0;
  }

  &__img {
    @apply w-full bg-cover;
    border-radius: 20px 20px 0 0;
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
    font-size: 22px;
    color: var(--text-color-main);
  }

  &__open {
    @apply flex items-center;
    font-weight: 600;
    font-size: 14px;
    color: var(--text-color-sub);
  }

  &__type,
  &__price {
    font-weight: 600;
    font-size: 14px;
    color: var(--text-color-sub);
  }
}
</style>

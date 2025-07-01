<template>
  <div class="oil-modal-content">
    <div class="custom-modal__header oil-modal-content__header">
      <NSkeleton
        v-if="isLoadingImg"
        class="custom-modal__skeleton"
        sharp
        animated
        round
        width="34px"
        height="34px"
      />
      <n-avatar v-else round :size="34" :src="avatarImageUrl" />
      {{ oilBuffer?.modalContent.title }}
    </div>
    <div class="custom-modal__body oil-modal-content__body">
      <div class="oil-modal-content__description">
        <div class="oil-modal-content__title">
          <NIcon color="var(--text-color-sub)" size="28" :component="DescriptionOutlined" />
          Описание
        </div>
        {{ oilBuffer?.modalContent.description }}
      </div>

      <div class="oil-modal-content__description">
        <div class="oil-modal-content__title">
          <NIcon color="var(--text-color-sub)" size="28" :component="ThumbUpOutlined" />
          Полезные свойства
        </div>
        <div class="oil-modal-content__list grid gap-2">
          <div
            v-for="(property, idx) in oilBuffer?.modalContent.properties"
            :key="idx"
            class="oil-modal-content__item flex gap-1"
          >
            -
            <div>
              {{ property }}
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="oil-modal-content__description">
          <div class="oil-modal-content__title">
            <NIcon color="var(--text-color-sub)" size="28" :component="WarningAmberOutlined" />
            Противопоказания
          </div>
          <div class="oil-modal-content__list grid gap-2">
            <div
              v-for="(contraindication, idx) in oilBuffer?.modalContent.contraindications"
              :key="idx"
              class="oil-modal-content__item flex gap-1"
            >
              -
              <div>
                {{ contraindication }}
              </div>
            </div>
          </div>
        </div>

        <NDivider />

        <ContactsList />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DescriptionOutlined, ThumbUpOutlined, WarningAmberOutlined } from '@vicons/material'
import { computed, type Ref, ref, watch, watchEffect } from 'vue'

import ContactsList from '@/components/ContactsList.vue'
import type { IOil } from '@/types/index'

const props = defineProps<{
  oil: IOil | null
}>()

const oilBuffer: Ref<IOil | null> = ref(null)

watch(
  () => props.oil,
  () => {
    if (props.oil) {
      oilBuffer.value = props.oil
    }
  },
  { deep: true, immediate: true },
)

const isLoadingImg = ref(true)

const avatarImageUrl = computed(() => {
  if (oilBuffer.value?.img) {
    return new URL(`/src/assets/img/oils/${oilBuffer.value.img}.jpg`, import.meta.url).href
  }
  return ''
})

watchEffect(() => {
  const img = new Image()
  img.src = avatarImageUrl.value
  img.onload = () => {
    isLoadingImg.value = false
  }
  img.onerror = () => {
    isLoadingImg.value = false
  }
})
</script>

<style scoped lang="scss">
.oil-modal-content {
  &__header {
    @apply flex items-center;
    gap: 12px;
  }

  &__body {
    @apply grid;
    gap: 24px;
  }

  &__title {
    @apply flex items-center;
    gap: 8px;
    font-weight: 600;
    font-size: 18px;
    color: var(--text-color-sub);
  }

  &__description {
    @apply grid;
    gap: 8px;
  }
}
</style>

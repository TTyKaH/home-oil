<template>
  <NModal class="custom-modal" :show="isShow" @mask-click="close">
    <NCard class="custom-modal__card" :bordered="false" size="huge" role="dialog" aria-modal="true">
      <template #cover>
        <div class="custom-modal__content">
          <template v-if="!$slots['custom']">
            <div class="custom-modal__header">
              <slot name="header" />
            </div>
            <div class="custom-modal__body">
              <slot name="body" />
            </div>
            <div class="custom-modal__footer">
              <slot name="footer" />
            </div>
          </template>

          <slot name="custom" />

          <NButton class="custom-modal__close" quaternary circle @click="close">
            <template #icon>
              <NIcon color="var(--text-color-sub)" size="28" :component="CloseFilled" />
            </template>
          </NButton>
        </div>
      </template>
    </NCard>
  </NModal>
</template>

<script setup lang="ts">
import { CloseFilled } from '@vicons/material'

const emit = defineEmits(['close'])

const props = defineProps({
  isShow: {
    type: Boolean,
    default: false,
  },
})

const close = () => emit('close')
</script>

<style scoped lang="scss">
.custom-modal {
  width: calc(100% - 20px);
  border-radius: 15px;

  &__card {
    margin: 10px;
  }

  &__content {
    @apply relative;
  }

  &__header {
    font-weight: 700;
    font-size: 24px;
    padding: 10px 20px;
  }

  :deep(.custom-modal__header) {
    font-weight: 700;
    font-size: 24px;
    padding: 10px 20px;
  }

  &__body {
    font-size: 16px;
    padding: 10px 20px;
  }

  :deep(.custom-modal__body) {
    font-size: 16px;
    padding: 10px 20px;
  }

  &__footer {
    padding: 10px 20px;
  }

  :deep(.custom-modal__footer) {
    padding: 10px 20px;
  }

  &__close {
    @apply absolute;
    top: 10px;
    right: 10px;
    padding: 12;
  }
}
</style>

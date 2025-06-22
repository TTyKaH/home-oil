<template>
  <div class="oil-modal-content">
    <div class="custom-modal__header oil-modal-content__header">
      <n-avatar round :size="34" :src="`/src/assets/img/oils/${oilBuffer?.img}.jpg`" />
      {{ oilBuffer?.name }}
    </div>
    <div class="custom-modal__body">
      <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit tempora, eius laboriosam
        illo, in at pariatur explicabo vero qui similique illum dolorum consequuntur quas,
        architecto dolorem quidem. Iusto, facere voluptas!
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps({
  oil: {
    type: Object,
    required: true,
    default: null,
  },
})

const oilBuffer = ref(null)

watch(
  () => props.oil,
  () => {
    if (props.oil) {
      oilBuffer.value = props.oil
    }
  },
  { deep: true, immediate: true },
)
</script>

<style scoped lang="scss">
.oil-modal-content {
  &__header {
    @apply flex items-center;
    gap: 12px;
  }
}
</style>

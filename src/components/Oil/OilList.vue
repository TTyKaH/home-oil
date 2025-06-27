<template>
  <div class="oil-list">
    <div class="oil-list__title text-2xl font-semibold pb-7">
      Давим масло под <br />
      индивидуальный заказ
    </div>
    <div class="oil-list__cards gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <OilCard v-for="(oil, idx) in list" :key="idx" :oil="oil" />
    </div>
    <ContactsList class="pt-7 pb-3" isCanCenteringOnTabletAndPC />
  </div>
</template>

<script setup lang="ts">
import ContactsList from '@/components/ContactsList.vue'
import OilCard from '@/components/Oil/OilCard.vue'
import type { IOil } from '@/types/index'

defineProps<{
  list: IOil[]
}>()
</script>

<style scoped lang="scss">
.oil-list {
  &__title {
    @apply text-center;
  }

  &__cards {
    @apply grid;
  }
}
</style>

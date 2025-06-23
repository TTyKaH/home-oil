<template>
  <div class="oil-list">
    <div class="oil-list__title text-2xl font-semibold pb-7">
      Давим масло под индивидуальный заказ
    </div>
    <div class="oil-list__cards gap-5">
      <OilCard v-for="(oil, idx) in list" :key="idx" :oil="oil" />
    </div>
    <ContactsList class="pt-7 pb-3" />
  </div>
</template>

<script setup lang="ts">
import ContactsList from '@/components/ContactsIcon.vue'
import OilCard from '@/components/Oil/OilCard.vue'

defineProps({
  list: {
    type: Array,
    required: true,
  },
})
</script>

<style scoped lang="scss">
.oil-list {
  &__title {
    @apply text-center;
  }

  &__cards {
    @apply grid;
  }

  :deep(.contacts) {
    a {
      @apply flex justify-center;
    }
  }
}
</style>

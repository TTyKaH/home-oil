<template>
  <div class="oil-list">
    <OilCard v-for="(oil, idx) in list" :key="idx" :oil="oil" />
  </div>
</template>

<script setup lang="ts">
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
  @apply grid;
  gap: 20px;
}
</style>

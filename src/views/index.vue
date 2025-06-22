<template>
  <div class="index">
    <OilList :list="oilList" />
    <CustomModal :isShow="isShowOilModal" @close="clearActiveOil">
      <template #custom>
        <OilModalContent :oil="activeOil" />
      </template>
    </CustomModal>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import OilList from '@/components/Oil/OilList.vue'
import OilModalContent from '@/components/Oil/OilModalContent.vue'
import CustomModal from '@/components/UI/CustomModal.vue'
import UseOilList from '@/composables/UseOilList.ts'

const { oilList, activeOil, clearActiveOil } = UseOilList()

const isShowOilModal = computed(() => !!activeOil.value)
</script>

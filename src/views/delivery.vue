<template>
  <div class="delivery">
    <div class="delivery__title text-2xl text-center font-semibold pb-7">Доставка</div>

    <div>Доставка в города России осуществляется за счет покупателя.</div>

    <NDivider />

    <div class="delivery__services">
      <div class="delivery__title mb-3 flex items-center gap-2">
        <NIcon size="24" :component="LocalShippingOutlined" color="var(--text-color-main)" />
        Службы доставки:
      </div>

      <div class="delivery__list grid gap-1">
        <div v-for="(delivery, idx) in deliveryServices" :key="idx">- {{ delivery }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { LocalShippingOutlined } from '@vicons/material'

const deliveryServices = ['СДЭК', 'Почта', 'Авито', '5POST', 'Яндекс']
</script>

<style scoped></style>

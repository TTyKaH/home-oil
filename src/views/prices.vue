<template>
  <div class="prices">
    <div class="prices__title text-2xl text-center font-semibold pb-7">Цены</div>

    <div class="overflow-x-auto">
      <NTable striped>
        <thead>
          <tr>
            <th v-for="(head, idx) in heads" :key="idx" :style="{ width: head.width }">
              {{ head.title }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, idx) in oilList" :key="idx">
            <td>{{ idx + 1 }}</td>
            <td>{{ row.name }}</td>
            <td>{{ row.price.volume }}</td>
            <td>{{ row.price.sum }}</td>
          </tr>
        </tbody>
      </NTable>
    </div>
  </div>
</template>

<script setup lang="ts">
import UseOilList from '@/composables/UseOilList.ts'
const heads = [
  {
    title: '№',
    width: '80px',
  },
  {
    title: 'Название',
    width: '1000px',
  },
  {
    title: 'Объем (л)',
    width: '150px',
  },
  {
    title: 'Цена (₽)',
    width: '150px',
  },
]

const { oilList } = UseOilList()
</script>

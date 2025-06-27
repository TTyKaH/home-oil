<template>
  <div class="contacts gap-3" :class="{ 'md:justify-items-center': isCanCenteringOnTabletAndPC }">
    <a
      v-for="(contact, idx) in contacts"
      :key="idx"
      :href="contact.link"
      target="_blank"
      class="contacts__item flex gap-2 items-center"
    >
      <NButton quaternary circle>
        <template #icon>
          <NIcon size="28" :component="contact.icon" color="var(--text-color-main)" />
        </template>
      </NButton>
      {{ contact.title }}
    </a>
  </div>
</template>

<script setup lang="ts">
import { ChatOutlined, GroupsOutlined, PhoneInTalkOutlined } from '@vicons/material'

withDefaults(
  defineProps<{
    isCanCenteringOnTabletAndPC?: boolean
  }>(),
  {
    isCanCenteringOnTabletAndPC: false,
  },
)

const contacts = [
  {
    title: '+7 (918) 245-83-86',
    link: 'tel:+79182458386',
    icon: PhoneInTalkOutlined,
  },
  {
    title: 'Напишите нам в WhatsApp',
    link: 'https://wa.me/+79182458386',
    icon: ChatOutlined,
  },
  {
    title: 'Присоединиться к группе в WhatsApp',
    link: 'https://chat.whatsapp.com/KaZXpVDHrea47cejhfbTwa',
    icon: GroupsOutlined,
  },
]
</script>

<style scoped lang="scss">
.contacts {
  @apply grid;
}
</style>

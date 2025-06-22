<template>
  <div class="contacts">
    <div class="contacts__title text-2xl text-center font-semibold pb-7">Контакты</div>

    <div class="contacts__list gap-3">
      <a
        v-for="(contact, idx) in contacts"
        :key="idx"
        :href="contact.link"
        target="_blank"
        class="contacts__item flex gap-2 items-center"
      >
        <NButton quaternary circle>
          <template #icon>
            <NIcon size="28" :component="contact.icon" />
          </template>
        </NButton>
        {{ contact.title }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChatOutlined, GroupsOutlined, PhoneInTalkOutlined } from '@vicons/material'

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

<style lang="scss" scoped>
.contacts {
  &__list {
    @apply grid;
  }
}
</style>

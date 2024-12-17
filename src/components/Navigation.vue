<script setup lang="ts">
import { ref } from 'vue';

const sections = [
  { id: 'menu', name: 'Menu' },
  { id: 'promotions', name: 'Promotions' },
  { id: 'articles', name: 'Coffee Knowledge' },
  { id: 'about', name: 'About Us' }
];

const activeSection = ref('menu');

function scrollToSection(sectionId: string) {
  activeSection.value = sectionId;
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>

<template>
  <nav>
    <div class="flex space-x-8">
      <button
        v-for="section in sections"
        :key="section.id"
        @click="scrollToSection(section.id)"
        class="px-4 py-2 rounded-lg transition-all duration-300"
        :class="{
          'bg-brown-600 text-white': activeSection === section.id,
          'text-white hover:bg-brown-600/50': activeSection !== section.id
        }"
      >
        {{ section.name }}
      </button>
    </div>
  </nav>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';

const sections = [
  { id: 'menu', name: 'Menu' },
  { id: 'promotions', name: 'Promotions' },
  { id: 'articles', name: 'Coffee Knowledge' },
  { id: 'about', name: 'About Us' }
];

const activeSection = ref('menu');
const isMobileMenuOpen = ref(false);

function scrollToSection(sectionId: string) {
  activeSection.value = sectionId;
  isMobileMenuOpen.value = false;
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
}
</script>

<template>
  <nav class="relative">
    <!-- Desktop Navigation -->
    <div class="hidden md:flex space-x-8">
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

    <!-- Mobile Navigation -->
    <div class="md:hidden relative">
      <button 
        @click="toggleMobileMenu"
        class="text-white p-2 rounded-lg hover:bg-brown-600/50"
      >
        <Bars3Icon v-if="!isMobileMenuOpen" class="h-6 w-6" />
        <XMarkIcon v-else class="h-6 w-6" />
      </button>

      <!-- Mobile Menu -->
      <div 
        v-show="isMobileMenuOpen"
        class="absolute top-full right-0 mt-2 w-48 bg-brown-800 rounded-lg shadow-lg py-2 z-50"
      >
        <button
          v-for="section in sections"
          :key="section.id"
          @click="scrollToSection(section.id)"
          class="block w-full text-left px-4 py-3 transition-all duration-300"
          :class="{
            'bg-brown-600 text-white': activeSection === section.id,
            'text-white hover:bg-brown-600/50': activeSection !== section.id
          }"
        >
          {{ section.name }}
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
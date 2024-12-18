<script setup lang="ts">
import { useCartStore } from '../stores/cart';
import type { Coffee } from '../types';

defineProps<{
  coffee: Coffee;
}>();

const cartStore = useCartStore();

const handleImageError = (event: Event) => {
  const imgElement = event.target as HTMLImageElement;
  imgElement.src = new URL('/images/default-coffee.jpg', import.meta.url).href;
};

const getImageUrl = (path: string) => {
  return new URL(path, import.meta.url).href;
};
</script>

<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden">
    <img 
      :src="getImageUrl(coffee.image)"
      :alt="coffee.name" 
      class="w-full h-40 sm:h-48 object-cover"
      @error="handleImageError"
    >
    <div class="p-3 sm:p-4">
      <h3 class="text-lg sm:text-xl font-semibold">{{ coffee.name }}</h3>
      <p class="text-gray-600 mt-1 text-sm sm:text-base">{{ coffee.description }}</p>
      <div class="mt-3 sm:mt-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
        <span class="text-base sm:text-lg font-bold text-brown-800">Rp {{ coffee.price.toLocaleString('id-ID') }}</span>
        <button
          @click="cartStore.addToCart(coffee)"
          class="w-full sm:w-auto bg-brown-600 text-white px-4 py-2 rounded-lg hover:bg-brown-700 text-sm sm:text-base"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>
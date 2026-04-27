<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { carouselImages } from '@/data/config'

const currentIndex = ref(0)
let autoPlayTimer: ReturnType<typeof setInterval> | null = null

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % carouselImages.length
}

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + carouselImages.length) % carouselImages.length
}

const goTo = (index: number) => {
  currentIndex.value = index
}

const startAutoPlay = () => {
  autoPlayTimer = setInterval(nextSlide, 3500)
}

const stopAutoPlay = () => {
  if (autoPlayTimer) {
    clearInterval(autoPlayTimer)
    autoPlayTimer = null
  }
}

// Reinicia el temporizador al navegar manualmente
const manualNav = (fn: () => void) => {
  stopAutoPlay()
  fn()
  startAutoPlay()
}

onMounted(() => startAutoPlay())
onUnmounted(() => stopAutoPlay())
</script>

<template>
  <section class="relative bg-restaurant-dark py-16">
    <!-- Título de sección -->
    <div class="text-center mb-10">
      <span class="text-primary font-semibold text-sm tracking-widest uppercase">Nuestro espacio</span>
      <h2 class="font-display text-4xl md:text-5xl font-bold text-cream mt-2">
        Galería
      </h2>
      <div class="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
    </div>

    <!-- Slider -->
    <div
      class="relative max-w-5xl mx-auto px-4 sm:px-6 overflow-hidden rounded-2xl group"
      @mouseenter="stopAutoPlay"
      @mouseleave="startAutoPlay"
    >
      <!-- Track deslizante -->
      <div
        class="flex transition-transform duration-500 ease-in-out"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div
          v-for="image in carouselImages"
          :key="image.url"
          class="min-w-full"
        >
          <img
            :src="image.url"
            :alt="image.alt"
            class="w-full h-64 sm:h-80 md:h-[460px] object-cover"
            loading="lazy"
          />
        </div>
      </div>

      <!-- Overlay con caption -->
      <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
        <p class="text-white/90 text-sm font-medium">
          {{ carouselImages[currentIndex]?.alt }}
        </p>
      </div>

      <!-- Botón anterior -->
      <button
        class="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
        aria-label="Imagen anterior"
        @click="manualNav(prevSlide)"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <!-- Botón siguiente -->
      <button
        class="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
        aria-label="Imagen siguiente"
        @click="manualNav(nextSlide)"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>

    <!-- Indicadores de puntos -->
    <div class="flex justify-center gap-2 mt-6">
      <button
        v-for="(_, index) in carouselImages"
        :key="index"
        class="w-2.5 h-2.5 rounded-full transition-all duration-300"
        :class="index === currentIndex ? 'bg-primary scale-125' : 'bg-cream/40 hover:bg-cream/70'"
        :aria-label="`Ir a imagen ${index + 1}`"
        @click="manualNav(() => goTo(index))"
      />
    </div>
  </section>
</template>

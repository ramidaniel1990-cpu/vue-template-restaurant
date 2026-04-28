<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { carouselImages } from '@/data/config'

// — Carrusel —
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
const manualNav = (fn: () => void) => {
  stopAutoPlay()
  fn()
  startAutoPlay()
}

// — Lightbox —
const lightboxOpen = ref(false)
const lightboxIndex = ref(0)

const openLightbox = (index: number) => {
  lightboxIndex.value = index
  lightboxOpen.value = true
  stopAutoPlay()
  document.body.style.overflow = 'hidden'
}
const closeLightbox = () => {
  lightboxOpen.value = false
  document.body.style.overflow = ''
  startAutoPlay()
}
const lightboxNext = () => {
  lightboxIndex.value = (lightboxIndex.value + 1) % carouselImages.length
}
const lightboxPrev = () => {
  lightboxIndex.value = (lightboxIndex.value - 1 + carouselImages.length) % carouselImages.length
}

const onKeydown = (e: KeyboardEvent) => {
  if (!lightboxOpen.value) return
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowRight') lightboxNext()
  if (e.key === 'ArrowLeft') lightboxPrev()
}

onMounted(() => {
  startAutoPlay()
  window.addEventListener('keydown', onKeydown)
})
onUnmounted(() => {
  stopAutoPlay()
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <section class="relative bg-restaurant-dark py-16">
    <!-- Título -->
    <div class="text-center mb-10">
      <span class="text-primary font-semibold text-sm tracking-widest uppercase">Nuestro espacio</span>
      <h2 class="font-display text-4xl md:text-5xl font-bold text-cream mt-2">Galería</h2>
      <div class="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
    </div>

    <!-- Slider -->
    <div
      class="relative max-w-5xl mx-auto px-4 sm:px-6 overflow-hidden rounded-2xl group"
      @mouseenter="stopAutoPlay"
      @mouseleave="startAutoPlay"
    >
      <div
        class="flex transition-transform duration-500 ease-in-out"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div
          v-for="(image, index) in carouselImages"
          :key="image.url"
          class="min-w-full cursor-zoom-in"
          @click="openLightbox(index)"
        >
          <img
            :src="image.url"
            :alt="image.alt"
            class="w-full h-64 sm:h-80 md:h-[460px] object-cover"
            loading="lazy"
          />
        </div>
      </div>

      <!-- Caption -->
      <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 pointer-events-none">
        <p class="text-white/90 text-sm font-medium">
          {{ carouselImages[currentIndex]?.alt }}
        </p>
        <p class="text-white/50 text-xs mt-0.5">Clic para ampliar</p>
      </div>

      <!-- Prev -->
      <button
        class="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
        aria-label="Imagen anterior"
        @click.stop="manualNav(prevSlide)"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <!-- Next -->
      <button
        class="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
        aria-label="Imagen siguiente"
        @click.stop="manualNav(nextSlide)"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>

    <!-- Dots -->
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

  <!-- Lightbox — montado en <body> para evitar conflictos de z-index -->
  <Teleport to="body">
    <Transition name="lightbox-fade">
      <div
        v-if="lightboxOpen"
        class="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm"
        @click.self="closeLightbox"
      >
        <!-- Imagen activa -->
        <Transition name="lightbox-img" mode="out-in">
          <img
            :key="lightboxIndex"
            :src="carouselImages[lightboxIndex]?.url"
            :alt="carouselImages[lightboxIndex]?.alt"
            class="max-w-[90vw] max-h-[85vh] object-contain rounded-xl shadow-2xl select-none"
          />
        </Transition>

        <!-- Botón cerrar -->
        <button
          class="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors duration-200"
          aria-label="Cerrar"
          @click="closeLightbox"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Prev lightbox -->
        <button
          class="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors duration-200"
          aria-label="Imagen anterior"
          @click="lightboxPrev"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <!-- Next lightbox -->
        <button
          class="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors duration-200"
          aria-label="Imagen siguiente"
          @click="lightboxNext"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <!-- Contador y caption -->
        <div class="absolute bottom-6 left-1/2 -translate-x-1/2 text-center pointer-events-none">
          <p class="text-white/80 text-sm font-medium">{{ carouselImages[lightboxIndex]?.alt }}</p>
          <p class="text-white/40 text-xs mt-1">{{ lightboxIndex + 1 }} / {{ carouselImages.length }}</p>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.lightbox-fade-enter-active,
.lightbox-fade-leave-active {
  transition: opacity 0.3s ease;
}
.lightbox-fade-enter-from,
.lightbox-fade-leave-to {
  opacity: 0;
}

.lightbox-img-enter-active,
.lightbox-img-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.lightbox-img-enter-from {
  opacity: 0;
  transform: scale(0.96);
}
.lightbox-img-leave-to {
  opacity: 0;
  transform: scale(1.02);
}
</style>

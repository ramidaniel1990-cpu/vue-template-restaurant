<script setup lang="ts">
import { restaurant } from '@/data/config'
</script>

<template>
  <section
    id="inicio"
    class="relative min-h-screen flex items-center justify-center bg-center bg-cover py-24 md:py-0"
    :style="{ backgroundImage: `url(${restaurant.heroImage})` }"
  >
    <!-- Overlay oscuro degradado -->
    <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

    <!-- Contenido centrado -->
    <div class="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
      <!-- Tagline pequeño -->
      <p class="text-cream/80 text-sm md:text-base font-medium tracking-[0.3em] uppercase mb-4 animate-fade-in">
        {{ restaurant.tagline }}
      </p>

      <!-- Título principal en Playfair Display -->
      <h1
        class="font-display text-4xl sm:text-7xl md:text-8xl font-bold leading-tight mb-4 md:mb-6 drop-shadow-2xl"
      >
        {{ restaurant.heroTitle }}
      </h1>

      <!-- Subtítulo -->
      <p class="text-base md:text-xl text-white/85 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
        {{ restaurant.heroSubtitle }}
      </p>

      <!-- Botones CTA -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a
          :href="restaurant.menuHref"
          class="bg-primary hover:bg-orange-700 active:scale-95 text-white font-semibold text-base px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-orange-700/40 hover:-translate-y-0.5 w-full sm:w-auto text-center"
        >
          Ver Nuestro Menú
        </a>
        <a
          :href="restaurant.reservationHref"
          class="bg-white/10 hover:bg-white/20 active:scale-95 backdrop-blur-sm border border-white/40 text-white font-semibold text-base px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto text-center"
        >
          Reservar Mesa
        </a>
      </div>
    </div>

    <!-- Flecha scroll indicador -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <svg class="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </section>
</template>

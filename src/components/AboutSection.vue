<script setup lang="ts">
import { restaurant } from '@/data/config'
import { useScrollReveal } from '@/composables/useScrollReveal'

const { sectionRef, isVisible } = useScrollReveal()
</script>

<template>
  <section id="nosotros" ref="sectionRef" class="py-20 bg-cream">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

      <!-- Texto (izquierda) -->
      <div
        class="scroll-reveal"
        :class="{ 'is-visible': isVisible }"
      >
        <span class="text-primary font-semibold text-sm tracking-widest uppercase">Conoce nuestra esencia</span>
        <h2 class="font-display text-4xl md:text-5xl font-bold text-restaurant-dark mt-2 mb-6 leading-tight">
          {{ restaurant.aboutTitle }}
        </h2>
        <div class="w-16 h-1 bg-primary mb-8 rounded-full" />
        <p class="text-restaurant-dark/75 text-base md:text-lg leading-relaxed">
          {{ restaurant.aboutText }}
        </p>

        <!-- Estadísticas destacadas -->
        <div class="grid grid-cols-3 gap-6 mt-10">
          <div class="text-center">
            <p class="font-display text-4xl font-bold text-primary">40+</p>
            <p class="text-restaurant-dark/60 text-sm mt-1">Años de historia</p>
          </div>
          <div class="text-center border-x border-restaurant-dark/10">
            <p class="font-display text-4xl font-bold text-primary">15</p>
            <p class="text-restaurant-dark/60 text-sm mt-1">Platos únicos</p>
          </div>
          <div class="text-center">
            <p class="font-display text-4xl font-bold text-primary">★ 4.9</p>
            <p class="text-restaurant-dark/60 text-sm mt-1">Calificación</p>
          </div>
        </div>
      </div>

      <!-- Imagen (derecha) -->
      <div
        class="scroll-reveal"
        :class="{ 'is-visible': isVisible }"
        style="transition-delay: 200ms"
      >
        <!--
          pt-4 pr-4: espacio interno para que el marco decorativo
          quede visible sin desbordar el grid hacia la derecha.
        -->
        <!-- flex + justify-center garantiza centrado horizontal en mobile -->
        <div class="flex justify-center w-full">
          <div class="relative z-10 overflow-hidden foto-card w-full max-w-sm md:max-w-none block mx-auto">
            <img
              :src="restaurant.aboutImage"
              alt="El equipo de La Mesa Grande"
              class="block mx-auto w-full h-80 md:h-[420px] object-cover"
            />
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.foto-card {
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.foto-card:hover {
  box-shadow: 0 28px 80px rgba(0, 0, 0, 0.25);
  transform: scale(1.02);
}
</style>

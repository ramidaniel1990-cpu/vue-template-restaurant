<script setup lang="ts">
import { contactInfo, restaurant } from '@/data/config'
import { useScrollReveal } from '@/composables/useScrollReveal'

const { sectionRef, isVisible } = useScrollReveal()
</script>

<template>
  <section id="contacto" ref="sectionRef" class="py-20 bg-white">
    <!-- Encabezado -->
    <div
      class="text-center mb-14 scroll-reveal"
      :class="{ 'is-visible': isVisible }"
    >
      <span class="text-primary font-semibold text-sm tracking-widest uppercase">Estamos para servirte</span>
      <h2 class="font-display text-4xl md:text-5xl font-bold text-restaurant-dark mt-2">
        Contáctanos
      </h2>
      <div class="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
    </div>

    <!-- Cards de contacto -->
    <div class="max-w-4xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
      <a
        v-for="(info, index) in contactInfo"
        :key="info.title"
        :href="info.href"
        target="_blank"
        rel="noopener noreferrer"
        class="scroll-reveal flex flex-col items-center text-center p-8 rounded-2xl border-2 border-cream hover:border-primary bg-cream/40 hover:bg-cream transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg"
        :class="{ 'is-visible': isVisible }"
        :style="{ transitionDelay: `${index * 120}ms` }"
      >
        <!-- Ícono emoji grande -->
        <span class="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 block">
          {{ info.icon }}
        </span>

        <!-- Título del dato -->
        <h3 class="font-display text-lg font-bold text-restaurant-dark mb-2">
          {{ info.title }}
        </h3>

        <!-- Valor del dato -->
        <p class="text-primary font-semibold text-sm">
          {{ info.value }}
        </p>
      </a>
    </div>

    <!-- Google Maps embed -->
    <div class="max-w-4xl mx-auto px-4 sm:px-6 mt-12">
      <div class="overflow-hidden rounded-2xl shadow-lg">
        <iframe
          :src="restaurant.mapEmbedUrl"
          class="w-full h-[300px] md:h-[400px] border-0"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Ubicación de La Mesa Grande en Google Maps"
        />
      </div>
    </div>
  </section>
</template>

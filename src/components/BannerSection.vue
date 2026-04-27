<script setup lang="ts">
import { restaurant } from '@/data/config'
import { useScrollReveal } from '@/composables/useScrollReveal'

const { sectionRef, isVisible } = useScrollReveal()
</script>

<template>
  <section
    ref="sectionRef"
    class="bg-primary py-8 overflow-hidden scroll-reveal"
    :class="{ 'is-visible': isVisible }"
  >
    <div class="max-w-7xl mx-auto px-4 text-center">
      <p class="font-display text-cream text-xl md:text-3xl font-semibold tracking-wide">
        {{ restaurant.bannerText }}
      </p>
    </div>
  </section>
</template>

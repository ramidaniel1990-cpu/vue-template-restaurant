<script setup lang="ts">
import { ref, computed } from 'vue'
import { menuCategories, formatPrice } from '@/data/config'
import { useScrollReveal } from '@/composables/useScrollReveal'

const { sectionRef, isVisible } = useScrollReveal()

const activeId = ref(menuCategories[0]!.id)

const activeCategory = computed(
  () => menuCategories.find((cat) => cat.id === activeId.value)!,
)

const selectTab = (id: string) => {
  activeId.value = id
}
</script>

<template>
  <section id="menu" ref="sectionRef" class="py-20 bg-white">

    <!-- Encabezado -->
    <div
      class="text-center mb-10 scroll-reveal"
      :class="{ 'is-visible': isVisible }"
    >
      <span class="text-primary font-semibold text-sm tracking-widest uppercase">
        Lo mejor de nuestra cocina
      </span>
      <h2 class="font-display text-4xl md:text-5xl font-bold text-restaurant-dark mt-2">
        Nuestro Menú
      </h2>
      <div class="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
    </div>

    <!-- Tabs con scroll horizontal en mobile -->
    <div
      class="scroll-reveal mb-10"
      :class="{ 'is-visible': isVisible }"
      style="transition-delay: 100ms"
    >
      <div class="overflow-x-auto scrollbar-hide px-4 sm:px-6">
        <div class="flex gap-2 min-w-max sm:min-w-0 sm:justify-center mx-auto max-w-6xl">
          <button
            v-for="cat in menuCategories"
            :key="cat.id"
            class="px-5 py-2.5 rounded-full text-sm font-semibold border-2 border-primary whitespace-nowrap transition-all duration-250 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            :class="
              activeId === cat.id
                ? 'bg-primary text-white shadow-md shadow-primary/30'
                : 'bg-transparent text-restaurant-dark hover:bg-primary/10'
            "
            @click="selectTab(cat.id)"
          >
            {{ cat.label }}
          </button>
        </div>
      </div>
    </div>

    <!-- Grid de cards con transición entre tabs -->
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <Transition name="tab-fade" mode="out-in">
        <div
          :key="activeId"
          class="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div
            v-for="(item, index) in activeCategory.items"
            :key="item.name"
            class="group bg-cream rounded-2xl p-7 flex flex-col items-center text-center border border-amber-100 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
            :style="{ animationDelay: `${index * 60}ms` }"
          >
            <!-- Emoji -->
            <span class="text-5xl mb-4 block group-hover:scale-110 transition-transform duration-300">
              {{ item.emoji }}
            </span>

            <!-- Nombre -->
            <h3 class="font-display text-lg font-bold text-restaurant-dark mb-2">
              {{ item.name }}
            </h3>

            <!-- Descripción -->
            <p class="text-restaurant-dark/65 text-sm leading-relaxed mb-5 flex-1">
              {{ item.description }}
            </p>

            <!-- Precio -->
            <span class="inline-block bg-primary text-white font-bold text-sm px-5 py-2 rounded-full mt-auto">
              {{ formatPrice(item.price) }}
            </span>
          </div>
        </div>
      </Transition>
    </div>

  </section>
</template>

<style scoped>
/* Transición suave entre categorías */
.tab-fade-enter-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.tab-fade-leave-active {
  transition: opacity 0.15s ease;
}
.tab-fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.tab-fade-leave-to {
  opacity: 0;
}

/* Animación de entrada para cada card al cambiar de tab */
.tab-fade-enter-active .group {
  animation: card-in 0.35s ease both;
}
@keyframes card-in {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Oculta scrollbar manteniendo funcionalidad táctil en mobile */
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { navLinks, restaurant } from '@/data/config'

// Estado de scroll para cambiar el fondo del nav
const isScrolled = ref(false)
// Estado del menú móvil
const isMobileOpen = ref(false)

const onScroll = () => {
  isScrolled.value = window.scrollY > 60
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))

const closeMenu = () => {
  isMobileOpen.value = false
}
</script>

<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="isScrolled ? 'bg-restaurant-dark shadow-2xl py-3' : 'bg-transparent py-5'"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
      <!-- Logo -->
      <a
        href="#inicio"
        class="font-display text-2xl font-bold text-cream tracking-wide hover:text-primary transition-colors"
      >
        {{ restaurant.name }}
      </a>

      <!-- Links de escritorio -->
      <ul class="hidden md:flex items-center gap-8">
        <li v-for="link in navLinks" :key="link.href">
          <a
            :href="link.href"
            class="text-cream/90 hover:text-cream font-medium text-sm tracking-wide uppercase transition-colors duration-200 relative group"
          >
            {{ link.label }}
            <span
              class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
            />
          </a>
        </li>
      </ul>

      <!-- Botón WhatsApp (escritorio) -->
      <a
        :href="restaurant.whatsappHref"
        target="_blank"
        rel="noopener noreferrer"
        class="hidden md:flex items-center gap-2 bg-green-500 hover:bg-green-600 active:scale-95 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-lg hover:shadow-green-500/30"
      >
        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
          />
        </svg>
        WhatsApp
      </a>

      <!-- Botón hamburguesa (móvil) -->
      <button
        class="md:hidden text-cream p-2 rounded-md hover:bg-white/10 transition-colors"
        :aria-label="isMobileOpen ? 'Cerrar menú' : 'Abrir menú'"
        @click="isMobileOpen = !isMobileOpen"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            v-if="!isMobileOpen"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
          <path
            v-else
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <!-- Menú móvil desplegable -->
    <Transition name="menu-slide">
      <div v-if="isMobileOpen" class="md:hidden bg-restaurant-dark/95 backdrop-blur-sm border-t border-white/10">
        <ul class="flex flex-col px-6 py-4 gap-4">
          <li v-for="link in navLinks" :key="link.href">
            <a
              :href="link.href"
              class="block text-cream/90 hover:text-cream font-medium py-2 border-b border-white/10 transition-colors"
              @click="closeMenu"
            >
              {{ link.label }}
            </a>
          </li>
          <li>
            <a
              :href="restaurant.whatsappHref"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 bg-green-500 text-white font-semibold px-4 py-2.5 rounded-full w-fit mt-2"
              @click="closeMenu"
            >
              WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </Transition>
  </nav>
</template>

<style scoped>
.menu-slide-enter-active,
.menu-slide-leave-active {
  transition: all 0.3s ease;
}
.menu-slide-enter-from,
.menu-slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>

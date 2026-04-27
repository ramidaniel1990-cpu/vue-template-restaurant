<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import HeroSection from '@/components/HeroSection.vue'
import BannerSection from '@/components/BannerSection.vue'
import MenuSection from '@/components/MenuSection.vue'
import CarouselSection from '@/components/CarouselSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import SocialButtons from '@/components/SocialButtons.vue'
import FooterSection from '@/components/FooterSection.vue'
</script>

<template>
  <NavBar />

  <main>
    <HeroSection />
    <BannerSection />
    <MenuSection />
    <CarouselSection />
    <AboutSection />
    <ContactSection />
  </main>

  <FooterSection />

  <!-- Botones flotantes de redes sociales -->
  <SocialButtons />
</template>

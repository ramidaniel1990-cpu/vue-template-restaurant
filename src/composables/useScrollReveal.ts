// Composable que detecta cuando un elemento entra al viewport y activa la animación
import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollReveal(threshold = 0.15) {
  const sectionRef = ref<HTMLElement | null>(null)
  const isVisible = ref(false)
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && entry.isIntersecting) {
          isVisible.value = true
          observer?.disconnect()
        }
      },
      { threshold },
    )
    if (sectionRef.value) observer.observe(sectionRef.value)
  })

  onUnmounted(() => observer?.disconnect())

  return { sectionRef, isVisible }
}

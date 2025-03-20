<template>
  <div class="min-h-screen py-20">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-4xl md:text-5xl font-serif text-center text-gold-500 mb-16">
        Реферат
      </h1>

      <div class="bg-gray-800/50 p-8 rounded-lg shadow-lg">
        <div class="prose prose-invert max-w-none">
          <!-- Тут буде ваш реферат -->
          <p class="text-gray-300 text-center">
            Тут буде розміщено ваш реферат про масові репресії в Україні.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  // Анімація появи контенту
  gsap.from('.prose', {
    scrollTrigger: {
      trigger: '.prose',
      start: 'top bottom-=100',
      toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 30,
    duration: 1,
    ease: 'power2.out'
  })
})
</script>

<style scoped>
.prose {
  opacity: 0;
  animation: fadeIn 0.8s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style> 
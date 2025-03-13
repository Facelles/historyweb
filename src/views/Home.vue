<template>
  <div class="relative">
    <!-- Hero Section -->
    <div class="relative h-screen flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img 
          src="../assets/renaissance-bg.jpg" 
          alt="Renaissance Background" 
          class="w-full h-full object-cover opacity-30"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"></div>
      </div>
      
      <div class="relative z-10 text-center px-4">
        <h1 class="text-5xl md:text-7xl font-serif mb-6 text-gold-500 animate-fade-in">
          The Renaissance
        </h1>
        <p class="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 animate-fade-in-up">
          A period of cultural rebirth that transformed Europe and shaped the modern world
        </p>
        <router-link 
          to="/timeline" 
          class="inline-block px-8 py-4 bg-gold-500 text-black font-medium rounded-lg hover:bg-gold-400 transition-colors animate-fade-in-up"
        >
          Explore the Timeline
        </router-link>
      </div>
    </div>

    <!-- Featured Sections -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div 
          v-for="section in featuredSections" 
          :key="section.title"
          class="group relative overflow-hidden rounded-lg bg-gray-800/50 p-6 hover:bg-gray-800/70 transition-all duration-300"
        >
          <div class="absolute inset-0 bg-gradient-to-br from-gold-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <h3 class="text-xl font-serif text-gold-500 mb-4">{{ section.title }}</h3>
          <p class="text-gray-300 mb-4">{{ section.description }}</p>
          <router-link 
            :to="section.link" 
            class="inline-flex items-center text-gold-500 hover:text-gold-400 transition-colors"
          >
            Learn more
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'

const featuredSections = [
  {
    title: 'Timeline',
    description: 'Journey through the key events and milestones of the Renaissance period.',
    link: '/timeline'
  },
  {
    title: 'Artists',
    description: 'Discover the master artists who defined the Renaissance era.',
    link: '/artists'
  },
  {
    title: 'Gallery',
    description: 'Explore a curated collection of Renaissance masterpieces.',
    link: '/gallery'
  }
]

onMounted(() => {
  // Animate elements on scroll
  gsap.from('.animate-fade-in', {
    opacity: 0,
    duration: 1,
    ease: 'power2.out'
  })

  gsap.from('.animate-fade-in-up', {
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 0.5,
    ease: 'power2.out'
  })
})
</script>

<style scoped>
.animate-fade-in {
  opacity: 0;
  animation: fadeIn 1s ease-out forwards;
}

.animate-fade-in-up {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 1s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeInUp {
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
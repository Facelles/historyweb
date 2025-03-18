<template>
  <div class="relative">
    <!-- Hero Section -->
    <div class="relative min-h-[100svh] flex items-center justify-center overflow-hidden py-20 px-4">
      <div class="absolute inset-0 z-0">
        <div class="w-full h-full bg-gradient-to-b from-gray-900 to-gray-800 animate-gradient"></div>
        <div class="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 animate-fade-in"></div>
      </div>
      
      <div class="relative z-10 text-center">
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif mb-4 sm:mb-6 text-gold-500 animate-slide-down px-2">
          Назва історичного періоду
        </h1>
        <p class="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 animate-slide-up delay-300 px-4">
          Короткий опис періоду та його значення в історії
        </p>
        <router-link 
          to="/timeline" 
          class="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gold-500 text-black font-medium rounded-lg hover:bg-gold-400 hover:scale-105 transition-all duration-300 animate-bounce-in delay-500 text-base sm:text-lg"
        >
          Дослідити період
        </router-link>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <!-- Introduction Section -->
      <div class="mb-12 sm:mb-16 lg:mb-20 animate-fade-in-up">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-serif text-gold-500 mb-6 sm:mb-8 text-center hover:text-gold-400 transition-colors duration-300">
          Огляд періоду
        </h2>
        <div class="prose prose-sm sm:prose-base lg:prose-lg prose-invert mx-auto px-4">
          <p class="text-gray-300 mb-6 hover:text-gray-200 transition-colors duration-300">
            Детальний опис історичного періоду буде тут...
          </p>
        </div>
      </div>

      <!-- Key Points -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
        <div 
          v-for="(point, index) in keyPoints" 
          :key="point.title"
          :class="['group relative overflow-hidden rounded-lg bg-gray-800/50 p-6 sm:p-8 hover:bg-gray-800/70 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl animate-slide-up', 'delay-' + (index * 200)]"
        >
          <div class="absolute inset-0 bg-gradient-to-br from-gold-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div class="relative z-10">
            <h3 class="text-lg sm:text-xl font-serif text-gold-500 mb-3 sm:mb-4 group-hover:text-gold-400 transition-colors duration-300">{{ point.title }}</h3>
            <p class="text-gray-300 text-sm sm:text-base mb-4 group-hover:text-gray-200 transition-colors duration-300">{{ point.description }}</p>
            <router-link 
              :to="point.link" 
              class="inline-flex items-center justify-center w-full px-4 py-2 text-sm sm:text-base font-medium text-black bg-gold-500 rounded-lg hover:bg-gold-400 hover:scale-105 transition-all duration-300 group cursor-pointer"
            >
              <span class="transform group-hover:translate-x-[-4px] transition-transform duration-300">Дізнатися більше</span>
              <svg class="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </router-link>
          </div>
        </div>
      </div>

      <!-- Quick Facts -->
      <div class="bg-gray-800/30 rounded-lg p-4 sm:p-6 lg:p-8 transform hover:scale-[1.02] transition-transform duration-500 animate-fade-in-up delay-700">
        <h2 class="text-xl sm:text-2xl font-serif text-gold-500 mb-4 sm:mb-6 text-center hover:text-gold-400 transition-colors duration-300">Цікаві факти</h2>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div 
            v-for="(fact, index) in quickFacts" 
            :key="fact.title"
            :class="['text-center p-2 sm:p-3 transform hover:scale-110 transition-transform duration-300', 'animate-bounce-in', 'delay-' + ((index + 8) * 100)]"
          >
            <div class="text-xl sm:text-2xl lg:text-3xl text-gold-500 font-bold mb-1 sm:mb-2 hover:text-gold-400 transition-colors duration-300">{{ fact.value }}</div>
            <div class="text-gray-300 text-sm sm:text-base hover:text-gray-200 transition-colors duration-300">{{ fact.title }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import gsap from 'gsap'

const router = useRouter()

const keyPoints = ref([
  {
    title: 'Хронологія',
    description: 'Ключові події та дати періоду.',
    link: '/timeline'
  },
  {
    title: 'Ключові постаті',
    description: 'Видатні особистості та їх вплив на історію.',
    link: '/figures'
  },
  {
    title: 'Галерея',
    description: 'Фотографії та артефакти періоду.',
    link: '/gallery'
  }
])

const quickFacts = ref([
  {
    title: 'Тривалість періоду',
    value: '00 років'
  },
  {
    title: 'Ключових подій',
    value: '00+'
  },
  {
    title: 'Видатних постатей',
    value: '00+'
  },
  {
    title: 'Артефактів',
    value: '00+'
  }
])

const navigateTo = (path) => {
  router.push(path)
}

onMounted(() => {
  gsap.from('.animate-slide-down', {
    y: -100,
    opacity: 0,
    duration: 1.2,
    ease: 'power4.out'
  })

  gsap.from('.animate-slide-up', {
    y: 100,
    opacity: 0,
    duration: 1.2,
    ease: 'power4.out',
    stagger: 0.2
  })

  gsap.from('.animate-bounce-in', {
    scale: 0,
    opacity: 0,
    duration: 0.8,
    ease: 'elastic.out(1, 0.5)',
    stagger: 0.1
  })
})
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 1.5s ease-out forwards;
}

.animate-slide-down {
  opacity: 0;
  animation: slideDown 1.2s ease-out forwards;
}

.animate-slide-up {
  opacity: 0;
  animation: slideUp 1.2s ease-out forwards;
}

.animate-bounce-in {
  opacity: 0;
  animation: bounceIn 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
}

.animate-gradient {
  animation: gradientShift 8s ease-in-out infinite;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-100px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounceIn {
  from {
    opacity: 0;
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.delay-100 { animation-delay: 100ms; }
.delay-200 { animation-delay: 200ms; }
.delay-300 { animation-delay: 300ms; }
.delay-400 { animation-delay: 400ms; }
.delay-500 { animation-delay: 500ms; }
.delay-600 { animation-delay: 600ms; }
.delay-700 { animation-delay: 700ms; }
.delay-800 { animation-delay: 800ms; }
.delay-900 { animation-delay: 900ms; }
.delay-1000 { animation-delay: 1000ms; }

.prose {
  max-width: 65ch;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 640px) {
  .prose {
    font-size: 0.875rem;
  }
}
</style> 
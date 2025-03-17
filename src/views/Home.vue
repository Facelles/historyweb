<template>
  <div class="relative">
    <!-- Hero Section -->
    <div class="relative min-h-[100svh] flex items-center justify-center overflow-hidden py-20 px-4">
      <div class="absolute inset-0 z-0">
        <img 
          src="../assets/hero-bg.jpg" 
          alt="Історичне фото періоду" 
          class="w-full h-full object-cover opacity-30"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"></div>
      </div>
      
      <div class="relative z-10 text-center">
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif mb-4 sm:mb-6 text-gold-500 animate-fade-in px-2">
          Назва історичного періоду
        </h1>
        <p class="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 animate-fade-in-up px-4">
          Короткий опис періоду та його значення в історії
        </p>
        <router-link 
          to="/timeline" 
          class="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gold-500 text-black font-medium rounded-lg hover:bg-gold-400 transition-colors animate-fade-in-up text-base sm:text-lg"
        >
          Дослідити період
        </router-link>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <!-- Introduction Section -->
      <div class="mb-12 sm:mb-16 lg:mb-20">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-serif text-gold-500 mb-6 sm:mb-8 text-center">
          Огляд періоду
        </h2>
        <div class="prose prose-sm sm:prose-base lg:prose-lg prose-invert mx-auto px-4">
          <p class="text-gray-300 mb-6">
            Детальний опис історичного періоду буде тут...
          </p>
        </div>
      </div>

      <!-- Key Points -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
        <div 
          v-for="point in keyPoints" 
          :key="point.title"
          class="group relative overflow-hidden rounded-lg bg-gray-800/50 p-4 sm:p-6 hover:bg-gray-800/70 transition-all duration-300"
        >
          <div class="absolute inset-0 bg-gradient-to-br from-gold-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <h3 class="text-lg sm:text-xl font-serif text-gold-500 mb-3 sm:mb-4">{{ point.title }}</h3>
          <p class="text-gray-300 text-sm sm:text-base mb-4">{{ point.description }}</p>
          <router-link 
            :to="point.link" 
            class="inline-flex items-center text-gold-500 hover:text-gold-400 transition-colors text-sm sm:text-base"
          >
            Дізнатися більше
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </router-link>
        </div>
      </div>

      <!-- Quick Facts -->
      <div class="bg-gray-800/30 rounded-lg p-4 sm:p-6 lg:p-8">
        <h2 class="text-xl sm:text-2xl font-serif text-gold-500 mb-4 sm:mb-6 text-center">Цікаві факти</h2>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div 
            v-for="fact in quickFacts" 
            :key="fact.title"
            class="text-center p-2 sm:p-3"
          >
            <div class="text-xl sm:text-2xl lg:text-3xl text-gold-500 font-bold mb-1 sm:mb-2">{{ fact.value }}</div>
            <div class="text-gray-300 text-sm sm:text-base">{{ fact.title }}</div>
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
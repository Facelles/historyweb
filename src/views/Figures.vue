<template>
  <div class="min-h-screen py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-4xl md:text-5xl font-serif text-center text-gold-500 mb-16">
        Ключові постаті періоду
      </h1>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="figure in historicalFigures" 
          :key="figure.name"
          class="group relative overflow-hidden rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-all duration-300"
          ref="figureCards"
        >
          <!-- Figure Image -->
          <div class="relative h-64 overflow-hidden">
            <img 
              :src="figure.image" 
              :alt="figure.name"
              class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          </div>

          <!-- Figure Info -->
          <div class="p-6">
            <h3 class="text-2xl font-serif text-gold-500 mb-2">{{ figure.name }}</h3>
            <p class="text-gray-400 mb-4">{{ figure.years }}</p>
            <p class="text-gray-300 mb-4">{{ figure.description }}</p>
            
            <!-- Key Achievements -->
            <div class="space-y-2">
              <h4 class="text-sm font-medium text-gold-500">Ключові досягнення:</h4>
              <ul class="text-sm text-gray-400 space-y-1">
                <li v-for="achievement in figure.achievements" :key="achievement">
                  {{ achievement }}
                </li>
              </ul>
            </div>
          </div>

          <!-- Hover Effect -->
          <div class="absolute inset-0 border-2 border-gold-500/0 group-hover:border-gold-500/50 transition-colors duration-300"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { images } from '../assets/images'

gsap.registerPlugin(ScrollTrigger)

const historicalFigures = ref([
  {
    name: 'Йосип Сталін',
    years: '1878-1953',
    description: 'Генеральний секретар ЦК ВКП(б), організатор масових репресій в СРСР. Активно контролював і санкціонував застосування репресивних заходів, використовуючи їх як засіб усунення будь-яких потенційних опонентів та консолідації власної влади.',
    achievements: [
      'Організатор Голодомору 1932-1933 років',
      'Ініціатор Великої чистки 1937-1938 років',
      'Створення системи ГУЛАГ',
      'Проведення масових депортацій'
    ],
    image: images.stalin
  },
  {
    name: 'Микита Хрущов',
    years: '1894-1971',
    description: 'Перший секретар ЦК КПРС, керівник України під час репресій. Після Сталіна продовжував репресії, але пізніше ініціював розкриття їх масштабів та реформи.',
    achievements: [
      'Керівник України під час репресій',
      'Ініціатор "відлиги" після смерті Сталіна',
      'Розкриття культу особи Сталіна',
      'Реформування системи репресій'
    ],
    image: images.khrushchev
  },
  {
    name: 'НКВД',
    years: '1934-1946',
    description: 'Головний інструмент здійснення репресій - радянська таємна поліція. Організовувала арешти, судові процеси «тройками» та розстріли.',
    achievements: [
      'Організація масових арештів',
      'Проведення судових процесів',
      'Виконання розстрілів',
      'Контроль над системою ГУЛАГ'
    ],
    image: images.nkvd
  },
  {
    name: 'Павло Постишев',
    years: '1887-1939',
    description: 'Один з організаторів Голодомору в Україні. Активно проводив політику колективізації та репресій проти української інтелігенції.',
    achievements: [
      'Організатор репресій в Україні',
      'Проведення колективізації',
      'Боротьба з "націоналістичними елементами"',
      'Участь в організації Голодомору'
    ],
    image: images.postyshev
  }
])

const figureCards = ref([])

onMounted(() => {
  figureCards.value.forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      delay: index * 0.1,
      ease: 'power2.out'
    })
  })
})
</script>

<style scoped>
.figure-card {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.5s ease-out;
}

.figure-card.visible {
  opacity: 1;
  transform: translateY(0);
}
</style> 
<template>
  <div class="min-h-screen py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-4xl md:text-5xl font-serif text-center text-gold-500 mb-16">
        Renaissance Masters
      </h1>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="artist in artists" 
          :key="artist.name"
          class="group relative overflow-hidden rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-all duration-300"
          ref="artistCards"
        >
          <!-- Artist Image -->
          <div class="relative h-64 overflow-hidden">
            <img 
              :src="artist.image" 
              :alt="artist.name"
              class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          </div>

          <!-- Artist Info -->
          <div class="p-6">
            <h3 class="text-2xl font-serif text-gold-500 mb-2">{{ artist.name }}</h3>
            <p class="text-gray-400 mb-4">{{ artist.years }}</p>
            <p class="text-gray-300 mb-4">{{ artist.description }}</p>
            
            <!-- Famous Works -->
            <div class="space-y-2">
              <h4 class="text-sm font-medium text-gold-500">Famous Works:</h4>
              <ul class="text-sm text-gray-400 space-y-1">
                <li v-for="work in artist.famousWorks" :key="work">{{ work }}</li>
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

gsap.registerPlugin(ScrollTrigger)

const artists = ref([
  {
    name: 'Leonardo da Vinci',
    years: '1452-1519',
    description: 'A true Renaissance man, Leonardo was a painter, sculptor, architect, scientist, mathematician, engineer, inventor, anatomist, botanist, musician, and writer.',
    famousWorks: ['Mona Lisa', 'The Last Supper', 'Vitruvian Man'],
    image: '/images/artists/leonardo.jpg'
  },
  {
    name: 'Michelangelo',
    years: '1475-1564',
    description: 'Michelangelo was a sculptor, painter, architect, and poet who exerted an unparalleled influence on the development of Western art.',
    famousWorks: ['David', 'Sistine Chapel Ceiling', 'Pietà'],
    image: '/images/artists/michelangelo.jpg'
  },
  {
    name: 'Raphael',
    years: '1483-1520',
    description: 'Known for his clarity of form and ease of composition, Raphael was one of the most influential artists of the High Renaissance.',
    famousWorks: ['The School of Athens', 'Sistine Madonna', 'The Transfiguration'],
    image: '/images/artists/raphael.jpg'
  },
  {
    name: 'Botticelli',
    years: '1445-1510',
    description: 'A master of the Early Renaissance, Botticelli is known for his mythological and religious paintings.',
    famousWorks: ['The Birth of Venus', 'Primavera', 'The Adoration of the Magi'],
    image: '/images/artists/botticelli.jpg'
  },
  {
    name: 'Titian',
    years: '1488-1576',
    description: 'The most important member of the 16th-century Venetian school, Titian was known for his use of color and his ability to capture human emotion.',
    famousWorks: ['Venus of Urbino', 'Assumption of the Virgin', 'Bacchus and Ariadne'],
    image: '/images/artists/titian.jpg'
  },
  {
    name: 'Donatello',
    years: '1386-1466',
    description: 'A master of sculpture in both marble and bronze, Donatello was one of the greatest sculptors of the Early Renaissance.',
    famousWorks: ['David', 'Gattamelata', 'Saint George'],
    image: '/images/artists/donatello.jpg'
  }
])

const artistCards = ref([])

onMounted(() => {
  artistCards.value.forEach((card, index) => {
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
.artist-card {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.5s ease-out;
}

.artist-card.visible {
  opacity: 1;
  transform: translateY(0);
}
</style> 
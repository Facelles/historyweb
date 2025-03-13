<template>
  <div class="min-h-screen py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-4xl md:text-5xl font-serif text-center text-gold-500 mb-16">
        Renaissance Gallery
      </h1>

      <!-- Filter Buttons -->
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <button 
          v-for="category in categories" 
          :key="category"
          @click="selectedCategory = category"
          class="px-6 py-2 rounded-full text-sm font-medium transition-all duration-300"
          :class="[
            selectedCategory === category 
              ? 'bg-gold-500 text-black' 
              : 'bg-gray-800/50 text-gray-300 hover:bg-gray-800/70'
          ]"
        >
          {{ category }}
        </button>
      </div>

      <!-- Gallery Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="artwork in filteredArtworks" 
          :key="artwork.id"
          class="group relative overflow-hidden rounded-lg cursor-pointer"
          @click="openLightbox(artwork)"
          ref="artworkItems"
        >
          <img 
            :src="artwork.image" 
            :alt="artwork.title"
            class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div class="absolute bottom-0 left-0 right-0 p-6">
              <h3 class="text-xl font-serif text-gold-500 mb-2">{{ artwork.title }}</h3>
              <p class="text-gray-300">{{ artwork.artist }}</p>
              <p class="text-sm text-gray-400">{{ artwork.year }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox -->
    <div 
      v-if="selectedArtwork"
      class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      @click="closeLightbox"
    >
      <div class="relative max-w-5xl w-full">
        <button 
          @click="closeLightbox"
          class="absolute -top-12 right-0 text-white hover:text-gold-500 transition-colors"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <img 
          :src="selectedArtwork.image" 
          :alt="selectedArtwork.title"
          class="w-full h-auto rounded-lg"
        />
        <div class="mt-4 text-white">
          <h2 class="text-2xl font-serif text-gold-500 mb-2">{{ selectedArtwork.title }}</h2>
          <p class="text-lg mb-2">{{ selectedArtwork.artist }}</p>
          <p class="text-gray-400 mb-4">{{ selectedArtwork.year }}</p>
          <p class="text-gray-300">{{ selectedArtwork.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const categories = ['All', 'Paintings', 'Sculptures', 'Architecture', 'Drawings']
const selectedCategory = ref('All')
const selectedArtwork = ref(null)
const artworkItems = ref([])

const artworks = ref([
  {
    id: 1,
    title: 'Mona Lisa',
    artist: 'Leonardo da Vinci',
    year: '1503-1519',
    category: 'Paintings',
    description: 'The Mona Lisa is a half-length portrait painting by Italian artist Leonardo da Vinci. Considered an archetypal masterpiece of the Italian Renaissance, it has been described as "the best known, the most visited, the most written about, the most sung about, the most parodied work of art in the world."',
    image: '/images/artworks/mona-lisa.jpg'
  },
  {
    id: 2,
    title: 'David',
    artist: 'Michelangelo',
    year: '1501-1504',
    category: 'Sculptures',
    description: 'David is a masterpiece of Renaissance sculpture, created in marble between 1501 and 1504 by the Italian artist Michelangelo. David is a 5.17-metre (17.0 ft) marble statue of the Biblical figure David, a favoured subject in the art of Florence.',
    image: '/images/artworks/david.jpg'
  },
  {
    id: 3,
    title: 'The Birth of Venus',
    artist: 'Sandro Botticelli',
    year: '1485',
    category: 'Paintings',
    description: 'The Birth of Venus is a painting by the Italian artist Sandro Botticelli, probably made in the mid 1480s. It depicts the goddess Venus arriving at the shore after her birth, when she had emerged from the sea fully-grown.',
    image: '/images/artworks/birth-of-venus.jpg'
  },
  {
    id: 4,
    title: 'St. Peter\'s Basilica',
    artist: 'Various Architects',
    year: '1506-1626',
    category: 'Architecture',
    description: 'St. Peter\'s Basilica is an Italian Renaissance church in Vatican City, the papal enclave within the city of Rome. Designed principally by Donato Bramante, Michelangelo, Carlo Maderno and Gian Lorenzo Bernini, St. Peter\'s is the most renowned work of Renaissance architecture.',
    image: '/images/artworks/st-peters.jpg'
  },
  {
    id: 5,
    title: 'The School of Athens',
    artist: 'Raphael',
    year: '1509-1511',
    category: 'Paintings',
    description: 'The School of Athens is a fresco by the Italian Renaissance artist Raphael. The fresco was painted between 1509 and 1511 as a part of Raphael\'s commission to decorate the rooms now known as the Stanze di Raffaello, in the Apostolic Palace in the Vatican.',
    image: '/images/artworks/school-of-athens.jpg'
  },
  {
    id: 6,
    title: 'Vitruvian Man',
    artist: 'Leonardo da Vinci',
    year: '1490',
    category: 'Drawings',
    description: 'The Vitruvian Man is a drawing made by Leonardo da Vinci around 1490. It is accompanied by notes based on the work of the Roman architect Vitruvius. The drawing, which is in pen and ink on paper, depicts a man in two superimposed positions with his arms and legs apart and inscribed in a circle and square.',
    image: '/images/artworks/vitruvian-man.jpg'
  }
])

const filteredArtworks = computed(() => {
  if (selectedCategory.value === 'All') return artworks.value
  return artworks.value.filter(artwork => artwork.category === selectedCategory.value)
})

const openLightbox = (artwork) => {
  selectedArtwork.value = artwork
}

const closeLightbox = () => {
  selectedArtwork.value = null
}

onMounted(() => {
  artworkItems.value.forEach((item, index) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
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
.artwork-item {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.5s ease-out;
}

.artwork-item.visible {
  opacity: 1;
  transform: translateY(0);
}
</style> 
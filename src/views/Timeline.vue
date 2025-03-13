<template>
  <div class="min-h-screen py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-4xl md:text-5xl font-serif text-center text-gold-500 mb-16">
        Renaissance Timeline
      </h1>

      <div class="relative">
        <!-- Timeline Line -->
        <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gold-500/30"></div>

        <!-- Timeline Events -->
        <div class="space-y-16">
          <div 
            v-for="(event, index) in timelineEvents" 
            :key="event.year"
            class="relative"
            :class="{'opacity-0': !event.visible}"
            ref="timelineItems"
          >
            <!-- Timeline Dot -->
            <div class="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gold-500 rounded-full"></div>

            <!-- Content -->
            <div 
              class="w-5/12 ml-auto pl-8"
              :class="{'ml-0 mr-auto pr-8': index % 2 === 0}"
            >
              <div class="bg-gray-800/50 p-6 rounded-lg shadow-lg hover:bg-gray-800/70 transition-all duration-300">
                <div class="text-2xl font-serif text-gold-500 mb-2">{{ event.year }}</div>
                <h3 class="text-xl font-medium mb-3">{{ event.title }}</h3>
                <p class="text-gray-300">{{ event.description }}</p>
              </div>
            </div>
          </div>
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

const timelineEvents = ref([
  {
    year: '1300',
    title: 'Early Renaissance Begins',
    description: 'The Renaissance period begins in Italy, marking a transition from the Middle Ages to the modern era.',
    visible: false
  },
  {
    year: '1401',
    title: 'Florence Baptistery Doors Competition',
    description: 'Lorenzo Ghiberti wins the competition to create the bronze doors of the Florence Baptistery.',
    visible: false
  },
  {
    year: '1453',
    title: 'Fall of Constantinople',
    description: 'The fall of Constantinople leads to an influx of Greek scholars and texts into Italy.',
    visible: false
  },
  {
    year: '1492',
    title: 'Age of Discovery',
    description: 'Christopher Columbus reaches the Americas, marking the beginning of the Age of Discovery.',
    visible: false
  },
  {
    year: '1503',
    title: 'Mona Lisa',
    description: 'Leonardo da Vinci begins painting the Mona Lisa, one of the most famous paintings in history.',
    visible: false
  },
  {
    year: '1512',
    title: 'Sistine Chapel Ceiling',
    description: 'Michelangelo completes the painting of the Sistine Chapel ceiling.',
    visible: false
  },
  {
    year: '1543',
    title: 'Scientific Revolution',
    description: 'Copernicus publishes his heliocentric theory, marking the beginning of the Scientific Revolution.',
    visible: false
  }
])

const timelineItems = ref([])

onMounted(() => {
  timelineItems.value.forEach((item, index) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top center+=100',
        toggleActions: 'play none none reverse'
      },
      opacity: 1,
      x: index % 2 === 0 ? -50 : 50,
      duration: 1,
      ease: 'power2.out'
    })
  })
})
</script>

<style scoped>
.timeline-item {
  opacity: 0;
  transform: translateX(50px);
  transition: all 0.5s ease-out;
}

.timeline-item.visible {
  opacity: 1;
  transform: translateX(0);
}
</style> 
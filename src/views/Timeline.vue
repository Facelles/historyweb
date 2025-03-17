<template>
  <div class="min-h-screen py-12 sm:py-16 lg:py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl sm:text-4xl md:text-5xl font-serif text-center text-gold-500 mb-12 sm:mb-16">
        Хронологія подій
      </h1>

      <div class="relative">
        <!-- Timeline Line -->
        <div class="absolute left-8 sm:left-1/2 transform sm:-translate-x-1/2 h-full w-0.5 bg-gold-500/30"></div>

        <!-- Timeline Events -->
        <div class="space-y-8 sm:space-y-16">
          <div 
            v-for="(event, index) in timelineEvents" 
            :key="event.year"
            class="relative timeline-item"
            ref="timelineItems"
          >
            <!-- Timeline Dot -->
            <div 
              class="absolute left-8 sm:left-1/2 transform sm:-translate-x-1/2 -translate-y-1/2 w-3 sm:w-4 h-3 sm:h-4 bg-gold-500 rounded-full"
            ></div>

            <!-- Content -->
            <div 
              class="ml-16 sm:ml-0 sm:w-5/12 sm:pl-8"
              :class="{'sm:ml-auto': index % 2 !== 0, 'sm:mr-auto sm:pl-0 sm:pr-8': index % 2 === 0}"
            >
              <div class="bg-gray-800/50 p-4 sm:p-6 rounded-lg shadow-lg hover:bg-gray-800/70 transition-all duration-300">
                <div class="text-xl sm:text-2xl font-serif text-gold-500 mb-2">{{ event.year }}</div>
                <h3 class="text-lg sm:text-xl font-medium mb-2 sm:mb-3">{{ event.title }}</h3>
                <p class="text-sm sm:text-base text-gray-300">{{ event.description }}</p>
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
    description: 'The Renaissance period begins in Italy, marking a transition from the Middle Ages to the modern era.'
  },
  {
    year: '1401',
    title: 'Florence Baptistery Doors Competition',
    description: 'Lorenzo Ghiberti wins the competition to create the bronze doors of the Florence Baptistery.'
  },
  {
    year: '1453',
    title: 'Fall of Constantinople',
    description: 'The fall of Constantinople leads to an influx of Greek scholars and texts into Italy.'
  },
  {
    year: '1492',
    title: 'Age of Discovery',
    description: 'Christopher Columbus reaches the Americas, marking the beginning of the Age of Discovery.'
  },
  {
    year: '1503',
    title: 'Mona Lisa',
    description: 'Leonardo da Vinci begins painting the Mona Lisa, one of the most famous paintings in history.'
  },
  {
    year: '1512',
    title: 'Sistine Chapel Ceiling',
    description: 'Michelangelo completes the painting of the Sistine Chapel ceiling.'
  },
  {
    year: '1543',
    title: 'Scientific Revolution',
    description: 'Copernicus publishes his heliocentric theory, marking the beginning of the Scientific Revolution.'
  }
])

const timelineItems = ref([])

onMounted(() => {
  timelineItems.value.forEach((item, index) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      x: window.innerWidth >= 640 ? (index % 2 === 0 ? -50 : 50) : 50,
      duration: 1,
      ease: 'power2.out'
    })
  })
})
</script>

<style scoped>
.timeline-item {
  opacity: 0;
  animation: fadeIn 0.8s ease-out forwards;
  animation-delay: calc(var(--index, 0) * 0.2s);
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

/* Додаємо анімацію для лінії часу */
.timeline-line {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  background: linear-gradient(to bottom, transparent, var(--gold-500) 10%, var(--gold-500) 90%, transparent);
  animation: growLine 1.5s ease-out forwards;
  transform-origin: top;
}

@keyframes growLine {
  from {
    transform: scaleY(0);
  }
  to {
    transform: scaleY(1);
  }
}

/* Адаптивні стилі */
@media (max-width: 640px) {
  .timeline-line {
    left: 8px;
    transform: none;
  }
}
</style> 
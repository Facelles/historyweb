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
    year: '1878',
    title: 'Народження Йосипа Сталіна',
    description: 'Народження майбутнього генерального секретаря ЦК ВКП(б), який стане організатором масових репресій в СРСР.'
  },
  {
    year: '1887',
    title: 'Народження Павла Постишева',
    description: 'Народження одного з організаторів Голодомору в Україні, який активно проводив політику колективізації та репресій.'
  },
  {
    year: '1894',
    title: 'Народження Микити Хрущова',
    description: 'Народження майбутнього першого секретаря ЦК КПРС, який пізніше ініціює "відлигу" після смерті Сталіна.'
  },
  {
    year: '1934',
    title: 'Створення НКВД',
    description: 'Утворення Народного комісаріату внутрішніх справ (НКВД) - головного інструменту репресій в СРСР.'
  },
  {
    year: '1932-1933',
    title: 'Голодомор в Україні',
    description: 'Штучно створений голод, який призвів до смерті мільйонів українців. Організований за участю Сталіна та Постишева.'
  },
  {
    year: '1937-1938',
    title: 'Велика чистка',
    description: 'Масова кампанія політичних репресій, організована Сталіним. Загинули сотні тисяч людей.'
  },
  {
    year: '1939',
    title: 'Розстріл Павла Постишева',
    description: 'Розстріл одного з організаторів репресій, який сам став жертвою сталінського терору.'
  },
  {
    year: '1953',
    title: 'Смерть Сталіна',
    description: 'Смерть Йосипа Сталіна, яка призвела до поступового відходу від політики масових репресій.'
  },
  {
    year: '1956',
    title: 'Хрущовська "відлига"',
    description: 'Розкриття культу особи Сталіна на XX з\'їзді КПРС, ініційоване Хрущовим. Початок періоду відносного послаблення репресій.'
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
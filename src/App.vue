<script setup>
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'

const mobileMenuOpen = ref(false)

const navigation = [
  { name: 'Головна', href: '/' },
  { name: 'Хронологія', href: '/timeline' },
  { name: 'Ключові постаті', href: '/figures' },
  { name: 'Галерея', href: '/gallery' }
]
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
    <nav class="fixed w-full bg-black/30 backdrop-blur-md z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <router-link to="/" class="text-xl sm:text-2xl font-serif text-gold-500 hover:text-gold-400 transition-colors">
              Історія
            </router-link>
          </div>
          
          <!-- Desktop Navigation -->
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <router-link 
                v-for="item in navigation" 
                :key="item.name"
                :to="item.href"
                class="px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 transition-colors"
                :class="[$route.path === item.href ? 'text-gold-500' : 'text-gray-300']"
              >
                {{ item.name }}
              </router-link>
            </div>
          </div>

          <!-- Mobile menu button -->
          <div class="md:hidden">
            <button 
              @click="mobileMenuOpen = !mobileMenuOpen"
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <span class="sr-only">Відкрити меню</span>
              <!-- Icon when menu is closed -->
              <svg 
                v-if="!mobileMenuOpen"
                class="block h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <!-- Icon when menu is open -->
              <svg 
                v-else
                class="block h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile menu -->
      <div 
        v-show="mobileMenuOpen" 
        class="md:hidden bg-gray-900/95 backdrop-blur-md"
      >
        <div class="px-2 pt-2 pb-3 space-y-1">
          <router-link 
            v-for="item in navigation" 
            :key="item.name"
            :to="item.href"
            class="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition-colors"
            :class="[$route.path === item.href ? 'text-gold-500 bg-gray-800' : 'text-gray-300']"
            @click="mobileMenuOpen = false"
          >
            {{ item.name }}
          </router-link>
        </div>
      </div>
    </nav>

    <main class="pt-16">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <footer class="bg-black/50 mt-20 py-6 sm:py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center text-gray-400 text-sm sm:text-base">
          <p>© 2024 Історія. Всі права захищені.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.font-serif {
  font-family: 'Playfair Display', serif;
}

.font-sans {
  font-family: 'Inter', sans-serif;
}

/* Mobile menu transition */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>

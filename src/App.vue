<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Timeline', href: '/timeline' },
  { name: 'Artists', href: '/artists' },
  { name: 'Gallery', href: '/gallery' }
]
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
    <nav class="fixed w-full bg-black/30 backdrop-blur-md z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <router-link to="/" class="text-2xl font-serif text-gold-500 hover:text-gold-400 transition-colors">
              Renaissance
            </router-link>
          </div>
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

    <footer class="bg-black/50 mt-20 py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center text-gray-400">
          <p>© 2024 Renaissance History. All rights reserved.</p>
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
</style>

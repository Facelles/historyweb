import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Timeline from '../views/Timeline.vue'
import Figures from '../views/Figures.vue'
import Referat from '../views/Referat.vue'

const router = createRouter({
  history: createWebHistory('/historyweb/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/timeline',
      name: 'timeline',
      component: Timeline
    },
    {
      path: '/figures',
      name: 'figures',
      component: Figures
    },
    {
      path: '/referat',
      name: 'referat',
      component: Referat
    }
  ]
})

export default router 
import CharacterView from '@/views/CharacterView.vue'
import HomeView from '@/views/HomeView.vue'
import RandomTableView from '@/views/RandomTableView.vue'
import StoryView from '@/views/StoryView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/character',
      name: 'character',
      component: CharacterView,
    },
    {
      path: '/story',
      name: 'story',
      component: StoryView,
    },
    {
      path: '/random-table',
      name: 'random-table',
      component: RandomTableView,
    },
  ],
})

export default router

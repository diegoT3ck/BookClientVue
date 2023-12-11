import { createRouter, createWebHistory } from 'vue-router'
import LibrosView from '@/views/Pages/LibrosView.vue'
import AcountView from '@/views/Pages/AcountView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: LibrosView
  },
  {
    path: '/perfil',
    name: 'perfil',
    component: AcountView
  }
  


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

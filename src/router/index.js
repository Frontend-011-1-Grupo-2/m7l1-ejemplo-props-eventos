import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/', component: ()=> import('@/views/HomeView.vue') },
  { path: '/board', component:  ()=>import('@/views/BoardView.vue')},
  {path: '/component', component: ()=>import('@/views/ComponentView.vue')}
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/', name:'Home', component: ()=> import('@/views/HomeView.vue') },
  { path: '/board', name:'Board', component:  ()=>import('@/views/BoardView.vue')},
  {path: '/component', name: 'Component', component: ()=>import('@/views/ComponentView.vue')}
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
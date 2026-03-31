<script setup>
import CardLayout from '@/components/CardLayout.vue';
import ListLayout from '@/components/ListLayout.vue';
import TableLayout from '@/components/TableLayout.vue';
import { ref } from 'vue'

const usuarios = ref([
  {
    id: 1,
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 25,
    genero: 'Masculino',
    foto: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: 2,
    nombre: 'Maria',
    apellido: 'Lopez',
    edad: 30,
    genero: 'Femenino',
    foto: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    id: 3,
    nombre: 'Pedro',
    apellido: 'Garcia',
    edad: 35,
    genero: 'Masculino',
    foto: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    id: 4,
    nombre: 'Ana',
    apellido: 'Martinez',
    edad: 40,
    genero: 'Femenino',
    foto: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    id: 5,
    nombre: 'Luis',
    apellido: 'Garcia',
    edad: 45,
    genero: 'Masculino',
    foto: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    id: 6,
    nombre: 'Ana',
    apellido: 'Martinez',
    edad: 50,
    genero: 'Femenino',
    foto: 'https://randomuser.me/api/portraits/women/3.jpg',
  },
])
const mostrar = ref('ListLayout')

const tabs = {
  ListLayout,
  CardLayout,
  TableLayout
}

const layoutSelectHandler = (component) => {
  mostrar.value = component
}
</script>

<template>
  <div class="container my-5">
    <h1>Componente Dinámico</h1>
    <p class="small text-muted m-0">Elige la forma de mostrar a los usuarios</p>
    <!-- Navegación para componente dinámico -->
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <button class="nav-link" :class="{ active: mostrar === 'ListLayout' }"
          @click="layoutSelectHandler('ListLayout')">Lista</button>
      </li>
      <li class="nav-item">
        <button class="nav-link" :class="{ active: mostrar === 'TableLayout' }"
          @click="layoutSelectHandler('TableLayout')">Tabla</button>
      </li>
      <li class="nav-item">
        <button class="nav-link" :class="{ active: mostrar === 'CardLayout' }"
          @click="layoutSelectHandler('CardLayout')">Cards</button>
      </li>
    </ul>
    <component :is="tabs[mostrar]" :usuarios="usuarios" />
  </div>
</template>

<style scoped></style>
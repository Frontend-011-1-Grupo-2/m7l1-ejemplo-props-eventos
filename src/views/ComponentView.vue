<script setup>
import CardLayout from '@/components/CardLayout.vue';
import ListLayout from '@/components/ListLayout.vue';
import TableLayout from '@/components/TableLayout.vue';
import { ref } from 'vue'

const seleccionComponentes = [
  {
    nombre: 'Lista',
    componente: 'ListLayout'
  },
  {
    nombre: 'Tabla',
    componente: 'TableLayout'
  },
  {
    nombre: 'Cards',
    componente: 'CardLayout'
  }
]

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
      <li class="nav-item" v-for="componente in seleccionComponentes" :key="componente.componente">
        <button class="nav-link" :class="{ active: mostrar === componente.componente }"
          @click="layoutSelectHandler(componente.componente)">{{ componente.nombre }}</button>
      </li>
    </ul>
    <!-- tabs.CardLayout, tabs.TableLayout -->
    <!-- tabs.mostrar buscará una propiedad dentro del objeto tabs que se llame mostrar, eso no existe -->
    <component :is="tabs[mostrar]" :usuarios="usuarios" />
  </div>
</template>

<style scoped></style>
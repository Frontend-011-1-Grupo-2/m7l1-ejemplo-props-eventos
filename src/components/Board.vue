<script setup>
import Card from './Card.vue';

const imagenes = [
  {
    id: 1,
    nombre: 'Gatito sentado',
    correcto: true
  },
  {
    id: 2,
    nombre: 'Caballo saltando',
    correcto: false
  },
  {
    id: 3,
    nombre: 'Gatito saltando',
    correcto: true
  },
  {
    id: 4,
    nombre: 'Pájaro volando',
    correcto: false
  },
  {
    id: 5,
    nombre: 'Pez nadando',
    correcto: false
  },
  {
    id: 6,
    nombre: 'Reptil reptando',
    correcto: false
  },
  {
    id: 7,
    nombre: 'Gatito comiendo',
    correcto: true

  },
  {
    id: 8,
    nombre: 'Perro mordiendo',
    correcto: false

  },
  {
    id: 9,
    nombre: 'Persona mirando',
    correcto: false
  }
]

const handleClickCard = (esCorrecto) => console.log(esCorrecto ? 'Selección correcta' : 'Selección Incorrecta')
</script>

<template>
  <div>
    <div v-for="imagen in imagenes" :key="imagen.id">
      <Card :imagen="imagen" @clickCard="handleClickCard" />
    </div>
  </div>
</template>

<style scoped></style>
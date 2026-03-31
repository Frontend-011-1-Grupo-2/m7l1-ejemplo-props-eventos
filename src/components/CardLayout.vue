<script setup>
defineProps({
  usuarios: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="card-group">
    <div class="card" v-for="usuario in usuarios" :key="usuario.id">
      <img :src="usuario.foto" class="card-img-top" :alt="`Imagen de ${usuario.nombre} ${usuario.apellido}`">
      <div class="card-body">
        <h5 class="card-title">{{ usuario.nombre }} {{ usuario.apellido }}</h5>
        <p class="card-subtitle">{{ usuario.genero }}</p>
        <p class="card-text"><small class="text-body-secondary">{{ usuario.edad }}</small></p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
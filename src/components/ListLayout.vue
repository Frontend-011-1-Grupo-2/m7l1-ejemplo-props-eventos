<script setup>
defineProps({
  usuarios: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <ul class="list-group">
    <li class="lit-group-item" v-for="usuario in usuarios" :key="usuario.id">
      {{ usuario.nombre }} {{ usuario.apellido }} - {{ usuario.edad }} años
    </li>
  </ul>
</template>

<style scoped></style>
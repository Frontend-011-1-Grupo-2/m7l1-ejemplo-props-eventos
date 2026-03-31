<script setup>
defineProps({
  usuarios: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <table class="table table-sm">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nombre</th>
        <th scope="col">Apellido</th>
        <th scope="col">Edad</th>
        <th scope="col">Género</th>
        <th scope="col">Imagen</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(usuario, index) in usuarios" :key="usuario.id">
        <th scope="row">{{ index + 1 }}</th>
        <td>{{ usuario.nombre }}</td>
        <td>{{ usuario.apellido }}</td>
        <td>{{ usuario.edad }}</td>
        <td>{{ usuario.genero }}</td>
        <td><img width="50" :src="usuario.foto" :alt="`Imagen de ${usuario.nombre} ${usuario.apellido}`"
            class="rounded-circle"></td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped></style>
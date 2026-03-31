<script setup>
const props = defineProps({
  imagen: Object
})

const emit = defineEmits(['clickCard'])

// segundo argumento es opcional, se llama payload y puede contener cualquier cosa
const handleClick = () => emit('clickCard', props.imagen.correcto)

</script>

<template>
  <div class="imagen" @click="handleClick">
    <h2>{{ imagen.nombre }}</h2>
  </div>
</template>

<style scoped>
.imagen {
  border: 2px solid black;
  border-radius: 10px;
  padding: 1rem;
}
</style>
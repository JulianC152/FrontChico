<script setup lang="ts">

// Props para personalización del icono
defineProps<{
  iconClass: string; // Nombre del icono (por ejemplo, 'home' o 'cart')
  width?: string; // Ancho (ej: '24px')
  height?: string; // Alto (ej: '24px')
  color?: string; // Color del icono (ej: 'red', '#123456')
}>();
</script>

<template>
  <i :class="iconClass" :style="{ fontSize: width || height, color: color }"></i>
</template>

<style scoped>
i {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
</style>

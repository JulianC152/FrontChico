<template>
  <font-awesome-icon :icon="iconClass" :style="{ fontSize: width || height, color: color }" />
</template>

<script setup lang="ts">
defineProps<{
  iconClass: string; // Nombre del icono (por ejemplo, 'fa-solid fa-magnifying-glass')
  width?: string; // Ancho (ej: '24px')
  height?: string; // Alto (ej: '24px')
  color?: string; // Color del icono (ej: 'red', '#123456')
}>();
</script>

<style scoped>
.iconClass {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
</style>
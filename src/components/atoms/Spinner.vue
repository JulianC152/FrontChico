<template>
  <div :class="spinnerClass" role="status">
    <span v-if="label" class="visually-hidden">{{ label }}</span>
  </div>
</template>

<script setup>
import { computed } from 'vue';

defineProps({
  type: {
    type: String,
    default: 'border', // 'border' o 'grow'
    validator: (value) => ['border', 'grow'].includes(value),
  },
  size: {
    type: String,
    default: 'md', // 'sm' o 'md' o 'lg'
    validator: (value) => ['sm', 'md', 'lg'].includes(value),
  },
  color: {
    type: String,
    default: 'primary', // Bootstrap colors: 'primary', 'secondary', 'danger', etc.
  },
  label: String, // Texto accesible para lectores de pantalla
});

const spinnerClass = computed(() => [
  `spinner-${type}`,
  `text-${color}`,
  { 'spinner-border-sm': size === 'sm', 'spinner-border-lg': size === 'lg' },
]);
</script>

<template>
  <div :class="spinnerClass" role="status">
    <span v-if="label" class="visually-hidden">{{ label }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  type: {
    type: String,
    default: 'border', // 'border' o 'grow'
    validator: (value: string) => ['border', 'grow'].includes(value),
  },
  size: {
    type: String,
    default: 'md', // 'sm' o 'md' o 'lg'
    validator: (value: string) => ['sm', 'md', 'lg'].includes(value),
  },
  color: {
    type: String,
    default: 'primary', // Bootstrap colors: 'primary', 'secondary', 'danger', etc.
  },
  label: String, // Texto accesible para lectores de pantalla
});

const { type, size, color } = props;

const spinnerClass = computed(() => [
  `spinner-${type}`,
  `text-${color}`,
  { 'spinner-border-sm': size === 'sm', 'spinner-border-lg': size === 'lg' },
]);
</script>

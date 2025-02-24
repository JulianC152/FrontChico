<template>
  <div class="mb-3">
    <label v-if="label" :for="id" class="form-label">{{ label }}</label>
    <input :id="id" :type="type" :placeholder="placeholder" :value="modelValue" :disabled="disabled"
      :class="computedClasses" @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" />
    <div v-if="errorMessage" class="text-danger mt-1">{{ errorMessage }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  modelValue: String, // Para v-model
  type: {
    type: String,
    default: 'text',
  },
  id: String,
  placeholder: String,
  label: String,
  disabled: {
    type: Boolean,
    default: false,
  },
  errorMessage: String, // Mensaje de error opcional
});

const computedClasses = computed(() => ({
  'form-control': true,
  'is-invalid': !!props.errorMessage, // Clase de Bootstrap para errores
}));
</script>

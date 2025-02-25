<template>
  <div class="select-wrapper">
    <!-- Etiqueta opcional -->
    <label v-if="label" :for="id" class="form-label">{{ label }}</label>
    <!-- Select -->
    <select :id="'id'" :class="'location-select'" v-model="selectedOption" :disabled="disabled" @change="emitChange">
      <option value="" disabled>Select location</option>
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from "vue";

// Define las propiedades esperadas
const props = defineProps<{
  id: string;
  label?: string;
  options: { value: string; label: string }[]; // Tipado estricto para opciones
  modelValue: string;
  disabled?: boolean;
}>();

const emit = defineEmits(["update:modelValue"]);

const selectedOption = ref(props.modelValue);

// Emite cambios cuando el usuario selecciona una opción
const emitChange = () => {
  emit("update:modelValue", selectedOption.value);
};
</script>

<style scoped></style>

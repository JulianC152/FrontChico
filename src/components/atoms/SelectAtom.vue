<template>
  <div class="select-wrapper">
    <select :id="id" :class="'location-Select'" v-model="selectedOption" :disabled="disabled" @change="emitChange">
      <option value="" disabled>Select location</option>
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits, watch } from "vue";

// Define las propiedades esperadas
const props = defineProps<{
  id: string;
  label?: string;
  options: { value: string; label: string }[]; // Tipado estricto para opciones
  modelValue: string;
  disabled?: boolean;
  locationSelect?: string;
}>();

const emit = defineEmits(["update:modelValue"]);

const selectedOption = ref(props.modelValue);

// Emite cambios cuando el usuario selecciona una opción
const emitChange = () => {
  emit("update:modelValue", selectedOption.value);
};

// Sincroniza el valor del modelo con el valor seleccionado
watch(() => props.modelValue, (newValue) => {
  selectedOption.value = newValue;
});
</script>

<style scoped>
.location-Select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 100%;
  padding: 7px 20px 7px 10px;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 15px;
  color: #898989;
  cursor: pointer;
}
</style>
<template>
  <div class="mb-3">
    <label v-if="label" :for="id" class="form-label">{{ label }}</label>
    <select :id="id" class="form-select" :disabled="disabled"
      @change="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)">
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
interface Option {
  value: string | number;
  label: string;
}

defineProps<{
  id: string;
  label?: string;
  options: Option[];
  disabled?: boolean;
}>();
</script>
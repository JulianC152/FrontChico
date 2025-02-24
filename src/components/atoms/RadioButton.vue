<template>
  <div class="form-check">
    <input :id="id" type="radio" class="form-check-input" :name="name" :value="value" :checked="modelValue === value"
      @change="$emit('update:modelValue', value)" />
    <label v-if="label" :for="id" class="form-check-label">{{ label }}</label>
  </div>
</template>

<script setup lang="ts">
defineProps({
  id: String,
  name: String,
  value: String,
  label: String,
  modelValue: String,
});
</script>

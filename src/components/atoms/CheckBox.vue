<template>
  <div class="form-check">
    <input :id="id" type="checkbox" class="form-check-input" :checked="modelValue"
      @change="$emit('update:modelValue', $event.target.checked)" />
    <label v-if="label" :for="id" class="form-check-label">{{ label }}</label>
  </div>
</template>

<script setup>
defineProps({
  id: String,
  label: String,
  modelValue: Boolean,
});
</script>
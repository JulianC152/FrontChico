<template>
  <input :type="type" :placeholder="placeholder" :value="modelValue"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" class="form-control" />
</template>

<script setup lang="ts">

defineProps({
  type:
  {
    type: String,
    default: "text"
  },
  placeholder:
  {
    type: String,
    default: ""
  },
  modelValue: String,
});
</script>

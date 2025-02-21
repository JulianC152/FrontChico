<template>
  <input :type="type" :placeholder="placeholder" :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)" class="form-control" />
</template>

<script setup>

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

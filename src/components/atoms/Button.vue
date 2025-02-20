<template>
  <button :class="['btn', type]" @click="$emit('click')">
    <slot />
  </button>
</template>

<script setup>
defineProps({
  type: { type: String, default: 'btn-primary' }
});
</script>
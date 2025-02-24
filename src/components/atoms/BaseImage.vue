<template>
  <img :src="src" :alt="alt" class="img-fluid" />
</template>

<script setup lang="ts">

defineProps({
  src: { type: String, required: true },
  alt: { type: String, default: "Imagen" },
});
</script>

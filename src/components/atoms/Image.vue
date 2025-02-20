<template>
  <img :src="src" :alt="alt" class="img-fluid" />
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  src: { type: String, required: true },
  alt: { type: String, default: "Imagen" },
});
</script>

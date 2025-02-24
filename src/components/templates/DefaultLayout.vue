<template>
  <div class="default-layout">
    <Navbar />

    <main class="container my-4">
      <slot />
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from "@/components/organisms/Navbar.vue";
import Footer from "@/components/organisms/Footer.vue";
</script>

<style scoped>
.default-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}
</style>

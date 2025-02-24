<template>
  <div class="default-layout">
    <Navbar />

    <main class=" my-4">
      <slot />
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from "@/components/organisms/NavbarOrganism.vue";
import Footer from "@/components/organisms/FooterOrganism.vue";
</script>

<style scoped>
.default-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  width: 100%;
  padding: 0;
  margin: 0;
}

.default-layout {
  margin: 0;
  padding: 0;
}
</style>

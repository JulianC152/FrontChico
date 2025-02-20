<template>
  <nav class="navbar navbar-expand-lg navbar-dark ">
    <div class="container">
      <router-link class="navbar-brand" to="/">Chico</router-link>

      <button 
        class="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"s
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/products">Productos</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/cart">
              Carrito <span class="badge bg-light text-dark">{{ cartItemCount }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed } from "vue";
import { useCartStore } from "@/stores/cartStore";

const cartStore = useCartStore();
const cartItemCount = computed(() => cartStore.items.length);
</script>

<style scoped>
.navbar-brand {
  font-weight: bold;
}
</style>

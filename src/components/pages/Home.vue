<template>
  <div class="home-page container">
    <h1 class="text-center my-4">Bienvenido a Chico</h1>

    <div v-if="products.length > 0" class="row">
      <div v-for="product in products" :key="product.id" class="col-md-4 mb-4">
        <ProductCard :product="product" />
      </div>
    </div>

    <div v-else class="text-center">
      <p>Cargando productos...</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import ProductCard from "@/components/molecules/ProductCard.vue";

// Estado para almacenar los productos
const products = ref([]);

// Simulación de carga de productos (deberías reemplazar esto con una API real)
const fetchProducts = async () => {
  try {
    products.value = [
      { id: 1, name: "Producto 1", price: 199.99, image: "https://via.placeholder.com/300" },
      { id: 2, name: "Producto 2", price: 249.99, image: "https://via.placeholder.com/300" },
      { id: 3, name: "Producto 3", price: 99.99, image: "https://via.placeholder.com/300" }
    ];
  } catch (error) {
    console.error("Error al cargar productos:", error);
  }
};

// Cargar productos al montar el componente
onMounted(fetchProducts);
</script>

<style scoped>
.home-page {
  max-width: 1200px;
  margin: auto;
}
</style>

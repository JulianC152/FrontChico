<template>
  <div class="home-page container">
    <div class="hero-section text-center mb-5 position-relative">
      <Img :src="'https://cdn.pixabay.com/photo/2016/08/13/11/57/stadium-1590576_1280.jpg'" :alt="'Hero Image'"
        :class="'img-fluid m-3 width: 100%'" />
      <div class="hero-content position-absolute top-50 start-50 translate-middle text-white">
        <h1 class="hero-title">Bienvenido a Chico</h1>
        <h2 class="hero-subtitle">Encuentra los mejores productos aquí</h2>
        <div class="hero-buttons my-3">
          <Button :class="'btn mx-2'">Botón 1</Button>
          <Button :class="'btn mx-2'">Botón 2</Button>
          <Button :class="'btn mx-2'">Botón 3</Button>
        </div>
        <SearchBar class="hero-search mt-3" placeholder="Buscar productos..." />
      </div>
    </div>
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
import Img from "@/components/atoms/Image.vue";
import Button from "@/components/atoms/Button.vue";

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
  width: 100%;
  padding-block: 20px;
}

.hero-section {
  position: relative;
  width: 100%;
}

.hero-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: bold;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: #ffffff;
  font-weight: bold;
}

.hero-buttons .btn {
  margin: 5px;
  padding-inline: 10px;
  padding-block: 2px;
  background-color: white;
  color: rgb(218, 61, 61);
}

.hero-search {
  max-width: 600px;
  margin: auto;
}
</style>
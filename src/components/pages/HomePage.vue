<script setup lang="ts">
// import { ref } from "vue";
// import ProductCard from "@/components/molecules/ProductCard.vue";
import Img from "@/components/atoms/BaseImage.vue";
import Button from "@/components/atoms/ButtonAtom.vue";

// Estado para almacenar los productos
// const products = ref([]);

</script>
<template>
  <div class="home-page container">
    <div class="hero-section text-center mb-5 position-relative">
      <Img
        :src="'https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2023/10/04/estadio-santiago-bernabeu-1.jpeg'"
        :alt="'Hero Image'" :class="'img-fluid w-100 mt-3'" />
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
    <!-- <div v-if="products.length > 0" class="row">
      <div v-for="product in products" :key="product.id" class="col-md-4 mb-4">
        <ProductCard :product="product" />
      </div>
    </div> -->

    <!-- <div v-else class="text-center">
      <p>Cargando productos...</p>
    </div> -->
  </div>
</template>


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

.img-fluid {
  width: 100%;
  height: auto;
}

.btn:hover {
  background-color: rgb(218, 61, 61);
  color: rgb(255, 255, 255);
}

.hero-search {
  max-width: 600px;
  margin: auto;
}
</style>
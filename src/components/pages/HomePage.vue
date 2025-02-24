<script setup lang="ts">
// import { ref } from "vue";
// import ProductCard from "@/components/molecules/ProductCard.vue";
import Img from "@/components/atoms/BaseImage.vue";
import Button from "@/components/atoms/ButtonAtom.vue";
import SearchBar from "@/components/molecules/SearchBar.vue";

</script>
<template>
  <div class="home-page ">
    <div class="hero-section text-center mb-5 position-relative">
      <Img
        :src="'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZXN0YWRpbyUyMGRlJTIwZiVDMyVCQXRib2x8ZW58MHx8MHx8fDA%3D'"
        :alt="'Hero Image'" :class="'img-fluid w-100 mt-3'" />
      <div class="hero-content position-absolute top-50 start-50 translate-middle text-white">
        <h1 class="hero-title">Bienvenido a Chico</h1>
        <h2 class="hero-subtitle">Encuentra los mejores productos aquí</h2>
        <div class="hero-buttons my-3">
          <Button :class="'btn mx-2'">Canchas</Button>
          <Button :class="'btn mx-2'">Equipo</Button>
          <Button :class="'btn mx-2'">Mvp</Button>
        </div>
        <div class="search-bar mt-3">
          <SearchBar :class="'search-input mt-3'" :placeholder="'Encuetra tu cancha'" />
        </div>
      </div>
    </div>
    <h1>dasdad</h1>
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
  overflow: hidden;
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
  border-radius: 20px;
  font-weight: bold;
  border-color: white;
  background-color: white;
  color: rgb(218, 61, 61);
  width: 100px;
}

.img-fluid {
  width: 100%;
  height: 100vh;
  object-fit: cover;
}

.btn:hover {
  background-color: rgb(218, 61, 61);
  color: rgb(255, 255, 255);
}

.search-bar {
  width: 100%;
  max-width: 600px;
  margin: auto;
  background-color: white;
  border-radius: 30px;
  display: flex;
  align-items: center;
  padding: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.search-input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 16px;
  padding: 8px;
  border-radius: 20px;
  width: 100%;
}

.location-select {
  border: none;
  outline: none;
  background: transparent;
  font-size: 16px;
  color: gray;
  margin: 0 10px;
  cursor: pointer;
}

.search-button {
  background-color: #d72638;
  border: none;
  color: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.search-button:hover {
  background-color: #b71c2a;
}
</style>
<script setup lang="ts">
import { ref } from "vue";
// import ProductCard from "@/components/molecules/ProductCard.vue";
import Img from "@/components/atoms/BaseImage.vue";
import Button from "@/components/atoms/ButtonAtom.vue";
import SearchBar from "@/components/molecules/SearchBar.vue";
import Select from "@/components/atoms/SelectAtom.vue";
import IconAtom from "../atoms/IconAtom.vue";
const selectedLocation = ref("");

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
        <div :class="'search-bar'">
          <SearchBar :class="'search-input'" :placeholder="'Encuetra tu cancha'" />
          <Select :id="'select'" :class="'location-select'" name="location"
            :options="[{ value: 'cdmx', label: 'CDMX' }, { value: 'guadalajara', label: 'Guadalajara' }, { value: 'monterrey', label: 'Monterrey' }]"
            v-model="selectedLocation">
          </Select>
          <Button class="search-button">
            <IconAtom :iconClass="'fa fa-search iClass'" :height="'20px'" :width="'15px'"></IconAtom>
          </Button>
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
  background-color: white;
  border-radius: 30px;
  display: flex;
  align-items: center;
  padding: 5px 0px;
  width: 40rem;
}

.search-input {
  flex: 1;
  border: none;
  outline: none;
  padding: 5px;
  font-size: 15px;
  border-radius: 20px;
  width: 20rem;
}

.location-select {
  font-size: 15px;
  margin: 0 10px;
  width: 150px;
  cursor: pointer;
  border: none;
  outline: none;
}

.location-select:disabled {
  background-color: #f0f0f0;
  cursor: not-allowed;
}

.search-button {
  border: none;
  border-radius: 50%;
  width: 30px;
  margin: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  color: black;
}

.search-button:hover {
  color: rgb(255, 255, 255);
  background-color: #d64350;
}
</style>
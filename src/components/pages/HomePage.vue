<script setup lang="ts">
import { ref } from "vue";
import Img from "@/components/atoms/BaseImage.vue";
import Button from "@/components/atoms/ButtonAtom.vue";
import SearchBar from "@/components/molecules/SearchBar.vue";
import Select from "@/components/atoms/SelectAtom.vue";
import IconAtom from "../atoms/IconAtom.vue";
const selectedLocation = ref("");
</script>

<template>
  <div class="home-page">
    <div class="hero-section text-center mb-5 position-relative">
      <Img :src="'https://assets.goal.com/images/v3/blt0bea61fc82528a87/dbbd6d07d4b7a8ed98fa0e0c37b3516c9aef605b.jpg'"
        :alt="'Hero Image'" :class="'img-fluid w-full mt-3'" />
      <div class="hero-content position-absolute top-50 start-50 translate-middle text-white">
        <h1 class="hero-title">Bienvenido a Chico</h1>
        <h2 class="hero-subtitle">Encuentra los mejores productos aquí</h2>
        <div class="hero-buttons my-3">
          <Button :class="'btn mx-2'">Canchas</Button>
          <Button :class="'btn mx-2'">Equipo</Button>
          <Button :class="'btn mx-2'">Mvp</Button>
        </div>
        <div class="search-bar">
          <IconAtom :iconClass="'fa-solid fa-magnifying-glass'" :height="'15px'" :width="'15px'" :color="'black'" />
          <SearchBar :class="'search-input'" :placeholder="'Encuentra tu cancha'" />
          <div class="custom-select-wrapper">
            <Select :id="'select'" :class="'locationSelect'" name="location" :options="[
              { value: 'cdmx', label: 'CDMX' },
              { value: 'guadalajara', label: 'Guadalajara' },
              { value: 'monterrey', label: 'Monterrey' }
            ]" v-model="selectedLocation" />
          </div>
          <Button class="search-button">
            <IconAtom :iconClass="'fa-solid fa-magnifying-glass'" :height="'20px'" :width="'15px'" />
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

.hero-section::before {
  content: "";
  position: absolute;
  top: 3%;
  left: 0;
  width: 100%;
  height: 100%;
  background:
    radial-gradient(circle at bottom left, rgba(219, 40, 65, 0.5), transparent 50%),
    radial-gradient(circle at bottom right, rgba(219, 40, 65, 0.5), transparent 50%);
  z-index: 2;
  pointer-events: none;
}

.hero-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  z-index: 10;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: bold;
}

.hero-subtitle {
  margin-bottom: 7%;
  font-size: 1.5rem;
  color: #ffffff;
  font-weight: bold;
}

.hero-buttons .btn {
  margin-bottom: 4%;
  font-size: 12px;
  border-radius: 20px;
  font-weight: bold;
  border-color: white;
  background-color: white;
  color: #DB2841;
  width: 100px;
}

.img-fluid {
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: 1;
}

.btn:hover {
  background-color: #DB2841;
  color: rgb(255, 255, 255);
  border-color: #DB2841;
}


.search-bar {
  background-color: white;
  border-radius: 30px;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  width: 40rem;
}

@media (max-width: 1080px) {
  .search-bar {
    width: 60%;
    margin-left: 1%;
  }
}

.search-input {
  flex: 1;
  border: none;
  outline: none;
  padding: 0px 0px;
  border-radius: 20px;
  background-color: transparent;
}

.locationSelect {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 100%;
  padding: 7px 20px 7px 10px;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 15px;
  color: #898989;
  cursor: pointer;
}

.custom-select-wrapper::after {
  content: "\f0d7";
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  position: absolute;
  top: 50%;
  right: 15%;
  transform: translateY(-50%);
  pointer-events: none;
  color: #858585;
  font-size: 13px;
}

.custom-select-wrapper {
  position: relative;
  width: 190px;
  margin: 0 10px;
}

.custom-select-wrapper .locationSelect:focus {
  outline: none;
}

.search-button {
  border: none;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #DB2841;
  color: rgb(78, 78, 78);
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.search-button:hover {
  background-color: #b83742;
}

.search-button .iClass {
  font-size: 16px;
}

@media (max-width: 1080px) {
  .search-bar {
    width: 100%;
    margin-left: 0%;
  }

  .search-input {
    font-size: 14px;
  }

  .locationSelect {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    /* margin-left: 30%; */
    justify-content: center;
    width: 100%;
    padding: 7px 5px 7px 5px;
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 15px;
    color: #898989;
    cursor: pointer;
  }

  .search-button {
    width: 35px;
    height: 35px;
  }

  .custom-select-wrapper {
    position: relative;
    width: 190px;
    margin: 0 10px;
  }


  .custom-select-wrapper::after {
    content: "\f0d7";
    font-family: "Font Awesome 5 Free";
    pointer-events: none;
    color: #858585;
    font-size: 13px;
  }
}
</style>
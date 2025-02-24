<script setup lang="ts">
import { onMounted, ref } from "vue";
import Icon from "@/components/atoms/IconAtom.vue";
import Button from "@/components/atoms/ButtonAtom.vue";

const isScrolled = ref(false);

onMounted(() => {
  window.addEventListener("scroll", () => {
    isScrolled.value = window.scrollY > 50;
  });
});
</script>

<template>
  <nav :class="['navbar', 'navbar-expand-md', 'fixed-top', { 'navbar-scrolled': isScrolled }]">
    <div class="container-fluid ps-5">
      <a class="navbar-brand" href="#">FUT CHAMPS</a>
      <Button :class="'navbar-toggler'" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </Button>

      <div class="offcanvas offcanvas-end custom-offcanvas" tabindex="-1" id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">FUTCHAMPS</h5>
          <Button class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></Button>
        </div>

        <div class="offcanvas-body d-flex justify-content-center align-items-center">

          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" tabindex="" aria-disabled="true">Tienda</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" tabindex="" aria-disabled="true">Contacto</a>
            </li>
          </ul>

          <ul class="navbar-nav justify-content-end mb-2 mb-lg-0 ul-md">
            <li class="nav-item pe-2">
              <a class="nav-link" aria-current="page" href="#">Es</a>
            </li>
            <li class="nav-item d-flex align-items-center pe-5">
              <Icon :width="'25px'" :iconClass="'fa-solid fa-user'"></Icon>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar-brand {
  font-weight: bold;
}

@media (min-width: 1980px) {
  .ul-md {
    flex-grow: 1;
    padding-right: 3rem;
  }
}

.bg-var {
  background-color: #343a40;
}

.nav-link:hover {
  color: rgb(209, 58, 58) !important;
}

.navbar-scrolled {
  background-color: #ebe8e8;
  transition: background-color 0.3s;
  opacity: 0.9;
}
</style>
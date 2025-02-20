<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">FUT CHAMPS</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">FUTCHAMPS</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body d-flex justify-content-center  align-items-center">

          <ul class="navbar-nav mx-auto mb-2 mb-lg-0 ">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Tienda</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#" tabindex="" aria-disabled="true">Contacto</a>
            </li>
          </ul>

          <ul class="navbar-nav justify-content-end ul-md">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Es</a>
            </li>
            <li class="nav-item d-flex align-items-center">
              <icon :width="'25px'" :class="'fa-solid fa-user'"></icon>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import icon from "@/components/atoms/Icon.vue";
</script>

<style scoped>
.navbar-brand {
  font-weight: bold;
}

@media (min-width: 1280px) {
  .ul-md {
    flex-grow: 1;
    padding-right: 3rem;
  }
}

.bg-var {
  background-color: #343a40;
  /* Puedes personalizar el color del menú */
}
</style>

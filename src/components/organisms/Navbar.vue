<script setup>
import Icon from "@/components/atoms/Icon.vue";
import Button from "@/components/atoms/Button.vue";
</script>
<template>
  <nav class="navbar navbar-expand-md fixed-top">
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
              <a class="nav-link active" aria-current="page" href="#">Tienda</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#" tabindex="" aria-disabled="true">Contacto</a>
            </li>
          </ul>

          <ul class="navbar-nav justify-content-end mb-2 mb-lg-0 ul-md ">
            <li class="nav-item pe-2">
              <a class="nav-link active" aria-current="page" href="#">Es</a>
            </li>
            <li class="nav-item d-flex align-items-center pe-5">
              <Icon :width="'25px'" :class="'fa-solid fa-user'"></Icon>
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

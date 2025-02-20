<template>
  <div class="checkout-page container">
    <h2 class="my-4">Finalizar compra</h2>
    
    <CheckoutForm />

    <div class="mt-4">
      <router-link to="/cart" class="btn btn-secondary">Volver al carrito</router-link>
    </div>
  </div>
</template>

<script setup>
import CheckoutForm from "@/components/organisms/CheckoutForm.vue";
</script>

<style scoped>
.checkout-page {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>

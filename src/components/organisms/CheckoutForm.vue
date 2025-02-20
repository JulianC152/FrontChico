<template>
  <form @submit.prevent="submitOrder">
    <div class="mb-3">
      <label for="name" class="form-label">Nombre completo</label>
      <input v-model="name" type="text" class="form-control" id="name" required />
    </div>

    <div class="mb-3">
      <label for="address" class="form-label">Dirección de envío</label>
      <input v-model="address" type="text" class="form-control" id="address" required />
    </div>

    <div class="mb-3">
      <label for="payment" class="form-label">Método de pago</label>
      <select v-model="paymentMethod" class="form-control" id="payment">
        <option value="credit-card">Tarjeta de crédito</option>
        <option value="paypal">PayPal</option>
        <option value="cash">Pago contra entrega</option>
      </select>
    </div>

    <button type="submit" class="btn btn-success w-100">Pagar</button>
  </form>
</template>

<script setup>
import { ref } from "vue";

const name = ref("");
const address = ref("");
const paymentMethod = ref("credit-card");

const submitOrder = () => {
  console.log("Pedido realizado con:", name.value, address.value, paymentMethod.value);
};
</script>

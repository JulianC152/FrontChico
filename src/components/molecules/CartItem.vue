<template>
  <div class="cart-item d-flex justify-content-between align-items-center p-3 border-bottom">
    <div>
      <h5>{{ product.name }}</h5>
      <p>{{ formatCurrency(product.price) }} x {{ product.quantity }}</p>
    </div>
    <button class="btn btn-danger" @click="$emit('remove', product.id)">Eliminar</button>
  </div>
</template>

<script setup>
import { formatCurrency } from "@/utils/formatCurrency";

defineProps({
  product: Object
});
</script>

<style scoped>
.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>

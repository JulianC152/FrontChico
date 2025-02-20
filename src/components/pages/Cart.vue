<template>
  <div class="cart-page container">
    <h2 class="my-4">Carrito de Compras</h2>

    <div v-if="cart.length > 0">
      <CartItem v-for="item in cart" :key="item.id" :product="item" @remove="removeFromCart" />

      <div class="d-flex justify-content-between mt-4">
        <h4>Total: {{ formatCurrency(totalPrice) }}</h4>
        <router-link to="/checkout" class="btn btn-success">Ir a Pagar</router-link>
      </div>
    </div>

    <div v-else class="text-center">
      <p>Tu carrito está vacío.</p>
      <router-link to="/" class="btn btn-primary">Volver a la tienda</router-link>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useCartStore } from "@/stores/cartStore";
import CartItem from "@/components/molecules/CartItem.vue";
import { formatCurrency } from "@/utils/formatCurrency";

const cartStore = useCartStore();
const cart = computed(() => cartStore.items);
const totalPrice = computed(() => cartStore.items.reduce((sum, item) => sum + item.price * item.quantity, 0));

const removeFromCart = (productId) => {
  cartStore.removeFromCart(productId);
};
</script>

<style scoped>
.cart-page {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>

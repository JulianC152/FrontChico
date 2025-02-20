<template>
  <div class="card">
    <img :src="product.image" class="card-img-top" alt="Product Image">
    <div class="card-body">
      <h5 class="card-title">{{ product.name }}</h5>
      <p class="card-text">{{ formatCurrency(product.price) }}</p>
      <Button type="btn-success" @click="addToCart">Agregar al carrito</Button>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cartStore';
import Button from '@/components/atoms/Button.vue';
import { formatCurrency } from '@/utils/formatCurrency';

const cartStore = useCartStore();

defineProps({ product: Object });

const addToCart = () => {
  cartStore.addToCart(product);
};
</script>
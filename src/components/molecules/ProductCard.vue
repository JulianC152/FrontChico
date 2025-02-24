<template>
  <div class="card">
    <img :src="product.image" class="card-img-top" alt="Product Image">
    <div class="card-body">
      <h5 class="card-title">{{ product.name }}</h5>
      <p class="card-text">{{ formatCurrency(product.price) }}</p>
      <Button :type="'button'" @click="addToCart">Agregar al carrito</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/cartStore';
import Button from '@/components/atoms/ButtonAtom.vue';
import { formatCurrency } from '@/utils/formatCurrency';

const cartStore = useCartStore();

const props = defineProps<{ product: { id: number; image: string; name: string; price: number } }>();

const addToCart = () => {
  cartStore.addToCart(props.product);
};
</script>
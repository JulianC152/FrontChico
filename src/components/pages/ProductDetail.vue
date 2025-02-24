<template>
  <div class="product-detail container">
    <div v-if="product">
      <div class="row">
        <div class="col-md-6">
          <img :src="product.image" :alt="product.name" class="img-fluid rounded" />
        </div>
        <div class="col-md-6">
          <h2>{{ product.name }}</h2>
          <p class="text-muted">{{ product.description }}</p>
          <h4 class="text-primary">{{ formatCurrency(product.price) }}</h4>

          <div class="mt-3">
            <button @click="addToCart" class="btn btn-success">
              Agregar al carrito
            </button>
            <router-link to="/cart" class="btn btn-outline-primary ms-2">
              Ver carrito
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="text-center">
      <p>Cargando producto...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useCartStore } from "@/stores/cartStore";
import { formatCurrency } from "@/utils/formatCurrency";

// const route = useRoute();
const cartStore = useCartStore();
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

const product = ref<Product | null>(null);

// const fetchProduct = async () => {
//   try {
//     // Simulación de API (reemplazar con fetch real)
//     const mockProducts = [
//       { id: 1, name: "Producto 1", description: "Descripción del producto 1", price: 199.99, image: "https://via.placeholder.com/300" },
//       { id: 2, name: "Producto 2", description: "Descripción del producto 2", price: 249.99, image: "https://via.placeholder.com/300" },
//     ];

//     // product.value = mockProducts.find(p => p.id === parseInt(route.params.id));
//   } catch (error) {
//     console.error("Error al cargar el producto:", error);
//   }
// };

const addToCart = () => {
  if (product.value) {
    cartStore.addToCart(product.value);
  }
};

// onMounted(fetchProduct);
</script>

<style scoped>
.product-detail {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>

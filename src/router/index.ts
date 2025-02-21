// router/index.ts (Configuración de Vue Router)
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/pages/Home.vue';
import ProductDetail from '@/components/pages/ProductDetail.vue';
import Cart from '@/components/pages/Cart.vue';
import Checkout from '@/components/pages/Checkout.vue';
import Login from '@/components/pages/Login.vue';
  
const routes = [
  { path: '/', component: Home },
  { path: '/product/:id', component: ProductDetail },
  { path: '/cart', component: Cart },
  { path: '/checkout', component: Checkout },
  { path: '/login', component: Login }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
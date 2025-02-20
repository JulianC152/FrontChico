// stores/cartStore.ts (Gestión del carrito con Pinia)
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as Array<{ id: number; name: string; price: number; quantity: number }>,
  }),
  actions: {
    addToCart(product: { id: number; name: string; price: number }) {
      const existingItem = this.items.find(item => item.id === product.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.items.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(productId: number) {
      this.items = this.items.filter(item => item.id !== productId);
    },
  },
});
<template>
  <form @submit.prevent="handleLogin" class="login-form">
    <div class="mb-3">
      <label for="email" class="form-label">Correo electrónico</label>
      <input v-model="email" type="email" class="form-control" id="email" required />
    </div>
    <div class="mb-3">
      <label for="password" class="form-label">Contraseña</label>
      <input v-model="password" type="password" class="form-control" id="password" required />
    </div>
    <button type="submit" class="btn btn-primary w-100">Ingresar</button>
  </form>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");
const password = ref("");

const handleLogin = () => {
  console.log("Iniciando sesión con:", email.value, password.value);
};
</script>

<style scoped>
.login-form {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>

<template>
  <form @submit.prevent="handleLogin" class="login-form">
    <div class="mb-3">
      <Label :for="email">Correo electrónico</Label>
      <Input v-model="email" :type="email" class="form-control" id="email" required />
    </div>
    <div class="mb-3">
      <Label :for="password">Contraseña</Label>
      <Input v-model="password" :type="password" class="form-control" id="password" required />
    </div>
    <Button type="submit" class="btn btn-primary w-100">Ingresar</Button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import Input from "@/components/atoms/Input.vue";
import Label from "@/components/atoms/Label.vue";
import Button from "@/components/atoms/Button.vue";

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

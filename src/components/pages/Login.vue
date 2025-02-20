<template>
  <div class="login-page">
    <h2>Iniciar sesión</h2>
    <LoginForm />
  </div>
</template>

<script setup>
import LoginForm from "@/components/molecules/LoginForm.vue";
</script>

<style scoped>
.login-page {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>

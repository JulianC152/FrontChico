//import '@/assets/main.scss';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@/assets/main.scss"; 
import 'bootstrap';

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.mount('#app');

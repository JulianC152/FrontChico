import App from './App.vue';
import { createApp } from 'vue';
import router from './router';
import { createPinia } from 'pinia';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser as faregular } from '@fortawesome/free-regular-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass,faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import '@/assets/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

library.add(faMagnifyingGlass,faCaretDown,faUser,faregular);
const app = createApp(App);
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(createPinia());
app.mount('#app');

import { createApp } from 'vue';
import App from './App';
import router from './router';
import store from './store'

const app = createApp(App).use(store).use(router);
app.use(router);
app.mount('#app');

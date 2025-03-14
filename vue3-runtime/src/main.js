import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { HelloWorld } from '../ui';

const app = createApp(App)
app.use(router)
app.component('hello-world', HelloWorld);
app.mount('#app')

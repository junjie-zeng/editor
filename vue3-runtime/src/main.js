import { createApp } from 'vue'
import App from './App.vue'
import { HelloWorld } from '../ui';

const app = createApp(App)
// app.use(router)
app.component('hello-world', HelloWorld);
app.mount('#app')

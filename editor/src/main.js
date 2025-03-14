

import { createApp } from 'vue';
import ElementPlus from 'element-plus';

import TMagicEditor from '@tmagic/editor';
import TMagicElementPlusAdapter from '@tmagic/element-plus-adapter';

import App from './App.vue';
import router from './router'

import 'element-plus/dist/index.css';
import '@tmagic/editor/dist/style.css';

createApp(App)
  .use(ElementPlus)
  .use(router)
  .use(TMagicEditor, TMagicElementPlusAdapter)
  .mount('#app');
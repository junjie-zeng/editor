import { createWebHashHistory, createRouter } from 'vue-router'



import runtimeDemo from '../views/runtimeDemo.vue'
import runtimePage from '../views/runtimePage.vue'

const routes = [
    { path: '/', component: runtimePage },
    { path: '/runtime-demo', component: runtimeDemo },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
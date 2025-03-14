import { createWebHashHistory, createRouter } from 'vue-router'



import EditorPage from '../views/EditorPage.vue'
import EditDemo from '../views/EditDemo.vue'

const routes = [
    { path: '/', component: EditorPage },
    { path: '/edit-demo', component: EditDemo },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
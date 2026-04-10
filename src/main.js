import { createApp } from 'vue'
import App from './App.vue'
import { createWebHistory,createRouter } from 'vue-router'
import Login from './Login.vue'
import Register from './Register.vue'

const routes = [
    {path: '/', component: App},
    {path: '/rekisteroidy', component: Register},
    {path: '/kirjaudu', component: Login}
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')

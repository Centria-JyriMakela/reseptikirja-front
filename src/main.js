import { createApp } from 'vue'
import App from './App.vue'
import { createWebHistory,createRouter } from 'vue-router'
import Login from './Login.vue'
import Register from './Register.vue'
import Home from './Home.vue'

const routes = [
    {path: '/', name: 'Koti', component: Home},
    {path: '/rekisteroidy', name: 'Rekisteröidy', component: Register},
    {path: '/kirjaudu', name: 'Kirjaudu', component: Login}
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')

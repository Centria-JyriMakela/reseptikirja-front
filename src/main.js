import { createApp } from 'vue'
import App from './App.vue'
import { createWebHistory,createRouter } from 'vue-router'
import Login from './Login.vue'
import Register from './Register.vue'
import Home from './Home.vue'
import Recipes from './Recipes.vue'
import Recipe from './Recipe.vue'

const routes = [
    {path: '/', name: 'Koti', component: Home},
    {path: '/rekisteroidy', name: 'Rekisteröidy', component: Register},
    {path: '/kirjaudu', name: 'Kirjaudu', component: Login},
    {path: '/reseptit', name: 'Reseptit', component: Recipes},
    {path: '/resepti/:id', name: 'Resepti', component: Recipe}
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')

import './style.css'

import { createApp } from 'vue'

import {
    createRouter,
    createWebHistory,
} from 'vue-router'

import App from './App.vue'
import Index from './pages/index-page.vue'
import Session from './pages/session-page.vue'

const app = createApp(App)

const routes = [
    { path: '/', component: Index },
    { path: '/sessions', component: Session },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


app.use(router)

app.mount('#app')

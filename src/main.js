import './style.css'

import {createApp} from 'vue'

import {
    createRouter,
    createWebHistory,
} from 'vue-router'

import App from './App.vue'
import CreateSession from './pages/create-session-page.vue'
import Index from './pages/index-page.vue'
import KnowledgeBase from './pages/knowledge-base-page.vue'
import Session from './pages/session-page.vue'

const app = createApp(App)

const routes = [
    { path: '/', component: Index },
    { path: '/sessions', component: Session },
    { path: '/create-session', component: CreateSession },
    { path: '/knowledge-base', component: KnowledgeBase },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


app.use(router)

app.mount('#app')


const routes = [
    { path: '/', component: index },
    { path: '/session', component: session },
]

import index from './components/index.vue'
import session from './components/session.vue'
export default routes;

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')

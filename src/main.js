import './style.css'

import {createApp} from 'vue'
import {createRouter, createWebHistory} from 'vue-router'

import App from './App.vue'
import CreateSession from './pages/create-session-page.vue'
import CreateTopic from './pages/create-topic-page.vue'
import Index from './pages/index-page.vue'
import Insights from './pages/insights-page.vue'
import KnowledgeBase from './pages/knowledge-base-page.vue'
import KnowledgeBaseSearch from './pages/knowledge-base-search-page.vue'
import Session from './pages/session-page.vue'
import SubscriptionInvoices from './pages/subscription-invoices-page.vue'
import SubscriptionOverview from './pages/subscription-overview-page.vue'
import SubscriptionPayment from './pages/subscription-payment-page.vue'
import Teams from './pages/teams-page.vue'

const app = createApp(App)

const routes = [
    {path: '/', component: Index},
    {path: '/sessions', component: Session},
    {path: '/create-session', component: CreateSession},
    {path: '/knowledge-base-search', component: KnowledgeBaseSearch},
    {path: '/knowledge-base', component: KnowledgeBase},
    {path: '/insights', component: Insights},
    {path: '/teams', component: Teams},
    {path: '/create-topic', component: CreateTopic},
    {path: '/subscription-overview', component: SubscriptionOverview},
    {path: '/subscription-payment', component: SubscriptionPayment},
    {path: '/subscription-invoices', component: SubscriptionInvoices},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


app.use(router)

app.mount('#app')

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
import MobileForm from './pages/mobile-form-page.vue'
import NewCustomerUpgrade from './pages/new-customer-upgrade-page.vue'
import NewGuideOverlay from './pages/new-guide-overlay-page.vue'
import NewGuide from './pages/new-guide-page.vue'
import SessionMobile from './pages/session-mobile-page.vue'
import Session from './pages/session-page.vue'
import SubscriptionInvoices from './pages/subscription-invoices-page.vue'
import SubscriptionOverviewMobile from './pages/subscription-overview-mobile-page.vue'
import SubscriptionOverview from './pages/subscription-overview-page.vue'
import SubscriptionPayment from './pages/subscription-payment-page.vue'
import SubscriptionUsersMobile from './pages/subscription-users-mobile-page.vue'
import SubscriptionUsers from './pages/subscription-users-page.vue'
import Teams from './pages/teams-page.vue'
import UpgradeBillingDetails from './pages/upgrade-billing-details-page.vue'
import UpgradeNumberOfUsers from './pages/upgrade-number-of-users-page.vue'
import UpgradePaymentMethods from './pages/upgrade-payment-methods-page.vue'

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
    {path: '/subscription-users', component: SubscriptionUsers},
    {path: '/new-customer-upgrade', component: NewCustomerUpgrade},
    {path: '/upgrade-number-of-users', component: UpgradeNumberOfUsers},
    {path: '/upgrade-billing-details', component: UpgradeBillingDetails},
    {path: '/upgrade-payment-methods', component: UpgradePaymentMethods},
    {path: '/new-guide', component: NewGuide},
    {path: '/new-guide-overlay', component: NewGuideOverlay},
    {path: '/sessions-mobile', component: SessionMobile},
    {path: '/mobile-form', component: MobileForm},
    {path: '/subscription-overview-mobile', component: SubscriptionOverviewMobile},
    {path: '/subscription-users-mobile', component: SubscriptionUsersMobile},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


app.use(router)

app.mount('#app')

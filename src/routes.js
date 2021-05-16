import Master from './components/Master.vue'
import FAQ from './components/FAQ/FaqSection.vue'

const routes = [
    { path: '/', 'component': Master, name: 'master' },
    { path: '/faq', 'component': FAQ, name: 'faq' }
]

export default routes
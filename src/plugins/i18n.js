import Vue from 'vue';
import VueI18n from 'vue-i18n';
import data_wadapay_es from '../data/es.json'

Vue.use(VueI18n);

const messages = {
    'EN': {
        welcomeMsg: 'Welcome to Your Vue.js App'
    },
    'ES': data_wadapay_es
    
};

export default new VueI18n({
    locale: 'ES', // set locale
    fallbackLocale: 'es', // set fallback locale
    messages, // set locale messages
});
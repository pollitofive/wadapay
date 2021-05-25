import Vue from 'vue';
import VueI18n from 'vue-i18n';
import data_wadapay_es from '../data/es.json'
import data_wadapay_en from '../data/en.json'

Vue.use(VueI18n);

const messages = {
    'EN': data_wadapay_en,
    'ES': data_wadapay_es
};

export default new VueI18n({
    locale: 'EN', // set locale
    fallbackLocale: 'es', // set fallback locale
    messages, // set locale messages
});
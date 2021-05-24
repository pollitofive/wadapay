import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'EN': {
        welcomeMsg: 'Welcome to Your Vue.js App'
    },
    'ES': {
        welcomeMsg: 'Bienvenido a tu aplicación Vue.js'
    }
};

export default new VueI18n({
    locale: 'EN', // set locale
    fallbackLocale: 'es', // set fallback locale
    messages, // set locale messages
});
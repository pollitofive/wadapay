<template>
    <!-- START HEADER -->
    <header class="header_wrap fixed-top">
        <div class="container-fluid">
            <nav class="navbar navbar-expand-lg"> 
                <router-link to="/" class="navbar-brand page-scroll animation" href="#home_section" data-animation="fadeInDown" data-animation-delay="1s"> 
                    <img class="logo_light" src="../assets/img/logo.png" alt="logo" /> 
                    <img class="logo_dark" src="../assets/img/logo_dark.png" alt="logo" /> 
                </router-link>
                <button class="navbar-toggler animation" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" data-animation="fadeInDown" data-animation-delay="1.1s"> 
                    <span class="ion-android-menu"></span> 
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav m-auto">
                        <li class="animation" data-animation="fadeInDown" data-animation-delay="1.2s"><a class="nav-link page-scroll nav_item" href="#about">Sobre Wadapay</a></li>
                        <li class="animation" data-animation="fadeInDown" data-animation-delay="1.3s"><a class="nav-link page-scroll nav_item" href="#why">Utilidad</a></li>
                        <li class="animation" data-animation="fadeInDown" data-animation-delay="1.5s"><a class="nav-link page-scroll nav_item" href="#roadmap">RoadMap</a></li>
                        <li class="animation" data-animation="fadeInDown" data-animation-delay="1.6s"><a class="nav-link page-scroll nav_item" href="#team-section">Team</a></li>
                        <li class="animation" data-animation="fadeInDown" data-animation-delay="1.7s"><a class="nav-link page-scroll nav_item" href="#faq">FAQ</a></li>
                    </ul>
                    <ul class="navbar-nav nav_btn align-items-center">
                        <li class="animation" data-animation="fadeInDown" data-animation-delay="2s">
                                <select name="countries" id="lng_select2" @change="onChange()" v-model="languageSelected"> 
                                    <option v-for="language in languages"
                                        v-bind:key="language.flag"
                                        :value="language.flag"
                                        :data-image="language.image"
                                        :data-title="language.title"
                                    >{{ language.flag }}</option>
                                </select>
                        </li>
                        <li class="animation" data-animation="fadeInDown" data-animation-delay="1.8s"><a class="btn btn-default btn-radius page-scroll" href="https://charts.bogged.finance/?token=0xEE1e22DB567897bB401311B79030344602EABE47" target="_blank">Gráfico</a></li>
                        <li class="animation" data-animation="fadeInDown" data-animation-delay="1.8s"><a class="btn btn-default btn-radius page-scroll" href="#" target="_blank">Contrato</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
    <!-- END HEADER --> 
</template>
<script>
import i18n from '../plugins/i18n';
export default {

    data() {
        return {
            languageSelected: 'ES',
            languages: [
                { flag: 'EN', language: 'en', title: 'English', image: '../public/img/eng.png' },
                { flag: 'ES', language: 'es', title: 'Español', image: '../public/img/fn.png' }
            ]
        }
    },
    methods: {
        onChange() {
            console.log(this.languageSelected)
            i18n.locale = this.languageSelected;
        }
    }
}
</script>
<template>
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
                        <li class="animation" data-animation="fadeInDown" data-animation-delay="1.2s"><a class="nav-link page-scroll nav_item" href="#about">{{ $t("header.about")}}</a></li>
                        <li class="animation" data-animation="fadeInDown" data-animation-delay="1.3s"><a class="nav-link page-scroll nav_item" href="#why">{{ $t("header.utility")}}</a></li>
                        <li class="animation" data-animation="fadeInDown" data-animation-delay="1.5s"><a class="nav-link page-scroll nav_item" href="#roadmap">{{ $t("header.roadmap")}}</a></li>
                        <li class="animation" data-animation="fadeInDown" data-animation-delay="1.6s"><a class="nav-link page-scroll nav_item" href="#team-section">{{ $t("header.team")}}</a></li>
                        <li class="animation" data-animation="fadeInDown" data-animation-delay="1.7s"><a class="nav-link page-scroll nav_item" href="#faq">{{ $t("header.faq")}}</a></li>
                        <li class="animation" data-animation="fadeInDown" data-animation-delay="1.7s"><a class="nav-link page-scroll nav_item" target="blank" download :href="getWhitepaper[$i18n.locale]">{{ $t("header.whitepaper")}}</a></li>
                    </ul>
                    <ul class="navbar-nav nav_btn align-items-center">
                        <li class="animation" data-animation="fadeInDown" data-animation-delay="2s">
                                <select name="countries" id="lng_select2" @change="onChange()" v-model="languageSelected" class="selectLanguage"> 
                                    <option class="optionLanguage" v-for="language in languages"
                                        v-bind:key="language.flag"
                                        :value="language.flag"
                                        :data-image="language.image"
                                        :data-title="language.title"
                                    >{{ language.flag }}</option>
                                </select>
                        </li>
                        <li class="animation" data-animation="fadeInDown" data-animation-delay="1.8s"><a class="btn btn-default btn-radius page-scroll" href="https://poocoin.app/tokens/0xc0b535b51500eb20b1c95e9cc35ab8b2ab89a28f" target="_blank">{{ $t("header.graphic")}}</a></li>
                        <li class="animation" data-animation="fadeInDown" data-animation-delay="1.8s"><a class="btn btn-default btn-radius page-scroll" href="https://bscscan.com/token/0xc0b535b51500eb20b1c95e9cc35ab8b2ab89a28f" target="_blank">{{ $t("header.contract")}}</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
</template>
<style scoped>

.selectLanguage {
    background-color: inherit;
    color: white;
    cursor: pointer;
    width: 75px;
    border: 0;
}

.optionLanguage {
    background-color: #121A4A
}

</style>
<script>
import i18n from '../plugins/i18n';
export default {

    data() {
        return {
            languageSelected: 'EN',
            languages: [
                { flag: 'EN', language: 'en', title: 'English', image: '../public/img/eng.png' },
                { flag: 'ES', language: 'es', title: 'Español', image: '../public/img/fn.png' }
            ],
            getWhitepaper: {
                EN: "../../public/documents/whitepaper-en.pdf",
                ES: "../../public/documents/whitepaper-es.pdf"
            }
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
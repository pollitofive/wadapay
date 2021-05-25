<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-12 col-sm-12 res_md_mb_40">
                    <div class="title_cyan_dark text-center">
                        <h4 class="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.2s" style="animation-delay: 0.2s; opacity: 1;">{{ $t("distribution-tokens.card1.title") }}</h4>
                    </div>
                    <div class="lg_pt_30 res_sm_pt_0 text-center animation animated fadeInRight" data-animation="fadeInRight" data-animation-delay="0.2s" style="animation-delay: 0.2s; opacity: 1;"> 
                        <img :src="getReservaCapital[$i18n.locale]" :alt="$t('distribution-tokens.card1.alt')"> 
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12">
                    <div class="title_cyan_dark text-center">
                        <h4 class="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.2s" style="animation-delay: 0.2s; opacity: 1;">{{ $t("distribution-tokens.card2.title") }}</h4>
                    </div>
                    <div class="lg_pt_30 res_sm_pt_0 text-center animation animated fadeInLeft" data-animation="fadeInLeft" data-animation-delay="0.2s" style="animation-delay: 0.2s; opacity: 1;"> 
                        <img :src="getDistribucionTokens[$i18n.locale]" :alt="$t('distribution-tokens.card2.alt')"> 
                    </div>
                </div>
            </div>    
        </div>
    </section>
</template>
<script>    
import ReservaCapitalEn from '../assets/img/reserva_capital_en.jpeg'
import ReservaCapitalEs from '../assets/img/reserva_capital_es.jpeg'
import DistribucionTokensEn from '../assets/img/distribucion_token_en.jpeg'
import DistribucionTokensEs from '../assets/img/distribucion_token_es.jpeg'

export default {
    data () {
            return {
                getReservaCapital: {
                    EN: ReservaCapitalEn,
                    ES: ReservaCapitalEs
                },
                getDistribucionTokens: {
                    EN: DistribucionTokensEn,
                    ES: DistribucionTokensEs
                }
            }
        }
}
</script>

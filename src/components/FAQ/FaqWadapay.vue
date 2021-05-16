<template>
    <!-- START SECTION FAQ -->
    <section id="faq">
        <div class="container">
            <div class="row">
                <div class="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                    <div class="title_cyan_dark text-center">
                        <h4 class="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Preguntas frecuentes</h4>
                    </div>
                </div>
            </div>
            <div class="row small_space">
                <div class="col-lg-8 col-md-12 offset-lg-2">
                    <div class="tab_content">
                        <ul class="nav nav-pills tab_nav_s2 justify-content-center" id="pills-tab" role="tablist">
                            <li class="nav-item animation" data-animation="fadeInUp" data-animation-delay="0.6s">
                                <a data-toggle="tab" href="#tabWadapay">Wadapay</a>
                            </li>
                            <li class="nav-item animation" data-animation="fadeInUp" data-animation-delay="0.7s">
                                <a data-toggle="tab" href="#tabWadaboo">Wadaboo</a>
                            </li>
                        </ul>
                        <div class="tab-content">
                            <div class="tab-pane active" id="tabWadapay" role="tabpanel">
                                <div id="accordion2" class="faq_question">
                                    <div class="card animation" data-animation="fadeInUp" data-animation-delay="0.4s">
                                        <div class="card-header" id="headingFive">
                                            <h6 class="mb-0"> <a data-toggle="collapse" href="#collapseFive" aria-expanded="true" aria-controls="collapseFive">How does one acquire bitcoins?</a> </h6>
                                        </div>
                                        <div id="collapseFive" class="collapse show" aria-labelledby="headingFive" data-parent="#accordion2">
                                            <div class="card-body"> While it may be possible to find individuals who wish to sell bitcoins in exchange for a credit card or PayPal payment, most exchanges do not allow funding via these payment methods. This is due to cases where someone buys bitcoins with PayPal, and then reverses their half of the transaction. This is commonly referred to as a chargeback.</div>
                                        </div>
                                    </div>
                                </div>	
                            </div>
                            <div class="tab-pane fade" id="tabWadaboo" role="tabpanel">
                                <div id="accordion3" class="faq_question">
                                    <question v-for="question in faq_wadaboo.slice(0, 4)" v-bind:key="question.number" :question="question"></question>
                                    <div style="text-align: center; margin-top: 20px">
                                        <router-link to="/faq" class="btn btn-default animation animated fadeInUp m-t-20" data-animation="fadeInUp" data-animation-delay="1.4s" style="animation-delay: 1.4s; opacity: 1;">Mas preguntas frecuentes <i class="ion-ios-arrow-thin-right"></i></router-link>
                                    </div>
                               </div>	
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- END SECTION FAQ -->
</template>
<script>
import Question from './Question'
import questions_wadaboo from '../../data/questions_wadaboo.js'
export default {
    name: 'faq',
    components: {
        Question
    },
    data() {
        return {
            faq_wadaboo: questions_wadaboo
        }
    }
}
</script>
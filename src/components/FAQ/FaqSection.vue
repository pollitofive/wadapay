<template>
    <div>
        <section id="home_section" class="section_banner section_gradiant3">
            <div id="banner_bg_effect" class="banner_effect"></div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12">
                        <div class="banner_text text-center">
                            <h1 class="animation" data-animation="fadeInUp" data-animation-delay="1.1s">Preguntas frecuentes</h1>
                            <ul class="breadcrumb bg-transparent justify-content-center animation m-0 p-0" data-animation="fadeInUp" data-animation-delay="1.3s">
                                <li><a href="#">Home</a> </li>
                                <li><span>FAQ</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- START SECTION FAQ -->
        <section id="faq">
            <div class="container">
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
                                        <question v-for="question in faq_wadaboo" v-bind:key="question.number" :question="question"></question>
                                    </div>	
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
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
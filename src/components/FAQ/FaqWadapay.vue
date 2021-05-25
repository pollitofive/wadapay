<template>
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
                                    <div id="accordion3" class="faq_question">
                                        <question v-for="question in $t('faq.questions_wadapay')" v-bind:key="question.number" :question="question"></question>
                                    </div>	
                                </div>	
                            </div>
                            <div class="tab-pane fade" id="tabWadaboo" role="tabpanel">
                                <div id="accordion3" class="faq_question">
                                    <question v-for="question in $t('faq.questions_wadaboo')" v-bind:key="question.number" :question="question"></question>
                               </div>	
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import Question from './Question'
export default {
    name: 'faq',
    components: {
        Question
    }
}
</script>
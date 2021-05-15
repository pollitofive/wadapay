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
                                    <div class="card animation" data-animation="fadeInUp" data-animation-delay="0.6s">
                                    <div class="card-header" id="headingSix">
                                        <h6 class="mb-0"> <a class="collapsed" data-toggle="collapse" href="#collapseSix" aria-expanded="false" aria-controls="collapseSix">Can I make money with Bitcoin?</a> </h6>
                                    </div>
                                    <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#accordion2">
                                        <div class="card-body"> You should never expect to get rich with Bitcoin or any emerging technology. It is always important to be wary of anything that sounds too good to be true or disobeys basic economic rules.</div>
                                    </div>
                                    </div>
                                    <div class="card animation" data-animation="fadeInUp" data-animation-delay="0.8s">
                                    <div class="card-header" id="headingSeven">
                                        <h6 class="mb-0"> <a class="collapsed" data-toggle="collapse" href="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">What happens when bitcoins are lost?</a> </h6>
                                    </div>
                                    <div id="collapseSeven" class="collapse" aria-labelledby="headingSeven" data-parent="#accordion2">
                                        <div class="card-body">When a user loses his wallet, it has the effect of removing money out of circulation. Lost bitcoins still remain in the block chain just like any other bitcoins. However, lost bitcoins remain dormant forever because there is no way for anybody to find the private key(s) that would allow them to be spent again. Because of the law of supply and demand, when fewer bitcoins are available, the ones that are left will be in higher demand and increase in value to compensate.</div>
                                    </div>
                                    </div>
                                    <div class="card animation" data-animation="fadeInUp" data-animation-delay="1s">
                                    <div class="card-header" id="headingEight">
                                        <h6 class="mb-0"> <a class="collapsed" data-toggle="collapse" href="#collapseEight" aria-expanded="false" aria-controls="collapseEight">Who controls the Bitcoin network?</a> </h6>
                                    </div>
                                    <div id="collapseEight" class="collapse" aria-labelledby="headingEight" data-parent="#accordion2">
                                        <div class="card-body">Nobody owns the Bitcoin network much like no one owns the technology behind email. Bitcoin is controlled by all Bitcoin users around the world. While developers are improving the software, they can't force a change in the Bitcoin protocol because all users are free to choose what software and version they use.</div>
                                    </div>
                                    </div>
                            </div>	
                            </div>
                            <div class="tab-pane fade" id="tabWadaboo" role="tabpanel">
                                <div id="accordion3" class="faq_question">
                                    <div class="card animation" data-animation="fadeInUp" data-animation-delay="0.4s" v-for="question in faq_wadaboo"  v-bind:key="question.number">
                                        <div class="card-header" :id="'heading' + question.number">
                                            <h6 class="mb-0"> <a :class="(question.number != 1) ? 'collapsed' : 'collapse'" data-toggle="collapse" :href="'#collapse' + question.number" :aria-expanded="(question.number == 1) ? 'true' : 'false'" :aria-controls="'collapse' + question.number">{{ question.question }}</a> </h6>
                                        </div>
                                        <div :id="'collapse' + question.number" :class="(question.number == 1) ? 'collapse show' : 'collapse'" :aria-labelledby="'heading' + question.number" data-parent="#accordion3">
                                            <div class="card-body">{{ question.answer }}</div>
                                        </div>
                                    </div>
                                    <div style="text-align: center; margin-top: 20px">
                                        <a href="#" class="btn btn-default animation animated fadeInUp m-t-20" data-animation="fadeInUp" data-animation-delay="1.4s" style="animation-delay: 1.4s; opacity: 1;">Mas preguntas frecuentes <i class="ion-ios-arrow-thin-right"></i></a>
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
export default {
    name: 'faq',
    data() {
        return {
            faq_wadaboo: [
                {
                    'number': 1,
                    'question': '¿Qué es la subasta inversa electrónica?',
                    'answer': 'Una subasta inversa o reversa es un tipo de subasta en la que se invierten los papeles de comprador y el vendedor. En una subasta ordinaria, los compradores compiten para obtener un bien o servicio, ofreciendo precios cada vez más altos, en cambio en una subasta inversa, los proveedores ofrecen precios más bajos.'
                },
                {
                    'number': 2,
                    'question': '¿Cómo publico una subasta inversa?',
                    'answer': 'Si quieres publicar una necesidad de compra, en el panel principal o en Mis Compras, verás un botón que dice “Nueva publicación”. Completa los campos lo más detalladamente posible todos los campos (es muy importante ya que cuantos más datos brindes, mejor entenderá el Usuario Proveedor)  en el campo 1, pulsa el botón de “ Agregar ítems” (puedes agregar hasta 15 productos por publicación) en el campo 2 y luego “Guardar” para hacer efectiva una publicación.'
                },
                {
                    'number': 3,
                    'question': '¿Cuánto tiempo dura una subasta inversa?',
                    'answer': 'Desde que se publica la necesidad de compra, hasta que llega el día y horario de fin de subasta dispuesto por el Usuario Comprador. Lo vas a visualizar asi: Tiempo restante: 04d 19h 37m 24s.'
                },
                {
                    'number': 4,
                    'question': '¿Cuál es el monto mínimo para ofertar un proceso de subasta inversa?',
                    'answer': 'No hay monto mínimo, solo tienes que ofertar menos que la oferta anterior.'
                }

            ]
        }
    }
}
</script>
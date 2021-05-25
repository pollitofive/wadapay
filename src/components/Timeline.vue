<template>
    <section id="roadmap" class="section_gradiant3" data-z-index="1" data-parallax="scroll" data-image-src="assets/images/roadmap_bg4.png">
        <div class="container">
            <div class="row text-center">
            <div class="col-lg-6 col-md-12 offset-lg-3">
                <div class="title_default_light text-center">
                <h4 class="animation" data-animation="fadeInUp" data-animation-delay="0.2s">{{ $t("roadmap.title") }}</h4>
                </div>
            </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="timeline owl-carousel small_space">
                        <div class="item">
                            <div class="timeline_box complete">
                            <div class="timeline_inner">
                                <div class="timeline_circle"></div>
                                <h6 class="animation" data-animation="fadeInUp" data-animation-delay="0.3s">{{ $t("roadmap.item1.date") }}</h6>
                                <p class="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Se crean 200MM de WPAY</p>
                            </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="timeline_box complete">
                            <div class="timeline_inner">
                                <div class="timeline_circle"></div>
                                <h6 class="animation" data-animation="fadeInUp" data-animation-delay="0.3s">{{ $t("roadmap.item2.date") }}</h6>
                                <p class="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Se lista WPAY en Pancakeswap</p>
                            </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="timeline_box complete">
                            <div class="timeline_inner">
                                <div class="timeline_circle"></div>
                                <h6 class="animation" data-animation="fadeInUp" data-animation-delay="0.3s">{{ $t("roadmap.item3.date") }}</h6>
                                <p class="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Wadapay empieza la comercialización en los distintos canales </p>
                            </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="timeline_box current">
                            <div class="timeline_inner" style="color: #ffffff;font-size: 12px;">
                                <div class="timeline_circle"></div>
                                <h6 class="animation" data-animation="fadeInUp" data-animation-delay="0.3s">{{ $t("roadmap.item4.date") }}</h6>
                                <li class="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Wadaboo invierte en marketing Argentina</li>
                                <li class="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Integración de Wadapay con Wadaboo</li>
                                <li class="animation" data-animation="fadeInUp" data-animation-delay="0.4s">WPAY se lista en Hotbit, Gate.io, y Poloniex</li>
                            </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="timeline_box">
                            <div class="timeline_inner" style="color: #ffffff;font-size: 12px;">
                                <div class="timeline_circle"></div>
                                <h6 class="animation" data-animation="fadeInUp" data-animation-delay="0.3s">{{ $t("roadmap.item5.date") }}</h6>
                                <li class="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Wadaboo abre operaciones en Chile</li>
                                <li class="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Wadaboo invierte en marketing Chile</li>
                            </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="timeline_box">
                                <div class="timeline_inner" style="color: #ffffff;font-size: 12px;">
                                    <div class="timeline_circle"></div>
                                    <h6 class="animation" data-animation="fadeInUp" data-animation-delay="0.3s">{{ $t("roadmap.item6.date") }}</h6>
                                    <li class="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Tratamos de abrir en otros exchanges</li>
                                    <li class="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Wadaboo abre operaciones en Colombia y Brasil</li>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="timeline_box">
                                <div class="timeline_inner" style="color: #ffffff;font-size: 12px;">
                                    <div class="timeline_circle"></div>
                                    <h6 class="animation" data-animation="fadeInUp" data-animation-delay="0.3s">{{ $t("roadmap.item7.date") }}</h6>
                                    <li class="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Wadaboo abre operaciones en México, España y Estados Unidos</li>
                                    <li class="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Hacemos una fuerte inversión en marketing y publicidad en estos países</li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="waveWrapper">
            <div class="wave waveTop"></div>
            <div class="wave waveMiddle"></div>
        </div>

    </section>
</template>
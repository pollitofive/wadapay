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
                                <p class="animation" data-animation="fadeInUp" data-animation-delay="0.4s">{{ $t("roadmap.item1.description") }}</p>
                            </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="timeline_box current">
                            <div class="timeline_inner">
                                <div class="timeline_circle"></div>
                                <h6 class="animation" data-animation="fadeInUp" data-animation-delay="0.3s">{{ $t("roadmap.item2.date") }}</h6>
                                <p class="animation" data-animation="fadeInUp" data-animation-delay="0.4s">{{ $t("roadmap.item2.description") }}</p>
                            </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="timeline_box">
                            <div class="timeline_inner">
                                <div class="timeline_circle"></div>
                                <h6 class="animation" data-animation="fadeInUp" data-animation-delay="0.3s">{{ $t("roadmap.item3.date") }}</h6>
                                <p class="animation" data-animation="fadeInUp" data-animation-delay="0.4s">{{ $t("roadmap.item3.description") }} </p>
                            </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="timeline_box">
                            <div class="timeline_inner">
                                <div class="timeline_circle"></div>
                                <h6 class="animation" data-animation="fadeInUp" data-animation-delay="0.3s">{{ $t("roadmap.item4.date") }}</h6>
                                <p class="animation" data-animation="fadeInUp" data-animation-delay="0.4s">{{ $t("roadmap.item4.description") }} </p>
                            </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="timeline_box ">
                            <div class="timeline_inner" style="color: #ffffff;font-size: 12px;">
                                <div class="timeline_circle"></div>
                                <h6 class="animation" data-animation="fadeInUp" data-animation-delay="0.3s">{{ $t("roadmap.item5.date") }}</h6>
                                <li class="animation" data-animation="fadeInUp" data-animation-delay="0.4s">{{ $t("roadmap.item5.description1") }}</li>
                                <li class="animation" data-animation="fadeInUp" data-animation-delay="0.4s">{{ $t("roadmap.item5.description2") }}</li>
                            </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="timeline_box">
                                <div class="timeline_inner" style="color: #ffffff;font-size: 12px;">
                                    <div class="timeline_circle"></div>
                                    <h6 class="animation" data-animation="fadeInUp" data-animation-delay="0.3s">{{ $t("roadmap.item6.date") }}</h6>
                                    <li class="animation" data-animation="fadeInUp" data-animation-delay="0.4s">{{ $t("roadmap.item6.description1") }}</li>
                                    <li class="animation" data-animation="fadeInUp" data-animation-delay="0.4s">{{ $t("roadmap.item6.description2") }}</li>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="timeline_box">
                                <div class="timeline_inner" style="color: #ffffff;font-size: 12px;">
                                    <div class="timeline_circle"></div>
                                    <h6 class="animation" data-animation="fadeInUp" data-animation-delay="0.3s">{{ $t("roadmap.item7.date") }}</h6>
                                    <li class="animation" data-animation="fadeInUp" data-animation-delay="0.4s">{{ $t("roadmap.item7.description1") }}</li>
                                    <li class="animation" data-animation="fadeInUp" data-animation-delay="0.4s">{{ $t("roadmap.item7.description2") }}</li>
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
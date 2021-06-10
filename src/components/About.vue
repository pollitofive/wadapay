<template>
    <section id="about" class="imagen-banner">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-12 col-sm-12">
                    <div class="text-center res_md_mb_30 res_sm_mb_20">
                        <img class="animation" data-animation="zoomIn" data-animation-delay="0.2s" src="../assets/img/sobre-nosotros.png" alt="aboutimg10"/>
                        <div class="about_logo_icon">
                            <img src="../assets/img/about_icon.png" alt="about_icon">
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12 text_md_center">
                    <div class="title_cyan_dark">
                    <h4 class="animation" data-animation="fadeInUp" data-animation-delay="0.4s">{{ $t("about.title-about") }}</h4>
                    <p class="animation" data-animation="fadeInUp" data-animation-delay="0.6s">{{ $t("about.paragraph1") }}</p>
                    <p class="animation" data-animation="fadeInUp" data-animation-delay="1s">{{ $t("about.paragraph2") }}</p>
                    <!-- <a href="#" class="btn btn-default btn-radius">{{ $t("about.where-buy") }} <i class="ion-ios-arrow-thin-right"></i></a>-->
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
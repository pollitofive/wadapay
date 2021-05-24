<template>
    <section id="why" class="bg_gray3">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 offset-lg-3 col-md-12 col-sm-12">
                    <div class="title_cyan_dark text-center">
                    <h4 class="animation" data-animation="fadeInUp" data-animation-delay="0.2s">{{ $t("why-wadapay.title-why") }}</h4>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="box_wrap radius_box bg-white text-center animation" data-animation="fadeInUp" data-animation-delay="0.6s">
                        <img src="../assets/img/wc_icon4.png" alt="wc_icon1"/>
                        <h4>{{ $t("why-wadapay.card1.title") }}</h4>
                        <p>{{ $t("why-wadapay.card1.subtitle") }}</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="box_wrap radius_box bg-white text-center animation" data-animation="fadeInUp" data-animation-delay="0.8s">
                        <img src="../assets/img/wc_icon5.png" alt="wc_icon2"/>
                        <h4>{{ $t("why-wadapay.card2.title") }}</h4>
                        <p>{{ $t("why-wadapay.card2.subtitle") }}</p>
                    </div>
                </div>
                <div class="col-lg-4 offset-lg-0 col-md-6 offset-md-3 col-sm-12">
                    <div class="box_wrap radius_box bg-white text-center animation" data-animation="fadeInUp" data-animation-delay="1s">
                        <img src="../assets/img/wc_icon6.png" alt="wc_icon3"/>
                        <h4>{{ $t("why-wadapay.card3.title") }}</h4>
                        <p>{{ $t("why-wadapay.card3.subtitle") }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<template>
    <!-- START SECTION BANNER -->
    <section id="home_section" class="section_banner section_gradiant3">
        <div id="banner_bg_effect" class="banner_effect"></div>
        <div class="container">
            <div class="divider large_divider"></div>
            <div class="divider small_divider d-none d-lg-block"></div>
            <div class="row justify-content-center">
                <div class="col-lg-6 col-md-12 col-sm-12 res_md_mt_50 res_sm_mt_20 pt-5 pt-lg-0 order-lg-first">
                    <div class="banner_text_s2 text_md_center">
                        <h1 class="animation text-white" data-animation="fadeInUp" data-animation-delay="1.1s"><strong>{{ $t("start-banner.project-title")}} </strong>{{ $t("start-banner.start-message")}} </h1>
                        <p class="animation text-white" data-animation="fadeInUp" data-animation-delay="1.3s">{{ $t("start-banner.start-subtitle")}} </p>
                        <div class="btn_group animation" data-animation="fadeInUp" data-animation-delay="1.4s"> 
                            <a href="https://wadaboo.com/" target="_blank" class="btn btn-default btn-radius page-scroll"><i class="fa fa-file-word-o"></i>{{ $t("start-banner.what-is-wadaboo")}}</a> 
                        </div>
                    </div>
                </div>
                <div class="col-lg-5 offset-lg-1 col-md-12 col-sm-12 pb-5 pb-lg-0 order-first">
                    <div class="banner_inner token_gradiant position-relative">
                        <div class="tk_countdown transparent_bg token_bg token_circle text-center animation" data-animation="fadeIn" data-animation-delay="1.1s">
                            <div class="banner_text tk_counter_inner">
                                <div class="tk_countdown_time p-0 transparent_bg box_shadow_none animation" data-animation="fadeInUp" data-animation-delay="1.2s" data-time="2021/06/15 12:00:00"></div>
                                <a href="https://forms.gle/Zjrk3VvePqQi7gkr5" class="btn btn-default btn-radius animation" data-animation="fadeInUp" data-animation-delay="1.40s" target="_blank">{{ $t("start-banner.buy-tokens")}}<i class="ion-ios-arrow-thin-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-8 offset-lg-2">
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 pl-2 pr-2">
                                    <div class="pr_box">
                                        <h6 class="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.2s" style="animation-delay: 0.2s; opacity: 1;">{{ $t("start-banner.total-created")}}:</h6>
                                        <p class="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.4s" style="animation-delay: 0.4s; opacity: 1;">200.000.000.000 Wapay</p>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 pl-2 pr-2">
                                    <div class="pr_box">
                                        <h6 class="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.6s" style="animation-delay: 0.6s; opacity: 1;">{{ $t("start-banner.start-sell")}}:</h6>
                                        <p class="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.8s" style="animation-delay: 0.8s; opacity: 1;">{{ $t("start-banner.date-start-sell") }} <br>{{ $t("start-banner.hour-start-sell") }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="vertical_social">
                    <ul class="list_none d-flex d-lg-block">
                        <li><a href="https://www.facebook.com/wadapaynet" target="_blank"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="https://t.me/wadapaychat" target="_blank"><i class="fa fa-telegram"></i></a></li>
                        <li><a href="https://twitter.com/wadapay" target="_blank"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="https://www.reddit.com/r/Wadapay" target="_blank"><i class="fa fa-reddit"></i></a></li>
                    </ul>
                </div>
        </div>
        <div class="divider small_divider d-none d-lg-block"></div>
        <div class="divider large_divider d-none d-lg-block"></div>
        </div>
        <div class="banner_light_gradiant"></div>
    </section>
    <!-- END SECTION BANNER --> 
</template>

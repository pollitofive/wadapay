<template>
    <footer class="section_gradiant3" data-z-index="1" data-parallax="scroll" data-image-src="assets/images/roadmap_bg4.png">
        <div class="top_footer">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-6">
                        <div class="footer_logo mb-3 animation" data-animation="fadeInUp" data-animation-delay="0.2s"> 
                            <h4 class="footer_title_s2 animation" data-animation="fadeInUp" data-animation-delay="0.2s" style="text-align: center">Wadapay</h4>
                        </div>
                        <div class="footer_desc small_text">
                            <p class="animation" data-animation="fadeInUp" data-animation-delay="0.4s">{{ $t("footer.wadapay.description") }}</p>
                        </div>
                        <ul class="list_none social_icon social_bg_tran d-md-flex mt-3">
                                <li class="animation" data-animation="fadeInUp" data-animation-delay="0.4s"><a href="https://www.facebook.com/wadapaynet" target="_blank"><i class="fa fa-facebook"></i></a></li>
                                <li class="animation" data-animation="fadeInUp" data-animation-delay="0.5s"><a href="https://t.me/wadapaychat" target="_blank"><i class="fa fa-telegram"></i></a></li>
                                <li class="animation" data-animation="fadeInUp" data-animation-delay="0.6s"><a href="https://twitter.com/wadapay" target="_blank"><i class="fa fa-twitter"></i></a></li>
                                <li class="animation" data-animation="fadeInUp" data-animation-delay="0.7s"><a href="https://www.reddit.com/r/Wadapay" target="_blank"><i class="fa fa-reddit"></i></a></li>
                            </ul>
                    </div>
                    <div class="col-lg-2 col-md-3 col-sm-6 col-auto res_sm_mt_20" style="text-align: center">
                        <h4 class="footer_title_s2 animation" data-animation="fadeInUp" data-animation-delay="0.2s">Social</h4>
                        <ul class="footer_link list_none">
                            <li class="animation" data-animation="fadeInUp" data-animation-delay="0.2s"><a href="https://t.me/wadapaychat" target="_blank">Telegram</a></li>
                            <li class="animation" data-animation="fadeInUp" data-animation-delay="0.2s"><a href="https://www.reddit.com/r/Wadapay" target="_blank">Reddit</a></li>
                            <li class="animation" data-animation="fadeInUp" data-animation-delay="0.2s"><a href="https://www.facebook.com/wadapaynet" target="_blank">Facebook</a></li>
                            <li class="animation" data-animation="fadeInUp" data-animation-delay="0.2s"><a href="https://twitter.com/wadapay" target="_blank">Twitter</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-2 col-md-3 col-sm-6 col-auto res_sm_mt_20" style="text-align: center">
                        <h4 class="footer_title_s2 animation" data-animation="fadeInUp" data-animation-delay="0.2s">{{ $t("footer.useful-links.title") }}</h4>
                        <ul class="footer_link list_none">
                            <li class="animation" data-animation="fadeInUp" data-animation-delay="0.2s"><a href="https://www.rugscreen.com/scan/certificate?tokenid=ea0e12615f" target="_blank">{{ $t("footer.useful-links.buy-wpay") }}</a></li>
                            <li class="animation" data-animation="fadeInUp" data-animation-delay="0.3s"><a href="https://www.dextools.io/app/bsc/pair-explorer/0xfc474095b2136e5348c704fc198a079a164562d2" target="_blank">{{ $t("header.graphic") }}</a></li>
                            <li class="animation" data-animation="fadeInUp" data-animation-delay="0.6s"><a href="https://wadaboo.com" target="_blank">Wadaboo</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-4 col-md-12 res_md_mt_30 res_sm_mt_20" style="text-align: center">
                        <h4 class="footer_title_s2 animation" data-animation="fadeInUp" data-animation-delay="0.2s">{{ $t("footer.quick-access") }}</h4>
                        <ul class="footer_link list_none">
                            <li class="animation" data-animation="fadeInUp" data-animation-delay="0.2s"><a href="#about" class="nav-link page-scroll nav_item active">{{ $t("header.about") }}</a></li>
                            <li class="animation" data-animation="fadeInUp" data-animation-delay="0.3s"><a href="#why" class="nav-link page-scroll nav_item active">{{ $t("header.utility") }}</a></li>
                            <li class="animation" data-animation="fadeInUp" data-animation-delay="0.6s"><a href="#roadmap" class="nav-link page-scroll nav_item active">{{ $t("header.roadmap") }}</a></li>
                            <li class="animation" data-animation="fadeInUp" data-animation-delay="0.8s"><a href="#team-section" class="nav-link page-scroll nav_item active">{{ $t("header.team") }}</a></li>
                            <li class="animation" data-animation="fadeInUp" data-animation-delay="0.9s"><a href="#faq" class="nav-link page-scroll nav_item active">{{ $t("header.faq") }}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom-footer">
            <div class="container">
            <div class="row">
                    <div class="col-md-12">
                        <div class="footer_bottom">
                            <div class="row">
                                <div class="col-md-12 text-center">
                                <p class="copyright">Copyright Wadapay; {{ new Date().getFullYear() }} {{ $t("footer.copyright") }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            </div>
        </div>
    </footer>
</template>
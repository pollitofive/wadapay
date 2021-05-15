<template>
  <div id="app">
    <!-- START LOADER -->
    <div id="loader-wrapper">
        <div id="loading-center-absolute">
            <div class="object" id="object_four"></div>
            <div class="object" id="object_three"></div>
            <div class="object" id="object_two"></div>
            <div class="object" id="object_one"></div>
        </div>
        <div class="loader-section section-left"></div>
        <div class="loader-section section-right"></div>

    </div>
<!-- END LOADER --> 

    <header-wadapay></header-wadapay>

    <start-banner></start-banner>

    <about></about>

    <why-wadapay></why-wadapay>

    <timeline></timeline>

<!-- START SECTION WHITEPAPER -->
<section id="whitepaper">
	<div class="container">
    	<div class="row">
        	<div class="col-lg-6 col-md-12 offset-lg-3">
            	<div class="title_cyan_dark text-center">
                	<h4 class="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Download Our Documents</h4>
                    <p class="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Marketers create whitepapers to educate their audience about a particular issue, or explain and promote a particular methodology</p>
                </div>
            </div>
        </div>
    	<div class="row align-items-center small_space">	
        	<div class="col-lg-7 order-md-first">
            	<p class="animation" data-animation="fadeInUp" data-animation-delay="0.7s">A purely peer-to-peer version of electronic cash would allow online payments to be sent directly from one party to another without going through a financial institution.Digital signatures provide part of the solution, but the main benefits are lost if a trusted third party is still required to prevent double-spending.</p>
                <p  class="animation" data-animation="fadeInUp" data-animation-delay="0.8s">The network timestamps transactions by hashing them into an ongoing chain of hash-based proof-of-work, forming a record that cannot be changed without redoing the proof-of-work.</p>
                <div class="document_wrap">
                	<label>Select Document</label>
                    <div class="document_dropdown">
                        <select id="doc_select">
                            <option value="Whitepaper">Whitepaper</option>
                            <option value="Onepaper">Onepaper</option>
                            <option value="Terms">Terms Conditions</option>
                            <option value="Privacy">Privacy Policy</option>
                        </select> 
                    </div>   
                </div>    
                <div class="tab-content document_tab">
                    <div class="tab-pane fade show active" id="Whitepaper" role="tabpanel">
                       <ul class="list_none doc_lan text-center">
                        <li  class="animation" data-animation="fadeInUp" data-animation-delay="0.2s"><a href="#"><img src="assets/images/eng_flage.png" alt="eng_flage"><span>English<i class="ion-ios-download-outline"></i></span></a></li>
                        <li  class="animation" data-animation="fadeInUp" data-animation-delay="0.4s"><a href="#"><img src="assets/images/rus_flage.png" alt="eng_flage"><span>Russian<i class="ion-ios-download-outline"></i></span></a></li>
                        <li  class="animation" data-animation="fadeInUp" data-animation-delay="0.6s"><a href="#"><img src="assets/images/chn_flage.png" alt="eng_flage"><span>Chinese<i class="ion-ios-download-outline"></i></span></a></li>
                        <li  class="animation" data-animation="fadeInUp" data-animation-delay="0.8s"><a href="#"><img src="assets/images/frn_flage.png" alt="eng_flage"><span>French<i class="ion-ios-download-outline"></i></span></a></li>
                    </ul>         
                    </div>
                    <div class="tab-pane fade" id="Onepaper" role="tabpanel">
                       <ul class="list_none doc_lan text-center">
                        <li  class="animation" data-animation="fadeInUp" data-animation-delay="0.2s"><a href="#"><img src="assets/images/eng_flage.png" alt="eng_flage"><span>English<i class="ion-ios-download-outline"></i></span></a></li>
                        <li  class="animation" data-animation="fadeInUp" data-animation-delay="0.4s"><a href="#"><img src="assets/images/rus_flage.png" alt="eng_flage"><span>Russian<i class="ion-ios-download-outline"></i></span></a></li>
                        <li  class="animation" data-animation="fadeInUp" data-animation-delay="0.6s"><a href="#"><img src="assets/images/chn_flage.png" alt="eng_flage"><span>Chinese<i class="ion-ios-download-outline"></i></span></a></li>
                        <li  class="animation" data-animation="fadeInUp" data-animation-delay="0.8s"><a href="#"><img src="assets/images/frn_flage.png" alt="eng_flage"><span>French<i class="ion-ios-download-outline"></i></span></a></li>
                    </ul>         
                    </div>
                    <div class="tab-pane fade" id="Terms" role="tabpanel">
                       <ul class="list_none doc_lan text-center">
                        <li  class="animation" data-animation="fadeInUp" data-animation-delay="0.2s"><a href="#"><img src="assets/images/eng_flage.png" alt="eng_flage"><span>English<i class="ion-ios-download-outline"></i></span></a></li>
                        <li  class="animation" data-animation="fadeInUp" data-animation-delay="0.4s"><a href="#"><img src="assets/images/rus_flage.png" alt="eng_flage"><span>Russian<i class="ion-ios-download-outline"></i></span></a></li>
                        <li  class="animation" data-animation="fadeInUp" data-animation-delay="0.6s"><a href="#"><img src="assets/images/chn_flage.png" alt="eng_flage"><span>Chinese<i class="ion-ios-download-outline"></i></span></a></li>
                        <li  class="animation" data-animation="fadeInUp" data-animation-delay="0.8s"><a href="#"><img src="assets/images/frn_flage.png" alt="eng_flage"><span>French<i class="ion-ios-download-outline"></i></span></a></li>
                    </ul>         
                    </div>
                    <div class="tab-pane fade" id="Privacy" role="tabpanel">
                       <ul class="list_none doc_lan text-center">
                        <li  class="animation" data-animation="fadeInUp" data-animation-delay="0.2s"><a href="#"><img src="assets/images/eng_flage.png" alt="eng_flage"><span>English<i class="ion-ios-download-outline"></i></span></a></li>
                        <li  class="animation" data-animation="fadeInUp" data-animation-delay="0.4s"><a href="#"><img src="assets/images/rus_flage.png" alt="eng_flage"><span>Russian<i class="ion-ios-download-outline"></i></span></a></li>
                        <li  class="animation" data-animation="fadeInUp" data-animation-delay="0.6s"><a href="#"><img src="assets/images/chn_flage.png" alt="eng_flage"><span>Chinese<i class="ion-ios-download-outline"></i></span></a></li>
                        <li  class="animation" data-animation="fadeInUp" data-animation-delay="0.8s"><a href="#"><img src="assets/images/frn_flage.png" alt="eng_flage"><span>French<i class="ion-ios-download-outline"></i></span></a></li>
                    </ul>         
                    </div>
                </div>
            </div>
        	<div class="col-lg-5 order-first">
                <div class="res_md_mb_40 res_sm_mb_20 text-center animation" data-animation="zoomIn" data-animation-delay="0.6s"> 
                    <img src="assets/images/whitepaper5.png" alt="whitepaper5"/> 
                </div>
            </div>
        </div>
    </div>
</section>
<!-- END SECTION WHITEPAPER --> 

<team-wadapay></team-wadapay>

<faq-wadapay></faq-wadapay>

<footer-wadapay></footer-wadapay>

  </div>
</template>

<script>
import HeaderWadapay from './components/HeaderWadapay'
import StartBanner from './components/StartBanner'
import About from './components/About'
import WhyWadapay from './components/WhyWadapay'
import Timeline from './components/Timeline'
import FooterWadapay from './components/FooterWadapay'
import TeamWadapay from './components/Team/TeamWadapay'
import FaqWadapay from './components/FAQ/FaqWadapay'

export default {
  name: 'app',
  components: {
      HeaderWadapay,
      StartBanner,
      About,
      WhyWadapay,
      Timeline,
      FooterWadapay,
      TeamWadapay,
      FaqWadapay
  }
}
</script>

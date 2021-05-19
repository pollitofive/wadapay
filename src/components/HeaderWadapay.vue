<template>
    <!-- START HEADER -->
    <header class="header_wrap fixed-top">
        <div class="container-fluid">
            <nav class="navbar navbar-expand-lg"> 
                <router-link to="/" class="navbar-brand page-scroll animation" href="#home_section" data-animation="fadeInDown" data-animation-delay="1s"> 
                    <img class="logo_light" src="../assets/img/logo.png" alt="logo" /> 
                    <img class="logo_dark" src="../assets/img/logo_dark.png" alt="logo" /> 
                </router-link>
                <button class="navbar-toggler animation" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" data-animation="fadeInDown" data-animation-delay="1.1s"> 
                    <span class="ion-android-menu"></span> 
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav m-auto">
                        <li class="animation" data-animation="fadeInDown" data-animation-delay="1.2s"><a class="nav-link page-scroll nav_item" href="#about">Sobre Wadapay</a></li>
                        <li class="animation" data-animation="fadeInDown" data-animation-delay="1.3s"><a class="nav-link page-scroll nav_item" href="#why">Utilidad</a></li>
                        <li class="animation" data-animation="fadeInDown" data-animation-delay="1.5s"><a class="nav-link page-scroll nav_item" href="#roadmap">RoadMap</a></li>
                        <li class="animation" data-animation="fadeInDown" data-animation-delay="1.6s"><a class="nav-link page-scroll nav_item" href="#team-section">Team</a></li>
                        <li class="animation" data-animation="fadeInDown" data-animation-delay="1.7s"><router-link to="/faq" class="nav-link page-scroll nav_item" href="#faq">FAQ</router-link></li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
    <!-- END HEADER --> 
</template>

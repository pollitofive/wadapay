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

    <router-view></router-view>

    <footer-wadapay></footer-wadapay>

  </div>
</template>

<script>
import HeaderWadapay from './components/HeaderWadapay'
import FooterWadapay from './components/FooterWadapay'

export default {
  name: 'app',
  components: {
      HeaderWadapay,
      FooterWadapay,
  }
}
</script>

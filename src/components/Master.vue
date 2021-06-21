<template>
    <div>

        <start-banner></start-banner>

        <about></about>

        <why-wadapay></why-wadapay>

        <timeline></timeline>

        <!--<distribution-tokens></distribution-tokens>-->

        <team-wadapay></team-wadapay>

        <faq-wadapay></faq-wadapay>

        <news-wadapay></news-wadapay>

    </div>
</template>

<script>
import StartBanner from './StartBanner'
import About from './About'
import WhyWadapay from './WhyWadapay'
import Timeline from './Timeline'
import DistributionTokens from './DistributionTokens'
import TeamWadapay from './Team/TeamWadapay'
import FaqWadapay from './FAQ/FaqWadapay'
import NewsWadapay from './News/NewsWadapay.vue'

export default {
  name: 'app',
  components: {
      StartBanner,
      About,
      WhyWadapay,
      Timeline,
      DistributionTokens,
      TeamWadapay,
      FaqWadapay,
      NewsWadapay
  }
}
</script>

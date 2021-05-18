<template>
    <div>

        <start-banner></start-banner>

        <about></about>

        <why-wadapay></why-wadapay>

        <timeline></timeline>

        <team-wadapay></team-wadapay>

        <faq-wadapay></faq-wadapay>

    </div>
</template>

<script>
import StartBanner from './StartBanner'
import About from './About'
import WhyWadapay from './WhyWadapay'
import Timeline from './Timeline'
import TeamWadapay from './Team/TeamWadapay'
import FaqWadapay from './FAQ/FaqWadapay'

export default {
  name: 'app',
  components: {
      StartBanner,
      About,
      WhyWadapay,
      Timeline,
      TeamWadapay,
      FaqWadapay
  }
}
</script>

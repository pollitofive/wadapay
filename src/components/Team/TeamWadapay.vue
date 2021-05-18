<template>
    <!-- START SECTION TEAM -->
    <section id="team-section" class="section_team bg_gray">
        <div class="divider large_divider"></div>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="title_default_dark title_border text-center">
                        <h4 class="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Equipo</h4>
                    </div>
                </div>
            </div>
            <div class="row small_space justify-content-center">
                <div class="col-lg-9 col-md-12">
                    <div class="row">
                        <nicolas></nicolas>

                        <daniel></daniel>

                        <damian></damian>
                    </div>
                </div>
            </div>
            <div class="divider small_divider"></div>
        </div>
        <div class="divider large_divider"></div>
        <div class="angle_bottom"></div>
    </section>
    <!-- END SECTION TEAM -->
</template>
<script>
import Damian from './Damian'
import Daniel from './Daniel'
import Nicolas from './Nicolas'
export default {
    components: {
        Damian,
        Daniel,
        Nicolas
    }
}
</script>
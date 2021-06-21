<template>
    <section id="news" class="blue_light_bg" data-bleed="-40" data-z-index="1" data-parallax="scroll">
        <div class="angle_top"></div>
        <div class="divider large_divider"></div>
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-12 offset-lg-2">
                    <div class="title_default_light title_border text-center">
                        <h4 class="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.2s" style="animation-delay: 0.2s; opacity: 1;">{{ $t("news.title")}}</h4>
                    </div>
                </div>
            </div>
            <div class="row">
                <new v-for="latest in $t('news.list')" v-bind:key="latest.number" :latest="latest"></new>
            </div>
        </div>
        <div class="angle_top"></div>
        <div class="divider large_divider"></div>
    </section>
</template>
<script>

import New from './New'
export default {
    name: 'news',
    components: {
        New
    }
}

</script>
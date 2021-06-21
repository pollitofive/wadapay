<template>
    <div class="col-lg-4 col-md-6">
        <div class="blog_item animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.2s" style="animation-delay: 0.2s; opacity: 1;">
            <div class="blog_content">
                <div class="blog_text">
                    <h6 class="blog_title"><a :href="latest.url" target="_blank">{{ latest.title }}</a></h6>
                    <p>{{ latest.description }}</p>
                    <a :href="latest.url" target="_blank" class="text-capitalize">{{ $t("news.button-read-more")}}</a>
                </div>
                <ul class="list_none blog_meta">
                    <li><a :href="latest.url" target="_blank"><i class="ion-android-time"></i> {{ latest.date }}</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        latest: {
            number: Number,
            title: String,
            description: String,
            date: String,
            url: String
        }
    }
}
</script>
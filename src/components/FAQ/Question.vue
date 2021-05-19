<template>
    <div class="card animation" data-animation="fadeInUp" data-animation-delay="0.4s">
        <div class="card-header" :id="'heading' + question.number">
            <h6 class="mb-0"> <a :class="(question.number != 1) ? 'collapsed' : 'collapse'" data-toggle="collapse" :href="'#collapse' + question.number" :aria-expanded="(question.number == 1) ? 'true' : 'false'" :aria-controls="'collapse' + question.number">{{ question.question }}</a> </h6>
        </div>
        <div :id="'collapse' + question.number" :class="(question.number == 1) ? 'collapse show' : 'collapse'" :aria-labelledby="'heading' + question.number" data-parent="#accordion3">
            <div class="card-body" v-html="question.answer">{{ question.answer }}</div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        question: {
            number: Number,
            question: String,
            answer: String
        }
    }
}
</script>
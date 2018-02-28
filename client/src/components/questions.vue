<template>
<div class="container">
	<article class="message is-dark">
  <div class="message-header">
		<div>
			<p>Question: {{question.title}}</p>
			<p>point : {{question.point}} </p>
      <p>by:{{question.userId.email}}</p>
		</div>
		<div>
			<button @click="downvoteq"  class="button" aria-label="delete"><i class="fas fa-arrow-down"></i></button>
			<button @click="upvoteq" class="button" aria-label="delete"><i class="fas fa-arrow-up"></i></button>
		</div>
  </div>
  <div class="message-body">
    {{question.question}}
  </div>
</article>
  <div>
	<answer v-for="answer in question.answers" :key="answer._id" :answer="answer"/>
  </div>
	<hr>
	<answerfield :quesid="question._id" />
</div>
</template>

<script>
import answer from './answers.vue'
import answerfield from './answerfield.vue'
export default {
  name: 'question',
  props: ['question'],
  data () {
    return {

      show: false
    }
  },
  components: {
    answer,
    answerfield
  },
  methods: {
    showAnswerField () {
      this.show = true
    },
    upvoteq () {
      let objupdate = {
        status: 'like',
        id: this.question._id
      }
      this.$store.dispatch('qdownvote', objupdate)
    },
    downvoteq () {
      let objupdate = {
        status: '',
        id: this.question._id
      }
      this.$store.dispatch('qdownvote', objupdate)
    }
  }
}
</script>

<style>

</style>

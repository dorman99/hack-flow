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
			<button @click="destroy(question._id)"  class="button is-danger" aria-label="delete">delete</button>
			<button @click="edit(question._id, question.title, question.question)" class="button is-warning" aria-label="delete">edit</button>
		</div>
  </div>
  <div class="message-body">
    {{question.question}}
  </div>
</article>
  <div>
	<answer v-for="answer in question.answers" :key="answer._id" :answer="answer"/>
  </div>
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
    edit (id, title, question) {
      let payload = {
        _id: id,
        title: title,
        question: question
      }
      console.log('ini apa', payload)
      this.$store.dispatch('modaledit', payload)
    },
    destroy (id) {
      this.$swal({
        title: 'Are you sure?',
        text: 'Once deleted, you will not be able to recover this imaginary file!',
        icon: 'warning',
        buttons: true,
        dangerMode: true
      })
        .then((willDelete) => {
          if (willDelete) {
            this.$http.delete('/questions/' + id)
              .then(response => {
                this.$store.dispatch('getAllQuestions')
              })
              .catch(err => console.log(err))
            this.$swal('Poof! Your imaginary file has been deleted!', {
              icon: 'success'
            })
          } else {
            this.$swal('Your imaginary file is safe')
          }
        })
    }
  }
}
</script>

<style>

</style>

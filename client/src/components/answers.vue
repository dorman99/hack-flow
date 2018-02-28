<template>
<div>
	<article class="message is-warning">
  <div class="message-header">
		<div>
			<p>Answer by : {{answer.userId.email}}</p>
			<p>point : {{answer.point}}  </p>
		</div>
		<div>
    <button @click="destroyanswer(answer._id)" v-show="answer.userId._id === userid"  class="button is-danger">delete</button>
		<button @click="downvote"  class="button" aria-label="delete"><i class="fas fa-arrow-down"></i></button>
		<button  @click="upvote" class="button" aria-label="delete"><i class="fas fa-arrow-up"></i></button>
		</div>
  </div>
  <div class="message-body">
    {{answer.answer}}
  </div>
</article>
<hr>
</div>
</template>

<script>
export default {
  props: ['answer'],
  name: 'answers',
  data () {
    return {
      userid: localStorage.getItem('userid')
    }
  },
  methods: {
    upvote () {
      let obj = {
        status: 'like',
        id: this.answer._id
      }
      this.$store.dispatch('upvoteAnswer', obj)
    },
    downvote () {
      let obj = {
        status: 'dislike',
        id: this.answer._id
      }
      this.$store.dispatch('upvoteAnswer', obj)
    },
    destroyanswer (ansid) {
      this.$swal({
        title: 'Are you sure?',
        text: 'Once deleted, you will not be able to recover this imaginary file!',
        icon: 'warning',
        buttons: true,
        dangerMode: true
      })
        .then((willDelete) => {
          if (willDelete) {
            this.$http.delete('/answers', {
              headers: {
                answerid: ansid
              }
            }).then(response => {
              this.$store.dispatch('getAllQuestions')
            }).catch(err => { console.log(err) })
            this.$swal('Poof! Your comment has been deleted!', {
              icon: 'success'
            })
          } else {
            this.$swal('Your comment is safe!')
          }
        })
    }
  }
}
</script>

<style>

</style>

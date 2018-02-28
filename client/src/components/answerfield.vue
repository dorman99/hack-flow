<template>
	<div class="cotainer">
		<div class="field">
			<label class="label">Answer this question</label>
			<div class="control">
				<textarea v-model="comment" class="textarea" placeholder="Textarea"></textarea>
			</div>
		</div>
		<div class="field is-grouped">
			<div class="control">
				<button @click.prevent="submitcomment" class="button is-link">Submit</button>
			</div>
		</div>
		<hr>
	</div>
</template>

<script>
export default {
  props: ['quesid'],
  data () {
    return {
      comment: '',
      dataQuests: this.$store.getters.getQuestions
    }
  },
  methods: {
    submitcomment () {
      console.log('masuk submit')
      let self = this
      let objupdate = {
        comment: this.comment,
        quesid: this.quesid
      }
      this.$store.dispatch('updateQuestion', objupdate)
      console.log(self.quesid)
      this.comment = ''
      this.$swal('comment submited', 'thks for your response:)', 'success')
    }
  }
}
</script>

<style>

</style>

<template>
	<div :class="modalstat">
  <div class="modal-background"></div>
  <div class="modal-content">
		<div class="hero is-dark">
			<p id="ques" class="title is-centered">Wanna edit your ques?</p>
			<div class="field is-horizontal">
		<div class="field-label is-normal">
			<label class="label">Subject</label>
		</div>
		<div class="field-body">
			<div class="field">
				<div class="control">
					<p class="subtile">title: </p>
					<input name="title" v-model="editdata.title" @input="checkfield" :class="modalinput.title" type="text" placeholder="e.g. Partnership opportunity">
				</div>
			</div>
		</div>
	</div>
		<div class="field is-horizontal">
			<div class="field-label is-normal">
				<label class="label">Question</label>
			</div>
			<div class="field-body">
				<div class="field">
					<div class="control">
						<p class="subtile">Content: </p>
						<textarea v-model="editdata.question" name="content" @input="checkcontent" :class="content.field" placeholder="Explain how we can help you"></textarea>
					</div>
				</div>
			</div>
		</div>
		<div id="buttons" class="field is-horizontal">
		<button @click="newquessub(editdata.id, editdata.question, editdata.title)" class="is-warning button">submit question !</button>
		&nbsp;
		<button @click="closemodal" class=" button is-danger">cancel !</button>
		</div>
		</div>

  </div>
  <button @click="closemodal"  class="modal-close is-large" aria-label="close"></button>
</div>
</template>

<script>
export default {
  name: 'modalquestion',
  data () {
    return {
      modalinput: {
        title: 'input is-danger',
        status: true
      },
      newques: {
        title: '',
        content: ''
      },
      content: {
        field: 'textarea is-danger',
        status: true
      }
    }
  },
  computed: {
    modalstat () {
      return this.$store.state.modal
    },
    editdata () {
      return this.$store.state.quesedit
    }
  },
  methods: {
    closemodal () {
      this.$store.dispatch('closemodal')
    },
    checkfield (e) {
      if (e.target.value.length !== 0) {
        this.modalinput.title = 'input is-success'
        this.modalinput.status = false
      } else {
        this.modalinput.title = 'input is-danger'
        this.modalinput.status = true
      }
    },
    checkcontent (e) {
      if (e.target.value.length !== 0) {
        this.content.field = 'textarea is-success'
        this.content.status = false
      } else {
        this.content.field = 'textarea is-danger'
        this.content.status = true
      }
    },
    newquessub (id, question, title) {
      console.log('kaka', id, question, title)
      let payload = {
        _id: id,
        title: title,
        question: question
      }
      this.$swal({
        title: 'Are you sure?',
        text: 'Once deleted, you will not be able to recover this imaginary file!',
        icon: 'warning',
        buttons: true,
        dangerMode: true
      })
        .then((willDelete) => {
          if (willDelete) {
            this.$http.put('/questions/' + payload._id, {
              title: payload.title,
              question: payload.question
            }, {
              headers: {
                token: localStorage.getItem('token')
              }
            }).then(response => {
              this.$store.dispatch('closemodal')
              this.$store.dispatch('getAllQuestions')
            })
            this.$swal('Poof! Your imaginary file has been changed!', {
              icon: 'success'
            })
          } else {
            this.$swal('Your imaginary file is unchange!')
          }
        })
    }
  }
}
</script>

<style>
 .hero {
	 padding-right: 5em;
	 padding-top: 30px;
   padding-bottom: 30px;
 }
 #ques {
    display: flex;
    justify-content: flex-end;
    padding-right: 30px;
 }
 #buttons {
	 display: flex;
	 justify-content: flex-end;
 }
</style>

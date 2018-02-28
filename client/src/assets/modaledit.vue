<template>
	<div :class="modalstat">
  <div class="modal-background"></div>
  <div class="modal-content">
		<div class="hero is-dark">
			<p id="ques" class="title is-centered">Ask Anything but be wise :)</p>
			<div class="field is-horizontal">
		<div class="field-label is-normal">
			<label class="label">Subject</label>
		</div>
		<div class="field-body">
			<div class="field">
				<div class="control">
					<p class="subtile">title: </p>
					<input name="title" v-model="newques.title" @input="checkfield" :class="modalinput.title" type="text" placeholder="e.g. Partnership opportunity">
				</div>
				<p v-show="modalinput.status" class="help is-danger">
					This field is required
				</p>
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
						<textarea v-model="newques.content" name="content" @input="checkcontent" :class="content.field" placeholder="Explain how we can help you"></textarea>
						<p v-show="content.status" class="help is-danger">
							This field is required
						</p>
					</div>
				</div>
			</div>
		</div>
		<div id="buttons" class="field is-horizontal">
		<button @click="newquessub" class="is-warning button">submit question !</button>
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
    newquessub () {
      if (this.content.status === false && this.modalinput.status === false) {
        this.$http.post('/questions', {
          title: this.newques.title,
          question: this.newques.content
        }, {
          headers: {
            token: localStorage.getItem('token')
          }
        }).then(response => {
          this.$store.dispatch('newquestion')
          this.newques = {
            title: '',
            content: ''
          }
        })
      } else {
        alert('input disii dulu bray')
      }
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

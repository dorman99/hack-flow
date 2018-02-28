<template>
	<body>
    <modalquestion/>
  <section class="section" style="background-color:grey">
    <div class="container">
			<div class="columns" style="display:flex">
				<div  class="columns">
					<question v-for="question in dataQuestions" :key="question._id"  :question="question"/>
				</div>
			</div>
    </div>
  </section>
</body>
</template>

<script>
import question from './questions.vue'
import modalquestion from './modalquestion.vue'
export default {
  name: 'bodyvue',
  components: {
    question,
    modalquestion
  },
  methods: {
    getAllQuestions () {
      // let self = this
      let payload = {

      }
      this.$store.dispatch('getAllQuestions', payload)
      // this.$http.get('/questions').then(({data}) => {
      //   self.$store.commit('setDataQuestions', data.data)
      // }).catch(err => console.log(err))
    },
    checklogin () {
      return this.$store.dispatch('signin')
    }
  },
  computed: {
    dataQuestions () {
      return this.$store.getters.getQuestions
    }
  },
  created () {
    if (localStorage.getItem('token')) {
      this.getAllQuestions()
      this.$router.push('/')
      this.checklogin()
      this.$store.dispatch('reftoken', localStorage.getItem('token'))
      console.log('masuk sini bray')
    } else {
      this.$router.push('/login')
      console.log('ini ke sini cuy')
    }
  }
}
</script>

<style>
	.columns {
		flex-wrap: wrap
	}
</style>

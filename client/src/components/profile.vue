<template>
	<body>
    <modalquestion/>
  <section class="section" style="background-color:grey">
    <div class="container">
			<div class="columns" style="display:flex">
				<div  class="columns">
					<question v-for="question in setmyques" :key="question._id"  :question="question"/>
				</div>
			</div>
    </div>
  </section>
</body>
</template>

<script>
import question from './questionsprofile.vue'
import modalquestion from './modaledit.vue'
export default {
  data () {
    return {
    }
  },
  computed: {
    setmyques () {
      // console.log(this.$store.state.dataQuestions)
      let myques = this.$store.state.dataQuestions.filter(el => el.userId._id === localStorage.getItem('userid'))
      return myques
    }
  },
  components: {
    question,
    modalquestion
  },
  created () {
    if (localStorage.getItem('token')) {
      console.log('masuk sini proil')
      this.$store.dispatch('getAllQuestions')
      // this.$router.push('/')
      // this.checklogin()
      this.$store.dispatch('reftoken', localStorage.getItem('token'))
      console.log('masuk sini bray')
      // this.myques = this.$store.state.dataQuestions
    } else {
      // this.$router.push('/login')
      // console.log('ini ke sini cuy')
    }
  }
}
</script>

<style>
 .columns {
		flex-wrap: wrap
	}
</style>

<template>
	<nav class="navbar ">
  <div class="navbar-brand">
    <a class="navbar-item" href="#">
    <img src="../assets/fox.png" alt="fox">&nbsp;
    <p><b>OverFlow</b></p>&nbsp;
       <atom-spinner
        :animation-duration="1000"
        :size="80"
        :color="'#000000'"
       />
    </a>
    <div v-show="login" class="navbar-burger burger" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div v-show="login" id="navbarExampleTransparentExample" class="navbar-menu">
    <div class="navbar-start">
    </div>
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="field is-grouped">
           <div class="navbar-item has-dropdown is-hoverable">
        <a v-show="login" class="navbar-link" href="#">
          Menu: 
        </a>
        <div class="navbar-dropdown is-boxed">
          <div class="container">
          <a @click.prevent="modalquestion" :class="item" >
            have questions?
          </a>
          <a @click.prevent="goprofle" :class="item" >
            profile
          </a>
          <a @click.prevent="signout" :class="item" href="https://bulma.io/documentation/layout/container/">
            Logout
          </a>
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
import {AtomSpinner} from 'epic-spinners'
export default {
  name: 'navbar',
  components: {
    AtomSpinner
  },
  data () {
    return {
      item: 'navbar-item'
    }
  },
  methods: {
    activebar () {
      this.item += ' is-active'
    },
    deactivebar () {
      this.item = 'navbar-item'
    },
    signout () {
      localStorage.clear()
      this.$router.push('/login')
      this.$store.dispatch('logout', false)
      console.log('inii sign out')
    },
    modalquestion () {
      this.$store.dispatch('togglemodal')
    },
    goprofle () {
      console.log('ini ini profile cok')
    }
  },
  computed: {
    login () {
      return this.$store.state.login
    }
  }
}
</script>

<style>
</style>

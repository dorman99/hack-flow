<template>
	  <section class="hero is-fullheight is-medium is-dark is-bold">
        <div class="hero-body">
          <div class="container">
            <div class="columns">
              <div class="column">
								<article class="card is-rounded">
                <div class="card-content">
                  <div class="field">
                      <label class="label">Email: </label>
                      <div class="control has-icons-left has-icons-right">
                        <input  @keyup.enter="loggedin" name="email" @input="checkemail" :class="form.email" v-model="login.email" type="email" placeholder="Text input">
                        <span class="icon is-small is-left">
                          <i class="fas fa-envelope"></i>
                        </span>
                        <span v-show="!form.statusEmail" class="icon is-small is-right">
                          <i class="fas fa-check"></i>
                        </span>
                      </div>
                      <p v-show="form.statusEmail" class="help is-danger">invalid email input</p>
                  </div>
                  <label class="label">Password:</label>
                  <p class="control has-icon">
                    <input @keyup.enter="loggedin" name="password" class="input" v-model="login.password" type="password" placeholder="Password">
                    <span class="icon is-small is-left">
                          <i class="fas fa-lock"></i>
                    </span>
                  </p>
									<br>
                  <p class="control">
                    <label class="checkbox">
                      <input type="checkbox">
                      Remember me
                    </label>
                  </p>
                  <p class="control">
										<hr>
                    <button @click="loggedin" class="button is-warning is-medium is-fullwidth">
                      <i class="fa fa-user"></i>&nbsp;&nbsp;
                      Login
                    </button>
                  </p>
                </div>
              </article>
							</div>
							<div class="column is-4">
								<div class="Aligner">
									<div class="Aligner-item Aligner-item--top"></div>
									<div class="Aligner-item">
											<AtomSpinner
											:animation-duration="1000"
          						:size="100"
          						:color="'#000000'"
											/>
									</div>
									<div class="Aligner-item Aligner-item--bottom"></div>
								</div>
							</div>
							<div class="column">
                <article class="card is-rounded">
                <div class="card-content">
                  <div class="field">
                      <label class="label">Email: </label>
                      <div class="control has-icons-left has-icons-right">
                        <input @keyup.enter="signupe" name="email" @input="checkemailS" :class="formS.email" v-model="signup.email" type="email" placeholder="Text input">
                        <span class="icon is-small is-left">
                          <i class="fas fa-envelope"></i>
                        </span>
                        <span v-show="!formS.statusEmail" class="icon is-small is-right">
                          <i class="fas fa-check"></i>
                        </span>
                      </div>
                      <p v-show="formS.statusEmail" class="help is-danger">invalid email input</p>
                  </div>
                  <label class="label">Password:</label>
                  <p class="control has-icon">
                    <input @keyup.enter="signupe" name="password" @input="checkPasswordS" :class="formS.password" v-model="signup.password" class="input" type="password" placeholder="Password">
                    <span class="icon is-small is-left">
                          <i class="fas fa-lock"></i>
                    </span>
                     <p v-show="formS.statusPassword" class="help is-danger">Min 6 character</p>
                  </p>
									<br>
                  <p class="control">
										<hr>
                    <button @click="signupe" class="button is-warning is-medium is-fullwidth">
                      <i class="fa fa-user"></i>&nbsp;&nbsp;
                      Sign Up
                    </button>
                  </p>
                </div>
              </article>
							</div>
            </div>
          </div>
    </div>
  </section>
</template>

<script>
import {AtomSpinner} from 'epic-spinners'

export default {
  name: 'login',
  data () {
    return {
      signup: {
        email: '',
        password: ''
      },
      login: {
        email: '',
        password: ''
      },
      form: {
        email: 'input',
        password: 'input',
        statusEmail: false,
        statusPassword: false
      },
      formS: {
        email: 'input',
        password: 'input',
        statusEmail: false,
        statusPassword: false
      }
    }
  },
  components: {
    AtomSpinner
  },
  methods: {
    loggedin () {
      let self = this
      this.$http.post('/signin', {
        email: self.login.email,
        password: self.login.password
      }).then(response => {
        if (response.data.data) {
          console.log(response.data, 'ini login coek')
          localStorage.setItem('userid', response.data.iduser)
          // self.$store.dispatch('signin', response.data.data)
          localStorage.setItem('token', response.data.data)
          self.$router.push('/')
          self.$swal('Loggein Success!', 'Welcome To HackFlow!', 'success')
          self.login = {
            email: '',
            password: ''
          }
        } else {
          self.$swal('Invalid email or password!', 'Check your email / password ', 'error')
          self.login = {
            email: '',
            password: ''
          }
        }
      }).catch(err => { console.log(err) })
    },
    validateEmail (email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ // eslint-disable-line no-useless-escape
      return re.test(String(email).toLowerCase())
    },
    checkPassword (e) {
      console.log('ini password', e.target.value)
      if (e.target.value.length === 0) {
        this.form.password = 'input'
        this.form.statusPassword = false
      } else if (e.target.value.length < 6) {
        this.form.password = 'input is-danger'
        this.form.statusPassword = true
      } else {
        this.form.password = 'input is-success'
        this.form.statusPassword = false
      }
    },
    checkPasswordS (e) {
      console.log('ini password', e.target.value)
      if (e.target.value.length === 0) {
        this.formS.password = 'input'
        this.formS.statusPassword = false
      } else if (e.target.value.length < 6) {
        this.formS.password = 'input is-danger'
        this.formS.statusPassword = true
      } else {
        this.formS.password = 'input is-success'
        this.formS.statusPassword = false
      }
    },
    checkemail (e) {
      console.log(' ini checker', e.target.value)
      console.log(this.validateEmail(e.target.value))
      if (e.target.value.length === 0) {
        this.form.email = 'input'
        this.form.statusEmail = false
      } else if (!this.validateEmail(e.target.value)) {
        this.form.email = 'input is-danger'
        this.form.statusEmail = true
      } else {
        this.form.email = 'input is-success'
        this.form.statusEmail = false
      }
    },
    checkemailS (e) {
      console.log(' ini checker', e.target.value)
      console.log(this.validateEmail(e.target.value))
      if (e.target.value.length === 0) {
        this.formS.email = 'input'
        this.formS.statusEmail = false
      } else if (!this.validateEmail(e.target.value)) {
        this.formS.email = 'input is-danger'
        this.formS.statusEmail = true
      } else {
        this.formS.email = 'input is-success'
        this.formS.statusEmail = false
      }
    },
    signupe () {
      let self = this
      if (this.signup.email && this.signup.password && this.formS.statusEmail === false && this.formS.statusPassword === false) {
        this.$http.post('/signup', {
          email: self.signup.email,
          password: self.signup.password
        }).then(response => {
          if (response.data.message === 'error') {
            self.$swal('email has been taken', 'please change your email', 'error')
          } else {
            console.log(response.data)
            self.$swal('Welcome To HackFlow!', 'You can login now :)', 'success')
            self.signup = {
              email: '',
              password: ''
            }
          }
        }).catch(err => {
          console.log(err)
        })
      } else {
        self.$swal('Please take a look at your form', 'check your input', 'warning')
      }
    }
  }
}
</script>

<style>
.Aligner {
  display: flex;
  align-items: center;
  justify-content: center;
}

.Aligner-item {
  max-width: 50%;
}

.Aligner-item--top {
  align-self: flex-start;
}

.Aligner-item--bottom {
  align-self: flex-end;
}

</style>

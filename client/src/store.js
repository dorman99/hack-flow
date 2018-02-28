import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import swal from 'sweetalert'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataQuestions: [],
    token: '',
    login: false,
    modal: 'modal',
    quesedit: {
      id: '',
      title: '',
      question: ''
    }
  },
  mutations: {
    filterquestion (state, payload) {
      state.dataQuestions.forEach((el, i) => {
        if (el._id === payload._id) {
          el = payload
        }
      })
    },
    modalclose (state) {
      state.modal = 'modal'
    },
    changemodal (state, payload) {
      state.modal += ' is-active'
    },
    editmodal (state, payload) {
      state.modal += ' is-active'
      state.quesedit.title = payload.title
      state.quesedit.question = payload.question
      state.quesedit.id = payload._id
    },
    settoken (state, payload) {
      state.login = true
      state.token = payload
    },
    setDataQuestions (state, payload) {
      state.dataQuestions = payload
    },
    signout (state, payload) {
      console.log('ini sign our', payload)
      state.login = payload
      state.token = ''
      state.dataQuestions = []
    },
    newquescome (state, payload) {
      state.modal = 'modal'
      this.dispatch('getAllQuestions', payload)
    }
  },
  getters: {
    getQuestions (state, getters) {
      return state.dataQuestions
    }
  },
  actions: {
    setnewvalue ({commit}, payload) {
      commit('setDataQuestions', payload)
    },
    reftoken ({commit}, payload) {
      console.log('masuk sini')
      commit('settoken', payload)
    },
    updateQuestion ({commit}, payload) {
      console.log(payload, 'ini actin')
      axios.post(`http://localhost:3000/answers/${payload.quesid}`, {
        answer: payload.comment
      }, {
        headers: {
          token: localStorage.getItem('token')
        }
      }).then(response => {
        this.dispatch('getAllQuestions', payload)
      }).catch(err => { console.log(err) })
    },
    getAllQuestions ({commit}, payload) {
      axios.get('http://localhost:3000/questions').then(({ data }) => {
        commit('setDataQuestions', data.data)
      }).catch(err => console.log(err))
    },
    upvoteAnswer ({commit}, payload) {
      console.log('masuk sini', payload)
      axios.put('http://localhost:3000/answers', {
        answerid: payload.id,
        vote: payload.status
      }, {
        headers: {
          token: localStorage.getItem('token')
        }
      }).then(response => {
        console.log('ini', response.data)
        if (response.data === 'invalid') {
          swal('You have vote once', 'cant vote on this question anymore', 'warning')
        } else {
          this.dispatch('getAllQuestions', payload)
          swal('Vote Success', 'Thank you :)', 'success')
        }
      }).catch(err => console.log(err))
    },
    qdownvote ({commit}, payload) {
      console.log('masuk sini')
      axios.put('http://localhost:3000/questions/', {
        questionid: payload.id,
        vote: payload.status
      }, {
        headers: {
          token: localStorage.getItem('token')
        }
      }).then(response => {
        console.log('kkk', response.data)
        if (response.data === 'invalid') {
          swal('You have vote once', 'cant vote on this question anymore', 'warning')
        } else {
          this.dispatch('getAllQuestions', payload)
          swal('Vote Success', 'Thank you :)', 'success')
        }
      }).catch(err => console.log(err))
    },
    signin ({commit}, payload) {
      commit('settoken', payload)
      this.dispatch('getAllQuestions', payload)
    },
    logout ({commit}, payload) {
      commit('signout', payload)
    },
    togglemodal ({commit}, payload) {
      console.log('ini togggle modal')
      commit('changemodal', payload)
    },
    modaledit ({ commit }, payload) {
      console.log('ini togggle modal')
      commit('editmodal', payload)
    },
    closemodal ({commit}) {
      commit('modalclose')
    },
    newquestion ({commit}) {
      commit('newquescome')
    }
  }
})

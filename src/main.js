import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import messagePlugin from '@/utils/message.plugin'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)

firebase.initializeApp({
  apiKey: "AIzaSyDXiQYtXSIT95x8WyuUoqSguwfOzTv81Hc",
  authDomain: "vue-vladm-crm.firebaseapp.com",
  projectId: "vue-vladm-crm",
  storageBucket: "vue-vladm-crm.appspot.com",
  messagingSenderId: "6941153128",
  appId: "1:6941153128:web:d5480cf589ea2b2ddb28dd",
  measurementId: "G-308PL8X6T0"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})



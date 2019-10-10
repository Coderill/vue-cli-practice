import Vue from 'vue'
import App from './App.vue'
import router from './router'

import jQuery from 'jquery'
import 'popper.js'
import Bootstrap from 'bootstrap'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSearch, faGithub, faFacebook, faTwitter, faYoutube)

Vue.component('font-awesome-icon', FontAwesomeIcon)

window.$ = window.jQuery = jQuery

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

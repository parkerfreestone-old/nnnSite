import Vue from 'vue'
import App from './App.vue'
import router from './router'

// FONT AWESOME SHIT
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFemale } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faFemale)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

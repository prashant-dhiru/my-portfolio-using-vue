import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import { MdButton, MdContent, MdCard, MdIcon, MdAvatar,MdList,MdDivider,MdTabs} from 'vue-material/dist/components'

Vue.config.productionTip = false
Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdCard)
Vue.use(MdIcon)
Vue.use(MdAvatar)
Vue.use(MdList)
Vue.use(MdDivider)
Vue.use(MdTabs)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

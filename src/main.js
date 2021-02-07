import { createApp } from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faFontAwesome } from '@fortawesome/free-brands-svg-icons'

library.add(faLinkedin, faFontAwesome)

const app =createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')


import { createApp } from 'vue'
import App from './App.vue'
//Icons
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faFontAwesome, faGithub } from '@fortawesome/free-brands-svg-icons'
import {faEnvelope, faBars} from '@fortawesome/free-solid-svg-icons'



library.add(faLinkedin, faFontAwesome, faGithub, faEnvelope, faBars)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')


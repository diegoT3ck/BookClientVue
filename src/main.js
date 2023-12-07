import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
export default createVuetify({
  icons: {
    defaultSet: 'mdi', // This is already the default value - only for display purposes
  },
})


const vuetify = createVuetify({
  components,
  directives,
})

createApp(App).use(store).use(router).use(vuetify).mount('#app')

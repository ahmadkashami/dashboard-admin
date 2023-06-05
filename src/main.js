/* eslint-disable import/order */
import '@/@iconify/icons-bundle'
import App from '@/App.vue'
import vuetify from '@/plugins/vuetify'
import { loadFonts } from '@/plugins/webfontloader'
import router from '@/router'
import '@core/scss/template/index.scss'
import '@layouts/styles/index.scss'
import '@styles/styles.scss'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { store } from '@/store'
import { i18n } from '@/plugins/i18n'
import ability from '@/plugins/acl/ability'
import { abilitiesPlugin } from '@casl/vue'


loadFonts()


// Create vue app
const app = createApp(App)


// Use plugins
app.use(store)
app.use(i18n)
app.use(vuetify)
app.use(createPinia())
app.use(router)
app.use(abilitiesPlugin, ability, {
  useGlobalProperties: true,
})

// Mount vue app
app.mount('#app')

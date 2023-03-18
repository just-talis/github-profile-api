import { createApp } from 'vue'
import App from './App.vue'
import EstherSimon from './components/EstherSimon.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)
app.component('esther-simon', EstherSimon)

app.use(router)

app.mount('#app')

export default app
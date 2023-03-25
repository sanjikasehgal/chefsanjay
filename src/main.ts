// Template

// import { createApp } from 'vue'
// import App from './App-template.vue'
// import router from './router-template'

// import './assets-template/main.css'

// const app = createApp(App)

// app.use(router)

// app.mount('#app')

// My mess :) 

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
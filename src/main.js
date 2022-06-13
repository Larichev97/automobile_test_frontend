import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import axios from 'axios'
// import VueAxios from 'vue-axios'

// Bootstrap ---------------------------------------------
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
//--------------------------------------------------------

const app = createApp(App)

//----------------------------
// app.use(VueAxios, axios)
// app.provide('axios', app.config.globalProperties.axios)  // provide 'axios'
// app.mount('#app')
//-----------------------------

app.use(router)

app.mount('#app')





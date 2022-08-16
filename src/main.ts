import { createApp } from 'vue'
import "bootstrap/dist/css/bootstrap.css"
import App from './App.vue'
import router from './router'
import * as auth from "firebase/auth"
import VueAnimateOnScroll from 'vue3-animate-onscroll';
import { User } from "firebase/auth"
import Config from './util/config'

const app = createApp(App)
  .use(router)
  .use(VueAnimateOnScroll);

app.config.globalProperties.$User = (): User | null => auth.getAuth().currentUser;
app.config.globalProperties.$env = (): string => Config.get().env;

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $User: () => User | null;
    $env: () => string
  }
}


app.mount('#app')

import "bootstrap/dist/js/bootstrap.js"
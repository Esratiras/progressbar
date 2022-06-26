import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";
const app = createApp(App);
import Notifications from '@kyvg/vue3-notification'

app.use(router)
app.use(store)
app.use(Notifications)
app.mount("#app");

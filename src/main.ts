import { createApp } from "vue";
import App from "./App.vue";
// pinia
import store from "./store";
// router
import router from "./router";

createApp(App).use(router).use(store).mount("#app");

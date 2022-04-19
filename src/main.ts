import { createApp } from "vue";
import App from "./App.vue";
// pinia
import store from "./store";

createApp(App).use(store).mount("#app");

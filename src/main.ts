import { createApp } from "vue";
import App from "@/App.vue";
// pinia
import store from "@/store";
// router
import router from "@/router";
import "@/router/guards";
// axios
import axios from "@/utils/request";

window.$router = router;
window.$http = axios;

createApp(App).use(router).use(store).mount("#app");

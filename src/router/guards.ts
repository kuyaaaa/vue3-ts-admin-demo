// 路由守卫
import router from "./index";

router.beforeEach((to, from) => {
    console.log("to", to);
    console.log("from", from);
});

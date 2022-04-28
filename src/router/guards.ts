// 路由守卫
import router from "./index";
import { TOKEN } from "@/utils/static";

const token = window.localStorage.getItem(TOKEN);
/** 白名单 直接跳过的路由路径 */
const whiteList = ["/login"];

router.beforeEach((to, from, next) => {
    // 白名单检测
    const isWhite = whiteList.some(item => item === to.fullPath);
    if (isWhite) {
        next();
        return;
    }
    // token检测
    if (token) {
        next();
    } else {
        window.$router.push("/login");
    }
});

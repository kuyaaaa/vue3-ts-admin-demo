// 路由守卫
import NProgress from "nprogress";
import "@/assets/styles/nprogress.scss";
import router from "./index";
import { TOKEN } from "@/utils/static";

// nprogress配置
NProgress.configure({ showSpinner: false });

/** 白名单 直接跳过的路由路径 */
const whiteList = ["/login", "/404", "/403"];

router.beforeEach((to, from, next) => {
    NProgress.start();
    /** token */
    const token = window.localStorage.getItem(TOKEN);
    /** 是否为白名单 */
    const isWhite = whiteList.some(item => item === to.path);
    if (isWhite) {
        next();
        return;
    }
    // token检测
    if (token) {
        next();
    } else {
        const redirect = to.path;
        const query = JSON.stringify(to.query);
        next({
            path: "/login",
            query: { redirect, query },
        });
        window.$message.error("请先登录再进行操作");
    }
});

router.afterEach(() => {
    NProgress.done();
});

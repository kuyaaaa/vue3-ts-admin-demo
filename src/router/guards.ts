// 路由守卫
import NProgress from "nprogress";
import "@/assets/styles/nprogress.scss";
import router from "./index";
import { getToken } from "@/utils/token";
import useLoginStore from "@/store/modules/login";
import { TOKEN } from "@/utils/static";

// nprogress配置
NProgress.configure({ showSpinner: false });

/** 白名单 直接跳过的路由路径 */
const whiteList = ["/login", "/404", "/403"];

router.beforeEach(async (to, from, next) => {
    const loginStore = useLoginStore();

    NProgress.start();
    /** token */
    const token = loginStore[TOKEN] || getToken();
    /** 用户名（用于判断是否获取过用户信息） */
    const { userName } = loginStore.userInfo;
    /** 是否为白名单 */
    const isWhite = whiteList.some(item => item === to.path);
    if (isWhite) {
        next();
    }
    // has token, no userInfo
    else if (token && !userName) {
        await loginStore.getUserInfo();
        next();
    }
    // has token & userInfo
    else if (token) {
        next();
    }
    // no token
    else {
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

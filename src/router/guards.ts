// 路由守卫
import NProgress from "nprogress";
import "@/assets/styles/nprogress.scss";
import router from "./index";
import { getToken } from "@/utils/token";
import useLoginStore from "@/store/modules/login";
import useHistoryStore from "@/store/modules/history";
import { TOKEN } from "@/utils/static";
import { defaultPrimaryColor } from "@/config/theme";
import { PROJECT_MENU_TITLE } from "@/config/system";

// nprogress配置
NProgress.configure({
    showSpinner: false,
    template: `<div class="bar" style="--base-color: ${defaultPrimaryColor.primaryColor}" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>`,
});

/** 白名单 直接跳过的路由路径 */
const whiteList = ["/login", "/404", "/403"];

router.beforeEach(async (to, from, next) => {
    NProgress.start();

    const loginStore = useLoginStore();
    /** token */
    const token = loginStore[TOKEN] || getToken();
    /** 用户名（用于判断是否获取过用户信息） */
    const { userName } = loginStore.userInfo;
    /** 是否为白名单 */
    const isWhite = whiteList.some(item => item === to.path);
    if (isWhite) {
        next();
    }
    // has token
    else if (token) {
        // has token, no userInfo
        if (!userName) {
            await loginStore.getUserInfo();
        }
        // 历史记录存储
        const historyStore = useHistoryStore();
        historyStore.setRouterHistory(to);

        next();
    }
    // no token
    else {
        const redirect = encodeURIComponent(to.fullPath);
        next({
            path: "/login",
            query: { redirect },
        });
        window.$message.error("请先登录再进行操作");
    }

    // 修改标题
    document.title = `${PROJECT_MENU_TITLE}  ${to.meta?.label ? `- ${to.meta.label}` : ""}`;
});

router.afterEach(() => {
    NProgress.done();
});

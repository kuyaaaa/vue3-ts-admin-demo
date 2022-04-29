import { defineStore } from "pinia";
import { LoginParams } from "@/types/user";
import { TOKEN } from "@/utils/static";

const useLoginStore = defineStore({
    id: "login",
    state: () => {
        return {
            [TOKEN]: "",
        };
    },
    actions: {
        /** 登录
         * @param   params  登录参数（用户名 & 密码）
         */
        async login(params: LoginParams) {
            // const res = await window.$http.post("/login", params);
            // this.token = res.data.token;
            // 临时token
            this[TOKEN] = "1";
            window.localStorage.setItem(TOKEN, this.token);
            const { redirect = "/", query } = window.$router.currentRoute.value.query;
            window.$message.success("登陆成功，正在跳转...");
            window.$router.push({
                path: redirect as string,
                query: query ? JSON.parse(query as string) : undefined,
            });
        },
        /** 登出 */
        logout() {
            this[TOKEN] = "";
            window.localStorage.removeItem(TOKEN);
            window.$router.push({ name: "login" });
        },
    },
});

export default useLoginStore;

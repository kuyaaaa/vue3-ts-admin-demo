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
            const { redirect = "/" } = window.$router.currentRoute.value.query;
            window.$router.push(redirect as string);
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

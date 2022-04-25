import { defineStore } from "pinia";
import { LoginParams } from "@/types/user";

const useLoginStore = defineStore({
    id: "login",
    state: () => {
        return {
            token: "",
        };
    },
    actions: {
        /** 登录
         * @param   params  登录参数（用户名 & 密码）
         */
        async login(params: LoginParams) {
            const res = await window.$http.post("/login", params);
            this.token = res.data.token;
            window.localStorage.setItem("token", this.token);
            const { redirect = "/" } = window.$router.currentRoute.value.query;
            window.$router.push(redirect as string);
        },
        /** 登出 */
        logout() {
            this.token = "";
            window.localStorage.removeItem("token");
        },
    },
});

export default useLoginStore;

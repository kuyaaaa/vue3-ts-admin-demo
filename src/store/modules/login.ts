import { defineStore } from "pinia";
import { LoginParams, UserInfoType } from "@/types/user";
import { TOKEN } from "@/utils/static";
import { removeToken, setToken } from "@/utils/token";

const useLoginStore = defineStore({
    id: "login",
    state: () => {
        return {
            [TOKEN]: "",
            userInfo: {
                avatar: "",
                userName: "",
            } as UserInfoType,
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
            setToken(this.token);
            const { redirect = "/", query } = window.$router.currentRoute.value.query;
            // 获取用户信息
            await this.getUserInfo();
            window.$message.success("登陆成功，正在跳转...");
            window.$router.push({
                path: redirect as string,
                query: query ? JSON.parse(query as string) : undefined,
            });
        },
        /** 登出 */
        logout() {
            this[TOKEN] = "";
            removeToken();
            window.$router.push({ name: "login" });
        },
        /** 获取用户信息 */
        async getUserInfo() {
            // const res = await window.$http.get("/userInfo");
            // 临时数据
            const info: UserInfoType = {
                avatar: "https://avatars.githubusercontent.com/u/54495986?v=4",
                userName: "爷傲丶奈我何",
            };
            this.userInfo = info;
        },
    },
});

export default useLoginStore;

import { defineStore } from "pinia";
import { cloneDeep } from "lodash";
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
                signature: "",
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
            const { redirect = "/" } = window.$router.currentRoute.value.query;
            // 获取用户信息
            await this.getUserInfo();
            window.$message.success("登陆成功，正在跳转...");
            const redirectUrl = decodeURIComponent(redirect as string);
            window.$router.push(redirectUrl);
        },
        /** 登出 */
        logout() {
            window.$dialog.error({
                title: "警告",
                content: "确认退出账号吗？",
                negativeText: "后悔了",
                positiveText: "别墨迹",
                onPositiveClick: () => {
                    this[TOKEN] = "";
                    removeToken();
                    window.$router.push({ name: "login" });
                    window.$message.success("退出账号成功");
                },
            });
        },
        /** 获取用户信息 */
        getUserInfo() {
            return new Promise<UserInfoType>((resolve, reject) => {
                // const res = await window.$http.get("/userInfo");
                // 临时数据
                setTimeout(() => {
                    const info: UserInfoType = {
                        avatar: "https://avatars.githubusercontent.com/u/54495986?v=4",
                        userName: "爷傲丶奈我何",
                        signature: "这个人很懒，什么都没有留下！",
                    };
                    this.userInfo = info;
                    resolve(cloneDeep(info));
                }, 1000);
            });
        },
    },
});

export default useLoginStore;

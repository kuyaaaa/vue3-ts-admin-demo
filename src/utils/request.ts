import axios from "axios";
import { TOKEN } from "@/utils/static";

const token = window.localStorage.getItem(TOKEN) || "";

const service = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URL}/v1`,
    timeout: 10000,
    headers: {
        [TOKEN]: token,
    },
});

// 请求拦截
service.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        console.error("*this is request error:", error);
        return Promise.reject(error);
    }
);

// 相应拦截
service.interceptors.response.use(
    response => {
        const res = response.data;
        const code = response.status;
        if (code !== 200) {
            // todo
            window.$message.error(res.message || res.msg);
            return Promise.reject(new Error(res.message || res.msg || "网络请求错误"));
        }
        return response.data;
    },
    error => {
        window.$message.error(error.message || error.msg || "网络请求未知错误");
        return Promise.reject(error);
    }
);

export default service;

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    define: {
        "process.env": {},
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
    css: {
        // css预处理器
        preprocessorOptions: {
            scss: {
                charset: false,
                additionalData: '@import "./src/assets/styles/common.scss";',
            },
        },
    },
});

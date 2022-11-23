import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import { createHtmlPlugin } from "vite-plugin-html";
import { PROJECT_TITLE } from "./src/config/system";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        Components({
            resolvers: [NaiveUiResolver()],
        }),
        createHtmlPlugin({
            inject: {
                data: {
                    title: PROJECT_TITLE,
                },
            },
        }),
    ],
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

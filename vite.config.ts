import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import { createHtmlPlugin } from "vite-plugin-html";
import { PROJECT_TITLE } from "./src/config/system";
import { SYSTEM_CONFIG, SYSTEM_THEME_COMMON } from "./src/utils/static";
import { defaultThemeCommonConfig } from "./src/config/theme";

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
                    /** 网页标题 */
                    title: PROJECT_TITLE,
                    /** 主题 本地缓存关键字 */
                    themeKey: SYSTEM_THEME_COMMON,
                    /** 设置 本地缓存关键字 */
                    configKey: SYSTEM_CONFIG,
                    /** 基础颜色 */
                    baseColor: defaultThemeCommonConfig.primaryColor,
                    /** normal主题颜色 */
                    normalBaseColorBg: defaultThemeCommonConfig.baseColor,
                    normalBaseColorFont: "#000",
                    /** dark主题颜色 */
                    darkBaseColorBg: "#373737",
                    darkBaseColorFont: "#fff",
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

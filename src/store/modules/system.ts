import { defineStore } from "pinia";
import { GlobalThemeOverrides } from "naive-ui";
import NProgress from "nprogress";
import { SYSTEM_CONFIG, SYSTEM_THEME_COMMON } from "@/utils/static";
import { SystemConfig } from "@/types/config";
import { defaultThemeCommonConfig } from "@/config/theme";

const useSystemStore = defineStore({
    id: "system",
    state: () => {
        return {
            /** 头部容器高度 */
            headerHeight: 0,
            /** 主内容容器高度 */
            contentHeight: 0,
            /** 主内容容器高度（不含padding以外层，border-box） */
            contentBorderBoxHeight: 0,
            /** 主内容容器宽度（不含padding以外层） */
            contentWidth: 0,
            /** 设置相关 */
            config: {} as SystemConfig,
            /** 主题变量 */
            themeOverridesCommon: {} as GlobalThemeOverrides["common"],
        };
    },
    actions: {
        /** 获取本地config记录 */
        getSystemConfig() {
            this.config = JSON.parse(window.localStorage.getItem(SYSTEM_CONFIG) || "{}");
        },
        /** 存储本地config记录 */
        setSystemConfig() {
            window.localStorage.setItem(SYSTEM_CONFIG, JSON.stringify(this.config));
        },

        /** 获取本地自定义主题记录 */
        getThemeOverridesCommon() {
            const themeConfig = window.localStorage.getItem(SYSTEM_THEME_COMMON);
            this.themeOverridesCommon = themeConfig
                ? JSON.parse(themeConfig)
                : defaultThemeCommonConfig;
            this.setNprogressBaseColor();
        },
        /** 存储本地自定义主题记录 */
        setThemeOverridesCommon() {
            window.localStorage.setItem(
                SYSTEM_THEME_COMMON,
                JSON.stringify(this.themeOverridesCommon)
            );
            this.setNprogressBaseColor();
        },
        /** 修改nprogress基础颜色 */
        setNprogressBaseColor(color: string = "") {
            const baseColor =
                color ||
                this.themeOverridesCommon?.primaryColor ||
                defaultThemeCommonConfig.primaryColor;
            NProgress.configure({
                template: `<div class="bar" style="--base-color: ${baseColor}" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>`,
            });
        },
    },
});

export default useSystemStore;

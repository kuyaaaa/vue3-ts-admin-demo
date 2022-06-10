import { defineStore } from "pinia";
import type { GlobalThemeOverrides } from "naive-ui";
import { SYSTEM_CONFIG } from "@/utils/static";
import { SystemConfig } from "@/types/config";
import { defaultThemeCommonConfig } from "@/config/theme";

const useSystemStore = defineStore({
    id: "system",
    state: () => {
        return {
            /** 头部容器高度 */
            headerHeight: 0,
            /** 主内容容器高度（不含padding以外层） */
            contentHeight: 0,
            /** 主内容容器宽度（不含padding以外层） */
            contentWidth: 0,
            /** 设置相关 */
            config: {} as SystemConfig,
            /** 主题变量 */
            themeOverridesCommon: defaultThemeCommonConfig as GlobalThemeOverrides,
        };
    },
    actions: {
        getSystemConfig() {
            this.config = JSON.parse(window.localStorage.getItem(SYSTEM_CONFIG) || "{}");
        },
        setSystemConfig() {
            window.localStorage.setItem(SYSTEM_CONFIG, JSON.stringify(this.config));
        },
    },
});

export default useSystemStore;

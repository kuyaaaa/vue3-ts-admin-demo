// 设置相关定义

import type { GlobalThemeOverrides } from "naive-ui";

/** 系统设置，如主题等 */
export interface SystemConfig {
    /** 主题 */
    theme: "dark" | "normal" | null;
    /** 主题变量 */
    themeOverridesCommon: GlobalThemeOverrides["common"];
}

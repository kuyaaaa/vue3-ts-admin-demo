/** primary默认颜色 */
export const defaultPrimaryColor = {
    primaryColor: "#18a058",
    primaryColorHover: "#36ad6a",
    primaryColorPressed: "#0c7a43",
    primaryColorSuppl: "#36ad6a",
};

/** info默认颜色 */
export const defaultInfoColor = {
    infoColor: "#2080f0",
    infoColorHover: "#4098fc",
    infoColorPressed: "#1060c9",
    infoColorSuppl: "#4098fc",
};

/** success默认颜色 */
export const defaultSuccessColor = {
    successColor: "#18a058",
    successColorHover: "#36ad6a",
    successColorPressed: "#0c7a43",
    successColorSuppl: "#36ad6a",
};

/** warning默认颜色 */
export const defaultWarningColor = {
    warningColor: "#f0a020",
    warningColorHover: "#fcb040",
    warningColorPressed: "#c97c10",
    warningColorSuppl: "#fcb040",
};

/** error默认颜色 */
export const defaultErrorColor = {
    errorColor: "#d03050",
    errorColorHover: "#de576d",
    errorColorPressed: "#ab1f3f",
    errorColorSuppl: "#de576d",
};

/** 默认滚动条配置 */
export const defaultScroll = {
    scrollbarWidth: "5px",
    scrollbarHeight: "5px",
    scrollbarBorderRadius: "5px",
    scrollbarColor: "rgba(0,0,0,0.25)",
    scrollbarColorHover: "rgba(0,0,0,0.4)",
};

/** 默认主题配置 */
export const defaultThemeCommonConfig = {
    baseColor: "#fff",
    ...defaultPrimaryColor,
    ...defaultSuccessColor,
    ...defaultInfoColor,
    ...defaultWarningColor,
    ...defaultErrorColor,
    ...defaultScroll,
};

/** 颜色字段集合 hover、pressed、suppl等 */
export const colorKeyList = [
    { name: "基础颜色", key: "Color" },
    { name: "hover颜色", key: "ColorHover" },
    { name: "pressed颜色", key: "ColorPressed" },
    { name: "suppl颜色", key: "ColorSuppl" },
];

/** 颜色类型集合 primary、info、success等 */
export const colorTypeList = ["primary", "info", "success", "warning", "error"];

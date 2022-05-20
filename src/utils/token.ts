// token相关操作方法

import { TOKEN } from "./static";

/**
 * 获取token
 * @tips 默认从localStorage获取，如需修改请到 @/utils/token.ts 文件中修改
 */
export const getToken = () => {
    return window.localStorage.getItem(TOKEN) || "";
};

/**
 * 存储token
 * @tips 默认从localStorage获取，如需修改请到 @/utils/token.ts 文件中修改
 */
export const setToken = (token: string) => {
    return window.localStorage.setItem(TOKEN, token);
};

/**
 * 清除token
 * @tips 默认从localStorage清除，如需修改请到 @/utils/token.ts 文件中修改
 */
export const removeToken = () => {
    return window.localStorage.removeItem(TOKEN);
};

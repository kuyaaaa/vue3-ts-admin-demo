import { defineStore } from "pinia";
import type { GlobalTheme } from "naive-ui";

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
            /** 主题 */
            theme: null as GlobalTheme | null,
        };
    },
});

export default useSystemStore;

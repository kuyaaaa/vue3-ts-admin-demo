// 路由历史记录
import { defineStore } from "pinia";
import type { RouteLocationNormalized } from "vue-router";
import type { VNode } from "vue";
import { renderIconStr } from "@/utils/render";

/** 路由历史记录数组元素类型 */
export interface routerHistoryItem extends RouteLocationNormalized {
    iconNode?: () => VNode;
}

const useHistoryStore = defineStore({
    id: "history",
    state: () => {
        return {
            routerHistory: [] as routerHistoryItem[],
        };
    },
    actions: {
        /**
         * 存储路由历史记录
         */
        async setRouterHistory(history: routerHistoryItem) {
            const hasIndex = this.routerHistory.findIndex(item => item.path === history.path);
            if (!~hasIndex) {
                this.routerHistory.push({
                    ...history,
                    iconNode: await renderIconStr(history.meta?.icon),
                });
            }
        },
        /**
         * 删除单个路由历史记录
         */
        removeRouterHistory(index: number) {
            const { path: curPath } = window.$router.currentRoute.value;
            const finalIndex = this.routerHistory.length - 1;
            // 是否为当前页面
            if (curPath === this.routerHistory[index].path) {
                // 少于等于一个元素，删除后列表为空，跳转到首页
                if (this.routerHistory.length <= 1) {
                    window.$router.push("/home");
                }
                // 如果为最后一个元素，删除后跳转到前一个元素页面
                else if (index === finalIndex) {
                    window.$router.push(this.routerHistory[index - 1].path);
                }
                // 不为最后一个元素，即删除后后面还有元素，跳转到后一个元素页面
                else {
                    window.$router.push(this.routerHistory[index + 1].path);
                }
            }
            this.routerHistory.splice(index, 1);
        },
        /**
         * 清除路由历史记录
         */
        clearRouterHistory() {
            this.routerHistory = [];
        },
    },
});

export default useHistoryStore;

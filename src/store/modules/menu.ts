// 菜单列表
import { defineStore } from "pinia";
import type { RouteRecordRaw } from "vue-router";
import type { MenuOption } from "naive-ui";
import { Home as HomeIcon } from "@vicons/ionicons5";
import { renderIcon, renderRouterLink } from "@/utils/render";
import { routes } from "@/router";

export interface MenuStoreState {
    list: MenuOption[];
}

export interface MenuStoreActions {
    createMenuList: () => void;
}

// 递归创建菜单列表
const handleRoutesChildren = (list: RouteRecordRaw[]) => {
    const finalList: any[] = [];
    for (let i = 0; i < list.length; i++) {
        const item = list[i];
        // 隐藏菜单不加入
        if (!item.meta?.hidden) {
            // onlyFirst检测，直接取children[0]做一级标签
            const { meta, name } = item.meta?.onlyFirst && item.children ? item.children[0] : item;
            /** 最终处理后所需要的菜单一级子元素 */
            const finalChild: MenuOption = {
                key: String(name),
                // 没有onlyFirst标识且有子菜单 不具有跳转功能，即作为折叠菜单栏
                label:
                    !item.meta?.onlyFirst && item.children
                        ? meta?.label
                        : () => renderRouterLink(name, meta?.label),
                disabled: meta?.disabled,
                icon: renderIcon(meta?.icon),
            };
            if (item.meta?.onlyFirst) {
                finalList.push(finalChild);
                continue;
            }
            // 子元素中还有儿子判断，进行递归
            if (item.children) {
                finalChild.children = handleRoutesChildren(item.children);
            }

            finalList.push(finalChild);
        }
    }
    return finalList;
};

/**
 * 菜单信息仓库
 * @state       list:菜单列表，用于naive的menu
 * @actions     createMenuList:根据routes创建菜单列表
 */
const useMenuStore = defineStore<"menu", MenuStoreState, {}, MenuStoreActions>({
    id: "menu",
    state: () => {
        return {
            list: [],
        };
    },
    actions: {
        createMenuList() {
            const menuList = [];
            const routesList = routes;
            // "/"下的子路由仅保留一个，作为首页及菜单处理
            const indexRouteIndex = routesList.findIndex(item => item.path === "/");
            const indexRoute = routesList.splice(indexRouteIndex, 1)[0];
            if (indexRoute?.children) {
                const homeRoute = indexRoute.children[0];
                const { meta, name } = homeRoute;
                menuList.push({
                    key: String(name),
                    label: () => renderRouterLink(name, meta?.label),
                    icon: renderIcon(meta?.icon ? meta.icon : HomeIcon),
                });
            }
            // 遍历剩下的路由，加入菜单列表
            menuList.push(...handleRoutesChildren(routesList));

            this.list = menuList;
        },
    },
});

export default useMenuStore;

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
    list.forEach(item => {
        const { meta, name } = item;
        // 隐藏菜单不加入
        if (!meta?.hidden) {
            /** 最终处理后所需要的菜单一级子元素 */
            const finalChild: MenuOption = {
                key: String(name),
                label: item.children ? meta?.label : () => renderRouterLink(name, meta?.label),
                disabled: meta?.disabled,
                icon: renderIcon(meta?.icon),
            };

            // 子元素中还有儿子判断，进行递归
            if (item.children) {
                finalChild.children = handleRoutesChildren(item.children);
            }

            finalList.push(finalChild);
        }
    });
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

            console.log(menuList);

            this.list = menuList;
        },
    },
});

export default useMenuStore;

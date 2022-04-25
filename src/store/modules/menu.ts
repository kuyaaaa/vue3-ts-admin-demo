// 菜单列表
import { defineStore } from "pinia";
import type { RouteRecordRaw } from "vue-router";
import type { MenuOption } from "naive-ui";
import { h, Component } from "vue";
import { NIcon } from "naive-ui";
import { Home as HomeIcon } from "@vicons/ionicons5";
import { routes } from "@/router";

export interface MenuStoreState {
    list: MenuOption[];
}

export interface MenuStoreActions {
    createMenuList: () => void;
}

const renderIcon = (icon: Component) => {
    return () => h(NIcon, null, { default: () => h(icon) });
};

// 递归创建菜单列表
const handleRoutesChildren = (list: RouteRecordRaw[]) => {
    const finalList: any[] = [];
    list.forEach(item => {
        if (item.children) {
            const homeRoute = item.children[0];
            const { meta, name } = homeRoute;
            finalList.push({
                key: String(name),
                label: meta?.label,
                icon: renderIcon(meta?.icon ? meta.icon : HomeIcon),
            });
        }
    });
    console.log(finalList);
    return finalList;
};

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
                    label: meta?.label,
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

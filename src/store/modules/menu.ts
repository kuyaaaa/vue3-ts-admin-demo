// 菜单列表
import { defineStore } from "pinia";
import { RouteRecordRaw } from "vue-router";
import { MenuOption } from "naive-ui";
import { renderIconStr, renderRouterLink, renderATag } from "@/utils/render";
import { routes } from "@/router";

/** label字段处理，用于渲染不同的标签 */
const dealLabel = (child: RouteRecordRaw) => {
    // 有outLink：做外链跳转
    if (child.meta?.outLink) {
        return () => renderATag(String(child.meta?.label), { href: child.meta?.outLink });
    }
    // 有onlyFirst 并 有子元素：取第一个子元素属性渲染router-link标签
    else if (child.meta?.onlyFirst && child.children) {
        const { name, meta } = child.children[0];
        return () => renderRouterLink(String(name), meta?.label);
    }
    // 无子元素，即最底层菜单，直接渲染router-link标签
    else if (!child.children) {
        const { name } = child.children ? child.children[0] : child;
        return () => renderRouterLink(String(name), child.meta?.label);
    }
    // 其它情况归类为折叠菜单
    else {
        return child.meta?.label;
    }
};

// 递归创建菜单列表
const handleRoutesChildren = async (list: RouteRecordRaw[]) => {
    const finalList: any[] = [];
    for (let i = 0; i < list.length; i++) {
        const item = list[i];
        // 隐藏菜单不加入
        if (!item.meta?.hidden) {
            // onlyFirst检测，直接取children[0]做一级标签
            const { meta, name } = item.meta?.onlyFirst && item.children ? item.children[0] : item;
            /** 最终处理后所需要的菜单一级子元素 */
            const iconOption = { icon: await renderIconStr(meta?.icon) };
            const finalChild: MenuOption = {
                key: String(name),
                label: dealLabel(item),
                disabled: meta?.disabled,
                extra: meta?.isOutLink
                    ? () => renderATag(meta.label as string, { href: item.path })
                    : undefined,
                ...iconOption,
            };
            if (item.meta?.onlyFirst) {
                finalList.push(finalChild);
                continue;
            }
            // 子元素中还有儿子判断，进行递归
            if (item.children) {
                finalChild.children = await handleRoutesChildren(item.children);
            }

            finalList.push(finalChild);
        }
    }
    return finalList;
};

/** 菜单信息仓库 */
const useMenuStore = defineStore({
    id: "menu",
    state: () => {
        return {
            /** 菜单列表，用于naive的menu */
            list: [] as MenuOption[],
        };
    },
    actions: {
        /** 根据routes创建菜单列表 */
        async createMenuList() {
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
                    label: () => renderRouterLink(String(name), meta?.label),
                    icon: await renderIconStr(meta?.icon),
                });
            }
            // 遍历剩下的路由，加入菜单列表
            menuList.push(...(await handleRoutesChildren(routesList)));

            this.list = menuList;
        },
    },
});

export default useMenuStore;

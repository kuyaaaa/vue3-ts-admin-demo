// 路由拓展定义
/* eslint no-unused-vars: "off" */
import "vue-router";

declare module "vue-router" {
    interface RouteMeta {
        /** 对应菜单名称 */
        label?: string;
        /** 图标，需从"@vicons"引入 */
        icon?: keyof typeof import("@vicons/ionicons5");
        /** 是否在菜单中隐藏 */
        hidden?: boolean;
        /** 是否在菜单中禁用 */
        disabled?: boolean;
        /**
         * 是否只为一级菜单
         * 若为true，只会取当前路由children下第一个元素替换为一级菜单
         */
        onlyFirst?: boolean;
        /** 如果为外链，填外链地址 */
        outLink?: string;
        /** 是否固定在view-tags下，为true时无法关闭 */
        isAffix?: boolean;
    }
}

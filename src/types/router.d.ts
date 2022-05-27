// 路由拓展定义
/* eslint no-unused-vars: "off" */
import "vue-router";
import type { Component } from "vue";

declare module "vue-router" {
    interface RouteMeta {
        /** 对应菜单名称 */
        label?: string;
        /** 图标，需从"@vicons"引入 */
        icon?: Component;
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
    }
}

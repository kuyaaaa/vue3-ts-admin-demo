// 路由拓展定义
/* eslint no-unused-vars: "off" */
import "vue-router";
import type { Component } from "vue";

declare module "vue-router" {
    /**
     * meta参数定义
     * @param   label       对应菜单名称
     * @param   icon        图标，需从"@vicons/ionicons5"引入
     * @param   hidden      是否在菜单中隐藏
     * @param   disabled    是否在菜单中禁用
     */
    interface RouteMeta {
        label?: string;
        icon?: Component;
        hidden?: boolean;
        disabled?: boolean;
    }
}

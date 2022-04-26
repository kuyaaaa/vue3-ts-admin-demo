// 渲染组件相关函数
import { RouterLink } from "vue-router";
import { h, Component } from "vue";
import type { RouteRecordName } from "vue-router";
import { NIcon } from "naive-ui";

/** 渲染图标组件方法（不传入参数返回undefined） */
export const renderIcon = (icon?: Component) => {
    return icon ? () => h(NIcon, null, { default: () => h(icon) }) : undefined;
};

/**
 * 渲染router-link组件方法
 * @param   name    对应routes的跳转name
 * @param   label   菜单名称
 */
export const renderRouterLink = (name: RouteRecordName | undefined, label?: string) => {
    return h(RouterLink, { to: { name } }, { default: () => label });
};

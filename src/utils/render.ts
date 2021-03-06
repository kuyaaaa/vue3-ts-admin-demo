// 渲染组件相关函数
import { RouterLink } from "vue-router";
import { h, Component } from "vue";
import type { AnchorHTMLAttributes } from "vue";
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
export const renderRouterLink = (name: RouteRecordName, label?: string) => {
    return h(RouterLink, { to: { name } }, { default: () => label });
};

/**
 * 渲染a标签方法
 * @param   content     a标签显示内容 <a>content</a>
 * @param   options     a标签对应的属性，如：href，target
 */
export const renderATag = (content: string, options: AnchorHTMLAttributes) => {
    return h("a", { target: "_blank", ...options } as AnchorHTMLAttributes, {
        default: () => content,
    });
};

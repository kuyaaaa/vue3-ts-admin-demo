<template>
    <n-card class="card-container">
        <n-p>单级菜单需要在router中如下配置：</n-p>
        <n-code :code="oneRouteCode" language="javascript" />
        <n-p>单级菜单的所有属性在<code> children </code>的<code> meta </code>中定义。</n-p>
        <n-p>
            必须给单级菜单包裹在一层<code> Layout </code>组件下的<code> children </code
            >中，并且在外层路由的<code> meta </code>中定义<code> onlyFirst </code>字段标识。
        </n-p>
    </n-card>
</template>

<script lang="ts" setup>
import { NCard, NCode, NP } from "naive-ui";

const oneRouteCode = `{
    path: "/one",
    component: Layout,
    redirect: "/one/index",
    meta: { onlyFirst: true },
    children: [
        {
            path: "index",
            name: "oneIndex",
            component: () => import("@/views/one/index.vue"),
            meta: { label: "单级菜单", icon: GitCommitOutlineIcon },
        },
    ],
},`;
</script>

<style lang="scss" scoped></style>

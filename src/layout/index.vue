<template>
    <n-layout class="layout-container">
        <!-- 头部 -->
        <n-layout-header class="layout-header" bordered></n-layout-header>
        <n-layout class="layout-main-container" has-sider>
            <!-- 侧栏 -->
            <n-layout-sider :native-scrollbar="false" class="layout-sider" bordered>
                <menu-content />
            </n-layout-sider>
            <!-- 主内容 -->
            <n-layout :native-scrollbar="false" embedded class="layout-main">
                <router-view />
            </n-layout>
        </n-layout>
    </n-layout>
</template>

<script lang="ts" setup>
import { NLayout, NLayoutSider, NLayoutHeader } from "naive-ui";
import MenuContent from "./content/menu.vue";
</script>

<style lang="scss" scoped>
.layout-container {
    height: 100vh;
}

.layout-header {
    height: 60px;
    padding: 0 15px;
}

.layout-sider {
    width: 300px;
}

.layout-main-container {
    height: calc(100vh - 60px);
}

.layout-main {
    padding: 10px 13px;
}
</style>

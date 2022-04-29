<template>
    <n-layout class="layout-container" has-sider>
        <!-- 侧栏 -->
        <sider-content />
        <n-layout>
            <!-- 头部 -->
            <n-layout-header class="layout-header" bordered>
                <header-content />
            </n-layout-header>
            <!-- 主内容 -->
            <n-layout-content :native-scrollbar="false" embedded class="layout-content-container">
                <router-view />
            </n-layout-content>
        </n-layout>
    </n-layout>
</template>

<script lang="ts" setup>
import { NLayout, NLayoutHeader, NLayoutContent } from "naive-ui";
import HeaderContent from "./content/header.vue";
import SiderContent from "./content/sider.vue";
</script>

<style lang="scss" scoped>
.layout-container {
    height: 100vh;
}

.layout-header {
    height: 50px;
    padding: 0 15px;
}

.layout-content-container {
    height: calc(100vh - 60px);
    padding: 15px 20px;
}
</style>

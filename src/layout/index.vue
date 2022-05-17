<template>
    <n-layout class="layout-container" has-sider>
        <!-- 侧栏 -->
        <sider-content />
        <n-layout>
            <!-- 头部 -->
            <n-layout-header ref="headerRef" class="layout-header" bordered>
                <header-content />
            </n-layout-header>
            <!-- 主内容 -->
            <n-layout-content
                ref="contentRef"
                :native-scrollbar="false"
                embedded
                class="layout-content-container"
            >
                <router-view />
            </n-layout-content>
        </n-layout>
    </n-layout>
</template>

<script lang="ts" setup>
import { NLayout, NLayoutHeader, NLayoutContent } from "naive-ui";
import { onMounted, ref } from "vue";
import HeaderContent from "./content/header.vue";
import SiderContent from "./content/sider.vue";
import useSystemStore from "@/store/modules/system";

const style_content_padding = 20;

const systemStore = useSystemStore();

const headerRef = ref<any>(null);
const contentRef = ref<any>(null);

onMounted(() => {
    const headerEl = headerRef.value.$el as HTMLElement;
    systemStore.headerHeight = headerEl.offsetHeight;

    const contentEl = contentRef.value.$el as HTMLElement;
    systemStore.contentHeight = contentEl.offsetHeight - style_content_padding * 2;
    systemStore.contentWidth = contentEl.offsetWidth - style_content_padding * 2;

    console.log(systemStore);
});
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
    height: calc(100vh - 50px);
    padding: v-bind('style_content_padding + "px"');
    background-color: #fff;
}
</style>

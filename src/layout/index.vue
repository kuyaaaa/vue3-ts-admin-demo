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
                <n-layout-content :native-scrollbar="false" embedded class="content-container">
                    <router-view />
                </n-layout-content>
            </n-layout-content>
        </n-layout>
    </n-layout>
</template>

<script lang="ts" setup>
import { NLayout, NLayoutHeader, NLayoutContent } from "naive-ui";
import { onBeforeUnmount, onMounted, ref } from "vue";
import { throttle } from "lodash";
import HeaderContent from "./content/header.vue";
import SiderContent from "./content/sider.vue";
import useSystemStore from "@/store/modules/system";

const style_content_padding = 20;
const style_content_height = ref("100vh");

const systemStore = useSystemStore();

const headerRef = ref<any>(null);
const contentRef = ref<any>(null);

const resizeHandler = throttle(() => {
    const headerEl = headerRef.value?.$el as HTMLElement;
    const contentEl = contentRef.value?.$el as HTMLElement;

    systemStore.$patch({
        headerHeight: headerEl.offsetHeight,
        contentHeight: contentEl.offsetHeight - style_content_padding * 2,
        contentWidth: contentEl.offsetWidth - style_content_padding * 2,
    });

    style_content_height.value = `${window.innerHeight - systemStore.headerHeight}px`;
}, 200);

onMounted(() => {
    window.addEventListener("resize", resizeHandler);
    resizeHandler();
});

onBeforeUnmount(() => {
    window.removeEventListener("resize", resizeHandler);
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
    height: v-bind(style_content_height);
}

.content-container {
    padding: v-bind('style_content_padding + "px"');
    box-sizing: border-box;
}
</style>

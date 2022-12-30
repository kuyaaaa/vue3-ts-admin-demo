<template>
    <n-layout class="layout-container" has-sider>
        <!-- 侧栏 -->
        <sider-content @collapsed="handleSiderCollapse" />
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
                <div class="layout-content-main">
                    <router-view v-slot="{ Component }">
                        <transition
                            enter-active-class="fade-enter fade-enter-active"
                            leave-active-class="fade-leave fade-leave-active"
                        >
                            <keep-alive :include="keepAliveInclude">
                                <component :is="Component" />
                            </keep-alive>
                        </transition>
                    </router-view>
                </div>
            </n-layout-content>
        </n-layout>
    </n-layout>
</template>

<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import { throttle } from "lodash-es";
import { storeToRefs } from "pinia";
import { NLayoutContent, NLayoutHeader } from "naive-ui";
import HeaderContent from "./content/header.vue";
import SiderContent from "./content/sider.vue";
import useSystemStore from "@/store/modules/system";
import useHistoryStore from "@/store/modules/history";

const style_content_padding = 20;
const style_content_height = ref("100%");

const systemStore = useSystemStore();

const historyStore = useHistoryStore();
const { keepAliveInclude } = storeToRefs(historyStore);

const headerRef = ref<InstanceType<typeof NLayoutHeader> | null>(null);
const contentRef = ref<InstanceType<typeof NLayoutContent> | null>(null);

const resizeHandler = throttle(() => {
    const headerEl: HTMLElement = headerRef.value?.$el;
    const contentEl: HTMLElement = contentRef.value?.$el;

    const headerHeight = headerEl.offsetHeight;
    const contentHeight = window.innerHeight - headerHeight;
    const contentBorderBoxHeight = contentHeight - style_content_padding * 2;
    const contentWidth = contentEl.offsetWidth - style_content_padding * 2;

    style_content_height.value = `${contentHeight}px`;

    systemStore.$patch({ headerHeight, contentHeight, contentBorderBoxHeight, contentWidth });
}, 200);

const handleSiderCollapse = (collapsed: boolean) => {
    const contentEl = contentRef.value?.$el as HTMLElement;
    systemStore.contentWidth = contentEl.offsetWidth - style_content_padding * 2;
};

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

.layout-content-container {
    height: v-bind(style_content_height);

    .layout-content-main {
        padding: v-bind('style_content_padding + "px"');
    }
}

.fade-enter {
    opacity: 0;
}
.fade-leave {
    opacity: 1;
}
.fade-enter-active {
    transition: all 0.3s;
}
.fade-leave-active {
    opacity: 0;
    transition: all 0.3s;
}
</style>

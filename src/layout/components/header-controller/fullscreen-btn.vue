<template>
    <n-tooltip>
        <template #trigger>
            <n-button text style="font-size: 24px" @click="handleScreenFullClick">
                <n-icon>
                    <full-screen-icon v-if="!isFullscreen" />
                    <full-screen-exit-icon v-else />
                </n-icon>
            </n-button>
        </template>
        {{ tooltipText }}
    </n-tooltip>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from "vue";
import screenfull from "screenfull";
import {
    FullscreenOutlined as FullScreenIcon,
    FullscreenExitOutlined as FullScreenExitIcon,
} from "@vicons/antd";

const isFullscreen = ref(false);
const tooltipText = computed(() => (isFullscreen.value ? "退出全屏" : "全屏"));
const handleScreenFullClick = () => {
    if (screenfull.isEnabled) {
        screenfull.toggle();
    } else {
        window.$message.error("全屏已被禁用或该浏览器不支持全屏");
    }
};

onMounted(() => {
    screenfull.on("change", () => {
        isFullscreen.value = screenfull.isFullscreen;
    });
});
</script>

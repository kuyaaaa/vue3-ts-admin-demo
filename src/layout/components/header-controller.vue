<template>
    <div class="header-controller-container">
        <n-tooltip>
            <template #trigger>
                <n-button text style="font-size: 24px" @click="handleScreenFullClick">
                    <n-icon>
                        <full-screen-icon v-if="!isFullscreen" />
                        <full-screen-exit-icon v-else />
                    </n-icon>
                </n-button>
            </template>
            全屏
        </n-tooltip>
        <n-switch
            v-model:value="themeSwitchValue"
            :round="false"
            size="medium"
            @update:value="handleThemeChange"
        >
            <template #checked-icon>🌙</template>
            <template #unchecked-icon>☀</template>
        </n-switch>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { darkTheme, NSwitch, NButton, NIcon, NTooltip } from "naive-ui";
import screenfull from "screenfull";
import {
    FullscreenOutlined as FullScreenIcon,
    FullscreenExitOutlined as FullScreenExitIcon,
} from "@vicons/antd";

import useSystemStore from "@/store/modules/system";

const systemStore = useSystemStore();

// 主题切换按钮
const themeSwitchValue = ref(false);
const handleThemeChange = (isDark: boolean) => {
    systemStore.theme = isDark ? darkTheme : null;
};

// 全屏按钮
const isFullscreen = ref(false);
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

<style lang="scss" scoped>
.header-controller-container {
    @include flex-center-main-cross;

    > * + * {
        margin-left: 8px;
    }
}
</style>

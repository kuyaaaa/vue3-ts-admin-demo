<template>
    <n-config-provider
        :theme="theme"
        :theme-overrides="{ common: themeOverridesCommon }"
        :locale="zhCN"
        :date-locale="dateZhCN"
        :hljs="hljs"
        abstract
    >
        <n-message-provider>
            <n-dialog-provider>
                <global-container />
            </n-dialog-provider>
        </n-message-provider>
    </n-config-provider>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { zhCN, dateZhCN, darkTheme } from "naive-ui";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import { isEmpty } from "lodash";
import { storeToRefs } from "pinia";
import GlobalContainer from "@/layout/global.vue";
import useSystemStore from "@/store/modules/system";

hljs.registerLanguage("javascript", javascript);

const systemStore = useSystemStore();
const { themeOverridesCommon, config } = storeToRefs(systemStore);

// 获取系统设置
if (isEmpty(config.value)) {
    systemStore.getSystemConfig();
}
const theme = computed(() => (config.value.theme === "dark" ? darkTheme : null));

// 获取主题配置
systemStore.getThemeOverridesCommon();
</script>

<style lang="scss">
@import "@/assets/styles/global.scss";
</style>

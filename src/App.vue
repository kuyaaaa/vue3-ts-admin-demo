<template>
    <n-config-provider :theme="theme" :locale="zhCN" :date-locale="dateZhCN" :hljs="hljs" abstract>
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
import GlobalContainer from "@/layout/global.vue";
import useSystemStore from "@/store/modules/system";

hljs.registerLanguage("javascript", javascript);

const systemStore = useSystemStore();
const theme = computed(() => (systemStore.config.theme === "dark" ? darkTheme : null));
</script>

<style lang="scss">
@import "@/assets/styles/global.scss";
</style>

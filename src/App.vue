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
import { zhCN, dateZhCN } from "naive-ui";
import { storeToRefs } from "pinia";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import GlobalContainer from "@/layout/global.vue";
import useSystemStore from "@/store/modules/system";

hljs.registerLanguage("javascript", javascript);

const systemStore = useSystemStore();
const { theme } = storeToRefs(systemStore);
</script>

<style lang="scss">
@import "@/assets/styles/global.scss";
</style>

<template>
    <n-config-provider :theme="theme" abstract>
        <n-message-provider>
            <n-dialog-provider>
                <global-container />
            </n-dialog-provider>
        </n-message-provider>
    </n-config-provider>
</template>

<script setup lang="ts">
import { NMessageProvider, NDialogProvider, NConfigProvider } from "naive-ui";
import { storeToRefs } from "pinia";
import GlobalContainer from "@/layout/global.vue";
import useSystemStore from "@/store/modules/system";

const systemStore = useSystemStore();
const { theme } = storeToRefs(systemStore);
</script>

<style lang="scss">
@import "@/assets/styles/global.scss";
</style>

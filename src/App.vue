<template>
    <n-message-provider>
        <n-dialog-provider>
            <global-container />
        </n-dialog-provider>
    </n-message-provider>
</template>

<script setup lang="ts">
import { NMessageProvider, NDialogProvider } from "naive-ui";
import GlobalContainer from "@/layout/global.vue";
</script>

<style lang="scss">
@import "@/assets/styles/global.scss";
</style>

// 挂载window下方法组件
<template>
    <n-config-provider :locale="zhCN" :date-locale="dateZhCN" abstract>
        <router-view />
    </n-config-provider>
</template>

<script lang="ts" setup>
import { useDialog, useMessage, NConfigProvider, zhCN, dateZhCN } from "naive-ui";

window.$message = useMessage();
window.$dialog = useDialog();
</script>

<style lang="scss" scoped></style>

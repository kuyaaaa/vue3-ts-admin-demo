// 挂载window下方法组件
<template>
    <router-view />
</template>

<script lang="ts" setup>
import { useMessage } from "naive-ui";

window.$message = useMessage();
</script>

<style lang="scss" scoped></style>

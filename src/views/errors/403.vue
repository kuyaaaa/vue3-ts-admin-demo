<template>
    <div class="container">
        <n-result status="403" size="huge" title="403 禁止访问" description="总有些门是对你关闭的">
            <template #footer>
                <n-button @click="handleReturn">回到过去</n-button>
            </template>
        </n-result>
    </div>
</template>

<script lang="ts" setup>
import { NResult, NButton } from "naive-ui";

const handleReturn = () => {
    window.$router.back();
};
</script>

<style lang="scss" scoped>
.container {
    width: 100vw;
    height: 100vh;
    @include flex-center-main-cross;
}
</style>

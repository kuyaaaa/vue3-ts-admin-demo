<template>
    <div class="container">
        <n-result status="404" size="huge" title="404 资源不存在" description="生活总归带点荒谬">
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

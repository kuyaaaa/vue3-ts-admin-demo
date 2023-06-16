<template>
    <n-card class="card-container">
        <n-space justify="center" vertical>
            <input-rich v-model:value="richText" placeholder="请输入..."></input-rich>
            <n-space justify="center">
                <n-button type="primary" @click="handleSubmit">提交</n-button>
            </n-space>
        </n-space>
    </n-card>
</template>

<script lang="ts" setup>
const richText = ref(
    `<p>本富文本编辑器基于<a href="https://www.wangeditor.com/" target="_blank">wangEditor</a></p>`
);

const handleSubmit = () => {
    window.$dialog.success({
        title: "富文本内容",
        content: richText.value,
        style: {
            width: "70vw",
        },
    });
};
</script>

<style lang="scss" scoped></style>

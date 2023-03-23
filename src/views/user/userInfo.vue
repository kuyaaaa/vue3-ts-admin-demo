<template>
    <n-card class="card-container">
        <n-form
            ref="formRef"
            :model="formData"
            :rules="rules"
            label-placement="left"
            label-width="auto"
            require-mark-placement="right-hanging"
        >
            <n-form-item label="头像" path="avatar">
                <n-space vertical>
                    <n-avatar :size="100" :src="formData.avatar" />
                    <n-upload
                        accept="image/*"
                        list-type="image"
                        :max="1"
                        :action="IMG_UPLOAD_API_URL"
                        @finish="handleAvatarUpFinish"
                    >
                        <n-button>上传头像</n-button>
                    </n-upload>
                </n-space>
            </n-form-item>
            <n-form-item label="用户昵称" path="userName">
                <n-input v-model:value="formData.userName" placeholder="请输入用户昵称" />
            </n-form-item>
            <n-form-item label="个性签名" path="signature">
                <n-input
                    v-model:value="formData.signature"
                    type="textarea"
                    placeholder="这个人很懒，什么都没有留下！"
                />
            </n-form-item>
            <n-space justify="center">
                <n-button type="primary" @click="handleSubmit">确认修改</n-button>
            </n-space>
        </n-form>
    </n-card>
</template>

<script lang="ts" setup>
import { FormInst, UploadFileInfo } from "naive-ui";

const loginStore = useUserStore();
const formData = ref(loginStore.userInfo);

onMounted(async () => {
    formData.value = await loginStore.getUserInfo();
});

/** 头像上传接口地址，自行修改后缀 */
const IMG_UPLOAD_API_URL = `${import.meta.env.VITE_BASE_URL}/upload/avatar`;

const formRef = ref<FormInst | null>(null);

const rules = {
    avatar: {
        required: true,
        trigger: "change",
        message: "上传一张帅照头像先",
    },
    userName: {
        required: true,
        trigger: ["input", "blur"],
        message: "不起个名字没人认识你哦",
    },
};

const handleAvatarUpFinish = ({ file }: { file: UploadFileInfo }) => {
    formData.value.avatar = file.url || "";
};

const handleSubmit = (e: MouseEvent) => {
    e.preventDefault();
    formRef.value?.validate(errors => {
        if (!errors) {
            window.$message.success("验证成功");
        } else {
            console.log(errors);
            window.$message.error("验证失败");
        }
    });
};
</script>

<style lang="scss" scoped></style>

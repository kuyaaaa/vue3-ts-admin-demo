<template>
    <div class="container">
        <n-card class="card-container">
            <n-h1 class="title">this is login</n-h1>
            <n-form
                ref="formRef"
                :label-width="55"
                label-placement="left"
                :model="formValue"
                :rules="rules"
            >
                <n-form-item path="userName">
                    <n-input v-model:value="formValue.userName" placeholder="用户名">
                        <template #prefix>
                            <n-icon :component="Person" />
                        </template>
                    </n-input>
                </n-form-item>
                <n-form-item type="password" path="password">
                    <n-input
                        v-model:value="formValue.password"
                        type="password"
                        show-password-on="click"
                        placeholder="密码"
                    >
                        <template #prefix>
                            <n-icon :component="LockClosed" />
                        </template>
                    </n-input>
                </n-form-item>
                <n-form-item class="btn-row">
                    <n-button type="primary" size="large" @click="handleLogin">
                        <template #icon>
                            <n-icon>
                                <login-icon />
                            </n-icon>
                        </template>
                        登录
                    </n-button>
                </n-form-item>
            </n-form>
        </n-card>
    </div>
</template>

<script lang="ts" setup>
import { NCard, NH1, NForm, NFormItem, NInput, NIcon, NButton } from "naive-ui";
import type { FormInst } from "naive-ui";
import { Person, LockClosed, LogIn as loginIcon } from "@vicons/ionicons5";
import { ref } from "vue";
import { LoginParams } from "@/types/user";
import useLoginStore from "@/store/modules/login";

const formRef = ref<FormInst | null>(null);
const formValue = ref<LoginParams>({
    userName: "",
    password: "",
});
const rules = ref({
    userName: {
        required: true,
        message: "请输入用户名",
        trigger: "blur",
    },
    password: { required: true, message: "请输入密码", trigger: "blur" },
});

const loginStore = useLoginStore();

const handleLogin = (e: MouseEvent) => {
    e.preventDefault();
    formRef.value?.validate(errors => {
        if (!errors) {
            loginStore.login(formValue.value);
        }
    });
};
</script>

<style lang="scss" scoped>
.container {
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(60deg, #64b3f4 0%, #c2e59c 100%);
    @include flex-center-main-cross;
    flex-direction: column;
}

.card-container {
    width: 540px;
    padding: 0 20px;
    @include box-shadow-base;

    .title {
        text-align: center;
    }

    .btn-row {
        @include flex-center-main-cross;
    }
}
</style>

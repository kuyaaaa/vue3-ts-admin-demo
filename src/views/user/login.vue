<template>
    <div class="container" :class="config.theme">
        <n-card class="card-container">
            <n-h1 class="title">{{ PROJECT_TITLE }}</n-h1>
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
import { FormInst } from "naive-ui";
import { Person, LockClosed, LogIn as loginIcon } from "@vicons/ionicons5";
import { LoginParams } from "@/types/user";
import { PROJECT_TITLE } from "@/config/system";

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

const loginStore = useUserStore();

const handleLogin = (e: MouseEvent) => {
    e.preventDefault();
    formRef.value?.validate(errors => {
        if (!errors) {
            loginStore.login(formValue.value);
        }
    });
};

const systemStore = useSystemStore();
const { config } = storeToRefs(systemStore);
</script>

<style lang="scss" scoped>
.container {
    width: 100vw;
    height: 100vh;
    @include flex-center-main-cross;
    flex-direction: column;
    transition: all 0.3s;
    background-image: linear-gradient(60deg, #64b3f4 0%, #c2e59c 100%);

    &.dark {
        background: linear-gradient(to bottom, #323232 0%, #3f3f3f 40%, #1c1c1c 150%),
            linear-gradient(to top, rgba(255, 255, 255, 0.4) 0%, rgba(0, 0, 0, 0.25) 200%);
        background-blend-mode: multiply;
    }
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

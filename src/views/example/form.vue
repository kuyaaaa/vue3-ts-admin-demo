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
            <n-form-item label="姓名" path="name">
                <n-input v-model:value="formData.name" placeholder="请输入姓名" />
            </n-form-item>
            <n-form-item label="性别" path="sex">
                <n-radio-group v-model:value="formData.sex" name="sex">
                    <n-space>
                        <n-radio value="1">男</n-radio>
                        <n-radio value="2">女</n-radio>
                        <n-radio value="3">保密哦</n-radio>
                    </n-space>
                </n-radio-group>
            </n-form-item>
            <n-form-item label="邮箱" path="email">
                <n-auto-complete
                    v-model:value="formData.email"
                    :options="emailOptions"
                    placeholder="请输入邮箱"
                />
            </n-form-item>
            <n-form-item label="生日" path="birthday">
                <n-date-picker
                    v-model:value="formData.birthday"
                    type="date"
                    clearable
                    placeholder="不填也罢"
                />
            </n-form-item>
            <n-form-item label="我喜欢" path="iLike">
                <n-checkbox-group v-model:value="formData.iLike">
                    <n-space>
                        <n-checkbox value="1" label="🍎" />
                        <n-checkbox value="2" label="🍌" />
                        <n-checkbox value="3" label="🍊" />
                        <n-checkbox value="4" label="🍉" />
                    </n-space>
                </n-checkbox-group>
            </n-form-item>
            <n-form-item label="个人简介" path="description">
                <n-input
                    v-model:value="formData.description"
                    type="textarea"
                    placeholder="这个人很懒，什么都没有留下！"
                />
            </n-form-item>
            <n-space justify="center">
                <n-button type="primary" @click="handleSubmit">提交</n-button>
                <n-button type="error" @click="handleReset">重置</n-button>
            </n-space>
        </n-form>
    </n-card>
</template>

<script lang="ts" setup>
import { FormInst, FormRules } from "naive-ui";
import { cloneDeep } from "lodash-es";

const initialFormData = {
    name: "",
    sex: null as number | null,
    email: "",
    birthday: null as number | null,
    iLike: [],
    description: "",
};
const formData = ref(cloneDeep(initialFormData));
const formRef = ref<FormInst | null>(null);
const rules: FormRules = {
    name: {
        required: true,
        trigger: ["blur", "input"],
        message: "请输入姓名，无名氏除外",
    },
    email: [
        {
            required: true,
            trigger: ["blur", "input"],
            message: "请输入邮箱，没有就去申请一个",
        },
        {
            type: "email",
            trigger: ["blur", "input"],
            message: "请输入正确格式的邮箱",
        },
    ],
    sex: {
        required: true,
        trigger: "change",
        message: "请选择性别，变态除外",
    },
};

const emailSuffix = ["@qq.com", "@gmail.com", "@163.com"];
const emailOptions = computed(() =>
    emailSuffix.map(suffix => {
        const prefix = formData.value.email.split("@")[0];
        return {
            label: prefix + suffix,
            value: prefix + suffix,
        };
    })
);

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
const handleReset = () => {
    formData.value = cloneDeep(initialFormData);
    formRef.value?.restoreValidation();
};
</script>

<style lang="scss" scoped></style>

<template>
    <n-input-number
        v-bind="$attrs"
        :value="Number(inputValue)"
        :on-update:value="
            input => {
                inputValue = input ? `${input}${props.suffix}` : String($attrs.min) || '';
            }
        "
    >
        <template #suffix>{{ suffix }}</template>
    </n-input-number>
</template>

<script lang="ts" setup>
/**
 * 后缀数字输入框(继承<n-input-number>)
 *
 * https://www.naiveui.com/zh-CN/os-theme/components/input-number
 *
 * 用于输入数字而v-model的值为带后缀的数字拼接的字符串
 *
 * example: 只输入"15"，而v-model绑定的值需要为"15元"
 *
 * @param   {string}    value   v-model:value的值
 * @param   {string}    suffix  后缀名，example: 需要获得"15元"，此属性则为"元"
 */
import { computed } from "vue";

const props = defineProps<{
    value?: string;
    suffix: string;
}>();
const emit = defineEmits<{ (event: "update:value", value: string): void }>();

const inputValue = computed({
    get: () => (props.value ? props.value.replace(props.suffix, "") : ""),
    set: val => {
        emit("update:value", val);
    },
});
</script>

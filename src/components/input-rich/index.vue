<template>
    <div class="input-rich--container">
        <Toolbar
            class="input-rich--toolbar"
            :editor="editorRef"
            :default-config="toolbarConfig"
            mode="default"
        />
        <Editor
            v-model="valueComputed"
            :style="{
                height:
                    typeof props.height === 'number' || !Number.isNaN(Number(props.height))
                        ? props.height + 'px'
                        : props.height,
            }"
            class="input-rich--editor"
            :default-config="editorConfig"
            mode="default"
            @on-created="handleCreated"
            @custom-alert="handleAlert"
        />
    </div>
</template>

<script lang="ts" setup>
import "@wangeditor/editor/dist/css/style.css";
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
import { IDomEditor, IEditorConfig, IToolbarConfig } from "@wangeditor/editor";
import { AlertType } from "@wangeditor/core/dist/core/src/config/interface";
import { useThemeVars } from "naive-ui";
import { TOKEN } from "@/utils/static";
import { getToken } from "@/utils/token";
import { imgUploadConfig, videoUploadConfig } from "./config";
import { customUploadInsert, handleUploadFailed, handleUploadError } from "./utils";

const props = withDefaults(
    defineProps<{
        value: string;
        /** 组件内容高度 */
        height?: number | string;
        /** 输入提示 */
        placeholder?: string;
        /** 图片上传最大大小 单位：mb */
        imgMaxSize?: string | number;
        /** 视频上传最大大小 单位：mb */
        videoMaxSize?: string | number;
    }>(),
    {
        value: undefined,
        height: 500,
        placeholder: "请输入内容",
        imgMaxSize: 0,
        videoMaxSize: 0,
    }
);

const emit = defineEmits<{ (event: "update:value", value: typeof props.value): void }>();

const valueComputed = computed({
    get: () => props.value,
    set: val => {
        emit("update:value", val);
    },
});

const style_naive_theme = useThemeVars();

const editorRef = shallowRef<IDomEditor>();

const toolbarConfig: Partial<IToolbarConfig> = {};
const editorConfig: Partial<IEditorConfig> = {
    placeholder: props.placeholder,
    autoFocus: false,
    MENU_CONF: {
        uploadImage: {
            server: imgUploadConfig.api,
            headers: {
                [TOKEN]: getToken(),
            },
            timeout: imgUploadConfig.timeout,
            maxNumberOfFiles: 1,
            fieldName: imgUploadConfig.fieldName,
            maxFileSize: Number(props.imgMaxSize) * 1024 * 1024,
            customInsert: customUploadInsert,
            onFailed: handleUploadFailed,
            onError: handleUploadError,
        },
        uploadVideo: {
            server: videoUploadConfig.api,
            headers: {
                [TOKEN]: getToken(),
            },
            timeout: videoUploadConfig.timeout,
            maxNumberOfFiles: 1,
            fieldName: videoUploadConfig.fieldName,
            maxFileSize: Number(props.imgMaxSize) * 1024 * 1024,
            customInsert: customUploadInsert,
            onFailed: handleUploadFailed,
            onError: handleUploadError,
        },
    },
};

onBeforeUnmount(() => {
    editorRef.value?.destroy();
});

const handleCreated = (editor?: IDomEditor) => {
    editorRef.value = editor;
};

const handleAlert = (info: string, type: AlertType) => {
    window.$message?.[type](info);
};
</script>

<style lang="scss">
$transition: color 0.3s var(--n-bezier), background-color 0.3s var(--n-bezier),
    box-shadow 0.3s var(--n-bezier), border-color 0.3s var(--n-bezier);

.n-form-item-blank--error {
    .input-rich--container {
        border: v-bind("style_naive_theme.errorColor") solid 1px;
    }
}

.input-rich--container {
    --w-e-textarea-bg-color: v-bind("style_naive_theme.inputColor");
    --w-e-textarea-color: v-bind("style_naive_theme.textColor1");
    --w-e-textarea-border-color: v-bind("style_naive_theme.borderColor");
    --w-e-textarea-slight-border-color: v-bind("style_naive_theme.borderColor");
    --w-e-textarea-slight-color: v-bind("style_naive_theme.dividerColor");
    --w-e-textarea-slight-bg-color: v-bind("style_naive_theme.dividerColor");
    --w-e-textarea-selected-border-color: v-bind("style_naive_theme.primaryColorHover");
    --w-e-textarea-handler-bg-color: v-bind("style_naive_theme.primaryColor");

    --w-e-toolbar-color: v-bind("style_naive_theme.textColor2");
    --w-e-toolbar-bg-color: v-bind("style_naive_theme.cardColor");
    --w-e-toolbar-active-color: v-bind("style_naive_theme.textColor1");
    --w-e-toolbar-active-bg-color: v-bind("style_naive_theme.bodyColor");
    --w-e-toolbar-disabled-color: v-bind("style_naive_theme.textColorDisabled");
    --w-e-toolbar-border-color: v-bind("style_naive_theme.borderColor");

    --w-e-modal-button-bg-color: v-bind("style_naive_theme.inputColor");
    --w-e-modal-button-border-color: v-bind("style_naive_theme.borderColor");

    $border-color: v-bind("style_naive_theme.borderColor");
    $border: $border-color solid 1px;
    $border-radius: v-bind("style_naive_theme.borderRadius");

    width: 100%;
    border: $border;
    border-radius: $border-radius;
    background-color: v-bind("style_naive_theme.cardColor");
    overflow: hidden;
    z-index: 100;
    transition: $transition;

    .input-rich--toolbar {
        border-bottom: $border;
        transition: $transition;
    }

    .input-rich--editor {
        overflow-y: hidden;
        transition: $transition;
    }

    .w-e-scroll {
        &::-webkit-scrollbar {
            right: 5px;
            width: v-bind("style_naive_theme.scrollbarWidth");
        }
        &::-webkit-scrollbar-thumb {
            width: v-bind("style_naive_theme.scrollbarWidth");
            background-color: v-bind("style_naive_theme.scrollbarColor");
            border-radius: v-bind("style_naive_theme.scrollbarBorderRadius");

            &:hover {
                background-color: v-bind("style_naive_theme.scrollbarColorHover");
            }
        }
    }

    .w-e-text-container [data-slate-editor] pre > code {
        text-shadow: none;
    }
}

.w-e-full-screen-container {
    top: -1px !important;
    left: -1px !important;
}
</style>

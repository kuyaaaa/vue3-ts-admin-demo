<template>
    <div class="view-tags-container">
        <n-scrollbar
            id="view-tags-scroll"
            ref="viewTagsScrollRef"
            class="view-tags-scroll"
            x-scrollable
            @wheel="handleScrollWheel"
        >
            <n-space align="center" :wrap="false">
                <div
                    v-for="(item, index) in routerHistory"
                    :id="`view-tag-${index}`"
                    :key="item.path"
                >
                    <n-tag
                        :type="currentRoute.path === item.path ? 'primary' : 'default'"
                        :bordered="!(currentRoute.path === item.path)"
                        :closable="!item.meta.isAffix"
                        @click="handleTagClick(index)"
                        @close="handleTagClose(index)"
                    >
                        {{ item.meta.label }}
                        <template #icon>
                            <component :is="item.iconNode"></component>
                        </template>
                    </n-tag>
                </div>
            </n-space>
        </n-scrollbar>
    </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { computed, ref, watch, nextTick } from "vue";
import type { ScrollbarInst } from "naive-ui";
import useHistoryStore from "@/store/modules/history";

const historyStore = useHistoryStore();
const { routerHistory } = storeToRefs(historyStore);

const handleTagClose = (index: number) => {
    historyStore.removeRouterHistory(index);
};

/** 获取某个tag对于scroll的相对位置 */
const getTagMovePosition = (index: number) => {
    const tagEl = document.getElementById(`view-tag-${index}`);
    const scrollEl = document.getElementById("view-tags-scroll");

    if (scrollEl && tagEl) {
        const scrollWidth = scrollEl.offsetWidth;
        const tagWidth = tagEl.offsetWidth;
        const tagClientLeft = tagEl.getBoundingClientRect().left;
        const scrollClientLeft = scrollEl.getBoundingClientRect().left;

        // 在滚动条视野左侧外
        if (tagClientLeft - scrollClientLeft <= 0) {
            return tagClientLeft - scrollClientLeft;
        }
        // 在滚动条视野右侧外
        else if (tagClientLeft + tagWidth > scrollWidth + scrollClientLeft) {
            return tagWidth - (scrollWidth + scrollClientLeft - tagClientLeft);
        }
    }
    return 0;
};

const viewTagsScrollRef = ref<ScrollbarInst | null>(null);
const handleTagClick = (index: number) => {
    window.$router.push(routerHistory.value[index].path);
};
// 历史记录变化自动滚动至最底部
watch(
    routerHistory,
    (newVal, oldVal) => {
        nextTick(() => {
            viewTagsScrollRef.value?.scrollTo({ left: 99999 });
        });
    },
    { deep: true }
);

const currentRoute = computed(() => {
    return window.$router.currentRoute.value;
});
watch(
    () => currentRoute.value.path,
    val => {
        const index = routerHistory.value.findIndex(item => item.path === val);
        const movePosition = getTagMovePosition(index);
        viewTagsScrollRef.value?.scrollBy({ left: movePosition });
    }
);

const handleScrollWheel = (e: WheelEvent) => {
    viewTagsScrollRef.value?.scrollBy({ left: e.deltaY });
};
</script>

<style lang="scss" scoped>
.view-tags-container {
    height: 100%;
    @include flex-center-main;

    :deep(.n-scrollbar) {
        overflow: auto hidden;

        .n-scrollbar-content,
        .n-space {
            height: 100%;
        }

        > .n-scrollbar-rail.n-scrollbar-rail--horizontal {
            bottom: 1px;
            overflow: hidden;
        }
    }

    .n-tag {
        cursor: pointer;
    }
}
</style>

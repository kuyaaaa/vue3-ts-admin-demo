<template>
    <n-space vertical>
        <n-card>
            <n-space vertical>
                <n-space>
                    <n-input
                        v-model:value="searchParams.keyword"
                        type="text"
                        clearable
                        placeholder="请输入关键字"
                    />
                    <n-input-group>
                        <n-date-picker v-model:value="searchParams.date" clearable />
                        <n-time-picker v-model:value="searchParams.time" clearable />
                    </n-input-group>
                    <n-button type="primary" @click="handleSearch">
                        <template #icon>
                            <n-icon>
                                <search-icon />
                            </n-icon>
                        </template>
                        搜索
                    </n-button>
                </n-space>
                <n-space>
                    <n-button type="info" @click="handleExport">
                        <template #icon>
                            <n-icon>
                                <download-icon />
                            </n-icon>
                        </template>
                        导出内容
                    </n-button>
                    <n-button type="info" @click="handleAdd">
                        <template #icon>
                            <n-icon>
                                <add-icon />
                            </n-icon>
                        </template>
                        新增
                    </n-button>
                </n-space>
            </n-space>
        </n-card>
        <n-card>
            <n-data-table
                :columns="columns"
                :data="data"
                :single-line="false"
                :pagination="pagination"
            />
        </n-card>
    </n-space>
</template>

<script lang="ts" setup>
import { NButton, PaginationProps, DataTableColumns } from "naive-ui";

import {
    Search as SearchIcon,
    Add as AddIcon,
    DownloadOutline as DownloadIcon,
} from "@vicons/ionicons5";

type Song = {
    no: number;
    title: string;
    length: string;
};

const pagination: PaginationProps = {
    showSizePicker: true,
    pageSizes: [10, 20, 30, 40],
};

const dataMock: Song[] = [
    { no: 3, title: "Wonder Wall", length: "4:18" },
    { no: 4, title: "Don't Look Back in Anger", length: "4:48" },
    { no: 12, title: "Champagne Supernova", length: "7:27" },
    { no: 12, title: "Champagne Supernova", length: "7:27" },
    { no: 12, title: "Champagne Supernova", length: "7:27" },
    { no: 12, title: "Champagne Supernova", length: "7:27" },
    { no: 12, title: "Champagne Supernova", length: "7:27" },
    { no: 12, title: "Champagne Supernova", length: "7:27" },
    { no: 12, title: "Champagne Supernova", length: "7:27" },
    { no: 12, title: "Champagne Supernova", length: "7:27" },
    { no: 12, title: "Champagne Supernova", length: "7:27" },
    { no: 12, title: "Champagne Supernova", length: "7:27" },
    { no: 12, title: "Champagne Supernova", length: "7:27" },
    { no: 12, title: "Champagne Supernova", length: "7:27" },
    { no: 12, title: "Champagne Supernova", length: "7:27" },
    { no: 12, title: "Champagne Supernova", length: "7:27" },
    { no: 12, title: "Champagne Supernova", length: "7:27" },
    { no: 12, title: "Champagne Supernova", length: "7:27" },
    { no: 12, title: "Champagne Supernova", length: "7:27" },
    { no: 12, title: "Champagne Supernova", length: "7:27" },
    { no: 12, title: "Champagne Supernova", length: "7:27" },
    { no: 12, title: "Champagne Supernova", length: "7:27" },
];

const data = ref(dataMock);

const createColumns = (): DataTableColumns<Song> => [
    {
        title: "No",
        key: "no",
    },
    {
        title: "Title",
        key: "title",
    },
    {
        title: "Length",
        key: "length",
    },
    {
        title: "Action",
        key: "actions",
        render(row) {
            return h(
                NButton,
                {
                    strong: true,
                    type: "error",
                    size: "small",
                    onClick: () => {
                        window.$message.info(`Play ${row.title}`);
                    },
                },
                { default: () => "Play" }
            );
        },
    },
];
const columns = createColumns();

const searchParams = reactive({
    keyword: "",
    date: null,
    time: null,
});
const handleSearch = () => {
    window.$message.success(`搜索：${JSON.stringify(searchParams)}`);
};

const handleAdd = () => {
    window.$router.push({ name: "exampleTableAdd" });
};

const handleExport = () => {
    window.$message.success(`export click`);
};
</script>

<style lang="scss" scoped></style>

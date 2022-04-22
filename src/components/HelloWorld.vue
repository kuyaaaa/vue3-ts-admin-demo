<script setup lang="ts">
// import { onMounted, ref } from "vue";
// import { storeToRefs } from "pinia";
// import { NButton, useMessage } from "naive-ui";
// import { useRouter, useRoute } from "vue-router";
// import useLoginStore from "@/store/modules/login";
// import http from "@/utils/request";

// const loginStore = useLoginStore();
// const { userName } = storeToRefs(loginStore);

// loginStore.userName = "爷傲丶奈我何";

// loginStore.$patch({
//     userName: "爷傲奈我何",
//     userId: 2,
// });

// defineProps<{ msg: string }>();

// const count = ref(0);

// const router = useRouter();
// const route = useRoute();

// const toAbout = async () => {
//     await router.push({ path: "/about", query: { id: 1 } });
//     console.log(route.query);
// };

// window.$message = useMessage();

// onMounted(() => {
//     http.get("/test");
// });
</script>

<template>
    <div></div>
</template>

<style lang="scss" scoped>
a {
    color: #42b983;
}

label {
    margin: 0 0.5em;
    font-weight: bold;
}

code {
    background-color: #eee;
    padding: 2px 4px;
    border-radius: 4px;
    color: #304455;
}

p {
    .scss-test {
        color: red;
        font-weight: bold;
    }
}
</style>

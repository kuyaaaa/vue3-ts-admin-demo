<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { NButton } from "naive-ui";
import { useRouter, useRoute } from "vue-router";
import useLoginStore from "@/store/modules/login";

const loginStore = useLoginStore();
const { userName } = storeToRefs(loginStore);

loginStore.userName = "爷傲丶奈我何";

loginStore.$patch({
    userName: "爷傲奈我何",
    userId: 2,
});

defineProps<{ msg: string }>();

const count = ref(0);

const router = useRouter();
const route = useRoute();

const toAbout = async () => {
    await router.push({ path: "/about", query: { id: 1 } });
    console.log(route.query);
};
</script>

<template>
    <h1>{{ msg }}</h1>

    <p>
        Recommended IDE setup:
        <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
        +
        <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    </p>

    <p>See <code>README.md</code> for more information.</p>

    <p>
        <a href="https://vitejs.dev/guide/features.html" target="_blank"> Vite Docs </a>
        |
        <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
    </p>

    <button type="button" @click="count++">count is: {{ count }}</button>
    <p>
        Edit
        <code>components/HelloWorld.vue</code> to test hot module replacement.
        <span class="scss-test">hello sass!</span>
    </p>
    <n-button @click="toAbout">to about</n-button>
    <n-button @click="router.push('/')">to home</n-button>
    <p>{{ userName }}</p>
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

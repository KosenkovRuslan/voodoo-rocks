<script setup>
import PostList from "@/components/PostList.vue";
import Loader from "@/ui/Loader.vue";
import Filter from "@/ui/Filter.vue";
import ServicePosts from "@/API/ServicePosts";
import ServiceUsers from "@/API/ServiceUsers";
import { onBeforeMount, ref, computed } from "vue";

const posts = ref(null);
const users = ref(null);
const filter = ref("");
const loading = ref(false);

onBeforeMount(async () => {
    await loadPosts();
    await loadUsers();
    createCustomPosts();
});

const loadPosts = async () => {
    loading.value = true;
    try {
        posts.value = await ServicePosts();
    } catch (error) {
        console.log("Error", error.message);
    } finally {
        loading.value = false;
        console.log("finally load posts");
    }
};

const loadUsers = async () => {
    try {
        users.value = await ServiceUsers();
    } catch (error) {
        console.log("Error", error.message);
    } finally {
        console.log("finally load users");
    }
};

const createCustomPosts = () => {
    for (let p = 0; p < posts.value.length; p++) {
        for (let u = 0; u < users.value.length; u++) {
            if (posts.value[p].userId === users.value[u].id) {
                posts.value[p].name = users.value[u].name;
            }
        }
    }
};

const filteredPosts = computed(() => {
    return posts.value?.filter((post) => post.name?.toLowerCase().includes(filter.value.toLowerCase()));
});
</script>

<template>
    <Filter v-model="filter" />
    <Loader v-if="loading" />
    <div v-else>
        <PostList v-if="filteredPosts.length" :posts="filteredPosts" />
        <h1 v-else class="d-flex justify-content-center">По запросу "{{ filter }}" посты не найдены</h1>
    </div>
</template>

<style lang="scss" scoped></style>

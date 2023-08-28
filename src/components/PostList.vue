<script setup>
import PostItem from "@/components/PostItem.vue";

const props = defineProps({
    posts: {
        type: [Array, null],
        required: true,
    },
});
</script>

<template>
    <div class="row g-3 row-cols-1 row-cols-sm-2 row-cols-md-3">
        <PostItem v-for="post in posts" :key="post.id" :post="post" />
    </div>
</template>

<style lang="scss" scoped></style>

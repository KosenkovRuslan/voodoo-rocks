<script setup>
const props = defineProps({
    post: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <div class="col d-flex custom-height">
        <div class="card shadow-sm bg-white">
            <div class="card-body">
                <h5 class="card-title text-primary">
                    {{ post.title }}
                </h5>
                <p class="card-text">
                    {{ post.body }}
                </p>
                <p class="text position-absolute bottom-0">
                    {{ post.name }}
                </p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    transition: transform 0.3s;
    &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
}
}
.custom-height {
    min-height: 200px;
}

.card-text {
    padding-bottom: 20px;
}
</style>

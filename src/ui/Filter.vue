<script setup>
defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue']);

const update = (event) => {
    emit('update:modelValue', event.target.value)
}
</script>

<template>
    <div class="d-flex w-100 mb-3">
        <input
            :value="modelValue"
            @input="update"
            class="form-control"
            type="text"
            placeholder="Найти пост по автору"
        />
    </div>
</template>

<style lang="scss" scoped></style>

<script setup>
defineProps({
    type: {
        type: String,
        default: 'default',
    },
    kind: {
        type: String,
        default: 'primary',
    },
})
</script>

<template >
    <BaseButton class="btn" :type="type" :kind="kind">
        <slot></slot>
    </BaseButton>
</template>


<style scoped>
.btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    flex: 0 0 36px;
    padding: 0;
}

.btn>>>svg {
    fill: currentColor;
    transition: fill 0.2s ease;
    width: 24px;
    height: 24px;
}
</style>

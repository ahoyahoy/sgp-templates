<script setup>
defineProps(['title'])
</script>

<template>
    <div class="header">
        <div class="left">
            <h1 class="title">{{ title }}</h1>
            <slot name="left"></slot>

        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>

    </div>
</template>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 0 0 96px;
    padding: 0 var(--spacing-5);
    color: var(--color-text-primary);
}

.left,
.right {
    display: flex;
    align-items: center;
    gap: var(--spacing-4);
}

.title {
    font-size: var(--size-h1);
    font-weight: var(--font-weight-semibold);
}
</style>

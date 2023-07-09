<script setup>
defineProps(['title', 'kind'])
</script>

<template>
    <div class="header" :class="[`kind-${kind}`]">
        <div class="left">
            <h2 class="title">{{ title }}</h2>
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
    flex: 0 0 73px;
    height: 73px;
    padding: 0 var(--spacing-4);
    color: var(--color-text-primary);
}

.left,
.right {
    display: flex;
    align-items: center;
    gap: var(--spacing-2);
}

.left {
    flex: 1;
}

.title {
    font-size: var(--size-h2);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-hight-3);
}

.header.kind-secondary {
    flex: 0 0 94px;
    height: 94px;
    padding: 0 var(--spacing-5);
}
</style>

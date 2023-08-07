<script setup>
defineProps(['title'])
</script>

<template>
    <div class="header">
        <div class="top">
            <div class="left">
                <slot name="left"></slot>
                <h1 class="title">{{ title }}</h1>
            </div>
            <div class="right">
                <slot name="right"></slot>
            </div>
        </div>
        <div class="bottom">
            <slot name="bottom"></slot>
        </div>
    </div>
</template>

<style scoped>
.header {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-3);
    padding: var(--spacing-3);
}

.top {
    display: flex;
}

.top .left {
    display: flex;
    align-items: center;
    gap: var(--spacing-2);
    flex: 1;
}

.left .title {
    font-size: var(--size-h2);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-hight-3);
}
</style>

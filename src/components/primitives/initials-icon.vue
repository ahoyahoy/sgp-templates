<script setup>
defineProps(['kind'])
</script>

<template>
    <div class="initials" :class="[`kind-${kind}`]">
        <slot></slot>
    </div>
</template>

<style scoped>
.initials {
    width: 32px;
    height: 32px;
    min-width: 32px;
    border-radius: 50%;
    background-color: var(--color-initials-bg);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-text-secondary);
}

.initials.kind-secondary {
    background-color: var(--color-initials-bg-secondary);
    color: var(--color-white-base);
}
</style>

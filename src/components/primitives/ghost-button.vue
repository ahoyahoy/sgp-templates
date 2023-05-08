<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<style scoped>
.btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-2);
    font-size: var(--size-text-medium);
    font-weight: var(--font-weight-bold);
    height: 24px;
    padding: 0 var(--spacing-2);
    border-radius: var(--border-radius-3);
    border: none;
    background-color: var(--color-white-base);
    color: var(--color-text-secondary);
    cursor: pointer;
    transition: border 0.2s ease;
    transition: color 0.2s ease;
}

.btn>>>svg {
    fill: currentColor;
    transition: fill 0.2s ease;
    width: 24px;
    height: 24px;
}
</style>

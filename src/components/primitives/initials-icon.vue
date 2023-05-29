<template>
    <div class="initials">
        <slot></slot>
    </div>
</template>

<style scoped>
.initials {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: var(--color-initials-bg);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-text-secondary);
}
</style>

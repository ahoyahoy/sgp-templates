

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
    width: 36px;
    height: 36px;
    border-radius: var(--border-radius-3);
    cursor: pointer;
    border: none;
    background-color: transparent;
    color: var(--color-text-primary);
    transition: background-color 0.2s ease, opacity 0.2s;
}

.btn>>>svg {
    fill: currentColor;
    transition: fill 0.2s ease;
    width: 20px;
    height: 20px;
}

.btn:hover {
    background-color: var(--color-purple-lighten-4);
}
</style>

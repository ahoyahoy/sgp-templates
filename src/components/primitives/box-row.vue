<template>
    <div class="row"><slot></slot></div>
</template>

<style scoped>
.row {
    display: flex;
    flex-direction: row;
    gap: var(--spacing-3);
}

.row >>> > * {
    flex: 1;
}
</style>

<script setup>
defineProps(['kind'])
</script>
<template>
    <div :class="['row', `kind-${kind}`]">
        <slot></slot>
    </div>
</template>

<style scoped>
.row {
    display: flex;
    flex-direction: row;
    gap: var(--spacing-3);
}

.row:not(.kind-secondary) >>> *  {
    flex: 1;
}

.row.kind-secondary >>> :first-child {
    flex: 2;
}

.row.kind-secondary >>> :nth-child(2) {
    flex: 8;
}
</style>

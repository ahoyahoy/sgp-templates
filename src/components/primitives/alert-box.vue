<script setup>
defineProps(['type', 'shadow'])
</script>

<template>
    <div class="alert-box" :class="[`type-${type}`, `shadow-${shadow}`]">
        <div class="left">
            <slot name="left-icon"></slot>
            <slot name="text"></slot>
        </div>
        <div class="right">
            <slot name="right-icon"></slot>
        </div>

    </div>
</template>

<style scoped>
.alert-box {
    display: flex;
    align-items: center;
    width: 400px;
    border-radius: var(--border-radius-3);
    padding: var(--spacing-2);
}

.alert-box.shadow-yes {
    filter: drop-shadow(0px 12px 24px rgba(26, 79, 158, 0.10));
}
.alert-box.type-success {
    background-color: var(--color-green-lighten-2);
    border: 1px solid var(--color-green-lighten-1);
    color: var(--color-green-darken-1);
}
.alert-box.type-success >>> svg {
    color: var(--color-green-base);
}
.alert-box.type-error {
    background-color: var(--color-red-lighten-2);
    border: 1px solid var(--color-red-lighten-1);
    color: var(--color-red-darken-1);
}
.alert-box.type-error >>> svg {
    color: var(--color-red-base);
}
.alert-box.type-warning {
    background-color: var(--color-orange-lighten-2);
    border: 1px solid var(--color-orange-lighten-1);
    color: var(--color-orange-darken-1);
}
.alert-box.type-warning >>> svg {
    color: var(--color-orange-base);
}
.alert-box.type-info {
    background-color: var(--color-blue-lighten-2);
    border: 1px solid var(--color-blue-lighten-1);
    color: var(--color-blue-darken-1);
}
.alert-box.type-info >>> svg {
    color: var(--color-blue-base);
}

.left {
    display: flex;
    align-items: center;
    flex: 1;
    gap: var(--spacing-2);
}

</style>

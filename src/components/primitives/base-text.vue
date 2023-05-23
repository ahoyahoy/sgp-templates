<script>
export default {
    props: {
        kind: {
            type: String,
            default: 'primary',
        },
    },
}
</script>

<template>
    <p :class="[`kind-${kind}`]">
        <slot></slot>
    </p>
</template>

<style scoped>
.kind-primary {
    color: var(--color-text-primary);
    line-height: var(--line-hight-2);
}

.kind-primary-light-1 {
    color: var(--color-text-primary-1);
    line-height: var(--line-hight-2);
}

.kind-primary-light-2 {
    color: var(--color-text-disabled);
    line-height: var(--line-hight-2);
}

.kind-primary-bold {
    font-weight: var(--font-weight-bold);
    color: var(--color-text-primary);
    line-height: var(--line-hight-2);
}

.kind-small-green {
    font-size: var(--size-text-small);
    color: var(--color-text-success);
    line-height: var(--line-hight-1);
}

.kind-secondary-bold {
    font-weight: var(--font-weight-bold);
    color: var(--color-text-secondary);
    line-height: var(--line-hight-1);
}

.kind-h2 {
    font-size: var(--size-h2);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-hight-3);
}

.kind-search-result {
    display: flex;
    align-items: center;
    font-size: var(--size-text-small);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-hight-1);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    height: 64px;
}
</style>

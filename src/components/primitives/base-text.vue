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
    color: var(--color-text-primary-2);
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

.kind-h1 {
    font-size: var(--size-h1);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-hight-3);
}
.kind-h2 {
    font-size: var(--size-h2);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-hight-3);
}
.kind-subtitle {
    flex: 1;
    font-size: var(--size-text-small);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-hight-1);
    text-transform: uppercase;
    letter-spacing: 0.1em;
}
.kind-primary-large {
    font-size: var(--size-text-large);
    line-height: var(--line-hight-4);
    font-weight: var(--font-weight-bold);
}
</style>

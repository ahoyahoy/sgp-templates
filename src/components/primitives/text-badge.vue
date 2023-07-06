<script setup>
defineProps(['kind'])
</script>


<template>
  <div class="badge" :class="[`kind-${kind}`]">
    <slot></slot>
  </div>
</template>

<style scoped>
.badge {
    background-color: var(--color-purple-lighten-4);
    color: var(--color-purple-lighten-1);
    text-transform: uppercase;
    font-weight: var(--font-weight-bold);
    font-size: var(--size-text-small);
    line-height: var(--line-hight-2);
    letter-spacing: 0.1em;
    padding: 0 var(--spacing-1);
    border-radius: var(--spacing-0);
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

.badge.kind-secondary {
    background-color: var(--color-green-lighten-2);
    color: var(--color-green-base);
}
.badge.kind-tertiary {
    background-color: var(--color-grey-lighten-4);
    color: var(--color-grey-lighten-2);
}
</style>

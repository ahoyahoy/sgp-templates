<script>
export default {
    props: {
        block: {
            type: Boolean,
            default: false,
        },
        disable: {
            type: Boolean,
            default: false,
        },
        kind: {
            type: String,
            default: 'primary',
        },
        type: {
            type: String,
            default: 'default',
        },
    },
}
</script>

<template>
  <button :class="['btn', `kind-${kind}`, `type-${type}`, { 'btn-block': block, 'btn-disabled': disable }]">
    <slot></slot>
  </button>
</template>

<style scoped>
.btn {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  font-size: var(--size-text-medium);
  font-weight: var(--font-weight-bold);
  height: 36px;
  padding: 0 var(--spacing-2);
  border-radius: var(--border-radius-3);
  border: none;
  background-color: var(--color-btn-background);
  color: var(--color-text-white);
  cursor: pointer;
  transition: background-color 0.2s ease;
  transition: border 0.2s ease;
  transition: color 0.2s ease;
}

.type-default.kind-primary {
  background-color: var(--color-btn-background);
  color: var(--color-text-white);
}

.type-default.kind-secondary {
  background-color: pink;
  color: blue;
}

.type-outline.kind-primary {
  border: 1px solid var(--color-btn-outline);
  background-color: var(--color-white-base);
  color: var(--color-text-secondary);
}
.type-outline.kind-input {
  justify-content: left;
  font-size: var(--size-text-medium);
  border-radius: var(--border-radius-3);
  border: 1px solid var(--color-input-border);
  color: var(--color-grey-lighten-3);
  background-color: var(--color-white-base);
  font-weight: var(--font-weight-normal);
  cursor: text;
}
.type-outline.kind-input >>> svg {
  fill: var(--color-grey-lighten-2);
}

.type-ghost.kind-primary {
  background-color: transparent;
  color: var(--color-text-secondary);
}


.type-ghost.kind-primary>>>svg {
  width: 24px;
  height: 24px;
}
.type-ghost.kind-secondary>>>svg {
  fill: var(--color-purple-base);
}

.type-ghost.kind-mono {
  background-color: transparent;
  color: var(--color-text-primary);
}

.type-ghost.kind-mono-left {
  justify-content: left;
  background-color: transparent;
  color: var(--color-text-primary);
  font-weight: var(--font-weight-normal);
}

.type-ghost.kind-primary-light-2 {
  width: 100%;
  justify-content: left;
  background-color: transparent;
  color: var(--color-text-primary-2);
  font-weight: var(--font-weight-normal);
  gap: var(--spacing-3);
}

.type-ghost.kind-red {
  background-color: transparent;
  color: var(--color-red-base);
}

.type-ghost.kind-purple {
  background-color: transparent;
  color: var(--color-purple-base);
}

.type-default.kind-primary:hover {
  background-color: var(--color-btn-background-hover);
}

.type-ghost.kind-primary:hover {
  background-color: var(--color-purple-lighten-4);
}

.type-ghost.kind-mono:hover,
.type-ghost.kind-mono-left:hover,
.type-ghost.kind-red:hover,
.type-ghost.kind-purple:hover,
.type-ghost.kind-primary-light-2:hover {
  background-color: var(--color-purple-lighten-4);
}

.btn>>>svg {
  fill: currentColor;
  transition: fill 0.2s ease;
  width: 16px;
  height: 16px;
}

.btn-block {
  width: 100%;
}

.btn-disabled {
  background-color: var(--color-btn-disabled);
  pointer-events: none;
  color: var(--color-text-disabled);
}
</style>



<template>
    <button class="btn">
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

.btn >>> svg {
  fill: currentColor;
  transition: fill 0.2s ease;
  width: 16px;
  height: 16px;
}

.btn:hover {
  background-color: var(--color-btn-background-hover);
}
</style>

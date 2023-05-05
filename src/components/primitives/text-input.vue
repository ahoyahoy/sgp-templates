<script setup>
import { useSlots } from 'vue'

const slotIconExists = useSlots().icon !== undefined

defineProps(['placeholder'])
</script>

<template>
  <div class="container" :class="{ 'with-icon': slotIconExists }">
    <slot name="icon"></slot>
    <input class="session-search-input" type="text" :placeholder="placeholder">
  </div>
</template>


<style scoped>
.container {
  position: relative;
}

.container>>>svg {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 16px;
  height: 16px;
  fill: var(--color-grey-lighten-2);
}

input {
  height: 36px;
  width: 299px;
  font-size: var(--size-text-medium);
  padding: 0 var(--spacing-2) 0 var(--spacing-2);
  border-radius: var(--border-radius-3);
  border: 1px solid var(--color-search-bar);
}

.container.with-icon input {
  padding-left: 38px;
}

input::placeholder {
  color: var(--color-search-bar);
}
</style>

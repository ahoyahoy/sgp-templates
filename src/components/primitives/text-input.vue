<script setup>
import {useSlots} from 'vue'

const slotIconExists = useSlots().icon !== undefined
const slotRightIconExists = useSlots()['right-icon'] !== undefined

defineProps(['placeholder', 'kind'])
</script>

<template>
  <div class="text-input" :class="[`kind-${kind}`, { 'with-icon': slotIconExists, 'with-right-icon': slotRightIconExists }]">
    <div class="left" v-if="slotIconExists">
      <slot name="icon"></slot>
    </div>
    <input type="text" :placeholder="placeholder">
    <div class="right" v-if="slotRightIconExists">
      <slot name="right-icon"></slot>
    </div>
  </div>
</template>


<style scoped>
.text-input {
  position: relative;
}

.left {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 16px;
  height: 16px;
  color: var(--color-grey-lighten-2);
  fill: currentColor;
}

.right {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 16px;
  height: 16px;
  color: var(--color-grey-lighten-2);
  fill: currentColor;
}

input {
  height: 36px;
  width: 299px;
  font-size: var(--size-text-medium);
  padding: 0 var(--spacing-2) 0 var(--spacing-2);
  border-radius: var(--border-radius-3);
  border: 1px solid var(--color-input-border);
}

.text-input.with-icon input {
  padding-left: 38px;
}

.text-input.with-right-icon input {
  padding-right: 38px;
}

input::placeholder {
  color: var(--color-input-border);
  transition: color 0.2s ease;
}
input:focus::placeholder {
  color: var(--color-text-primary);
}

.kind-search input {
  border: none;
  border-bottom: 1px solid var(--color-border-search-input);
  border-radius: 0;
  width: 100%;
}
.kind-search .left >>> svg {
  fill: var(--color-purple-base);
}
.kind-search .right {
    top: 5px;
    right: 7px;
    width: 24px;
    height: 24px;
}
.kind-search .right >>> svg {
    fill: var(--color-grey-base);
}
</style>

<script setup>
import BaseButton from '../primitives/base-button.vue'
import TextInput from '../primitives/text-input.vue'

defineProps(['title'])

</script>

<template>
    <div class="header">
        <div class="left">
            <h1 class="session-search-title">{{ title }}</h1>
            <slot name="left"></slot>

        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>

    </div>
</template>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 0 0 96px;
    padding: 0 var(--spacing-5);
    color: var(--color-text-primary);
}
.left, .right {
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
}
</style>

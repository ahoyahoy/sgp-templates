<script setup>
defineProps(['options'])

const rndId = 'id-' + Math.random().toString(36).substring(7)
</script>


<template>
    <div class="checkbox-container">
        <label v-for="option, i in options" :key="i" :for="`${rndId}-${i}`">
            <input :id="`${rndId}-${i}`" type="checkbox" :value="option">
            {{ option }}
        </label>
    </div>
</template>


<style scoped>
.checkbox-container {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-3);
}

label {
    display: flex;
    align-items: center;
    gap: var(--spacing-2);
    user-select: none;
}

input[type="checkbox"] {
    width: 24px;
    height: 24px;
    border: 1px solid var(--color-input-border);
    border-radius: var(--border-radius-3);
}
</style>

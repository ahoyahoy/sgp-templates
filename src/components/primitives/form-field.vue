<script setup>
defineProps(['label'])
</script>

<template>
    <div class="form-field">
        <label>{{ label }}</label>
        <slot></slot>
    </div>
</template>

<style scoped>
.form-field {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.form-field>>>label,
.form-field>>>select,
.form-field>>>input[type="text"] {
    width: 100%;
}

label {
    font-weight: var(--font-weight-semibold);
}
</style>

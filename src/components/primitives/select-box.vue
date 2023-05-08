<template>
    <div class="select-container">
        <label :for="id">{{ label }}</label>
        <select :id="id">
            <option v-for="option, i in options" :key="i" :value="option">{{ option }}</option>
        </select>
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            required: true
        },
        label: {
            type: String,
            default: ''
        },
        options: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
.select-container {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

select {
    height: 36px;
    padding: 0 var(--spacing-2);
    border: 1px solid var(--color-input-border);
    border-radius: var(--border-radius-3);
    color: var(--color-text-primary);
}

label {
    font-weight: var(--font-weight-semibold);
}
</style>

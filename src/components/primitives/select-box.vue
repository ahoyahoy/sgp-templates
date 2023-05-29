<template>
    <select :id="id">
        <option v-for="option, i in options" :key="i" :value="option">{{ option }}</option>
    </select>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            required: true,
        },
        label: {
            type: String,
            default: '',
        },
        options: {
            type: Array,
            required: true,
        },
    },
}
</script>

<style scoped>
select {
    height: 36px;
    flex: 0 0 36px;
    padding: 0 var(--spacing-2);
    border: 1px solid var(--color-input-border);
    border-radius: var(--border-radius-3);
    color: var(--color-text-primary);
}

</style>

<template>
    <div class="checkbox-container">
        <label v-for="option, i in options" :key="i" :for="'checkbox-' + i">
            <input :id="'checkbox-' + i" type="checkbox" :value="option">
            {{ option }}
        </label>
    </div>
</template>

<script>
export default {
    props: {
        options: {
            type: Array,
        },
    },
}
</script>

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
}

input[type="checkbox"] {
    width: 24px;
    height: 24px;
    border: 1px solid var(--color-input-border);
    border-radius: var(--border-radius-3);
}
</style>

<script setup>
defineProps(['label'])
</script>

<template>
    <div class="form-field">
        <div class="label-box">
            <label>{{ label }}</label>
            <slot name="comment"></slot>
        </div>
        <slot></slot>
    </div>
</template>

<style scoped>
.form-field {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

/* .form-field>>>label, */
.form-field>>>select,
.form-field>>>input[type="text"] {
    width: 100%;
}

.label-box {
    display: flex;
    align-items: center;
}

label {
    font-weight: var(--font-weight-semibold);
    flex: 1;
}
</style>

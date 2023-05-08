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
    }
}
</script>

<template>
    <div class="form-field">
        <label :for="id">{{ label }}</label>
        <TextInput :id="id" />
    </div>
</template>

<style scoped>
.form-field {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

label {
    font-weight: var(--font-weight-semibold);
}
</style>

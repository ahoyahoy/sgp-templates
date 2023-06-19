<script setup>
defineProps(['label', 'type'])
</script>

<template>
    <div class="form-field" :class="[`type-${type}`]">
        <div class="label-box">
            <label>{{ label }}</label>
            <slot name="comment"></slot>
        </div>
        <div class="right">
            <slot></slot>

        </div>
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
    line-height: var(--line-hight-1);
}

.right {
    display: flex;
    gap: var(--spacing-3);
}

.right > :first-child {
    flex: 1;
}

.type-info .label-box {
    gap: var(--spacing-0);
}

.type-phone .right {
    gap: 0;
}

.type-phone .right > :first-child {
    flex: 0;
    width: 100px;
}
.type-info label {
    flex: 0;
}
</style>

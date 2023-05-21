<script setup>
</script>

<template>
    <div class="text-box">
        <div class="left">
            <slot name="left-icon"></slot>
            <div class="text">
                <slot name="main-text"></slot>
                <slot name="secondary-text"></slot>
            </div>
        </div>
        <div class="right">
            <slot name="right-icon"></slot>
        </div>

    </div>
</template>

<style scoped>
.text-box {
    display: flex;
    align-items: center;
}

.left {
    display: flex;
    align-items: center;
    flex: 1;
    gap: var(--spacing-2);
}

.text {
    display: flex;
    flex-direction: column;
}

.right {
    display: flex;
}
</style>

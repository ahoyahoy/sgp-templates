<script setup>
defineProps(['data'])
</script>

<template>
    <div class="data-list">
        <template v-for="item,i in data" :key="i">
            <div class="item" :class="{disabled: item.disabled}">
                <div class="left">
                    <slot name="left" :item="item"></slot>
                </div>
                <div class="right">
                    <slot name="right" :item="item"></slot>
                </div>
            </div>
        </template>

    </div>
</template>

<style scoped>
.data-list {
    color: black;
}

.item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 0 0 96px;
    padding: 20px;
    color: var(--color-text-primary);
    border-bottom: 1px solid var(--foo);
}

.item.disabled {
    color: red;
}

.left, .right {
    display: flex;
}

.left {
    flex-direction: column;
}
</style>

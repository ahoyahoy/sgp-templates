<script setup>
defineProps(['data'])
</script>

<template>
    <div class="data-list">
        <template v-for="item, i in data" :key="i">
            <div v-if="!item.loadingAll && !item.loadingTest" class="item"
                :class="{ disabled: item.disabled, waiting: item.waiting, active: item.active }">
                <div class="left">
                    <slot name="left" :item="item"></slot>
                </div>
                <div class="right">
                    <slot name="right" :item="item"></slot>
                </div>
            </div>
            <div v-if="item.loadingAll">
                <loadingAll />
            </div>
            <div v-if="item.loadingTest">
                <loadingTest />
            </div>
        </template>
    </div>
</template>

<style scoped>
.data-list {
    flex-grow: 1;
    overflow-y: auto;
    padding: var(--spacing-4) var(--spacing-5);
}

.item {
    display: flex;
    align-items: center;
    flex: 0 0 96px;
    border-bottom: 1px solid var(--color-divider);
    padding: 0 var(--spacing-3);
    height: 96px;
    gap: var(--spacing-6);
    transition: background-color 0.2s ease;
    color: var(--color-text-primary);
}

.item:hover {
    background-color: var(--color-list-view-row-hover);
}

.item.disabled {
    color: var(--color-text-disabled);
    fill: currentColor;
}

.item.active {
    background-color: var(--color-list-view-row-active);
}

.left,
.right {
    display: flex;
}

.left {
    flex-direction: column;
    flex: 1;
    min-width: 0;
}
</style>

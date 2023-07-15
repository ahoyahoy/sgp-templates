<script setup>
defineProps(['data', 'kind'])
</script>

<template>
    <div :class="['tablet-list', `kind-${kind}`]">
        <template v-for="item, i in data" :key="i">
            <div v-if="!item.loadingAll && !item.loadingTest" class="item"
                :class="{ disabled: item.disabled, waiting: item.waiting }">
                <div class="top">
                    <div class="left">
                        <slot name="left" :item="item"></slot>
                    </div>
                    <div class="right">
                        <slot name="right" :item="item"></slot>
                    </div>
                </div>
            </div>
            <div v-if="item.loadingAll">
                <TabletLoadingAll />
            </div>
            <div v-if="item.loadingTest">
                <TabletLoadingTest />
            </div>
        </template>
    </div>
</template>

<style scoped>
.tablet-list {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-4);
    flex-grow: 1;
    overflow-y: auto;
    padding: var(--spacing-4) var(--spacing-3);
}

.item {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid var(--color-divider);
    gap: var(--spacing-3);
    padding-bottom: var(--spacing-4);
    transition: background-color 0.2s ease;
    color: var(--color-text-primary);
    user-select: none;
}

.top {
    display: flex;
    align-items: center;
}

.item.disabled {
    color: var(--color-text-disabled);
    fill: currentColor;
}

.left,
.right {
    display: flex;
}

.right {
    align-items: center;
    gap: var(--spacing-2);
}

.left {
    flex-direction: column;
    flex: 1;
    gap: var(--spacing-3);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}


</style>

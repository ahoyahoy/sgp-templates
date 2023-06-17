<script setup>
defineProps(['data', 'kind'])
</script>

<template>
    <div :class="['data-list', `kind-${kind}`]">
        <template v-for="item, i in data" :key="i">
            <div v-if="!item.loadingAll && !item.loadingTest && !item.searchLoading" class="item"
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
            <div v-if="item.searchLoading">
                <SearchLoading />
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
    min-width: 450px;
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
    user-select: none;
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

.right > :first-child {
    flex: 1;
}

.left {
    flex-direction: column;
    flex: 1;
    min-width: 0;
}

.kind-result.data-list,
.kind-search.data-list,
.kind-topic.data-list {
    padding: 0;
}
.kind-search .right {
    flex-direction: column;
    gap: var(--spacing-0);
}
.kind-search .left,
.kind-result .left,
.kind-topic .left {
    flex: none;
}
.kind-search .left >>> svg {
    fill: var(--color-grey-lighten-2);
}
.kind-search .item,
.kind-topic .item,
.kind-result .item {
    align-items: stretch;
    padding: var(--spacing-1) var(--spacing-2);
    gap: var(--spacing-3);
    border: none;
    height: auto;
    border-radius: var(--border-radius-3);
}

.kind-search .item.active,
.kind-topic .item.active  {
    background-color: var(--color-list-search-row-active);
}

.kind-search .item:hover,
.kind-topic .item:hover {
    background-color: var(--color-list-search-row-hover);
}


.kind-topic .left >>> svg {
    width: 16px;
    height: 16px;
    fill: var(--color-grey-lighten-2);
}
.kind-topic .item {
    align-items: center;
    cursor: pointer;
    padding: var(--spacing-2) var(--spacing-1);
    gap: var(--spacing-0);
}
.kind-result .item {
    border: 1px solid var(--color-purple-lighten-4);
    background-color: var(--color-purple-lighten-5);
    color: var(--color-text-secondary);
}
.kind-result .left >>> svg {
    fill: currentColor;
    width: 16px;
    height: 16px;
}

.kind-teams .item {
    height: 60px;
    flex: 0 0 60px;
}
.data-list.kind-teams {
    padding: 0;
    padding-left: 32px;
}
.kind-height-70 .item {
    height: 70px;
    flex: 0 0 70px;
}
.data-list.kind-height-70 {
    flex: 0;
    overflow-y: unset;
    padding: 0;
    padding-left: 32px;
}
</style>

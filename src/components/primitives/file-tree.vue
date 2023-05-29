<script setup>
defineProps(['data', 'level'])
</script>

<template>
    <div
        v-for="item, i in data"
        :key="i"
        class="tree"
    >
        <div class="title" :class="{'without-children':!item.children, active: item.active, 'without-title':!item.title }">
            <div class="left">
                <button v-if="item.children">
                    <ArrowIcon v-if="item.icon === 'close'" />
                    <ArrowIcon v-if="item.icon === 'open'" class="open" />
                </button>
            </div>
            <div class="right">
                {{ item.title }}
            </div>
        </div>
        <div
            v-if="item.children"
            class="children"
        >
            <FileTree :data="item.children" :level="level + 1">

            </FileTree>
        </div>
    </div>
</template>

<style scoped>
.tree {
    display: flex;
    flex-direction: column;
}
.children {
    margin-left: 28px;
}

.without-children .left {
    padding-left: 18px;
}
.title {
    display: flex;
    align-items: center;
    flex: 0 0 40px;
    padding: 0 var(--spacing-1);
    height: 40px;
    gap: var(--spacing-0);
    transition: background-color 0.2s ease;
    user-select: none;
    cursor: pointer;
    border-radius: var(--border-radius-3);
}

.left button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    width: 18px;
    height: 18px;
    cursor: pointer;
    border: none;
    background: transparent;
}
.left button:hover {
    background-color: var(--color-purple-lighten-3);
    border-radius: 4px;
}
.left button:hover svg {
    fill: var(--color-grey-base);
}

.left svg {
    width: 16px;
    height: 16px;
    fill: var(--color-grey-lighten-2);
}

.right {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    line-height: 20px;
    width: 231px;
}

.title:hover {
    background-color: var(--color-list-search-row-hover);
}

.title.active {
    background-color: var(--color-list-search-row-active);
}
.left svg.open {
    transform: rotate(180deg);
    fill: var(--color-grey-base);
}

.without-title {
    display: none;
}
</style>

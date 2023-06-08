<script setup>
defineProps(['data', 'level'])
</script>

<template>
    <div
        v-for="item, i in data"
        :key="i"
        class="tree"
    >
        <div class="item" :class="{'without-children':!item.children, active: item.active}">
            <div class="left">
                <div class="open-btn">
                    <button v-if="item.children">
                        <ArrowIcon v-if="item.icon === 'close'" />
                        <ArrowIcon v-if="item.icon === 'open'" class="open" />
                    </button>
                </div>
                <div class="text">
                    {{ item.title }}
                </div>
            </div>
            <div class="right">
                <button class="more">
                    <DotsIcon />
                </button>
                <button class="add">
                    <AddIcon />
                </button>
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

.left {
    display: flex;
    gap: var(--spacing-0);
    flex: 1;
    overflow: hidden;
}
.item {
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

.open-btn button,
.right button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    width: 18px;
    height: 18px;
    cursor: pointer;
    border: none;
    border-radius: var(--border-radius-3);
}
.open-btn button,
.more {
    background: transparent;
}


.open-btn button:hover {
    background-color: var(--color-purple-lighten-3);
    border-radius: var(--border-radius-3);
}
.open-btn button:hover svg {
    fill: var(--color-grey-base);
}

.open-btn svg {
    width: 16px;
    height: 16px;
    fill: var(--color-grey-lighten-2);
}

.text {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    line-height: 20px;
}

.item:hover {
    background-color: var(--color-list-search-row-hover);
}

.item.active {
    background-color: var(--color-list-search-row-active);
}

.right {
    display: none;
}

.item:first-child:hover .right,
.children:first-child:hover .right {
    display: flex;
}
.open-btn svg.open {
    transform: rotate(180deg);
    fill: var(--color-grey-base);
}

.right svg {
    width: 16px;
    height: 16px;
    fill: currentColor;
}

.add {
    background-color: var(--color-btn-background);
    color: var(--color-white-base);
}
.add:hover {
    background-color: var(--color-btn-background-hover);
}

.more svg {
    transform: rotate(90deg);
}

.more:hover {
    background-color: var(--color-purple-lighten-3);
}
</style>

<template >
    <div class="skeleton">
        <div class="button"></div>
        <div class="info">
            <div class="row title"></div>
            <div class="search-content">
                <div class="row topic"></div>
                <div class="row text"></div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.skeleton {
    display: flex;
    align-items: center;
    height: 96px;
    gap: var(--spacing-3);
    padding: 0 var(--spacing-2);
    pointer-events: none;
    transition: background-color 0.2s ease;
}

.info {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: var(--spacing-0);

}

.row {
    border-radius: 40px;
    background-color: var(--color-skeleton-bg);
}

.title {
    width: 400px;
    height: 16px;
}

.topic {
    width: 205px;
    height: 14px;
}


.text {
    width: 687px;
    height: 40px;
    border-radius: 4px;
}

.button {
    height: 20px;
    width: 20px;
    background-color: var(--color-skeleton-bg);
    border-radius: var(--border-radius-3);
}

.search-content {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-1);
    }
</style>

<template >
    <div class="skeleton">
        <div class="info">
            <div class="row date"></div>
            <div class="row name"></div>
            <div class="attendees">
                <div class="row attendee"></div>
                <div class="row attendee"></div>
            </div>
        </div>
        <div class="button"></div>
    </div>
</template>


<style scoped>
.skeleton {
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--color-divider);
    padding: 0 var(--spacing-3);
    height: 96px;
    gap: var(--spacing-6);
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

.date {
    width: 128px;
    height: 12px;
    margin: 2px 0;
}

.name {
    width: 400px;
    height: 14px;
    margin: 3px 0;
}

.attendees {
    display: flex;
    gap: var(--spacing-2);
}

.attendee {
    width: 94px;
    height: 14px;
    margin: 3px 0;
}

.button {
    height: 36px;
    width: 36px;
    margin-right: 60px;
    background-color: var(--color-skeleton-bg);
    border-radius: var(--border-radius-3);
}
</style>

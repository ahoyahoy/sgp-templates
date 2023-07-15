<template >
    <div class="skeleton">
        <div class="top">
            <div class="left">
                <div class="info">
                    <div class="row date"></div>
                    <div class="row name"></div>
                    <div class="attendees">
                        <div class="row attendee"></div>
                        <div class="row attendee"></div>
                    </div>
                </div>
                <div class="media-btns">
                    <div class="media-btn">
                    </div>
                    <div class="media-btn">
                    </div>
                    <div class="media-btn">
                    </div>
                </div>
            </div>
            <div class="right">
                <div class="more-icon"></div>
            </div>
        </div>
        <div class="bottom">
            <div class="button"></div>
        </div>
    </div>
</template>


<style scoped>
.skeleton {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid var(--color-divider);
    gap: var(--spacing-3);
    pointer-events: none;
    transition: background-color 0.2s ease;
    padding-bottom: var(--spacing-4);
}

.top {
    display: flex;
    gap: var(--spacing-3);
}


.left,
.right {
    display: flex;
}


.left {
    flex-direction: column;
    flex: 1;
    gap: var(--spacing-3);
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
    max-width: 128px;
    width: 100%;
    height: 12px;
    margin: 2px 0;
}

.name {
    max-width: 450px;
    width: 100%;
    height: 14px;
    margin: 3px 0;
}

.attendees {
    display: flex;
    gap: var(--spacing-2);
}

.attendee {
    max-width: 94px;
    width: 100%;
    height: 14px;
    margin: 3px 0;
}

.media-btns {
    display: flex;
    gap: var(--spacing-2);
}

.media-btn {
    width: 24px;
    height: 24px;
    background-color: var(--color-skeleton-bg);
    border-radius: var(--border-radius-2);
}

.more-icon {
    width: 32px;
    height: 32px;
    background-color: var(--color-skeleton-bg);
    border-radius: var(--border-radius-2);
}

.button {
    height: 36px;
    width: 100%;
    background-color: var(--color-skeleton-bg);
    border-radius: var(--border-radius-3);
}
</style>

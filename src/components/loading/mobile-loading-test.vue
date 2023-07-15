<script setup>
const sessions = [
    {
        date: 'Mon, 21 Jul at 08:00',
        title: 'Check bizHub 3526 printer in Prague',
        names: [
            {name: 'Peter Davis', icon: 'person'},
            {name: 'You', icon: 'person'},
        ],
        media: 3,
    },
]
</script>

<template >
    <div class="hover-test">

        <MobileLoadingAll />

        <div class="box">
            <div class="top">
                <div class="left">
                    <div class="details">
                        <div class="date">Mon, 21 Jul at 08:00</div>
                        <div class="name">Check bizHub 3526 printer in Prague</div>
                        <div>
                            <div class="attendees">
                                <div class="person">
                                    <PersonIcon />
                                    <div class="attendee">Peter Davis</div>
                                </div>
                                <div class="person">
                                    <PersonIcon />
                                    <div class="attendee">You</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="btn-group">
                        <div class="media">
                            <div>
                                <div class="media-btns">
                                    <button class="media-btn video"></button>
                                    <button class="media-btn video"></button>
                                    <button class="media-btn video"></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <IconButton class="more-options" type="ghost">
                        <DotsIcon />
                    </IconButton>
                </div>
            </div>
            <div class="bottom">
                <BaseButton block>
                    <PhoneIcon />
                    Connect
                </BaseButton>
            </div>
        </div>

    </div>
</template>


<style scoped>
.box {
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
}

.item.disabled {
    color: var(--color-text-disabled);
    fill: currentColor;
}

.left,
.right {
    display: flex;
}


.left {
    flex-direction: column;
    flex: 1;
    gap: var(--spacing-3);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.more-options {
    color: var(--color-text-secondary);
}

.details {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-0);
    flex-grow: 1;
    min-width: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.date {
    font-size: var(--size-text-small);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: var(--line-hight-1);
    color: var(--color-grey-lighten-1);
}

.name {
    font-weight: var(--font-weight-semibold);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: var(--line-hight-2);
}

.item.disabled .date {
    color: var(--color-text-disabled);
}

.attendees {
    display: flex;
    gap: var(--spacing-2);
    flex-wrap: wrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: var(--line-hight-2);
    color: var(--color-grey-lighten-1);
}

.item.disabled .attendees {
    color: var(--color-text-disabled);
}

.attendee {
    display: flex;
    gap: var(--spacing-0);
    align-items: center;
}

.loading-attendees {
    display: flex;
    gap: var(--spacing-2);
}

.loading-attendee {
    width: 94px;
    height: 14px;
    margin: 3px 0;
    border-radius: 40px;
    background-color: var(--color-skeleton-bg);
}

.person {
    display: flex;
    gap: var(--spacing-0);
    align-items: center;
}

.btn-group {
    display: flex;
    gap: var(--spacing-6);
    align-items: center;
}

.media {
    display: flex;
}

.media-btns {
    display: flex;
    gap: var(--spacing-2);
}

.media-btn {
    width: 24px;
    height: 24px;
    background-color: #FBFBFE;
    border: 1px solid #CECFF0;
    border-radius: var(--border-radius-2);
}

.hover-test>div:first-child {
    display: none
}

.hover-test:hover>div:first-child {
    display: flex
}

.hover-test:hover>div:last-child {
    display: none
}
</style>

<script setup>
import PersonIcon from '../icons/person-icon.vue'
</script>

<template >
    <div class="hover-test">

        <loadingAll />

        <div class="box">
            <div class="details">
                <p class="date">Mon, 21 Jul at 08:00</p>
                <p class="name">Check bizHub 3526 printer in Prague</p>
                <div class="attendees">
                    <p class="attendee">
                        <PersonIcon class="icon" />
                        Peter Davis
                    </p>
                    <p class="attendee">
                        <PersonIcon class="icon" />
                        You
                    </p>
                </div>
            </div>
            <div class="info">
                <div class="media-btns">
                    <button class="media-btn video"></button>
                    <button class="media-btn image"></button>
                    <button class="media-btn audio"></button>
                </div>
                <p class="countdown no-show">1 day to start</p>
            </div>
            <div class="buttons">
                <div class="btn call-btn hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20">
                        <path
                            d="M795 936q-122 0-242.5-60T336 720q-96-96-156-216.5T120 261q0-19.286 12.857-32.143T165 216h140q13.611 0 24.306 9.5Q340 235 343 251l27 126q2 14-.5 25.5T359 422L259 523q56 93 125.5 162T542 802l95-98q10-11 23-15.5t26-1.5l119 26q15.312 3.375 25.156 15.188Q840 740 840 756v135q0 19.286-12.857 32.143T795 936ZM229 468l81-82-23-110H180q0 39 12 85.5T229 468Zm369 363q41 19 89 31t93 14V769l-103-21-79 83ZM229 468Zm369 363Z" />
                    </svg>
                </div>
                <div class="btn more-options-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20">
                        <path
                            d="M184.783 635Q161 635 143.5 617.7T126 576.106Q126 551 143.373 534t41.769-17q23.458 0 41.658 16.894 18.2 16.894 18.2 41.5T226.783 617.5q-18.217 17.5-42 17.5Zm295.823 0Q456 635 438.5 617.7T421 576.106Q421 551 438.3 534t41.594-17Q505 517 522 533.894t17 41.5Q539 600 522.106 617.5t-41.5 17.5Zm294.288 0q-24.823 0-42.359-17.3Q715 600.4 715 576.106 715 551 732.677 534t42.5-17Q800 517 817.5 533.894t17.5 41.5Q835 600 817.358 617.5 799.717 635 774.894 635Z" />
                    </svg>
                </div>
            </div>
        </div>

    </div>
</template>


<style scoped>
.box {
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--color-divider);
    padding: 0 var(--spacing-3);
    height: 96px;
    gap: var(--spacing-6);
    transition: background-color 0.2s ease;
}

.box.active {
    background-color: var(--color-list-view-row-active);
}

.box:hover {
    background-color: var(--color-list-view-row-hover);
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

.attendees {
    display: flex;
    gap: var(--spacing-2);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: var(--line-hight-2);
    color: var(--color-grey-lighten-1);
}

.attendee {
    display: flex;
    gap: var(--spacing-0);
    align-items: center;
}

.icon {
    widows: 14px;
    height: 14px;
}

.info {
    display: flex;
    align-items: center;
}

.countdown {
    color: var(--color-text-disabled);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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
    cursor: pointer;
}

.buttons {
    display: flex;
    align-items: center;
    gap: var(--spacing-4);
}

.btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 35px;
    border-radius: var(--border-radius-3);
    cursor: pointer;
}

.call-btn {
    fill: #fff;
    background: var(--color-btn-background);
    transition: background-color 0.2s ease;
    transition: border 0.2s ease;
    transition: color 0.2s ease;
}

.call-btn:hover {
    background-color: var(--color-btn-background-hover);
}

.call-btn:hover svg {
    fill: var(--color-btn-text-hover);
    transition: fill 0.2s ease;
}

.more-options-btn {
    opacity: 0;
    fill: var(--color-text-primary);
    transition: background-color 0.2s ease, opacity 0.2s;
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

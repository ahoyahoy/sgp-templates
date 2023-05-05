<script setup>
import DataList from '../components/advanced/data-list.vue'
import AppHeader from '../components/layout/app-header.vue'
import BaseButton from '../components/primitives/base-button.vue'
import IconButton from '../components/primitives/icon-button.vue'
import MoreinfoButton from '../components/primitives/more-info-button.vue'
import TabNav from '../components/primitives/tab-nav.vue'
import TextInput from '../components/primitives/text-input.vue'
import SidebarNav from '../components/sidebar-nav.vue'

const sessions = [
    {
        date: 'Mon, 21 Jul at 08:00',
        title: 'Check bizHub 3526 printer in Prague',
        names: ['jmeno', 'jmeno'],
        active: true,
    },
    {
        date: 'Mon, 21 Jul at 08:00',
        title: 'Broken bizHub 1762 in Berlin',
        waiting: true,
    },
    {
        date: 'Mon, 21 Jul at 08:00',
        title: 'Broken bizHub 1762 in Berlin',
        names: ['jmeno', 'jmeno'],
        disabled: true,
    },
    {
        date: 'Mon, 21 Jul at 08:00',
        title: 'Broken bizHub 1762 in Berlin',
        disabled: true,
    },
    {
        date: 'Mon, 21 Jul at 08:00',
        title: 'Broken bizHub 1762 in Berlin',
        disabled: true,
    },
    {
        date: 'Mon, 21 Jul at 08:00',
        title: 'Broken bizHub 1762 in Berlin',
        disabled: true,
    },
]
</script>

<template>
    <div class="app_container desktop">
        <SidebarNav />

        <div class="sessioin-content">
            <AppHeader title="Session">
                <template #left>
                    <TextInput placeholder="Search in Session">
                        <template #icon>
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48">
                                <path
                                    d="M796 935 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l264 262-44 44ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z" />
                            </svg>
                        </template>
                    </TextInput>
                </template>
                <template #right>
                    <BaseButton>
                        <svg xmlns="http://www.w3.org/2000/svg" height="15" viewBox="0 96 960 960" width="15">
                            <path
                                d="M140 896q-24 0-42-18t-18-42V316q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302L140 371v465h680V371L480 594Zm0-60 336-218H145l335 218ZM140 371v-55 520-465Z" />
                        </svg>
                        Create Session
                    </BaseButton>
                </template>
            </AppHeader>

            <TabNav :tabs="['Active & Scheduled', 'Expired']" :activeTab="0" />

            <DataList :data="sessions">
                <template #left="{ item }">
                    <div class="details">
                        <div class="date">{{ item.date }}</div>
                        <div class="name">{{ item.title }}</div>
                        <div class="attendees">{{ item.names }}</div>
                    </div>
                </template>
                <template #right="{ item }">
                    <div class="btn-group">
                        <div class="media">
                            <div class="media-btns">
                                <button class="media-btn video"></button>
                                <button class="media-btn image"></button>
                                <button class="media-btn audio"></button>
                            </div>
                            <p class="countdown no-show">1 day to start</p>
                        </div>
                        <div class="buttons">
                            <IconButton :style="{ visibility: item.disabled ? 'hidden' : 'visible', }">
                                <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20">
                                    <path
                                        d="M795 936q-122 0-242.5-60T336 720q-96-96-156-216.5T120 261q0-19.286 12.857-32.143T165 216h140q13.611 0 24.306 9.5Q340 235 343 251l27 126q2 14-.5 25.5T359 422L259 523q56 93 125.5 162T542 802l95-98q10-11 23-15.5t26-1.5l119 26q15.312 3.375 25.156 15.188Q840 740 840 756v135q0 19.286-12.857 32.143T795 936ZM229 468l81-82-23-110H180q0 39 12 85.5T229 468Zm369 363q41 19 89 31t93 14V769l-103-21-79 83ZM229 468Zm369 363Z">
                                    </path>
                                </svg>
                            </IconButton>
                            <MoreinfoButton class="more-options">
                                <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20">
                                    <path
                                        d="M184.783 635Q161 635 143.5 617.7T126 576.106Q126 551 143.373 534t41.769-17q23.458 0 41.658 16.894 18.2 16.894 18.2 41.5T226.783 617.5q-18.217 17.5-42 17.5Zm295.823 0Q456 635 438.5 617.7T421 576.106Q421 551 438.3 534t41.594-17Q505 517 522 533.894t17 41.5Q539 600 522.106 617.5t-41.5 17.5Zm294.288 0q-24.823 0-42.359-17.3Q715 600.4 715 576.106 715 551 732.677 534t42.5-17Q800 517 817.5 533.894t17.5 41.5Q835 600 817.358 617.5 799.717 635 774.894 635Z">
                                    </path>
                                </svg>
                            </MoreinfoButton>
                        </div>
                    </div>
                </template>
            </DataList>
        </div>
    </div>
</template>

<style scoped>
* {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    font-size: var(--size-text-medium);
}


.app_container {
    display: flex;
    flex-direction: row;
    height: 100vh;
    font-size: var(--size-text-medium);
}

.app_container.desktop {
    min-width: 1024px;
    min-height: 500px;
}

.sessioin-content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    min-width: 0;
}

.session-details {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-0);
    flex-grow: 1;
    min-width: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.more-options {
    opacity: 0;
}

.item:hover .more-options {
    opacity: 1;
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
    white-space: nowrap;
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

.like {
    fill: green;
}

.dislike {
    fill: red;

    transform: matrix(-1, 0, 0, 1, 0, 0);
}

.btn-group {
    display: flex;
    gap: var(--spacing-6);
    align-items: center;
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
    cursor: pointer;
}

.buttons {
    display: flex;
    align-items: center;
    gap: var(--spacing-4);
}

.item.waiting .btn.primary {
    background-color: var(--color-btn-disabled);
    pointer-events: none;
    color: #DADADA;
}
</style>

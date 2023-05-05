<script setup>
import DataList from '../components/advanced/data-list.vue'
import DotsIcon from '../components/icons/dots-icon.vue'
import Mailicon from '../components/icons/mail-icon.vue'
import PhoneIcon from '../components/icons/phone-icon.vue'
import SearchIcon from '../components/icons/search-icon.vue'
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
        loadingAll: true,
    },
    {
        date: 'Mon, 21 Jul at 08:00',
        title: 'Broken bizHub 1762 in Berlin',
        loadingNames: true,
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
                            <SearchIcon />
                        </template>
                    </TextInput>
                </template>
                <template #right>
                    <BaseButton>
                        <Mailicon />
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
                        <template v-if="item.names?.length">
                            <div class="attendees">
                                <template v-for="name,i in item.names" :key="i">
                                    <div class="attendee">{{ name }}</div>
                                </template>
                            </div>
                        </template>
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
                                <PhoneIcon />
                            </IconButton>
                            <MoreinfoButton class="more-options">
                                <DotsIcon />
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

<script setup>
const sessions = [
    {
        date: 'Mon, 21 Jul at 08:00',
        title: 'Check bizHub 3526 printer in Prague',
        names: [
            {name: 'Peter Davis', icon: 'person'},
            {name: 'You', icon: 'person'},
        ],
        active: true,
        media: 3,
    },
    {
        date: 'Mon, 21 Jul at 08:00',
        title: 'Broken bizHub 1762 in Berlin',
        names: [
            {name: 'tomas.muller@company.com', icon: 'thumbDown'},
            {name: 'John Anderson', icon: 'thumbUp'},
        ],
        waiting: true,
        countdown: '1 day to start',
    },
    {
        date: 'Mon, 21 Jul at 08:00',
        title: 'Broken bizHub 1762 in Berlin',
        names: [
            {name: 'Peter Davis', icon: 'person'},
            {name: 'You', icon: 'person'},
        ],
    },
    {
        date: 'Mon, 21 Jul at 08:00',
        title: 'Broken bizHub 1762 in Berlin',
        loadingNames: true,
    },
    {
        date: 'Mon, 21 Jul at 08:00',
        title: 'Broken bizHub 1762 in Berlin',
        names: [
            {name: 'Peter Davis', icon: 'person'},
            {name: 'You', icon: 'person'},
        ],
        disabled: true,
        media: 3,
    },
    {
        date: 'Mon, 21 Jul at 08:00',
        title: 'Broken bizHub 1762 in Berlin',
        names: [
            {name: 'tomas.muller@company.com', icon: 'thumbDown'},
            {name: 'John Anderson', icon: 'thumbUp'},
        ],
        disabled: true,
        media: 2,
    },
    {
        date: 'Mon, 21 Jul at 08:00',
        title: 'Broken bizHub 1762 in Berlin',
        names: [
            {name: 'Peter Davis', icon: 'person'},
            {name: 'You', icon: 'person'},
        ],
        disabled: true,
        media: 1,
    },
    {
        loadingAll: true,
    },
    {
        date: 'Mon, 21 Jul at 08:00',
        title: 'Broken bizHub 1762 in Berlin',
        names: [
            {name: 'Peter Davis', icon: 'person'},
            {name: 'You', icon: 'person'},
        ],
        loadingTest: true,
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
                        <MailIcon />
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
                        <template v-if="item.names">
                            <div class="attendees">
                                <template v-for="name, i in item.names" :key="i">
                                    <div class="person">
                                        <PersonIcon v-if="name.icon === 'person'" />
                                        <ThumbDownIcon v-if="name.icon === 'thumbDown'" />
                                        <ThumbUpIcon v-if="name.icon === 'thumbUp'" />
                                        <div class="attendee">{{ name.name }}</div>
                                    </div>
                                </template>
                            </div>
                        </template>
                        <template v-if="item.loadingNames">
                            <div class="loading-attendees">
                                <div class="loading-attendee"></div>
                                <div class="loading-attendee"></div>
                            </div>
                        </template>
                    </div>
                </template>
                <template #right="{ item }">
                    <div class="btn-group">
                        <div class="media">
                            <template v-if="item.media">
                                <div class="media-btns">
                                    <button v-for="i in item.media" :key="i" class="media-btn video">
                                    </button>
                                </div>
                            </template>
                            <p v-if="item.countdown" class="countdown">
                                {{ item.countdown }}
                            </p>
                        </div>
                        <div class="buttons">
                            <IconButton :style="{ visibility: item.disabled ? 'hidden' : 'visible', }">
                                <PhoneIcon />
                            </IconButton>
                            <IconButton class="more-options" type="ghost">
                                <DotsIcon />
                            </IconButton>
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

.more-options {
    color: var(--color-text-secondary);
    opacity: 0;
}

.more-options:hover {
    background-color: var(--color-purple-lighten-4);
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
</style>

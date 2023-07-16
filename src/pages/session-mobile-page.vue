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
        names: [
            {name: 'Peter Davis', icon: 'person'},
            {name: 'You', icon: 'person'},
        ],
        waiting: true,
        countdown: '1 day to start',
    },
    {
        date: 'Mon, 21 Jul at 08:00',
        title: 'Broken bizHub 1762 in Berlin',
        names: [
            {name: 'tomas.muller@company.com', icon: 'thumbDown'},
            {name: 'John Anderson', icon: 'thumbUp'},
        ],
        media: 3,
        expired: true,
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
    <div class="helper-containers">
        <div class="helper-container mobile-s">
            <div class="modal-detail">
                <MobileHeader title="Session">
                    <template #left>
                        <IconButton type="ghost">
                            <HamburgerIcon />
                        </IconButton>
                    </template>
                    <template #right>
                        <IconButton>
                            <AddIcon />
                        </IconButton>
                    </template>
                    <template #bottom>
                        <TextInput type="full" placeholder="Search in Session">
                            <template #icon>
                                <SearchIcon />
                            </template>
                        </TextInput>
                    </template>
                </MobileHeader>
                <MobileList :data="sessions">
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
                        </div>
                        <div class="btn-group" :style="{ display: item.media ? 'flex' : 'none', }">
                            <div class="media">
                                <template v-if="item.media">
                                    <div class="media-btns">
                                        <button v-for="i in item.media" :key="i" class="media-btn video">
                                        </button>
                                    </div>
                                </template>
                            </div>
                        </div>
                    </template>
                    <template #right>
                        <IconButton class="more-options" type="ghost">
                            <DotsIcon />
                        </IconButton>
                    </template>
                    <template #bottom="{ item }">
                        <BaseButton v-if="item.waiting" type="none"  disable block>
                            <PhoneIcon />
                            1 day to start
                        </BaseButton>
                        <BaseButton v-else block>
                            <PhoneIcon />
                            Connect
                        </BaseButton>
                    </template>
                </MobileList>
            </div>
        </div>
        <div class="helper-container mobile-l">
            <div class="modal-detail">
                <MobileHeader title="Session">
                    <template #left>
                        <IconButton type="ghost">
                            <HamburgerIcon />
                        </IconButton>
                    </template>
                    <template #right>
                        <IconButton>
                            <AddIcon />
                        </IconButton>
                    </template>
                    <template #bottom>
                        <TextInput type="full" placeholder="Search in Session">
                            <template #icon>
                                <SearchIcon />
                            </template>
                        </TextInput>
                    </template>
                </MobileHeader>
                <MobileList :data="sessions">
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
                        </div>
                        <div class="btn-group" :style="{ display: item.media ? 'flex' : 'none', }">
                            <div class="media">
                                <template v-if="item.media">
                                    <div class="media-btns">
                                        <button v-for="i in item.media" :key="i" class="media-btn video">
                                        </button>
                                    </div>
                                </template>
                            </div>
                        </div>
                    </template>
                    <template #right>
                        <IconButton class="more-options" type="ghost">
                            <DotsIcon />
                        </IconButton>
                    </template>
                    <template #bottom="{ item }">
                        <BaseButton v-if="item.waiting" type="none"  disable block>
                            <PhoneIcon />
                            1 day to start
                        </BaseButton>
                        <BaseButton v-else block>
                            <PhoneIcon />
                            Connect
                        </BaseButton>
                    </template>
                </MobileList>
            </div>
        </div>
        <div class="helper-container tablet">
            <div class="modal-detail">
                <MobileHeader title="Session">
                    <template #left>
                        <IconButton type="ghost">
                            <HamburgerIcon />
                        </IconButton>
                    </template>
                    <template #right>
                        <IconButton>
                            <AddIcon />
                        </IconButton>
                    </template>
                    <template #bottom>
                        <TextInput type="full" placeholder="Search in Session">
                            <template #icon>
                                <SearchIcon />
                            </template>
                        </TextInput>
                    </template>
                </MobileHeader>
                <TabletList :data="sessions">
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
                        </div>
                        <div class="btn-group" :style="{ display: item.media ? 'flex' : 'none', }">
                            <div class="media">
                                <template v-if="item.media">
                                    <div class="media-btns">
                                        <button v-for="i in item.media" :key="i" class="media-btn video">
                                        </button>
                                    </div>
                                </template>
                            </div>
                        </div>
                    </template>
                    <template #right="{item}">
                        <p v-if="item.countdown" class="countdown">
                            {{ item.countdown }}
                        </p>
                        <IconButton v-if="item.waiting" type="none" disable :style="{ display: item.disabled || item.expired ? 'none' : 'flex', }">
                            <PhoneIcon />
                        </IconButton>
                        <IconButton v-else :style="{ display: item.disabled || item.expired ? 'none' : 'flex', }">
                            <PhoneIcon />
                        </IconButton>
                        <IconButton class="more-options" type="ghost">
                            <DotsIcon />
                        </IconButton>
                    </template>
                </TabletList>
            </div>
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


.helper-containers {
    display: flex;
    align-items: center;
    /* justify-content: center; */
    height: 100vh;
    overflow: scroll;
    background-color: #F5F5F5;
    gap: 45px;
    padding: 0 2em;

}

.helper-container {
    display: flex;
    flex-direction: column;
}
.helper-container.mobile-s {
    width: 320px;
    height: 762px;
    flex: 0 0 320px;
}
.helper-container.mobile-l {
    width: 425px;
    height: 762px;
    flex: 0 0 425px;
}
.helper-container.tablet {
    width: 768px;
    height: 762px;
    flex: 0 0 768px;
}

.modal-detail {
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
    border-left: 1px solid var(--color-grey-lighten-4);
    min-height: 450px;
    background: white;
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

.countdown {
    color: var(--color-text-disabled);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

</style>

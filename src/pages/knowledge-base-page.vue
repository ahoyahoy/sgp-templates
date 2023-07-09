<script setup>
const search = [
    {
        title: 'How to fix the internet connection for printers bizHub 3526',
    },
    {
        title: 'How to fix the internet connection for printers bizHub 3526',
    },
    {
        title: 'How to fix the internet connection for printers bizHub 3526',
    },
    {
        title: 'How to fix the internet connection for printers bizHub 3526',
    },
    {
        title: 'How to fix the internet connection for printers bizHub 3526',
    },
]
const result = [
    {
        title: 'How to fix the internet connection for printers bizHub 3526',
        label: 'Session',
        phoneIcon: true,
    },
    {
        title: 'How to fix the internet connection for printers bizHub 3526',
        label: 'Topic',
        hatIcon: true,
        active: true,
    },
]

const tree = [
    {
        title: 'How to fix the internet connection  for printers bizHub 3526',
        icon: 'open',
        children: [
            {
                title: '#1 Additional information',
            },
        ],
    },
    {
        title: 'How to fix the internet connection  for printers bizHub 3526',
        icon: 'open',
        children: [
            {
                title: '#1 Additional information',
                active: true,
            },
            {
                title: '#2 Additional information',
                icon: 'open',
                children: [
                    {
                        title: '#1 Additional information',
                    },
                ],
            },
        ],
    },
    {
        title: 'How to fix the internet connection  for printers bizHub 3526',
    },
]
</script>

<template>
    <div class="app_container desktop">
        <SidebarNav />

        <div class="search-menu">
            <BaseText class="menu-title" kind="h1">
                Knowledge base
            </BaseText>
            <div class="search-btn">
                <BaseButton type="outline" kind="input">
                    <SearchIcon />
                    Search in Knowledge base
                </BaseButton>
            </div>
            <div class="menu">
                <div class="buttons-box">
                    <BaseButton type="ghost" kind="mono-left">
                        <PhoneIcon />
                        Sessions
                    </BaseButton>
                    <BaseButton type="ghost" kind="mono-left">
                        <MailIcon />
                        Manuals
                    </BaseButton>
                </div>
                <div class="divider"></div>
                <div class="topics">
                    <TextBox>
                        <template #main-text>
                            <BaseText class="topic-title" kind="subtitle">
                                3 topics
                            </BaseText>
                        </template>
                        <template #right-icon>
                            <IconButton kind="purple" type="ghost">
                                <AddIcon />
                            </IconButton>
                        </template>
                    </TextBox>
                    <div>
                        <FileTree :data="tree" :level="0" />
                    </div>
                </div>
            </div>
            </div>

        <div class="page-body">
            <AppHeader>
                <template #right>
                    <BaseButton type="outline" kind="primary">
                        Cancel
                    </BaseButton>
                    <BaseButton class="save-btn">
                        <DoneIcon />
                        Save
                    </BaseButton>
                </template>
            </AppHeader>
            <div class="page-content">
                <div class="content-box">
                    <BaseText kind="primary-large">
                        How to fix the internet connection for printers bizHub 3526
                    </BaseText>
                    <div class="search-box">
                        <div class="box-head">
                            <TextInput placeholder="Search in Knowledge base" kind="underline" type="ghost">
                                <template #icon>
                                    <SearchIcon />
                                </template>
                                <template #right-icon>
                                    <CloseIcon />
                                </template>
                            </TextInput>
                            <TabNav kind="secondary" type="position-3" :tabs="['Sessions', 'Topics', 'Manuals']"
                                :activeTab="0" />
                        </div>
                        <DataList :data="search" kind="search">
                            <template #left>
                                <PhoneIcon />
                            </template>
                            <template #right="{ item }">
                                <div class="result">{{ item.title }}</div>
                            </template>
                        </DataList>
                    </div>
                    <div class="summary-item" v-for="item, i in summary" :key="i">
                        <div class="summ-text">{{ item.text }}</div>
                        <div class="summ-price">{{ item.price }}</div>
                    </div>
                    <div class="links">
                        <div class="link" v-for="item, i in result" :key="i" :class="{ 'active': item.active }">
                            <div class="link-left">
                                <div class="label-box">
                                    <PhoneIcon v-if="item.phoneIcon" />
                                    <SchoolIcon v-if="item.hatIcon" />
                                    <span>{{ item.label }}</span>
                                </div>
                                <div class="title">{{ item.title }}</div>
                            </div>
                            <div class="link-right" v-if="item.active">
                                <span class="text">Open</span>
                                <div class="vertical-divider"></div>
                                <button>
                                    <CloseIcon class="close-icon" />
                                </button>
                            </div>
                            </div>
                        <BaseButton class="add-link" type="ghost" kind="primary-light-2">
                            <AddIcon />
                            <span>Add link to the Session, Topic or Manual</span>
                        </BaseButton>
                    </div>
                    <BaseText kind="primary-light-2">
                        There is a place for your content...
                    </BaseText>
                </div>
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

.search-menu {
    display: flex;
    flex-direction: column;
    flex: 0 0 317px;
    width: 317px;
    height: 100%;
    border-right: 1px solid var(--color-grey-lighten-4);
    /* display: none; */
}

.menu-title {
    display: flex;
    align-items: center;
    padding: 0 var(--spacing-3);
    flex: 0 0 96px;
    height: 96px;
}

.search-btn {
    padding: 0 var(--spacing-3);
    height: 56px;
    flex: 0 0 56px;
}

.search-btn button {
    width: 100%;
}

.menu {
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-y: auto;
    padding: 0 var(--spacing-3);
}

.buttons-box {
    display: flex;
    flex-direction: column
}

.divider {
    width: 284px;
    height: 34px;
    flex: 0 0 34px;
    position: relative;
    margin: 0 auto;
}

.divider::before {
    content: "";
    display: block;
    height: 1px;
    width: 284px;
    border-bottom: 1px solid var(--color-divider);
    position: absolute;
    top: 50%;
}

.topics {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-3);
}

.topic-title {
    padding-left: var(--spacing-1);
}

.open {
    transform: rotate(180deg);
    color: var(--color-grey-base);
    fill: currentColor;
}

.page-body {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    min-width: 0;
}

.save-btn {
    gap: var(--spacing-1);
}

.page-content {
    display: flex;
    justify-content: center;
    flex: 1;
    overflow-y: auto;
    padding: 0 var(--spacing-5);
}

.content-box {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-4);
    width: 680px;
}

.result {
    line-height: var(--line-hight-2);
}

.links {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-1);
}

.link {
    display: flex;
    align-items: center;
    padding: var(--spacing-1) var(--spacing-2);
    gap: var(--spacing-3);
    flex: 0 0 40px;
    height: 40px;
    border: 1px solid var(--color-purple-lighten-4);
    background-color: var(--color-purple-lighten-5);
    color: var(--color-text-secondary);
    border-radius: var(--border-radius-3);
    user-select: none;
}

.link.active {
    border: 1px solid var(--color-purple-lighten-3);
}
.link-left {
    display: flex;
    gap: var(--spacing-3);
    flex: 1;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

.link-left .title {
    color: var(--color-text-secondary);
    line-height: var(--line-hight-2);
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.label-box {
    display: flex;
    align-items: center;
    line-height: var(--line-hight-2);
    gap: var(--spacing-1);
    color: var(--color-text-primary);
}

.label-box svg {
    min-height: 16px;
    min-width: 16px;
}

.link-right {
    display: flex;
    align-items: center;
    gap: var(--spacing-3);
}

.link-right .text {
    color: var(--color-text-secondary);
    font-weight: var(--font-weight-bold);
}

.vertical-divider {
    height: var(--line-hight-2);
    width: 1px;
    background: var(--color-grey-lighten-3);
}

.link-right button {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
    border-radius: var(--border-radius-3);
    background: transparent;
}

.link-right button:hover  {
    background-color: var(--color-purple-lighten-4);
}

.link-right .close-icon {
    width: 18px;
    height: 18px;
    min-width: 18px;
    max-width: 18px;
    color: var(--color-text-secondary);
}
.search-box {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-3);
    padding: var(--spacing-2);
    border: 1px solid var(--color-purple-lighten-3);
    border-radius: var(--border-radius-4);
    box-shadow: 0px 12px 24px rgba(33, 33, 44, 0.1);
}

.box-head {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-2);
}

.add-link {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.add-link span {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
</style>

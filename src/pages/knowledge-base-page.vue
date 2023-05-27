<script setup>
const topics = [
    {
        title: 'How to fix the internet connection  for printers bizHub 3526',
        icon: 'close',
    },
    {
        title: 'How to fix the internet connection  for printers bizHub 3526',
        icon: 'open',
    },
    {
        title: 'How to fix the internet connection  for printers bizHub 3526',
        icon: 'close',
    },
]

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
            <div class="menu">
                <TextInput placeholder="Search in Knowledge base" kind="sized">
                    <template #icon>
                        <SearchIcon />
                    </template>
                </TextInput>
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
                <DataList :data="topics" kind="topic">
                    <template #left="{ item }">
                        <ArrowIcon v-if="item.icon === 'close'" />
                        <ArrowIcon v-if="item.icon === 'open'" class="open" />
                    </template>
                    <template #right="{ item }">
                        <div class="title">{{ item.title }}</div>
                    </template>
                </DataList>
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
                        How to fix the internet connection  for printers bizHub 3526
                    </BaseText>
                    <div class="search-box">
                        <div>
                            <TextInput placeholder="Search in Knowledge base" kind="underline" type="ghost">
                                <template #icon>
                                    <SearchIcon />
                                </template>
                                <template #right-icon>
                                    <CloseIcon />
                                </template>
                            </TextInput>
                            <TabNav kind="secondary" :tabs="['Sessions', 'Topics', 'Manuals']" :activeTab="0" />
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
                    <div>
                        <DataList :data="result" kind="result">
                            <template #left>
                                <PhoneIcon />
                            </template>
                            <template #right="{ item }">
                                <div class="result">{{ item.title }}</div>
                            </template>
                        </DataList>
                        <BaseButton type="ghost" kind="primary-light-2">
                            <AddIcon />
                            Add link to the Session, Topic or Manual
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
    height: 100%;
    /* display: none; */
}

.menu-title {
    display: flex;
    align-items: center;
    padding: 0 var(--spacing-5);
    flex: 0 0 96px;
    height: 96px;
}

.menu {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-3);
    padding: 0 var(--spacing-5);
}
.buttons-box {
    display: flex;
    flex-direction: column
}

.divider {
  width: 270px;
  height: 34px;
  position: relative;
  margin: 0 auto;
}
.divider::before {
  content: "";
  display: block;
  height: 1px;
  width: 270px;
  border-bottom: 1px solid var(--color-divider);
  position: absolute;
  top: 50%;
}
.topics {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-3);
    padding: 0 var(--spacing-5);
}
.topic-title {
    padding-left: var(--spacing-1);
}

.title {
    white-space: nowrap;
    text-overflow: ellipsis;
    height: 20px;
    overflow: hidden;
    line-height: 20px;
    width: 231px;
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
    overflow-y: auto;
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

.search-box {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-3);
    padding: var(--spacing-3);
    border: 1px solid var(--color-purple-lighten-3);
    border-radius: var(--border-radius-4);
    box-shadow: 0px 12px 24px rgba(33, 33, 44, 0.1);
}
</style>

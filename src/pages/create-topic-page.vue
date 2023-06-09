<script setup>
defineProps(['result', 'topic'])

const result = [
    {
        title: 'How to fix the internet connection for printers bizHub 3526',
    },
]

const topic = [
    {
        title: 'Broken bizHub 1762 in Berlin',
        date: 'Mon, 21 Jul at 16:00',
        imgs: [
            {img: 'https://raw.githubusercontent.com/ahoyahoy/sgp-templates/f/create-topic/img/01.png'},
            {img: 'https://raw.githubusercontent.com/ahoyahoy/sgp-templates/f/create-topic/img/02.png'},
            {img: 'https://raw.githubusercontent.com/ahoyahoy/sgp-templates/f/create-topic/img/01.png'},
            {img: 'https://raw.githubusercontent.com/ahoyahoy/sgp-templates/f/create-topic/img/02.png'},
            {img: 'https://raw.githubusercontent.com/ahoyahoy/sgp-templates/f/create-topic/img/02.png'},
            {img: 'https://raw.githubusercontent.com/ahoyahoy/sgp-templates/f/create-topic/img/02.png'},
            {img: 'https://raw.githubusercontent.com/ahoyahoy/sgp-templates/f/create-topic/img/02.png'},
        ],
    },
    {
        title: 'Check bizHub 3526 printer in Prague',
        date: 'Sun, 20 Jul at 08:00',
        imgs: [
            {img: 'https://raw.githubusercontent.com/ahoyahoy/sgp-templates/f/create-topic/img/01.png'},
            {img: 'https://raw.githubusercontent.com/ahoyahoy/sgp-templates/f/create-topic/img/02.png'},
        ],
    },
    {
        title: 'Broken bizHub 1762 in Berlin',
        date: 'Mon, 21 Jul at 16:00',
        imgs: [
            {img: 'https://raw.githubusercontent.com/ahoyahoy/sgp-templates/f/create-topic/img/01.png'},
            {img: 'https://raw.githubusercontent.com/ahoyahoy/sgp-templates/f/create-topic/img/02.png'},
            {img: 'https://raw.githubusercontent.com/ahoyahoy/sgp-templates/f/create-topic/img/01.png'},
            {img: 'https://raw.githubusercontent.com/ahoyahoy/sgp-templates/f/create-topic/img/02.png'},
            {img: 'https://raw.githubusercontent.com/ahoyahoy/sgp-templates/f/create-topic/img/02.png'},
        ],
    },
]
</script>

<template>
    <div class="app_container desktop">
        <SidebarNav />

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
                    <div class="frame">
                        <div class="box">
                            <TabNav kind="secondary" type="position-3" :tabs="['Image from sessions', 'Image from computer']" :activeTab="0">
                                <template #right>
                                    <CloseIcon></CloseIcon>
                                </template>
                            </TabNav>
                            <div class="box-content">
                                <TextInput type="full" placeholder="Search by session names">
                                    <template #icon>
                                        <SearchIcon />
                                    </template>
                                </TextInput>
                                <div class="topics-box">
                                    <div class="topic" v-for="item, i in topic" :key="i">
                                        <div class="imgs-header">
                                            <div class="title">{{ item.title }}</div>
                                            <div class="date">{{ item.date }}</div>
                                        </div>
                                        <div class="imgs-box">
                                            <template v-for="img, i in item.imgs" :key="i">
                                                <img class="image" :src="img.img" alt="">
                                            </template>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="frame">
                        <div class="box load">
                            <TabNav kind="secondary" type="position-3" :tabs="['Image from sessions', 'Image from computer']" :activeTab="1">
                                <template #right>
                                    <CloseIcon></CloseIcon>
                                </template>
                            </TabNav>
                            <div class="box-content">
                               <div class="load-box">
                                    <ImgIcon />
                                    <p>Drag & drop your image here</p>
                               </div>
                            </div>
                        </div>
                    </div>
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

.frame {
    display: flex;
    flex: 0 0 441px;
    align-items: center;
    justify-content: center;
    background-color: var(--color-purple-lighten-4);
    border-radius: var(--border-radius-4);
}

.box {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-3);
    width: 559px;
    flex: 0 0 559px;
    height: 349px;
    background-color: var(--color-white-base);
    border: 1px solid var(--color-purple-lighten-3);
    border-radius: var(--border-radius-4);
    box-shadow: 0px 12px 24px rgba(33, 33, 44, 0.1);
}

.box-content {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-2);
    padding: 0 var(--spacing-3);
}

.topics-box {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-3);
    overflow-y: auto;
    flex: 0 0 220px;
}

.topic {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-1);
}

.imgs-header {
    display: flex;
    justify-content: space-between;
}

.title {
    font-size: var(--size-text-small);
    line-height: var(--line-hight-1);
    font-weight: var(--font-weight-semibold);
}

.date {
    font-size: var(--size-text-small);
}

.imgs-box {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-0);
}
.image {
    border-radius: var(--border-radius-5);
    width: 98px;
    height: auto;
}

.load {
    height: 368px;
}
.load-box {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: var(--spacing-0);
    background-color: var(--color-blue-lighten-2);
    border: 1.5px dashed var(--color-blue-base);
    border-radius: var(--border-radius-1);
    width: 527px;
    height: 291px;
}
</style>

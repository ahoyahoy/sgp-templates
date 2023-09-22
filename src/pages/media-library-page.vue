<script setup>
import img1 from '../../img/01.png'
import img2 from '../../img/02.png'

const media = [
    {
        img: img1,
        name: 'INC0000005298815',
        date: '23.04.2023, 09:32',

    },
    {
        img: img2,
        name: 'INC0000005298815',
        date: '23.04.2023, 09:32',

    },
    {
        img: img1,
        name: 'INC0000005298815',
        date: '23.04.2023, 09:32',
        play: true,

    },
    {
        name: 'INC0000005298815',
        date: '23.04.2023, 09:32',
        forum: true,

    },
    {
        name: 'INC0000005298815',
        date: '23.04.2023, 09:32',
        volume: true,

    },
    {
        name: 'INC0000005298815',
        date: '23.04.2023, 09:32',
        transcript: true,

    },
    {
        img: img1,
        name: 'INC0000005298815',
        date: '23.04.2023, 09:32',

    },
    {
        img: img2,
        name: 'INC0000005298815',
        date: '23.04.2023, 09:32',

    },
    {
        img: img1,
        name: 'INC0000005298815',
        date: '23.04.2023, 09:32',
        play: true,

    },
    {
        img: img1,
        name: 'INC0000005298815',
        date: '23.04.2023, 09:32',

    },
    {
        img: img2,
        name: 'INC0000005298815',
        date: '23.04.2023, 09:32',

    },
    {
        img: img1,
        name: 'INC0000005298815',
        date: '23.04.2023, 09:32',
        play: true,

    },
    {
        name: 'INC0000005298815',
        date: '23.04.2023, 09:32',
        forum: true,

    },
    {
        name: 'INC0000005298815',
        date: '23.04.2023, 09:32',
        volume: true,

    },
    {
        name: 'INC0000005298815',
        date: '23.04.2023, 09:32',
        transcript: true,

    },
    {
        img: img1,
        name: 'INC0000005298815',
        date: '23.04.2023, 09:32',

    },
    {
        img: img2,
        name: 'INC0000005298815',
        date: '23.04.2023, 09:32',

    },
    {
        img: img1,
        name: 'INC0000005298815',
        date: '23.04.2023, 09:32',
        play: true,

    },
    {
        img: img1,
        name: 'INC0000005298815',
        date: '23.04.2023, 09:32',

    },
    {
        img: img2,
        name: 'INC0000005298815',
        date: '23.04.2023, 09:32',

    },
    {
        img: img1,
        name: 'INC0000005298815',
        date: '23.04.2023, 09:32',
        play: true,

    },
    {
        name: 'INC0000005298815',
        date: '23.04.2023, 09:32',
        forum: true,

    },
    {
        name: 'INC0000005298815',
        date: '23.04.2023, 09:32',
        volume: true,

    },
    {
        name: 'INC0000005298815',
        date: '23.04.2023, 09:32',
        transcript: true,

    },
    {
        img: img1,
        name: 'INC0000005298815',
        date: '23.04.2023, 09:32',

    },
    {
        img: img2,
        name: 'INC0000005298815',
        date: '23.04.2023, 09:32',

    },
    {
        img: img1,
        name: 'INC0000005298815',
        date: '23.04.2023, 09:32',
        play: true,

    },
]
</script>

<template>
    <div class="app_container desktop">
        <SidebarNav :pro="true" />

        <div class="content">
            <AppHeader title="Media Library">
                <template #left>
                    <div class="search-group">
                        <SelectBox class="select-media" :options="['Tags']" label="Country" />
                        <TextInput placeholder="Search by tags in Media Library">
                            <template #icon>
                                <SearchIcon />
                            </template>
                        </TextInput>
                    </div>
                </template>
                <template #right>
                    <div class="buttons">
                        <div class="btn-left">
                            <IconButton kind="basic" type="ghost">
                                <HamburgerIcon />
                            </IconButton>
                        </div>
                        <div class="btn-right active">
                            <IconButton kind="basic" type="ghost">
                                <CardsIcon />
                            </IconButton>
                        </div>
                    </div>
                </template>
            </AppHeader>

            <TabNav type="badge"
                :tabs="['All', 'Videos', 'Images', 'Audios', 'Transcriptions', 'Chats', 'Favorite', 'Shared']"
                :activeTab="0"
                :tabBadges="[24, 2, 2, 2, 2, 0, 0, 1]"
            />
            <div class="body">
                <div class="container">
                    <div class="media">
                        <div class="media-item" v-for="item, i in media" :key="i">
                            <div class="overview" :style="{ backgroundImage: 'url(' + item.img + ')' }">
                                <PlayIcon class="folder-icon" v-if="item.play" />
                                <ForumIcon class="folder-icon" v-if="item.forum" />
                                <VolumeIcon class="folder-icon" v-if="item.volume" />
                                <TranscriptIcon class="folder-icon" v-if="item.transcript" />
                                <div class="overlay">
                                    <StarIcon class="star" />
                                    <OfferIcon class="offer" />
                                    <DotsIcon class="more" />
                                </div>
                            </div>
                            <div class="title">
                                <div class="name">
                                    {{ item.name }}
                                </div>
                                <div class="date">
                                    {{ item.date }}
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

.content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    min-width: 0;
}

.search-group {
    display: flex;
}
.select-media {
    border-radius: var(--border-radius-3) 0 0 var(--border-radius-3);
}


.buttons {
    display: flex;
    align-items: center;
    border-radius: var(--border-radius-3);
    border: 1px solid var(--color-grey-lighten-3);
}

.btn-left {
    border-right: 1px solid var(--color-grey-lighten-3);
}

.btn-left >>> .type-ghost.kind-basic {
    border-radius: var(--border-radius-3) 0 0 var(--border-radius-3);
}

.btn-right.active {
    background-color: var(--color-purple-lighten-4);
    border-radius: 0 var(--border-radius-3) var(--border-radius-3) 0;
}
.body {
    padding: var(--spacing-5);
    overflow: auto;
    flex: 1;
}
.body .container {
    display: flex;
    flex-direction: column;
    max-width: 1175px;
    margin: 0 auto;
}

.media {
    display: flex;
    gap: var(--spacing-3);
    flex-wrap: wrap;
}
.media-item {
    display: flex;
    flex-direction: column;
    border-radius: var(--border-radius-3);
    border: 1px solid var(--color-purple-lighten-4);
}

.overview {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 180px;
    height: 130px;
    border-bottom: 1px solid var(--color-purple-lighten-4);
    background: var(--color-purple-lighten-5);
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: var(--border-radius-3) var(--border-radius-3) 0 0;
}

.folder-icon {
    position: absolute;
}

.media-item:hover .overlay {
    opacity: 0.8;
}

.overlay {
    position: relative;
    border-radius: var(--border-radius-3) var(--border-radius-3) 0px 0px;
    background: var(--color-grey-lighten-1);
    width: 100%;
    height: 100%;
    opacity: 0;
}

.star,
.offer,
.more {
    position: absolute;
}

.star {
    top: var(--spacing-2);
    left: var(--spacing-2);
}

.offer {
    top: var(--spacing-2);
    left: 42px;
}

.more {
    color: var(--color-white-base);
    top: var(--spacing-2);
    right: var(--spacing-2);
}
.title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 var(--spacing-2);
    width: 180px;
    height: 50px;
}

.name {
    font-size: var(--size-text-small);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-hight-1);
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

.date {
    color: var(--color-grey-lighten-2);
    font-size: var(--size-text-small);
    line-height: var(--line-hight-1);
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

.text-input.with-icon >>> input {
    border-radius: 0 var(--border-radius-3) var(--border-radius-3) 0;
    border-left: none;
}
</style>

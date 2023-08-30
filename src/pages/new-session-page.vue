<script setup>
import img1 from '../../img/01.png'
import img2 from '../../img/02.png'

const videos = [
    {
        title: '11912_assistant_video_WEBM_1606813617489',
        time: '10 min 51 sec',
        date: '23.04.2020, 09:32',
    },
    {
        title: '11912_assistant_video_WEBM_1606813617489',
        time: '10 min 51 sec',
        date: '23.04.2020, 09:32',
    },
    {
        title: '11912_assistant_video_WEBM_1606813617489',
        time: '10 min 51 sec',
        date: '23.04.2020, 09:32',
    },
]
const audios = [
    {
        title: '11912_assistant_audio_MP3_1606813617489',
        time: '10 min 51 sec',
        date: '23.04.2020, 09:32',
    },
    {
        title: '11912_assistant_audio_MP3_1606813617489',
        time: '10 min 51 sec',
        date: '23.04.2020, 09:32',
    },
    {
        title: '11912_assistant_audio_MP3_1606813617489',
        time: '10 min 51 sec',
        date: '23.04.2020, 09:32',
    },
]
const transcriptions = [
    {
        title: '11912_assistant_transcription_TXT_1606813617489',
    },
    {
        title: '11912_assistant_transcription_TXT_1606813617489',
    },
    {
        title: '11912_assistant_transcription_TXT_1606813617489',
    },
]
const images = [
    {
        imgs: [
            {img: img1},
            {img: img2},
            {img: img1},
            {img: img2},
            {img: img2},
            {img: img2},
            {img: img2},
            {img: img1},
        ],
    },

]
const feedback = [
    {
        text: 'I need to plan onsite visit, the problem cant be identified or resolved',
    },
    {
        text: 'I need to manage offline action before follow-up call ',
    },
]
const saved = [
    {
        title: 'Time saved',
        value: '02 h 31 min',
    },
    {
        title: 'Distance saved',
        value: '213 Km',
    },
    {
        title: 'CO2 saved',
        value: '0.39965 g',
    },
]
</script>

<template>
    <div class="helper-containers">
        <div class="helper-container">
            <div class="modal-detail">
                <div class="new-session-head">
                    <div class="new-session-title">
                        <TextBox>
                            <template #main-text>
                                <BaseText kind="primary-light-1">
                                    Mon, 21 Jul at 08:00
                                </BaseText>
                            </template>
                            <template #right-icon>
                                <IconButton kind="mono" type="ghost">
                                    <DotsIcon />
                                </IconButton>
                                <IconButton kind="mono" type="ghost">
                                    <CloseIcon />
                                </IconButton>
                            </template>
                        </TextBox>
                        <div>
                            <BaseText kind="h2">
                                My new session
                            </BaseText>
                            <BaseText kind="primary-light-2">
                                158-871-171-165
                            </BaseText>
                        </div>
                    </div>
                    <BaseButton block>
                        Connect
                    </BaseButton>
                </div>
                <TabNav kind="secondary" :tabs="['Members', 'Media Library', 'Feedback']" :activeTab="0" />
                <div class="content">
                    <div class="new-session">
                        <div class="client">
                            <BaseText kind="subtitle">
                                Client
                            </BaseText>
                            <div class="contact">
                                <div class="email">
                                    <TextBox>
                                        <template #left-icon>
                                            <InitialsIcon>T</InitialsIcon>
                                        </template>
                                        <template #main-text>
                                            <BaseText kind="primary-bold">
                                                Tomas Anderson
                                            </BaseText>
                                        </template>
                                        <template #secondary-text>
                                            <BaseText kind="small-green">
                                                Notifications sent to email and phone
                                            </BaseText>
                                        </template>
                                        <template #right-icon>
                                            <IconButton kind="mono" type="ghost">
                                                <DotsIcon />
                                            </IconButton>
                                        </template>
                                    </TextBox>
                                    <div class="divider"></div>
                                    <TextBox>
                                        <template #left-icon>
                                            <div class="center">
                                                <LinkIcon />
                                            </div>
                                        </template>
                                        <template #main-text>
                                            <BaseText>
                                                Show connection link
                                            </BaseText>
                                        </template>
                                        <template #right-icon>
                                            <IconButton kind="mono" type="ghost">
                                                <ArrowIcon />
                                            </IconButton>
                                        </template>
                                    </TextBox>
                                    <TextBox>
                                        <template #left-icon>
                                            <div class="center">
                                                <QrIcon />
                                            </div>
                                        </template>
                                        <template #main-text>
                                            <BaseText>
                                                Show connection QR code
                                            </BaseText>
                                        </template>
                                        <template #right-icon>
                                            <IconButton kind="mono" type="ghost">
                                                <ArrowIcon />
                                            </IconButton>
                                        </template>
                                    </TextBox>
                                </div>
                            </div>
                        </div>
                        <div class="assistant">
                            <BaseText kind="subtitle">
                                Assistant
                            </BaseText>
                            <div class="contact">
                                <div class="email">
                                    <TextBox>
                                        <template #left-icon>
                                            <InitialsIcon>J</InitialsIcon>
                                        </template>
                                        <template #main-text>
                                            <BaseText kind="primary-bold">
                                                John Anderson (You)
                                            </BaseText>
                                        </template>
                                    </TextBox>
                                    <div class="divider"></div>
                                    <TextBox>
                                        <template #left-icon>
                                            <div class="center">
                                                <LinkIcon />
                                            </div>
                                        </template>
                                        <template #main-text>
                                            <BaseText>
                                                Show connection link
                                            </BaseText>
                                        </template>
                                        <template #right-icon>
                                            <IconButton kind="mono" type="ghost">
                                                <ArrowIcon />
                                            </IconButton>
                                        </template>
                                    </TextBox>
                                    <TextBox>
                                        <template #left-icon>
                                            <div class="center">
                                                <QrIcon />
                                            </div>
                                        </template>
                                        <template #main-text>
                                            <BaseText>
                                                Show connection QR code
                                            </BaseText>
                                        </template>
                                        <template #right-icon>
                                            <IconButton kind="mono" type="ghost">
                                                <ArrowIcon />
                                            </IconButton>
                                        </template>
                                    </TextBox>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="helper-container">
            <div class="modal-detail">
                <div class="new-session-head">
                    <div class="new-session-title">
                        <TextBox>
                            <template #main-text>
                                <BaseText kind="primary-light-1">
                                    Mon, 21 Jul at 08:00
                                </BaseText>
                            </template>
                            <template #right-icon>
                                <IconButton kind="mono" type="ghost">
                                    <DotsIcon />
                                </IconButton>
                                <IconButton kind="mono" type="ghost">
                                    <CloseIcon />
                                </IconButton>
                            </template>
                        </TextBox>
                        <div>
                            <BaseText kind="h2">
                                My new session
                            </BaseText>
                            <BaseText kind="primary-light-2">
                                158-871-171-165
                            </BaseText>
                        </div>
                    </div>
                    <BaseButton block>
                        Connect
                    </BaseButton>
                </div>
                <TabNav kind="secondary" :tabs="['Members', 'Media Library', 'Feedback']" :activeTab="1" />
                <div class="content">
                    <div class="new-session">
                        <div class="media-box">
                            <BaseText kind="subtitle">
                                Videos
                            </BaseText>
                            <div class="media">
                                <div class="media-item" v-for="item, i in videos" :key="i">
                                    <VideoIcon class="icon" />
                                    <div class="media-right">
                                        <div class="title">{{ item.title }}</div>
                                        <div class="subtitle">
                                            <div class="time">{{ item.time }}</div>
                                            <div class="middle-dot"></div>
                                            <div class="date">{{ item.date }}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="media-box">
                            <BaseText kind="subtitle">
                                Images
                            </BaseText>
                            <div class="imgs-box" v-for="item, i in images" :key="i">
                                <template v-for="img, i in item.imgs" :key="i">
                                    <div v-if="i === item.imgs.length - 1" class="image-layout">
                                        <img class="image" :src="img.img" alt="">
                                        <div class="layout">+23</div>
                                    </div>
                                    <img v-else class="image" :src="img.img" alt="">
                                </template>
                            </div>
                        </div>
                        <div class="media-box">
                            <BaseText kind="subtitle">
                                Audios
                            </BaseText>
                            <div class="media">
                                <div class="media-item" v-for="item, i in audios" :key="i">
                                    <AudioIcon class="icon" />
                                    <div class="media-right">
                                        <div class="title">{{ item.title }}</div>
                                        <div class="subtitle">
                                            <div class="time">{{ item.time }}</div>
                                            <div class="middle-dot"></div>
                                            <div class="date">{{ item.date }}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="media-box">
                            <BaseText kind="subtitle">
                                Transcriptions
                            </BaseText>
                            <div class="media">
                                <div class="media-item" v-for="item, i in transcriptions" :key="i">
                                    <TranscriptionsIcon class="icon" />
                                    <div class="media-right">
                                        <div class="title">{{ item.title }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="helper-container">
            <div class="modal-detail">
                <div class="new-session-head">
                    <div class="new-session-title">
                        <TextBox>
                            <template #main-text>
                                <BaseText kind="primary-light-1">
                                    Mon, 21 Jul at 08:00
                                </BaseText>
                            </template>
                            <template #right-icon>
                                <IconButton kind="mono" type="ghost">
                                    <DotsIcon />
                                </IconButton>
                                <IconButton kind="mono" type="ghost">
                                    <CloseIcon />
                                </IconButton>
                            </template>
                        </TextBox>
                        <div>
                            <BaseText kind="h2">
                                My new session
                            </BaseText>
                            <BaseText kind="primary-light-2">
                                158-871-171-165
                            </BaseText>
                        </div>
                    </div>
                    <BaseButton block>
                        Connect
                    </BaseButton>
                </div>
                <TabNav kind="secondary" :tabs="['Members', 'Media Library', 'Feedback']" :activeTab="2" />
                <div class="content">
                    <div class="new-session">
                        <div class="feedback">
                            <div class="feedback-box green">
                                <div class="feedback-box-header">
                                    <div class="left">
                                        <p class="title">Client</p>
                                        <p>Session was helpful</p>
                                    </div>
                                    <div class="right">
                                        <HappyemojiIcon />
                                    </div>
                                </div>
                            </div>
                            <div class="feedback-box red">
                                <div class="feedback-box-header">
                                    <div class="left">
                                        <p class="title">Assistant</p>
                                        <p>Session was not helpful</p>
                                    </div>
                                    <div class="right">
                                        <SademojiIcon />
                                    </div>
                                </div>
                                <div class="feedback-box-body">
                                    <div>
                                        I had some troubles with the connection. It was probably the reason why I cannot communicate well with the client.
                                    </div>
                                    <div class="list">
                                        <div class="list-item" v-for="item, i in feedback" :key="i">
                                            <WarningIcon class="list-icon" />
                                            <div>{{ item.text }}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="info-box">
                            <div class="question">Did you know that?</div>
                            <div class="text">
                                By using the Aire Link, you save not only your time, but also our environment.
                            </div>
                            <div class="saved">
                                <div class="saved-item" v-for="item, i in saved" :key="i">
                                    <div class="saved-value">{{ item.value }}</div>
                                    <div class="saved-title">{{ item.title }}</div>
                                </div>
                            </div>
                            <img src="../../img/map1.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="helper-container">
            <div class="modal-detail">
                <div class="alerts">
                    <AlertBox type="success" shadow="yes">
                        <template #left-icon>
                            <DoneIcon class="alert-icon" />
                        </template>
                        <template #text>
                            Success message
                        </template>
                        <template #right-icon>
                            <CloseIcon />
                        </template>
                    </AlertBox>
                    <AlertBox type="error" shadow="yes">
                        <template #left-icon>
                            <ErrorIcon class="alert-icon" />
                        </template>
                        <template #text>
                            Error message
                        </template>
                        <template #right-icon>
                            <CloseIcon />
                        </template>
                    </AlertBox>
                    <AlertBox type="warning" shadow="yes">
                        <template #left-icon>
                            <Warning1Icon class="alert-icon" />
                        </template>
                        <template #text>
                            Warning message
                        </template>
                        <template #right-icon>
                            <CloseIcon />
                        </template>
                    </AlertBox>
                    <AlertBox type="info" shadow="yes">
                        <template #left-icon>
                            <InfoIcon class="alert-icon" />
                        </template>
                        <template #text>
                            Info message
                        </template>
                        <template #right-icon>
                            <CloseIcon />
                        </template>
                    </AlertBox>

                    <AlertBox type="success">
                        <template #left-icon>
                            <DoneIcon class="alert-icon" />
                        </template>
                        <template #text>
                            Success message
                        </template>
                        <template #right-icon>
                            <CloseIcon />
                        </template>
                    </AlertBox>
                    <AlertBox type="error">
                        <template #left-icon>
                            <ErrorIcon class="alert-icon" />
                        </template>
                        <template #text>
                            Error message
                        </template>
                        <template #right-icon>
                            <CloseIcon />
                        </template>
                    </AlertBox>
                    <AlertBox type="warning">
                        <template #left-icon>
                            <Warning1Icon class="alert-icon" />
                        </template>
                        <template #text>
                            Warning message
                        </template>
                        <template #right-icon>
                            <CloseIcon />
                        </template>
                    </AlertBox>
                    <AlertBox type="info">
                        <template #left-icon>
                            <InfoIcon class="alert-icon" />
                        </template>
                        <template #text>
                            Info message
                        </template>
                        <template #right-icon>
                            <CloseIcon />
                        </template>
                    </AlertBox>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
* {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
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
    width: 465px;
    height: 762px;
    flex: 0 0 465px;
    display: flex;
    flex-direction: column;
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

.content {
    flex: 1;
    overflow-y: auto;
    padding: 0 var(--spacing-4);
}

.contact {
    display: flex;
    flex-direction: column;
    border: 1px solid var(--color-input-border);
    border-radius: var(--border-radius-4);
}

.email {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: var(--spacing-3);
}

.center {
    width: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.divider {
    width: 381px;
    position: relative;
}

.divider::before {
    content: "";
    display: block;
    height: 1px;
    width: 381px;
    border-bottom: 1px solid var(--color-divider);
    position: absolute;
    top: 50%;
}

.client,
.assistant {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-2);
}

.new-session-head {
    height: 206px;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-5);
    padding: 0 var(--spacing-4);
    padding-top: var(--spacing-3);
}

.new-session-title {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-3);
}

.new-session {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-5);
    padding: var(--spacing-4) 0;
}

.media-box {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-1);
}
.media {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-2);
}

.media-right {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

.media-item {
    display: flex;
    align-items: center;
    gap: var(--spacing-2);
}

.media-item .icon {
    min-width: 32px;
}

.media-item .title {
    line-height: var(--line-hight-2);
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

.media-item .subtitle {
    display: flex;
    align-items: center;
    gap: var(--spacing-0);
    line-height: var( --line-hight-1);
    color: var(--color-grey-lighten-1);
}

.media-item .time,
.media-item .date {
    font-size: var(--size-text-small);
}

.middle-dot {
    width: 2px;
    height: 2px;
    background: var(--color-grey-lighten-3);
    border-radius: 50%;
}

.imgs-box {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-0);
}
.image {
    border-radius: var(--border-radius-5);
    width: 96px;
    height: auto;
}

.image-layout {
    position: relative;
    height: 75.63px;
}
.layout {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    top: 0;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    background-color: rgba(33, 33, 44, 0.50);
    height: 100%;
    width: 100%;
    border-radius: var(--border-radius-5);
}

.feedback {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-3);
}
.feedback-box {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-3);
    border-radius: var(--border-radius-5);
    padding: var(--spacing-4);
}

.feedback-box.green {
    background-color: var(--color-green-lighten-2);
}
.feedback-box.red {
    background-color: var(--color-red-lighten-2);
}

.feedback-box-header {
    display: flex;
    align-items: center;
}
.feedback-box.green .left,
.feedback-box.red .left {
    display: flex;
    gap: var(--spacing-1);
    flex: 1;
    color: var(--color-green-darken-1);
}
.feedback-box.red .left {
    color: var(--color-red-darken-1);
}
.feedback-box.green .title {
    font-weight: var(--font-weight-bold);
}
.feedback-box.red .title {
    font-weight: var(--font-weight-bold);
}

.feedback-box-body {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-3);
    line-height: var(--line-hight-2);
}

.list {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-3);
}

.list-item {
    display: flex;
    gap: var(--spacing-2);
}

.list-icon {
    min-width: 16px;
}

.info-box {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-3);
}

.question {
    font-size: var(--size-text-small);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-hight-1);
    letter-spacing: 0.6px;
    text-transform: uppercase;
}

.info-box .text {
    line-height: var(--line-hight-2);
}

.saved {
    display: flex;
    gap: var(--spacing-5);
}

.saved-item {
    display: flex;
    flex-direction: column;
}

.saved-value {
    font-size: var(--size-h4);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-hight-2);
}

.saved-title {
    line-height: var(--line-hight-2);
    color: var(--color-grey-lighten-1);
}

.alerts {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-3);
    align-items: center;
    padding: var(--spacing-4) 0;
}
.alert-icon {
    min-width: 24px;
    min-height: 24px;
}
</style>

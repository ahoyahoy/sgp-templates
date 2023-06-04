<script setup>
defineProps(['summary', 'clients'])

const summary = [
    {
        title: 'Number of calls total',
        number: 42,
    },
    {
        title: 'Number of calls average',
        number: 25,
        display: 'none',
    },
    {
        title: 'Call duration total',
        number: '03 h 24 min',
    },
    {
        title: 'Call duration average',
        number: '02 h 45 min',
    },
    {
        title: 'Number of feedback total',
        number: 39,
        display: 'none',
    },
    {
        title: 'Resolved issues',
        number: 23,
        color: 'green',
        display: 'none',
    },
    {
        title: 'Unresolved issues',
        number: 16,
        color: 'red',
        display: 'none',
    },
]

const clients = [
    {
        initials: 'P',
        name: 'Peter Davis',
        calls: 21,
        resolved: 2,
    },
    {
        initials: 'N',
        name: 'Norman Davis',
        calls: 16,
        resolved: 10,
    },
    {
        initials: 'A',
        name: 'Anthony Parker',
        calls: 6,
        resolved: 8,
    },
    {
        initials: 'T',
        name: 'Tomas May',
        calls: 5,
        resolved: 1,
    },
    {
        initials: 'P',
        name: 'Paul Black',
        calls: 5,
        resolved: 0,
    },
    {
        initials: 'D',
        name: 'Danny Thomas',
        calls: 5,
        resolved: 0,
    },
]

const unresolved = [
    {
        title: 'The call ended unexpectedly',
        times: 12,
        percent: 90,
    },
    {
        title: 'The other party heard no sound',
        times: 10,
        percent: 50,
    },
    {
        title: 'The sound was distorted',
        times: 8,
        percent: 25,
    },
    {
        title: 'I heard an echo during the call',
        times: 2,
        percent: 10,
    },
    {
        title: 'People had trouble connecting to the call',
        times: 1,
        percent: 5,
    },
    {
        title: 'Others issues',
        times: 1,
        percent: 5,
    },
]
</script>

<template>

    <div class="app_container desktop">
        <SidebarNav />

        <div class="content">
            <AppHeader title="Insights">
                <template #left>
                    <SelectBox :options="['This month', 'This week', 'Today']" />
                </template>
            </AppHeader>

            <div class="body">
                <div class="container">
                    <div class="summary-box">
                        <div class="summary" v-for="item, i in summary" :key="i">
                            <div class="title">{{ item.title }}</div>
                            <div  :class="['number', item.color]">{{ item.number }}</div>
                        </div>
                    </div>
                    <div class="chart-box">
                        <div :class="['chart', item.display]" v-for="item, i in summary" :key="i">
                            <div class="chart-head">
                                <div class="title">{{ item.title }}: </div>
                                <div  :class="['number', item.color]">{{ item.number }}</div>
                            </div>
                            <img src="../../img/chart.png" alt="">
                        </div>
                        <div class="feedback-box">
                            <div class="chart-head">
                                <div class="title">Feedback from assistant</div>
                                <div class="feedback-data">
                                    <div class="data-item">
                                        <DotIcon class="green" />
                                        {{ summary[5].number }} of {{ summary[5].title }}
                                    </div>
                                    <div class="data-item">
                                        <DotIcon class="red" />
                                        {{ summary[6].number }} of {{ summary[6].title }}
                                    </div>
                                </div>
                            </div>
                            <img src="../../img/feedback.png" alt="">
                        </div>
                    </div>

                    <div class="data-tables">
                        <div class="clients">
                            <BaseText class="title" kind="h2">
                                Clients
                            </BaseText>
                            <div class="clients-table">
                                <div class="clients-header">
                                    <BaseText kind="subtitle">
                                        Client ({{ clients.length }})
                                    </BaseText>
                                    <BaseButton class="client-button" type="ghost" kind="mono-left">
                                        <BaseText kind="subtitle">
                                            Number of calls
                                            <ArrowIcon class="arrow" />
                                        </BaseText>
                                    </BaseButton>
                                    <BaseText kind="subtitle">
                                        Number of resolved
                                    </BaseText>
                                </div>
                                <div class="client" v-for="(item, i) in clients" :key="i" :class="{ 'last-item': i === clients.length - 1 }">
                                    <div class="name">
                                        <InitialsIcon>{{ item.initials }}</InitialsIcon>
                                        <div>{{ item.name }}</div>
                                    </div>
                                    <div class="calls">{{ item.calls }}</div>
                                    <div class="resolved">{{ item.resolved }}</div>
                                </div>
                            </div>
                        </div>

                        <div class="unresolved">
                            <BaseText class="title" kind="h2">
                                Unresolved issues
                                <InfoIcon />
                            </BaseText>
                            <div class="unresolved-table">
                                <div class="unresolved-header">
                                    <BaseText kind="subtitle">
                                        Issue
                                    </BaseText>
                                    <BaseText kind="subtitle">
                                        Frequency
                                    </BaseText>
                                </div>
                                <div class="unresolved-item" v-for="(item, i) in unresolved" :key="i">
                                    <div class="item-header">
                                        <div class="item-title">{{ item.title }}</div>
                                        <div>{{ item.times }} times</div>
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar" :style="{ width: item.percent + '%' }" :aria-valuenow="item.percent" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="map">
                        <BaseText class="title" kind="h2">
                            Clients locations
                        </BaseText>
                        <img src="../../img/map.png" alt="">
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

.form-field[data-v-21865748] {
    display: flex;
    flex-direction: row;
    gap: 22px;
}

select[data-v-510834af] {
    height: 36px;
    flex: auto;
    padding: 0 var(--spacing-2);
    border: 1px solid var(--color-input-border);
    border-radius: var(--border-radius-3);
    color: var(--color-text-primary);
}

.body {
    padding: 0 var(--spacing-5);
    overflow: auto;
}

.body .container {
    display: flex;
    flex-direction: column;
    gap: 64px;
    max-width: 1112px;
    margin: 0 auto;
}


.summary-box {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-3) var(--spacing-5);
}

.summary {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: var(--spacing-1);
    border: 1px solid var(--color-border);
    border-radius: var(--border-radius-5);
    padding: 0 var(--spacing-3);
    height: 96px;
    flex: 0 0 254px;;
    width: 254px;
}

.summary .title {
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-hight-2);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.summary .number {
  font-size: var(--size-h1);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-hight-3);
}

.green {
    color: var(--color-green-base);
}
.red {
    color: var(--color-red-base);
}

.chart.none {
    display: none;
}

.chart-box {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-6);
}

.chart {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-1);
}
.chart-head {
    display: flex;
    align-items: center;
    gap: 5px;
}

.chart-head .title {
    font-size: var(--size-h2);
    line-height: var(--line-hight-2);
    font-weight: var(--font-weight-semibold);
}
.chart-head .number {
    font-size: var(--size-h2);
    line-height: var(--line-hight-2);
}

.feedback-box {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-1);
}

.feedback-data {
    display: flex;
    gap: var(--spacing-4);
    transform: translateX(50%);
    text-transform: lowercase;
}

.data-item {
    display: flex;
    align-items: center;
    gap: var(--spacing-1);
}

.data-tables {
    display: flex;
    gap: 32px;
}

.clients,
.unresolved {
    max-width: 50%;
    width: 100%;
}

.clients .title,
.unresolved .title {
    height: 60px;
    display: flex;
    align-items: center;
    gap: var(--spacing-0);
}

.clients-table {
  width: 100%;
  border-collapse: collapse;
}

.clients-header,
.client {
  display: flex;
}

.clients-header {
    align-items: center;
    padding: 0 var(--spacing-3);
    border-bottom: 1px solid var(--color-grey-lighten-3);
}

.clients-header p {
    /* padding: var(--spacing-2) var(--spacing-3); */
    padding-top: 0;
    width: 33.33%;
}

.arrow {
    color: var(--color-purple-base);
    min-width: 16px;
}

.clients-header p:nth-child(3) {
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

.client-button {
    width: 33.33%;
}
.client-button p {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
}

.client > div {
    width: 33.33%;
    padding: 0 var(--spacing-3);
    height: 59px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.client {
    border-bottom: 1px solid var(--color-border);
}

.client .name {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: var(--spacing-2);
}

.calls,
.resolved {
  text-align: center;
  font-weight: var(--font-weight-semibold);
  font-size: var(--size-h4);
}

.client.last-item {
  border-bottom: none;
}

.unresolved .title svg {
    color: var(--color-btn-info);;
}

.unresolved-header {
    display: flex;
    align-items: center;
    padding: 0 var(--spacing-3);
    height: 38px;
    border-bottom: 1px solid var(--color-grey-lighten-3);
}
.unresolved-header p:last-child {
    text-align: right;
}

.unresolved-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 var(--spacing-3);
    height: 60px;
    gap: var(--spacing-1);
}

.item-header {
    display: flex;
    gap: var(--spacing-0);
}
.item-header .item-title {
    flex: 1;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.progress {
    height: 4px;
    border-radius: var(--border-radius-1);
    background-color: var(--color-grey-lighten-4);
}
.progress-bar {
    height: 100%;
    white-space: nowrap;
    background-color: var(--color-purple-base);
    border-radius: inherit
}

.map {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-4);
    padding-bottom: var(--spacing-6);
}
</style>

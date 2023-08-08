<script setup>
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
    <div class="helper-containers">
        <div class="helper-container mobile-s">
            <div class="modal-detail">
                <MobileHeader title="Insights">
                    <template #left>
                        <IconButton type="ghost">
                            <HamburgerIcon />
                        </IconButton>
                    </template>
                    <template #right>
                        <SelectBox :options="['This month', 'This week', 'Today']" />
                    </template>
                </MobileHeader>
                <div class="body">
                    <div class="summary-box">
                        <div class="summary" v-for="item, i in summary" :key="i">
                            <div class="title">{{ item.title }}</div>
                            <div  :class="['number', item.color]">{{ item.number }}</div>
                        </div>
                    </div>
                    <div class="clients">
                        <BaseText class="title" kind="h2">
                            Clients
                        </BaseText>
                        <div class="clients-table">
                            <div class="client-mobile" v-for="(item, i) in clients" :key="i" :class="{ 'last-item': i === clients.length - 1 }">
                                <InitialsIcon>{{ item.initials }}</InitialsIcon>
                                <div class="client-info">
                                    <div class="name">{{ item.name }}</div>
                                    <div class="client-summary">
                                        <div class="calls-mobile">Calls: {{ item.calls }}</div>
                                        <div class="resolved-mobile">Resolved: {{ item.resolved }}</div>
                                    </div>
                                </div>
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
                                    <div class="progress-bar" role="progressbar"
                                    :style="{ width: item.percent + '%' }" :aria-valuenow="item.percent" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="helper-container mobile-l">
            <div class="modal-detail">
                <MobileHeader title="Insights">
                    <template #left>
                        <IconButton type="ghost">
                            <HamburgerIcon />
                        </IconButton>
                    </template>
                    <template #right>
                        <SelectBox :options="['This month', 'This week', 'Today']" />
                    </template>
                </MobileHeader>
                <div class="body">
                    <div class="summary-box">
                        <div class="summary" v-for="item, i in summary" :key="i">
                            <div class="title">{{ item.title }}</div>
                            <div  :class="['number', item.color]">{{ item.number }}</div>
                        </div>
                    </div>
                    <div class="clients">
                        <BaseText class="title" kind="h2">
                            Clients
                        </BaseText>
                        <div class="clients-table">
                            <div class="client-mobile" v-for="(item, i) in clients" :key="i" :class="{ 'last-item': i === clients.length - 1 }">
                                <InitialsIcon>{{ item.initials }}</InitialsIcon>
                                <div class="client-info">
                                    <div class="name">{{ item.name }}</div>
                                    <div class="client-summary">
                                        <div class="calls-mobile">Calls: {{ item.calls }}</div>
                                        <div class="resolved-mobile">Resolved: {{ item.resolved }}</div>
                                    </div>
                                </div>
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
                                    <div class="progress-bar" role="progressbar"
                                    :style="{ width: item.percent + '%' }" :aria-valuenow="item.percent" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="helper-container tablet">
            <div class="modal-detail">
                <MobileHeader title="Insights">
                    <template #left>
                        <IconButton type="ghost">
                            <HamburgerIcon />
                        </IconButton>
                    </template>
                    <template #right>
                        <SelectBox :options="['This month', 'This week', 'Today']" />
                    </template>
                </MobileHeader>
                <div class="body">
                    <div class="summary-box">
                        <div class="summary" v-for="item, i in summary" :key="i">
                            <div class="title">{{ item.title }}</div>
                            <div  :class="['number', item.color]">{{ item.number }}</div>
                        </div>
                    </div>
                    <div class="clients">
                        <BaseText class="title" kind="h2">
                            Clients
                        </BaseText>
                        <div class="clients-header">
                            <BaseText kind="subtitle">
                                Client ({{ clients.length }})
                            </BaseText>
                            <BaseButton class="client-button" type="ghost" kind="mono">
                                <span>Number of calls</span>
                                <ArrowIcon class="arrow" />
                            </BaseButton>
                            <BaseText kind="subtitle">
                                Number of resolved
                            </BaseText>
                        </div>
                        <div class="client" v-for="(item, i) in clients" :key="i" :class="{ 'last-item': i === clients.length - 1 }">
                            <div class="name">
                                <InitialsIcon>{{ item.initials }}</InitialsIcon>
                                <div class="name-text">{{ item.name }}</div>
                            </div>
                            <div class="calls">{{ item.calls }}</div>
                            <div class="resolved">{{ item.resolved }}</div>
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
                                    <div class="progress-bar" role="progressbar"
                                    :style="{ width: item.percent + '%' }" :aria-valuenow="item.percent" aria-valuemin="0" aria-valuemax="100"></div>
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

.body {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-4);
    flex-grow: 1;
    overflow-y: auto;
    padding: var(--spacing-4) var(--spacing-3);
}

.summary-box {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(245px, 1fr));
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

.clients,
.unresolved {
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
    display: flex;
    flex-direction: column;
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
    gap: 0;
}
.client-button span {
    font-size: var(--size-text-small);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-hight-1);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
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


.name {
    font-weight: var(--font-weight-semibold);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: var(--line-hight-2);
}

.name-text {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

.client-info {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: var(--spacing-0);
}
.client-mobile {
    display: flex;
    flex: 0 0 var(--spacing-6);
    align-items: center;
    gap: var(--spacing-2);
    border-bottom: 1px solid var(--color-border);
    font-weight: var(--font-weight-semibold);
}

.client-summary {
    display: flex;
    gap: var(--spacing-2);
}
</style>

<script setup>
import PeopleIcon from '../components/icons/people-icon.vue'

defineProps(['overview'])

const overview = [
    {
        title: 'Current plan',
        text: 'Profesional',
        button: 'Upgrade subscription',
        btnType: 'default',
        btnKind: 'primary',
    },
    {
        title: 'Validity',
        text: '15.12.2020 - 15.12.2021',
    },
    {
        title: 'Number of users',
        text: '5 of 10',
        button: 'Buy more seats',
        btnIcon: PeopleIcon,
        btnType: 'outline',
        btnKind: 'primary',
    },
    {
        title: 'Price per seat',
        text: '€ 360 /year',
    },
    {
        title: 'Total price',
        text: '€ 828 /year',
    },
    {
        title: 'Next payment',
        text: 'January 15th, 2022 ',
    },
]
</script>

<template>
    <div class="app_container desktop">
        <SidebarNav :pro="true" />

        <div class="content">
            <AppHeader title="Subscription to Konica Minolta" />

            <TabNav :tabs="['Overview', 'Payment methods', 'Invoices', 'Users']" :activeTab="0" />

            <div class="body">
                <DataList kind="smaller" :data="overview">
                    <template #left="{ item }">
                        <div class="overview">
                            <div class="title">{{ item.title }}</div>
                            <div class="text">{{ item.text }}</div>
                        </div>
                    </template>
                    <template #right="{ item }">
                        <BaseButton v-if="item.button" :type="item.btnType" :kind="item.btnKind">
                            <template v-if="item.btnIcon">
                                <component :is="item.btnIcon" />
                            </template>
                            {{item.button}}
                        </BaseButton>
                    </template>
                </DataList>
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

.body {
    flex: 1;
    overflow: auto;
}
.overview {
    display: flex;
    gap: var(--spacing-1);
}

.title {
    min-width: 164px;
    max-width: 164px;
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.text {
    font-weight: var(--font-weight-bold);
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
 </style>


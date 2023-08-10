<script setup>
import PeopleIcon from '../components/icons/people-icon.vue'

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
    <div class="helper-containers">
        <div class="helper-container mobile-s">
            <div class="modal-detail">
                <MobileHeader title="Subscription to Konica Minolta">
                    <template #left>
                        <IconButton type="ghost">
                            <HamburgerIcon />
                        </IconButton>
                    </template>
                </MobileHeader>
                <TabNav type="mobile" :tabs="['Overview', 'Payment', 'Invoices', 'Users']" :activeTab="0" />
                <div class="body">
                    <div class="list-item" v-for="item, i in overview" :key="i">
                        <div class="overview">
                            <div class="title">{{ item.title }}</div>
                            <div class="text">{{ item.text }}</div>
                        </div>
                        <BaseButton v-if="item.button" :type="item.btnType" :kind="item.btnKind">
                            <template v-if="item.btnIcon">
                                <component :is="item.btnIcon" />
                            </template>
                            {{item.button}}
                        </BaseButton>
                        <IconButton class="edit-icon" v-else type="ghost">
                            <EditIcon />
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>

        <div class="helper-container mobile-l">
            <div class="modal-detail">
                <MobileHeader title="Subscription to Konica Minolta">
                    <template #left>
                        <IconButton type="ghost">
                            <HamburgerIcon />
                        </IconButton>
                    </template>
                </MobileHeader>
                <TabNav type="mobile" :tabs="['Overview', 'Payment', 'Invoices', 'Users']" :activeTab="0" />
                <div class="body">
                    <div class="list-item" v-for="item, i in overview" :key="i">
                        <div class="overview">
                            <div class="title">{{ item.title }}</div>
                            <div class="text">{{ item.text }}</div>
                        </div>
                        <BaseButton v-if="item.button" :type="item.btnType" :kind="item.btnKind">
                            <template v-if="item.btnIcon">
                                <component :is="item.btnIcon" />
                            </template>
                            {{item.button}}
                        </BaseButton>
                        <IconButton class="edit-icon" v-else type="ghost">
                            <EditIcon />
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
        <div class="helper-container tablet">
            <div class="modal-detail">
                <MobileHeader title="Subscription to Konica Minolta">
                    <template #left>
                        <IconButton type="ghost">
                            <HamburgerIcon />
                        </IconButton>
                    </template>
                </MobileHeader>
                <TabNav type="mobile" :tabs="['Overview', 'Payment', 'Invoices', 'Users']" :activeTab="0" />
                <div class="body">
                    <div class="list-item" v-for="item, i in overview" :key="i">
                        <div class="overview">
                            <div class="title">{{ item.title }}</div>
                            <div class="text">{{ item.text }}</div>
                        </div>
                        <BaseButton v-if="item.button" :type="item.btnType" :kind="item.btnKind">
                            <template v-if="item.btnIcon">
                                <component :is="item.btnIcon" />
                            </template>
                            {{item.button}}
                        </BaseButton>
                        <IconButton class="edit-icon" v-else type="ghost">
                            <EditIcon />
                        </IconButton>
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
    flex: 1;
    overflow: auto;
    flex-direction: column;
    padding: var(--spacing-3);
}

.list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--spacing-3) 0;
    border-bottom: 1px solid var(--color-divider);
}

.overview {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-1);
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

.title {
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

.edit-icon {
    color: var(--color-text-primary);
}

.tablet .overview {
    flex-direction: row;
}
.tablet .title {
    min-width: 164px;
    max-width: 164px;
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
 </style>


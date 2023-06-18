<script setup>
defineProps(['cards'])

const cards = [
    {
        mastercard: true,
        title: 'Mastercard **** **** **** 4346',
        expire: 'Expire on 12/2021',
        primary: true,
    },
    {
        mastercard: true,
        title: 'Mastercard **** **** **** 4346',
        expire: 'Expire on 12/2021',
    },
    {
        visa: true,
        title: 'Visa **** **** **** 4346',
        expire: 'Expired on 12/2020',
        expired: true,
    },
    {
        buttonRow: true,
    },
]
</script>

<template>
    <div class="app_container desktop">
        <SidebarNav :pro="true" />

        <div class="content">
            <AppHeader title="Subscription to Konica Minolta" />

            <TabNav :tabs="['Overview', 'Payment methods', 'Invoices', 'Users']" :activeTab="1" />

            <div class="body">
                <div class="content-left">
                    <DataList kind="height-70" :data="cards">
                        <template #left="{ item }">
                            <div class="card">
                                <MastercardIcon v-if="item.mastercard" />
                                <VisaIcon v-if="item.visa" />
                                <div class="card-info">
                                    <div class="title">{{ item.title }}</div>
                                    <div v-if="item.expired" class="expired">{{ item.expire }}</div>
                                    <div v-else class="expire">{{ item.expire }}</div>
                                </div>
                            </div>
                        </template>
                        <template #right="{ item }">
                            <div class="card-item-right">
                                <TextBadge v-if="item.primary">
                                    Primary
                                </TextBadge>
                                <IconButton  v-if="item.expired" class="delete" type="ghost">
                                    <DeleteIcon />
                                </IconButton>
                                <IconButton v-else class="more-info" type="ghost">
                                    <DotsIcon />
                                </IconButton>
                            </div>
                        </template>
                        <template #button="{ item }">
                            <BaseButton v-if="item.buttonRow" kind="purple" type="ghost">
                                <AddIcon />
                                Add a payment method
                            </BaseButton>
                        </template>
                    </DataList>
                </div>

                <div class="modal-detail">
                    <ModalHeader class="modal-header" title="Add a payment method">
                        <template #left>
                        </template>
                        <template #right>
                            <IconButton kind="mono" type="ghost">
                                <CloseIcon />
                            </IconButton>
                        </template>
                    </ModalHeader>
                    <div class="modal-content">
                        <div class="modal-inputs">
                            <div class="card-details">
                                <FormField label="Card number">
                                    <TextInput type="multiple-icon" placeholder="12 digits">
                                        <template #right-icon>
                                            <VisaIcon />
                                            <MastercardIcon />
                                            <MaestroIcon />
                                        </template>
                                    </TextInput>
                                </FormField>
                                <BoxRow>
                                    <FormField label="Expiration date">
                                        <TextInput placeholder="MM/RR" />
                                    </FormField>
                                    <FormField type="info" label="CVC">
                                        <template #comment>
                                            <InfoIcon class="info" />
                                        </template>
                                        <TextInput placeholder="3 digits" />
                                    </FormField>
                                </BoxRow>
                                <FormField label="Card holder">
                                    <template #comment>
                                        <BaseText kind="primary-light-2">
                                            Optional
                                        </BaseText>
                                    </template>
                                    <TextInput placeholder="Type the member's name or email" />
                                </FormField>
                            </div>
                            <div class="billing-details">
                                <BaseText kind="subtitle">
                                    Billing details
                                </BaseText>
                                <FormField label="Company name">
                                    <TextInput />
                                </FormField>
                                <FormField label="VAT ID">
                                    <TextInput />
                                </FormField>
                                <FormField label="Full name of contact person">
                                    <TextInput />
                                </FormField>
                                <FormField type="phone" label="Phone">
                                    <SelectBox class="areacode" :options="['+420']" label="Country" />
                                    <TextInput type="phone" />
                                </FormField>
                                <FormField label="Street">
                                    <TextInput />
                                </FormField>
                                <BoxRow>
                                    <FormField label="City">
                                        <TextInput />
                                    </FormField>
                                    <FormField label="ZIP code">
                                        <TextInput />
                                    </FormField>
                                </BoxRow>
                                <FormField label="Country">
                                    <SelectBox :options="['Czech Republic']" label="Country" >
                                    </SelectBox>
                                </FormField>
                            </div>

                        </div>
                    </div>
                    <BoxRow class="footer">
                        <BaseButton type="outline">
                            Cancel
                        </BaseButton>
                        <BaseButton type="none" disable>
                            Save
                        </BaseButton>
                    </BoxRow>
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

.body {
    display: flex;
    flex: 1;
    overflow: auto;
}

.content-left {
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-y: auto;
    min-width: 500px;
    padding-top: var(--spacing-4);
}
.card {
    display: flex;
    align-items: center;
    gap: var(--spacing-3);
}

.card-info {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.card svg {
    min-width: 35px;
    min-height: 24px;
}
.card .title {
    font-weight: var(--font-weight-bold);
    line-height: var(--line-hight-2);
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.card .expire,
.expired {
    font-size: var(--size-text-small);
    line-height: var(--line-hight-1);
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

.expired {
    color: var(--color-red-base);
}

.card-item-right {
    display: flex;
    align-items: center;
    gap: var(--spacing-6);
}

.more-info,
.delete {
    color: var(--color-text-primary);
}

.modal-detail {
    display: flex;
    flex-direction: column;
    flex: 0 0 465px;
    width: 465px;
    border-left: 1px solid var(--color-border);
}

.modal-header {
    flex: 0 0 78px;
    height: 78px;
}

.modal-content {
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: auto;
}
.modal-inputs {
    display: flex;
    flex-direction: column;
    gap: 48px;
    padding: 0 var(--spacing-4);
    padding-bottom: var(--spacing-4);
}

.card-details {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-5);
}
.billing-details {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-5);
}

.info {
    color: var(--color-text-primary-2);
}

.areacode {
    border-radius: var(--border-radius-3) 0 0 var(--border-radius-3);
}
.footer {
    gap: var(--spacing-3);
    flex: 0 0 84px;
    height: 84px;
    align-items: center;
    border-top: 1px solid var(--color-divider);
    padding: 0 var(--spacing-4);
}

 </style>


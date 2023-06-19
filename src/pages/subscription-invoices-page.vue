<script setup>
const history = [
    {
        date: '16. 12. 2020 - 15. 1. 2021',
        text: 'Professional subscription with 5 seats (Annually)',
        sum: '€ 828.00',
        paid: true,
    },
    {
        date: '16. 12. 2020 - 15. 1. 2021',
        text: 'Professional subscription with 5 seats (Annually)',
        sum: '€ 828.00',
        paid: true,
    },
]
</script>

<template>
    <div class="app_container desktop">
        <SidebarNav :pro="true" />

        <div class="content">
            <AppHeader title="Subscription to Konica Minolta" />

            <TabNav :tabs="['Overview', 'Payment methods', 'Invoices', 'Users']" :activeTab="2" />

            <div class="body">
                <div class="content-left">
                    <div class="billing-details">
                        <div class="billin-title">
                            Billing details
                        </div>
                        <div class="contact">
                            <div class="container">
                                <HomeIcon class="home-icon" />
                                <div class="contact-details">
                                    <p class="title">Konica Minolta Business Solutions Czech</p>
                                    <p>
                                        <span>Address: </span>Žarošická 4395/13, 628 00 Brno, Czech Republic
                                    </p>
                                    <p>
                                        <span>VAT ID: </span>CZ00176150
                                    </p>
                                    <p>
                                        <span>Phone: </span>+603 244 386
                                    </p>
                                    <p>
                                        <span>Contact person: </span>John Anderson
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="invoice-history">
                        <div class="history-title">
                            Invoice history
                        </div>
                        <div class="next-payment">
                            <InfoIcon class="info-icon" />
                            <p>
                                The next payment of <b>€ 828.00</b> at <b>January 15th, 2022</b>
                            </p>
                        </div>
                        <DataList kind="height-70" :data="history">
                            <template #left="{ item }">
                                <div class="history">
                                    <FileIcon />
                                    <div class="history-info">
                                        <div class="date">{{ item.date }}</div>
                                        <div class="text">{{ item.text }}</div>
                                    </div>
                                </div>
                            </template>
                            <template #right="{ item }">
                                <div class="history-item-right">
                                    <div class="paid-box">
                                        <div class="sum">{{ item.sum }}</div>
                                        <TextBadge kind="secondary" v-if="item.paid">
                                            Paid
                                        </TextBadge>
                                    </div>
                                    <IconButton class="more-info" type="ghost">
                                        <DotsIcon />
                                    </IconButton>
                                </div>
                            </template>
                        </DataList>
                    </div>
                </div>

                <div class="modal-detail">
                    <ModalHeader class="modal-header" title="Edit billing details">
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
                        <BaseButton>
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
    gap: var(--spacing-6);
    overflow-y: auto;
    min-width: 500px;
    padding-top: var(--spacing-4);
}

.content-left .billing-details {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-3);
    padding: 0 var(--spacing-3) 0 var(--spacing-5);
}
.contact {
    display: flex;
    align-items: center;
    height: 155px;
    border-bottom: 1px solid var(--color-divider);
}

.container {
    display: flex;
    gap: var(--spacing-3);
    flex: 1;
}

.contact-details {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-0);
    flex: 1;
}

.contact-details .title {
    color: var(--color-text-primary);
    font-weight: var(--font-weight-bold);
}
.contact-details p {
    color: var(--color-grey-lighten-1);
    line-height: var(--line-hight-2);
}
.contact-details p span {
    color: var(--color-grey-lighten-2);
}
.invoice-history {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-3);
    flex: 1;
    overflow: auto;
    min-height: 250px;
}
.history-title,
.billin-title {
    font-size: var(--size-h3);
    font-weight: var(--font-weight-semibold);
    line-height: 27px;
}
.history-title {
    padding: 0 var(--spacing-5);
}

.next-payment {
    display: flex;
    align-items: center;
    gap: var(--spacing-3);
    padding: 0 20px;
    height: 48px;
    flex: 0 0 48px;
    background: var(--color-blue-lighten-2);
    border: 1px solid var(--color-blue-lighten-1);
    border-radius: var(--border-radius-4);
    line-height: var(--line-hight-2);
    color: var(--color-blue-darken-1);
    margin: 0 var(--spacing-3) 0 var(--spacing-5);
}
.next-payment p {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

b {
    font-weight: var(--font-weight-semibold);
}

.info-icon {
    color: var(--color-blue-base);
    width: 24px;
    height: 24px;
    min-width: 24px;
    min-height: 24px;
}
.history {
    display: flex;
    align-items: center;
    gap: var(--spacing-3);
}

.history-info {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.history svg,
.home-icon {
    color: var(--color-grey-lighten-2);
    min-width: 24px;
    min-height: 24px;
}
.history .date {
    font-weight: var(--font-weight-bold);
    line-height: var(--line-hight-2);
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

.history .text {
    font-size: var(--size-text-small);
    line-height: var(--line-hight-1);
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

.history-item-right {
    display: flex;
    align-items: center;
    gap: var(--spacing-6);
}

.paid-box {
    display: flex;
    gap: var(--spacing-3);
}
.sum {
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-hight-2);
}

.more-info {
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
.modal-detail  .billing-details {
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


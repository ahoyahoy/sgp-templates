<script setup>
import LogoImg from '../../img/logo-lite.svg'

const rndId = 'id-' + Math.random().toString(36).substring(7)
const rndId1 = 'id-' + Math.random().toString(36).substring(7)

const members = [
    {
        option: '1 new user',
        price: '€ 40.00/monthly',
    },
    {
        option: '2 new users',
        price: '€ 60.00/monthly',
    },
    {
        option: '3 new users',
        price: '€ 80.00/monthly',
    },
    {
        option: '4 new users',
        price: '€ 100.00/monthly',
    },
    {
        option: 'Custom',
    },
]
const summary = [
    {
        text: 'Price for unused time on 5 x Users after March 31, 2021, from the current plan.',
        price: '€ -145.86',
    },
    {
        text: 'Price for the remaining time on 6 x Users after March 31, 2021, from the updated plan',
        price: '€ 175.86',
    },
    {
        text: 'Whole Europe 0% VAT',
        price: '€ 0',
    },

]
const payment = [
    {
        mastercard: true,
        title: 'Mastercard **** **** **** 4346',
        primary: true,
    },
    {
        visa: true,
        title: 'Visa **** **** **** 4346',
    },
    {
        icon: true,
        title: 'Pay by new credit card',
        open: true,
    },
    {
        icon: true,
        title: 'Pay by new SEPA debit',
    },
    {
        icon: true,
        title: 'Pay by Invoice',
    },
]
</script>

<template>
    <div class="app_container desktop">
        <div class="content">
            <div class="left-container">
                <div class="left-content">
                    <div class="header">
                        <LogoImg class="logo" alt="logo" />
                    </div>
                    <div class="back">
                        <Arrow2Icon />
                        <span>Back to Subscription</span>
                    </div>

                    <div class="users">
                        <div class="users-title">Number of new users</div>

                        <div class="options">
                            <div class="ratio-container" v-for="item, i in members" :key="i">
                                <label class="users-item" :for="`${rndId}-${i}`">
                                    <input :id="`${rndId}-${i}`" type="radio" :value="item.option" name="users">
                                    <span class="users-option">{{ item.option }}</span>
                                </label>
                                <span class="user-price">{{ item.price }}</span>
                            </div>
                        </div>
                    </div>

                    <div class="billing">
                        <div class="billing-title">Billing details</div>
                        <div class="contact-card">
                            <div class="container">
                                <div class="contact">
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
                                <EditIcon class="edit-icon" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="right-container">
                <div class="right-content">
                    <div class="summary">
                        <div class="summary-title">Order summary of your        <span>Professional plan</span>
                        </div>
                        <div>
                            <div class="plan">
                                <div class="current">
                                    <TextBadge kind="tertiary">
                                        current plan
                                    </TextBadge>
                                    <div>5 x Users</div>
                                    <div><span>€ 200.00</span>/monthly</div>
                                </div>
                                <div class="updated">
                                    <TextBadge>
                                        current plan
                                    </TextBadge>
                                    <div>6 x Users</div>
                                    <div><span>€ 240.00</span>/monthly</div>
                                </div>
                            </div>
                            <div class="divider"></div>
                            <div class="price-info">
                                <div class="summary-item" v-for="item, i in summary" :key="i">
                                    <div class="summ-text">{{ item.text }}</div>
                                    <div class="summ-price">{{ item.price }}</div>
                                </div>
                            </div>
                            <div class="divider"></div>
                            <div class="total-box">
                                <div class="total-price">
                                    <div class="text">Total price to end of this period</div>
                                    <div class="price">€ 29.17</div>
                                </div>
                                <div class="coupon">
                                    <span>Do you have a coupon?</span>
                                    <ArrowIcon />
                                </div>
                            </div>
                            <div class="info-box">
                                <InfoIcon class="info-icon" />
                                <p>
                                    <b>The total price in the next periods will € 240</b>. Your payment will be charged <b>monthly</b>
                                    starting on <b>March 30th, 2021</b>.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="payment">
                        <div class="payment-title">Payment methods</div>

                        <div class="payment-options">
                            <div class="payment-ratio-container" v-for="item, i in payment" :key="i">
                                <label class="payment-item" :for="`${rndId1}-${i}`">
                                    <input :id="`${rndId1}-${i}`" type="radio" :value="item.option" name="payment">
                                    <MastercardIcon v-if="item.mastercard" />
                                    <VisaIcon v-if="item.visa" />
                                    <span class="item-title">{{ item.title }}</span>
                                    <ArrowIcon v-if="item.icon" :class="{ 'arrow-open': item.open,'arrow-icon': item.icon }" />
                                </label>

                                <div v-if="item.open" class="card-details">
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
                            </div>
                        </div>
                        <div class="pay-btn">
                            <BaseButton block>
                                Pay € 29.17
                            </BaseButton>
                            <div class="paygate">
                                <LockIcon />
                                Secure payments via PayGate
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
    flex-direction: column;
    font-size: var(--size-text-medium);
}

.app_container.desktop {
    min-width: 1400px;
    min-height: 500px;
}

.content {
    display: flex;
    flex: 1;
}

.left-container {
    display: flex;
    flex-direction: column;
    align-items: end;
    background-color: var(--color-purple-lighten-5);
    width: 50%;
}

.left-content {
    display: flex;
    flex-direction: column;
    max-width: 448px;
    margin-right: 132px;
}
.header {
    display: flex;
    align-items: center;
    flex: 0 0 106px;
}

.logo {
  width: 143px;
  height: 24px;
}

.back {
    display: flex;
    align-items: center;
    gap: var(--spacing-0);
    color: var(--color-text-secondary);
    line-height: var(--line-hight-2);
    user-select: none;
    cursor: auto;
    margin-bottom: var(--spacing-4);
}

.back svg {
    width: 16px;
    height: 16px;
}
.users,
.billing {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-3);
}

.users {
    padding-bottom: var(--line-hight-4);
}

.users-title,
.billing-title,
.summary-title,
.summary-title span,
.payment-title {
    font-size: var(--size-h2);
    font-weight: var(--font-weight-semibold);
    line-height: var(--spacing-5);
}

.summary-title span {
    color: var(--color-text-secondary);
}

.options {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-0);
}

.ratio-container {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    gap: var(--spacing-1);
    width: 448px;
    height: 56px;
    padding: 0 var(--spacing-4) 0 var(--spacing-3);
    border-radius: var(--border-radius-4);
    background: var(--color-white-base);
    box-shadow: 0px 2px 6px 0px rgba(33, 33, 44, 0.05);
    user-select: none;
}

.users-item,
.payment-item {
    display: flex;
    align-items: center;
    gap: var(--spacing-1);
    flex: 1;
    flex-shrink: 0;
    width: 448px;
    height: 56px;
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-hight-2);
}

.users-option {
    max-width: 270px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.payment-item {
    flex: 0 0 24px;
    font-weight: var(--font-weight-normal);
    width: 100%;
}

.payment-item  .item-title {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 400px;
}

.payment-item .arrow-icon {
    height: 16px;
    height: 16px;
}

.user-price {
    color: var(--color-text-primary-2);
    font-weight: var(--font-weight-normal);
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

.contact-card {
    display: flex;
    align-items: center;
    padding: var(--spacing-3);
    flex-shrink: 0;
    border-radius: var(--border-radius-4);
    background: var(--color-white-base);
    box-shadow: 0px 2px 6px 0px rgba(33, 33, 44, 0.05);
}

.container {
    display: flex;
    gap: var(--spacing-3);
    flex: 1;
}

.contact {
    display: flex;
    gap: var(--spacing-3);
}

.contact-details {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-0);
    flex: 0 0 261px;
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
.home-icon {
    color: var(--color-grey-lighten-2);
    min-width: 24px;
    min-height: 24px;
}

.edit-icon {
    cursor: pointer;
    min-width: 24px;
    min-height: 24px;
}

.right-container {
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-top: 142px;
    width: 50%;
}

.right-content {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-5);
    max-width: 448px;
    margin-left: 132px;
}
 .summary {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-4);
 }
.plan {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-4);
}

.current,
.updated {
    display: flex;
    justify-content: space-between;
    line-height: var(--line-hight-2);
}

.current span,
.updated span,
.summ-price {
    font-weight: var(--font-weight-bold);
}
.updated {
    color: var(--color-text-secondary);
}

.divider {
    width: 100%;
    height: 48px;
    position: relative;
}

.divider::before {
  content: "";
  display: block;
  height: 1px;
  width: 100%;
  border-bottom: 1px solid var(--color-grey-lighten-3);
  position: absolute;
  top: 50%;
}

.plan {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-4);
}
.price-info {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-3);
}

.summary-item {
    display: flex;
    justify-content: space-between;
}

.summ-text {
    max-width: 279px;
    line-height: var(--line-hight-2);
}
.total-price {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.total-price .text {
    font-weight: var(--font-weight-bold);
    line-height: var(--line-hight-2);
}
.total-price .price {
    font-size: var(--size-h1);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-hight-3);
}
.coupon {
    display: flex;
    align-items: center;
    gap: 0;
    font-weight: var(--font-weight-normal);
    user-select: none;
}

.total-box {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-1);
}

.info-box {
    display: flex;
    gap: var(--spacing-3);
    padding: var(--spacing-2);
    background: var(--color-blue-lighten-2);
    border: 1px solid var(--color-blue-lighten-1);
    border-radius: var(--border-radius-4);
    line-height: var(--line-hight-2);
    color: var(--color-blue-darken-1);
    margin-top: var(--spacing-5);
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

.card-details {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-5);
    width: 100%;
    padding-left: 22px;
}

.payment {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-4);
    margin-bottom: var(--spacing-5);
}

.payment-ratio-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: var(--spacing-3);
    flex-shrink: 0;
    width: 448px;
    user-select: none;
}

.payment-options {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-3);
}

.arrow-open {
    transform: rotate(180deg);
}

.pay-btn {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-4);
    align-items: center;
}

.paygate {
    display: flex;
    align-items: center;
    gap: var(--spacing-1);
    color: var(--color-text-disabled);
}
</style>

<script setup>
import LogoImg from '../../img/logo-lite.svg'

const rndId = 'id-' + Math.random().toString(36).substring(7)

const payment = [
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

const summary = [
    {
        text: 'Professional subscription (yearly)',
        price: '€ 360.00',
    },
    {
        text: '1 x User',
        price: '€ 40.00',
    },
    {
        text: '+ VAT (15%)',
        price: '€ 54.00',
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
                        <span>Change billing details</span>
                    </div>

                    <div class="payment">
                        <div class="payment-title">Payment methods</div>

                        <div class="payment-options">
                            <div class="payment-ratio-container" v-for="item, i in payment" :key="i">
                                <label class="payment-item" :for="`${rndId}-${i}`">
                                    <input :id="`${rndId}-${i}`" type="radio" :value="item.option" name="payment">
                                    <span class="title">{{ item.title }}</span>
                                    <ArrowIcon v-if="item.icon" :class="{ 'arrow-open': item.open }" />
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
                                    <div class="pay-btn">
                                        <BaseButton block>
                                            Pay € 454.00
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

            </div>
            <div class="right-container">
                <div class="right-content">
                    <div class="summary">
                        <div class="summary-title">Order summary</div>
                        <div>
                            <div class="price-info">
                                <div class="summary-item" v-for="item, i in summary" :key="i">
                                    <div class="summ-text">{{ item.text }}</div>
                                    <div class="summ-price">{{ item.price }}</div>
                                </div>
                            </div>
                            <div class="divider"></div>
                            <div class="total-price">
                                <div class="text">Total price</div>
                                <div class="price">€ 454.00</div>
                            </div>
                            <div class="info-box">
                                <InfoIcon class="info-icon" />
                                <p>
                                    Your payment will be charged <b>yearly</b> starting on <b>October&nbsp;28,&nbsp;2020</b>
                                </p>
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
    height: 100vh;
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
    max-width: 516px;
    margin-right: 64px;
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

.payment-item {
    display: flex;
    align-items: center;
    gap: var(--spacing-1);
    flex: 1;
    flex-shrink: 0;
    width: 100%;
    flex: 0 0 56px;
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-hight-2);
}
.payment-item  .title {
    flex: 1;
}

.payment {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-4);
    margin-bottom: var(--spacing-5);
    width: 516px;
}

.payment-ratio-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: var(--spacing-3);
    flex-shrink: 0;
    padding: 0 var(--spacing-3);
    width: 100%;
    user-select: none;
    border-radius: var(--border-radius-4);
    background: var(--color-white-base);
    box-shadow: 0px 2px 6px 0px rgba(33, 33, 44, 0.05);
}

.payment-options {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-0);
}

.card-details {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-5);
    width: 100%;
    padding-left: 22px;
}

.arrow-open {
    transform: rotate(180deg);
}

.summary-title,
.payment-title {
    font-size: var(--size-h2);
    font-weight: var(--font-weight-semibold);
    line-height: var(--spacing-5);
}

.pay-btn {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-4);
    align-items: center;
    margin-bottom: var(--spacing-5);
}

.paygate {
    display: flex;
    align-items: center;
    gap: var(--spacing-1);
    color: var(--color-text-disabled);
}

.right-container {
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-top: 143px;
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

.summ-price {
    font-weight: var(--font-weight-bold);
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

</style>

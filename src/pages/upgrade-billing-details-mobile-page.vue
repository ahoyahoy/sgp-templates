<script setup>
import LogoImg from '../../img/logo-lite.svg'

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
    <div class="helper-containers">
        <div class="helper-container mobile-s">
            <div class="modal-detail">
                <div class="header">
                    <LogoImg class="logo" alt="logo" />
                </div>
                <div class="back">
                    <BaseButton type="ghost" kind="primary">
                        <Arrow2Icon class="arrow" />
                        <span>Change number of users</span>
                    </BaseButton>
                </div>
                <div class="body">
                    <div class="billing">
                        <div class="billing-title">Billing details</div>

                        <div class="billing-details">
                            <FormField label="Country">
                                <SelectBox :options="['Czech Republic']" label="Country" >
                                </SelectBox>
                            </FormField>
                            <BoxRow>
                                <FormField label="First name">
                                    <TextInput />
                                </FormField>
                                <FormField label="Last name">
                                    <TextInput />
                                </FormField>
                            </BoxRow>
                            <FormField label="Company name">
                                <TextInput />
                            </FormField>
                            <FormField label="VAT ID">
                                <TextInput />
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
                            <FormField type="phone" label="Phone">
                                <SelectBox class="areacode" :options="['+420']" label="Country" />
                                <TextInput type="phone" />
                            </FormField>
                            <BaseButton block>
                                Continue
                            </BaseButton>
                        </div>
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

        <div class="helper-container mobile-l">
            <div class="modal-detail">
                <div class="header">
                    <LogoImg class="logo" alt="logo" />
                </div>
                <div class="back">
                    <BaseButton type="ghost" kind="primary">
                        <Arrow2Icon class="arrow" />
                        <span>Change number of users</span>
                    </BaseButton>
                </div>
                <div class="body">
                    <div class="billing">
                        <div class="billing-title">Billing details</div>

                        <div class="billing-details">
                            <FormField label="Country">
                                <SelectBox :options="['Czech Republic']" label="Country" >
                                </SelectBox>
                            </FormField>
                            <BoxRow>
                                <FormField label="First name">
                                    <TextInput />
                                </FormField>
                                <FormField label="Last name">
                                    <TextInput />
                                </FormField>
                            </BoxRow>
                            <FormField label="Company name">
                                <TextInput />
                            </FormField>
                            <FormField label="VAT ID">
                                <TextInput />
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
                            <FormField type="phone" label="Phone">
                                <SelectBox class="areacode" :options="['+420']" label="Country" />
                                <TextInput type="phone" />
                            </FormField>
                            <BaseButton block>
                                Continue
                            </BaseButton>
                        </div>
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
        <div class="helper-container tablet">
            <div class="modal-detail">
                <div class="left-container">
                    <div class="left-content">
                        <div class="header">
                            <LogoImg class="logo" alt="logo" />
                        </div>
                        <div class="back">
                            <BaseButton type="ghost" kind="primary">
                                <Arrow2Icon class="arrow" />
                                <span>Change number of users</span>
                            </BaseButton>
                        </div>

                        <div class="billing">
                            <div class="billing-title">Billing details</div>

                            <div class="billing-details">
                                <FormField label="Country">
                                    <SelectBox :options="['Czech Republic']" label="Country" >
                                    </SelectBox>
                                </FormField>
                                <BoxRow>
                                    <FormField label="First name">
                                        <TextInput />
                                    </FormField>
                                    <FormField label="Last name">
                                        <TextInput />
                                    </FormField>
                                </BoxRow>
                                <FormField label="Company name">
                                    <TextInput />
                                </FormField>
                                <FormField label="VAT ID">
                                    <TextInput />
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
                                <FormField type="phone" label="Phone">
                                    <SelectBox class="areacode" :options="['+420']" label="Country" />
                                    <TextInput type="phone" />
                                </FormField>
                                <BaseButton block>
                                    Continue
                                </BaseButton>
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
    background-color: var(--color-purple-lighten-5);
}

.tablet .modal-detail {
    flex-direction: row;
    background-color: #fff;
    overflow: auto;
}

.body {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-3);
    padding: var(--spacing-2) var(--spacing-3);
    overflow: auto;
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
    max-width: 300px;
    width: 100%;
    margin-right: 50px;
}
.header {
    display: flex;
    align-items: center;
    flex: 0 0 80px;
    padding: 0 var(--spacing-3);
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

.back button {
    color: var(--color-text-secondary);
    font-weight: var(--font-weight-normal);
}
.type-ghost.kind-primary .arrow {
    width: 16px;
    height: 16px;
}
.billing {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-5);
    margin-bottom: var(--spacing-5);
}

.billing-title,
.summary-title {
    font-size: var(--size-h2);
    font-weight: var(--font-weight-semibold);
    line-height: var(--spacing-5);
}
.billing-details {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-5);
}
.areacode {
    border-radius: var(--border-radius-3) 0 0 var(--border-radius-3);
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
    max-width: 300px;
    margin-left: 50px;
}
 .summary {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-5);
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


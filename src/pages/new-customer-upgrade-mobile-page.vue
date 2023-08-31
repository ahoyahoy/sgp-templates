<script setup>
import LogoImg from '../../img/logo-lite.svg'

const basic = [
    {
        list: [
            {listItem: 'Realtime Audio/Visual communication'},
            {listItem: 'Live pointer'},
            {listItem: 'Realtime drawing'},
            {listItem: 'Flashlight'},
            {listItem: 'Session planning'},
            {listItem: 'SMS or email messages'},
            {listItem: 'Community support'},
        ],
    },
]
const proffesional = [
    {
        list: [
            {listItem: 'All from Basic', icon: 'arrow'},
            {listItem: 'Recording'},
            {listItem: 'Desktop sharing'},
            {listItem: 'Custom messages'},
            {listItem: 'Export to Excel'},
            {listItem: 'Email support'},
        ],
    },
]
const premium = [
    {
        list: [
            {listItem: 'All from Proffesional', icon: 'arrow'},
            {listItem: 'Smart Knowledgebase'},
            {listItem: 'Advance Analytics'},
            {listItem: 'Phone support'},
        ],
    },
]
</script>

<template>
    <div class="helper-containers">
        <div class="helper-container mobile-s">
            <div class="modal-detail">
                <div class="header">
                    <LogoImg class="logo" alt="logo" />
                    <div class="title-box">
                        <div class="title">Upgrade your subscription</div>
                        <div class="options">
                            <div class="option-one">Bill Yearly <span>(save 25%)</span></div>
                            <div class="button"></div>
                            <div>Bill Monthly</div>
                        </div>
                    </div>
                </div>

                <div class="body">
                    <div class="offer">
                        <div>
                            <BaseText kind="subtitle">
                                Basic
                            </BaseText>
                            <div class="offer-title">
                                Free of charge
                            </div>
                        </div>
                        <div class="list" v-for="item, i in basic" :key="i">
                            <template v-for="listItem, i in item.list" :key="i">
                                <div class="listItem">
                                    <Arrow2Icon v-if="listItem.icon === 'arrow'" />
                                    <DoneIcon v-else />
                                    <div>{{ listItem.listItem }}</div>
                                </div>
                            </template>
                        </div>

                        <BaseButton type="none" block disable>
                            Current
                        </BaseButton>
                    </div>

                    <div class="offer">
                        <div>
                            <TextBox>
                                <template #main-text>
                                    <BaseText kind="subtitle">
                                        Proffesional
                                    </BaseText>
                                </template>
                                <template #info>
                                    <TextBadge kind="secondary">
                                        save € 120
                                    </TextBadge>
                                </template>
                            </TextBox>
                            <div class="offer-title">
                                € 360 <span>user/year</span>
                            </div>
                        </div>
                        <div class="list" v-for="item, i in proffesional" :key="i">
                            <template v-for="listItem, i in item.list" :key="i">
                                <div class="listItem">
                                    <Arrow2Icon v-if="listItem.icon === 'arrow'" />
                                    <DoneIcon v-else />
                                    <div>{{ listItem.listItem }}</div>
                                </div>
                            </template>
                        </div>

                        <BaseButton block>
                            Try 1 month free
                        </BaseButton>
                    </div>

                    <div class="offer recommended">
                        <div class="rec-badge">Recommended</div>
                        <div>
                            <TextBox>
                                <template #main-text>
                                    <BaseText kind="subtitle">
                                        Proffesional
                                    </BaseText>
                                </template>
                                <template #info>
                                    <TextBadge kind="secondary">
                                        save € 70
                                    </TextBadge>
                                </template>
                            </TextBox>
                            <div class="offer-title">
                                € 990 <span>user/year</span>
                            </div>
                        </div>
                        <div class="list" v-for="item, i in premium" :key="i">
                            <template v-for="listItem, i in item.list" :key="i">
                                <div class="listItem">
                                    <Arrow2Icon v-if="listItem.icon === 'arrow'" />
                                    <DoneIcon v-else />
                                    <div>{{ listItem.listItem }}</div>
                                </div>
                            </template>
                        </div>

                        <BaseButton block>
                            Try 1 month free
                        </BaseButton>
                    </div>

                </div>
            </div>
        </div>

        <div class="helper-container mobile-l">
            <div class="modal-detail">
                <div class="header">
                    <LogoImg class="logo" alt="logo" />
                    <div class="title-box">
                        <div class="title">Upgrade your subscription</div>
                        <div class="options">
                            <div class="option-one">Bill Yearly <span>(save 25%)</span></div>
                            <div class="button"></div>
                            <div>Bill Monthly</div>
                        </div>
                    </div>
                </div>

                <div class="body">
                    <div class="offer">
                        <div>
                            <BaseText kind="subtitle">
                                Basic
                            </BaseText>
                            <div class="offer-title">
                                Free of charge
                            </div>
                        </div>
                        <div class="list" v-for="item, i in basic" :key="i">
                            <template v-for="listItem, i in item.list" :key="i">
                                <div class="listItem">
                                    <Arrow2Icon v-if="listItem.icon === 'arrow'" />
                                    <DoneIcon v-else />
                                    <div>{{ listItem.listItem }}</div>
                                </div>
                            </template>
                        </div>

                        <BaseButton type="none" block disable>
                            Current
                        </BaseButton>
                    </div>

                    <div class="offer">
                        <div>
                            <TextBox>
                                <template #main-text>
                                    <BaseText kind="subtitle">
                                        Proffesional
                                    </BaseText>
                                </template>
                                <template #info>
                                    <TextBadge kind="secondary">
                                        save € 120
                                    </TextBadge>
                                </template>
                            </TextBox>
                            <div class="offer-title">
                                € 360 <span>user/year</span>
                            </div>
                        </div>
                        <div class="list" v-for="item, i in proffesional" :key="i">
                            <template v-for="listItem, i in item.list" :key="i">
                                <div class="listItem">
                                    <Arrow2Icon v-if="listItem.icon === 'arrow'" />
                                    <DoneIcon v-else />
                                    <div>{{ listItem.listItem }}</div>
                                </div>
                            </template>
                        </div>

                        <BaseButton block>
                            Try 1 month free
                        </BaseButton>
                    </div>

                    <div class="offer recommended">
                        <div class="rec-badge">Recommended</div>
                        <div>
                            <TextBox>
                                <template #main-text>
                                    <BaseText kind="subtitle">
                                        Proffesional
                                    </BaseText>
                                </template>
                                <template #info>
                                    <TextBadge kind="secondary">
                                        save € 70
                                    </TextBadge>
                                </template>
                            </TextBox>
                            <div class="offer-title">
                                € 990 <span>user/year</span>
                            </div>
                        </div>
                        <div class="list" v-for="item, i in premium" :key="i">
                            <template v-for="listItem, i in item.list" :key="i">
                                <div class="listItem">
                                    <Arrow2Icon v-if="listItem.icon === 'arrow'" />
                                    <DoneIcon v-else />
                                    <div>{{ listItem.listItem }}</div>
                                </div>
                            </template>
                        </div>

                        <BaseButton block>
                            Try 1 month free
                        </BaseButton>
                    </div>

                </div>
            </div>
        </div>
        <div class="helper-container tablet">
            <div class="modal-detail">
                <div class="header">
                    <LogoImg class="logo" alt="logo" />
                </div>

                <div class="body">
                    <div class="title-box">
                        <div class="title">Upgrade your subscription</div>
                        <div class="options">
                            <div class="option-one">Bill Yearly <span>(save 25%)</span></div>
                            <div class="button"></div>
                            <div>Bill Monthly</div>
                        </div>
                    </div>
                    <div class="offers">
                        <div class="offer">
                            <div>
                                <BaseText kind="subtitle">
                                    Basic
                                </BaseText>
                                <div class="offer-title">
                                    Free of charge
                                </div>
                            </div>
                            <div class="list" v-for="item, i in basic" :key="i">
                                <template v-for="listItem, i in item.list" :key="i">
                                    <div class="listItem">
                                        <Arrow2Icon v-if="listItem.icon === 'arrow'" />
                                        <DoneIcon v-else />
                                        <div>{{ listItem.listItem }}</div>
                                    </div>
                                </template>
                            </div>

                            <BaseButton type="none" block disable>
                                Current
                            </BaseButton>
                        </div>

                        <div class="offer">
                            <div>
                                <TextBox>
                                    <template #main-text>
                                        <BaseText kind="subtitle">
                                            Proffesional
                                        </BaseText>
                                    </template>
                                    <template #info>
                                        <TextBadge kind="secondary">
                                            save € 120
                                        </TextBadge>
                                    </template>
                                </TextBox>
                                <div class="offer-title">
                                    € 360 <span>user/year</span>
                                </div>
                            </div>
                            <div class="list" v-for="item, i in proffesional" :key="i">
                                <template v-for="listItem, i in item.list" :key="i">
                                    <div class="listItem">
                                        <Arrow2Icon v-if="listItem.icon === 'arrow'" />
                                        <DoneIcon v-else />
                                        <div>{{ listItem.listItem }}</div>
                                    </div>
                                </template>
                            </div>

                            <BaseButton block>
                                Try 1 month free
                            </BaseButton>
                        </div>

                        <div class="offer recommended">
                            <div class="rec-badge">Recommended</div>
                            <div>
                                <TextBox>
                                    <template #main-text>
                                        <BaseText kind="subtitle">
                                            Proffesional
                                        </BaseText>
                                    </template>
                                    <template #info>
                                        <TextBadge kind="secondary">
                                            save € 70
                                        </TextBadge>
                                    </template>
                                </TextBox>
                                <div class="offer-title">
                                    € 990 <span>user/year</span>
                                </div>
                            </div>
                            <div class="list" v-for="item, i in premium" :key="i">
                                <template v-for="listItem, i in item.list" :key="i">
                                    <div class="listItem">
                                        <Arrow2Icon v-if="listItem.icon === 'arrow'" />
                                        <DoneIcon v-else />
                                        <div>{{ listItem.listItem }}</div>
                                    </div>
                                </template>
                            </div>

                            <BaseButton block>
                                Try 1 month free
                            </BaseButton>
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

.header {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-3);
    padding: 0 var(--spacing-2);
}
.logo {
    width: 143px;
    height: 24px;
    flex: 0 0 80px;
}

.title-box {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-3);
}
.body {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-3);
    overflow: auto;
    padding: var(--spacing-3) var(--spacing-2);
}
.tablet .body {
    justify-content: center;
    flex: 1;
    margin-bottom: 60px;
}
.title {
    font-size: var(--size-h1);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-hight-3);
    text-align: center;
}

.options {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-3);
}

.option-one {
    font-weight: var(--font-weight-bold);
}
.button {
    position: relative;
    width: 48px;
    height: 24px;
    border: 1px solid var(--color-purple-base);
    border-radius: 12px;
    background-color: var(--color-white-base);
    cursor: pointer;
}

.button::before {
    content: '';
    display: block;
    width: 18px;
    height: 18px;
    background-color: var(--color-purple-base);
    border-radius: 50%;
    position: absolute;
    left: 3px;
    top: 2px;
}
.offers {
    display: flex;
    justify-content: center;
    gap: var(--spacing-3);
}

.offer {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-4);
    flex: 0 0 332px;
    box-shadow: 0px 2px 6px 0px rgba(33, 33, 44, 0.05);
    border-radius: 30px;
    background-color: var(--color-white-base);
    padding: var(--spacing-4);
}
.tablet .offer {
    flex: 0 0 236px;
    padding: var(--spacing-4) var(--spacing-3);
}

.offer.recommended {
    position: relative;
    border: 1px solid var(--color-purple-base);
}

.rec-badge {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 4px;
    background: var(--color-purple-base);
    padding: 0 var(--spacing-1);
    color: #FFF;
    font-size: var(--size-text-small);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-hight-2);
    letter-spacing: 1.2px;
    text-transform: uppercase;
}
.offer-title {
    font-size: var(--size-h2);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-hight-3);
}

.option-one span,
.offer-title span {
    font-size: var(--size-text-medium);
    font-weight: var(--font-weight-normal);
    line-height: var(--line-hight-3);
}

.list {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-3);
    flex: 1;
}

.listItem {
    display: flex;
    align-items: center;
    gap: var(--spacing-1);
}
.listItem svg {
    color: var(--color-text-secondary);
    min-height: 24px;
    min-width: 24px;
}
 </style>


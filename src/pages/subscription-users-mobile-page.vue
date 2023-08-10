<script setup>
const users = [
    {
        initials: 'J',
        title: 'John Anderson (you)',
        subtitle: 'john.anderson@gmail.com',
        badge: 'admin',
    },
    {
        initials: 'P',
        title: 'Peter Davis',
        subtitle: 'peter.davis@gmail.com',
        badge: 'user',
        level: 'professional',
    },
    {
        initials: 'T',
        title: 'Tomas Mayer',
        subtitle: 'tomas.mayer@gmail.com',
        badge: 'user',
    },
    {
        initials: 'P',
        title: 'Peter Davis',
        subtitle: 'peter.davis@gmail.com',
        badge: 'user',
    },
    {
        initials: 'T',
        title: 'teresa.simons@gmail.com',
        subtitle: 'Waiting for confirmation',
        badge: 'admin',
        resend: 'Invitation resend',
        waiting: true,
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
                <TabNav type="mobile" :tabs="['Overview', 'Payment', 'Invoices', 'Users']" :activeTab="3" />
                <div class="body">
                    <div class="body-header">
                        <div class="body-header-title">
                            All seats are occupied
                        </div>
                        <div class="body-header-btns">
                            <BaseButton type="outline" kind="primary">
                                <PeopleIcon />
                                Buy more seats
                            </BaseButton>
                            <BaseButton type="outline" disable>
                                <MailIcon />
                                Invite users
                            </BaseButton>
                        </div>
                    </div>
                    <div class="data-list">
                        <div class="list-item" v-for="item, i in users" :key="i">
                            <div class="user" :class="{ waiting: item.waiting }">
                                <div class="user-name">
                                    <WaitingIcon v-if="item.waiting" />
                                    <InitialsIcon v-else kind="secondary">{{ item.initials }}</InitialsIcon>
                                    <div class="user-info">
                                        <div>
                                            <div class="title">{{ item.title }}</div>
                                            <div class="subtitle">{{ item.subtitle }}</div>
                                        </div>
                                        <div class="badges">
                                            <TextBadge v-if="item.badge">
                                                {{ item.badge }}
                                            </TextBadge>
                                            <TextBadge v-if="item.level">
                                                {{ item.level }}
                                            </TextBadge>
                                        </div>
                                        <div class="resend" v-if="item.resend">{{ item.resend }}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="user-item-right">
                                <IconButton class="more-info" type="ghost">
                                    <DotsIcon />
                                </IconButton>
                            </div>
                        </div>
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
                <TabNav type="mobile" :tabs="['Overview', 'Payment', 'Invoices', 'Users']" :activeTab="3" />
                <div class="body">
                    <div class="body-header">
                        <div class="body-header-title">
                            All seats are occupied
                        </div>
                        <div class="body-header-btns">
                            <BaseButton type="outline" kind="primary">
                                <PeopleIcon />
                                Buy more seats
                            </BaseButton>
                            <BaseButton type="outline" disable>
                                <MailIcon />
                                Invite users
                            </BaseButton>
                        </div>
                    </div>
                    <div class="data-list">
                        <div class="list-item" v-for="item, i in users" :key="i">
                            <div class="user" :class="{ waiting: item.waiting }">
                                <div class="user-name">
                                    <WaitingIcon v-if="item.waiting" />
                                    <InitialsIcon v-else kind="secondary">{{ item.initials }}</InitialsIcon>
                                    <div class="user-info">
                                        <div>
                                            <div class="title">{{ item.title }}</div>
                                            <div class="subtitle">{{ item.subtitle }}</div>
                                        </div>
                                        <div class="badges">
                                            <TextBadge v-if="item.badge">
                                                {{ item.badge }}
                                            </TextBadge>
                                            <TextBadge v-if="item.level">
                                                {{ item.level }}
                                            </TextBadge>
                                        </div>
                                        <div class="resend" v-if="item.resend">{{ item.resend }}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="user-item-right">
                                <IconButton class="more-info" type="ghost">
                                    <DotsIcon />
                                </IconButton>
                            </div>
                        </div>
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
                <TabNav type="mobile" :tabs="['Overview', 'Payment', 'Invoices', 'Users']" :activeTab="3" />
                <div class="body">
                    <div class="body-header">
                        <div class="body-header-title">
                            All seats are occupied
                        </div>
                        <div class="body-header-btns">
                            <BaseButton type="outline" kind="primary">
                                <PeopleIcon />
                                Buy more seats
                            </BaseButton>
                            <BaseButton type="outline" disable>
                                <MailIcon />
                                Invite users
                            </BaseButton>
                        </div>
                    </div>
                    <div class="data-list">
                        <div class="list-item" v-for="item, i in users" :key="i">
                            <div class="user" :class="{ waiting: item.waiting }">
                                <WaitingIcon v-if="item.waiting" />
                                <InitialsIcon v-else kind="secondary">{{ item.initials }}</InitialsIcon>
                                <div class="user-info">
                                    <div class="title">{{ item.title }}</div>
                                    <div class="subtitle">{{ item.subtitle }}</div>
                                </div>
                                <TextBadge v-if="item.badge">
                                    {{ item.badge }}
                                </TextBadge>
                                <TextBadge v-if="item.level">
                                    {{ item.level }}
                                </TextBadge>
                            </div>
                            <div class="user-item-right">
                                <div class="resend" v-if="item.resend">{{ item.resend }}</div>
                                <IconButton class="more-info" type="ghost">
                                    <DotsIcon />
                                </IconButton>
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
    gap: var(--spacing-4);
    flex: 1;
    overflow: auto;
    flex-direction: column;
    padding: var(--spacing-4) var(--spacing-3);
}

.body-header {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: var(--spacing-3);
}

.tablet .body-header {
    flex-direction: row;
}
.body-header-title {
    font-weight: var(--font-weight-semibold);
    font-size: var(--size-h3);
    line-height: var(--line-hight-2);
    flex: 1;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

.body-header-btns {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-3);
}

.tablet .body-header-btns {
    flex-direction: row;
}

.mobile-l .body-header-btns {
    flex-direction: row;
}

.data-list {
    display: flex;
    flex-direction: column;
}

.list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--spacing-3) 0;
    border-bottom: 1px solid var(--color-divider);
}

.user {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-3);
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

.tablet .user {
    flex-direction: row;
    align-items: center;
}

.user-name {
    display: flex;
    gap: var(--spacing-3);
}

.user-info {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-1);
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.tablet .user-info {
    width: 230px;
    flex-shrink: 0;
    gap: 0;
}

.user svg {
    min-width: 32px;
    min-height: 32px;
}
.user .title {
    font-weight: var(--font-weight-bold);
    line-height: var(--line-hight-2);
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

.user.waiting .title,
.user.waiting .subtitle {
    color: var(--color-text-disabled);
    font-weight: var(--font-weight-normal);
}

.subtitle {
    font-size: var(--size-text-small);
    line-height: var(--line-hight-1);
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.user-item-right {
    display: flex;
    align-items: center;
    gap: var(--spacing-3);
}

.badges {
    display: flex;
    gap: var(--spacing-1);
}
.resend {
    color: var(--color-green-base);
    line-height: var(--line-hight-2);
}
.more-info {
    color: var(--color-text-primary);
}

 </style>


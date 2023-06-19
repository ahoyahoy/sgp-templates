<script setup>
defineProps(['users'])

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
    <div class="app_container desktop">
        <SidebarNav />

        <div class="content">
            <AppHeader title="Subscription to Konica Minolta" />

            <TabNav :tabs="['Overview', 'Payment methods', 'Invoices', 'Users']" :activeTab="3" />

            <div class="body">
                <div class="content-left">
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
                    <DataList kind="height-60" :data="users">
                        <template #left="{ item }">
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
                        </template>
                        <template #right="{ item }">
                            <div class="user-item-right">
                                <div class="resend" v-if="item.resend">{{ item.resend }}</div>
                                <IconButton class="more-info" type="ghost">
                                    <DotsIcon />
                                </IconButton>
                            </div>
                        </template>
                    </DataList>
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
.body-header {
    display: flex;
    align-items: center;
    padding: 0 var(--spacing-5);
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
    gap: var(--spacing-3);
}
.user {
    display: flex;
    align-items: center;
    gap: var(--spacing-3);
}

.user-info {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 296px;
    flex-shrink: 0;
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
.resend {
    color: var(--color-green-base);
    line-height: var(--line-hight-2);
}
.more-info {
    color: var(--color-text-primary);
}

 </style>


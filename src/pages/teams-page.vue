<script setup>
const teams = [
    {
        title: 'Technicians',
        text: '2 members',
    },
    {
        title: 'Technicians',
        text: '2 members',
    },
]

const members = [
    {
        initials: 'J',
        name: 'John Anderson',
        email: 'john.anaderson@gmail.com',
        user: 'Admin',
    },
    {
        initials: 'T',
        name: 'Tomas Johnson',
        email: 'tomas.johnson@gmail.com',
        user: 'Member',
    },
]
</script>

<template>

    <div class="app_container desktop">
        <SidebarNav />

        <div class="content">
            <AppHeader class="teams-header" title="Teams">
                <template #left>
                    <TextInput placeholder="Search in Teams">
                        <template #icon>
                            <SearchIcon />
                        </template>
                    </TextInput>
                </template>
                <template #right>
                    <BaseButton>
                        <AddIcon />
                        Create team
                    </BaseButton>
                </template>
            </AppHeader>

            <div class="body">
                <DataList kind="teams" :data="teams">
                    <template #left="{ item }">
                        <div class="teams">
                            <div class="title">{{ item.title }}</div>
                            <div class="text">{{ item.text }}</div>
                        </div>
                    </template>
                    <template #right>
                        <IconButton class="more-info" type="ghost">
                            <DotsIcon />
                        </IconButton>
                    </template>
                </DataList>

                <div class="modal-detail">
                    <ModalHeader class="modal-header" title="Edit team">
                        <template #left>
                        </template>
                        <template #right>
                            <IconButton kind="mono" type="ghost">
                                <DeleteIcon />
                            </IconButton>
                            <IconButton kind="mono" type="ghost">
                                <CloseIcon />
                            </IconButton>
                        </template>
                    </ModalHeader>
                    <div class="modal-content">
                        <div class="modal-inputs">
                            <FormField label="Name">
                                <TextInput placeholder="Team name" />
                            </FormField>
                            <FormField label="Members">
                                <TextInput placeholder="Type the member's name or email" />
                                <BaseButton type="outline">
                                    Add
                                </BaseButton>
                            </FormField>
                        </div>
                        <div class="members">
                            <div class="member" v-for="item, i in members" :key="i">
                                <TextBox>
                                    <template #left-icon>
                                        <InitialsIcon>{{ item.initials }}</InitialsIcon>
                                    </template>
                                    <template #main-text>
                                        <BaseText kind="primary-bold">
                                            {{ item.name }}
                                        </BaseText>
                                    </template>
                                    <template #secondary-text>
                                        <BaseText class="email">
                                            {{ item.email }}
                                        </BaseText>
                                    </template>
                                    <template #info>
                                        <BaseButton class="user-button" type="ghost" kind="mono">
                                            <span>{{ item.user }}</span>
                                            <ArrowIcon class="arrow" />
                                        </BaseButton>
                                    </template>
                                    <template #right-icon>
                                        <IconButton kind="mono" type="ghost">
                                            <CloseIcon />
                                        </IconButton>
                                    </template>
                                </TextBox>
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


                <div class="modal-detail">
                    <ModalHeader class="modal-header" title="Create team">
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
                            <FormField label="Name">
                                <TextInput placeholder="Team name" />
                            </FormField>
                            <FormField label="Members">
                                <TextInput placeholder="Type the member's name or email" />
                                <BaseButton type="outline">
                                    Add
                                </BaseButton>
                            </FormField>
                        </div>
                        <div class="members">
                            <div class="empty">
                                No members have been added yet
                            </div>
                        </div>
                    </div>
                    <BoxRow class="footer">
                        <BaseButton type="outline">
                            Cancel
                        </BaseButton>
                        <BaseButton type="none" disable>
                            Create
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

.teams-header {
    border-bottom: 1px solid var(--color-divider);
}

.body {
    display: flex;
    flex: 1;
    overflow: auto;
}
.teams .title {
    font-weight: var(--font-weight-bold);
    line-height: var(--line-hight-2);
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.teams .text {
    font-size: var(--size-text-small);
    line-height: var(--line-hight-1);
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
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
    gap: var(--spacing-3);
    flex: 1;
    overflow: auto;
}
.modal-inputs {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-5);
    padding: 0 var(--spacing-4);
}

.members {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 0 var(--spacing-4);
    overflow-y: auto;
}

.member {
    display: flex;
    align-items: center;
    flex: 0 0 52px;
    height: 52px;
}

.email {
    font-size: var(--size-text-small);
    color: var(--color-grey-lighten-2);
    line-height: var(--line-hight-1);
}

.user-button {
    color: var(--color-text-secondary) !important;
    gap: 0;
}
.user-button span {
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-hight-1);
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

.user-button svg {
    width: 16px;
    height: 16px;
}

.empty {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 56px;
    height: 56px;
    background-color: var(--color-grey-lighten-4);
    border-radius: var(--border-radius-3);
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

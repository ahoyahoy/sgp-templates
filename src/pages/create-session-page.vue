<template>
    <div class="helper-containers">
        <div class="helper-container">
            <div class="modal-detail">
                <ModalHeader title="Create session">
                    <template #left>
                    </template>
                    <template #right>
                        <IconButton kind="mono" type="ghost">
                            <CloseIcon />
                        </IconButton>
                    </template>
                </ModalHeader>
                <div class="content">
                    <div class="details">
                        <FormField label="Session name">
                            <TextInput placeholder="My new session" />
                        </FormField>
                        <BoxRow>
                            <FormField label="Session name">
                                <SelectBox :options="['Today', '7.5.2023', '8.5.2023']" label="Start date" />
                            </FormField>
                            <FormField label="Session name">
                                <SelectBox class="date-detail" :options="['8:00', '9:00', '10:00']" label="Start time" />
                            </FormField>
                        </BoxRow>
                    </div>
                    <div class="invite">
                        <FormField id="new" label="Invite a client">
                            <TextInput placeholder="Type client’s name, email address or phone number" />
                        </FormField>
                    </div>
                    <div class="options">
                        <BaseText kind="subtitle">
                            Other options
                        </BaseText>
                        <CheckboxInput :options="['Invite another assistant', 'Start muted']" />
                    </div>
                </div>
                <BoxRow class="footer">
                    <BaseButton type="outline">
                        Cancel
                    </BaseButton>
                    <BaseButton>
                        Create
                    </BaseButton>
                </BoxRow>
            </div>
        </div>


        <div class="helper-container">
            <div class="modal-detail">
                <ModalHeader title="Create session">
                    <template #left>
                    </template>
                    <template #right>
                        <IconButton kind="mono" type="ghost">
                            <CloseIcon />
                        </IconButton>
                    </template>
                </ModalHeader>
                <div class="content">
                    <div class="details">
                        <FormField label="Session name">
                            <TextInput placeholder="My new session" />
                        </FormField>
                        <BoxRow>
                            <FormField label="Session name">
                                <SelectBox :options="['Today', '7.5.2023', '8.5.2023']" label="Start date" />
                            </FormField>
                            <FormField label="Session name">
                                <SelectBox class="date-detail" :options="['8:00', '9:00', '10:00']" label="Start time" />
                            </FormField>
                        </BoxRow>
                    </div>
                    <div class="invite">
                        <FormField label="Invite a client">
                            <div class="">
                                <div class="contact">
                                    <div class="email">
                                        <FormField id="new" label="Email">
                                            <TextInput placeholder="tomas.anderson@gmail.com" />
                                        </FormField>
                                        <div>
                                            <BaseButton type="ghost">
                                                <AddIcon />
                                                Add phone number
                                            </BaseButton>
                                        </div>
                                    </div>
                                    <div class="save">
                                        <CheckboxInput :options="['Save to Contacts after create session']" />
                                    </div>
                                </div>
                            </div>
                        </FormField>
                    </div>
                    <div class="options">
                        <BaseText kind="subtitle">
                            Other options
                        </BaseText>
                        <CheckboxInput :options="['Invite another assistant', 'Start muted']" />
                    </div>
                </div>
                <BoxRow class="footer">
                    <BaseButton type="outline">
                        Cancel
                    </BaseButton>
                    <BaseButton>
                        Create
                    </BaseButton>
                </BoxRow>
            </div>
        </div>


        <div class="helper-container">
            <div class="modal-detail">
                <ModalHeader title="Create session">
                    <template #left>
                    </template>
                    <template #right>
                        <IconButton kind="mono" type="ghost">
                            <CloseIcon />
                        </IconButton>
                    </template>
                </ModalHeader>
                <div class="content">
                    <div class="details">
                        <FormField label="Session name">
                            <TextInput placeholder="My new session" />
                        </FormField>
                        <BoxRow>
                            <FormField label="Session name">
                                <SelectBox :options="['Today', '7.5.2023', '8.5.2023']" label="Start date" />
                            </FormField>
                            <FormField label="Session name">
                                <SelectBox class="date-detail" :options="['8:00', '9:00', '10:00']" label="Start time" />
                            </FormField>
                        </BoxRow>
                    </div>
                    <div class="invite">
                        <FormField label="Invite a client">
                            <template #comment>
                                <BaseText kind="secondary-bold">
                                    New invitation
                                </BaseText>
                            </template>
                            <div class="contact">
                                <div class="email">
                                    <div class="contact-title">
                                        <BaseText kind="subtitle">
                                            New contact
                                        </BaseText>
                                        <IconButton kind="mono" type="ghost">
                                            <CloseIcon />
                                        </IconButton>
                                    </div>
                                    <FormField id="new" label="Full name">
                                        <TextInput placeholder="Type Name and Surname" />
                                    </FormField>
                                    <FormField id="new" label="Email">
                                        <TextInput placeholder="tomas.anderson@gmail.com" />
                                    </FormField>
                                    <div class="info-box">
                                        <InfoIcon />
                                        <p>The new contact will be saved in your contacts.</p>
                                    </div>
                                </div>
                            </div>
                        </FormField>
                    </div>
                    <div class="options">
                        <BaseText kind="subtitle">
                            Other options
                        </BaseText>
                        <CheckboxInput :options="['Invite another assistant', 'Start muted']" />
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


        <div class="helper-container">
            <div class="modal-detail">
                <ModalHeader title="Create session">
                    <template #left>
                    </template>
                    <template #right>
                        <IconButton kind="mono" type="ghost">
                            <CloseIcon />
                        </IconButton>
                    </template>
                </ModalHeader>
                <div class="content">
                    <div class="details">
                        <FormField label="Session name">
                            <TextInput placeholder="My new session" />
                        </FormField>
                        <BoxRow>
                            <FormField label="Session name">
                                <SelectBox :options="['Today', '7.5.2023', '8.5.2023']" label="Start date" />
                            </FormField>
                            <FormField label="Session name">
                                <SelectBox class="date-detail" :options="['8:00', '9:00', '10:00']" label="Start time" />
                            </FormField>
                        </BoxRow>
                    </div>
                    <div class="invite">
                        <FormField label="Invite a client">
                            <div class="contact">
                                <div class="email">
                                    <TextBox>
                                        <template #left-icon>
                                            <InitialsIcon>T</InitialsIcon>
                                        </template>
                                        <template #main-text>
                                            <BaseText kind="primary-bold">
                                                Tomas Anderson
                                            </BaseText>
                                        </template>
                                        <template #right-icon>
                                            <IconButton kind="mono" type="ghost">
                                                <CloseIcon />
                                            </IconButton>
                                        </template>
                                    </TextBox>
                                    <TextBox>
                                        <template #left-icon>
                                            <div class="center">
                                                <MailIcon />
                                            </div>
                                        </template>
                                        <template #main-text>
                                            <BaseText>
                                                tomas.anderson@gmail.com
                                            </BaseText>
                                        </template>
                                        <template #right-icon>
                                            <IconButton kind="purple" type="ghost">
                                                <NotificationIcon />
                                            </IconButton>
                                        </template>
                                    </TextBox>
                                    <TextBox>
                                        <template #left-icon>
                                            <div class="center">
                                                <MobileIcon />
                                            </div>
                                        </template>
                                        <template #main-text>
                                            <BaseText>
                                                +420 603 244 386
                                            </BaseText>
                                        </template>
                                        <template #right-icon>
                                            <IconButton kind="red" type="ghost">
                                                <NotificationoffIcon />
                                            </IconButton>
                                        </template>
                                    </TextBox>
                                </div>
                            </div>
                        </FormField>
                    </div>
                    <div class="options">
                        <BaseText kind="subtitle">
                            Other options
                        </BaseText>
                        <CheckboxInput :options="['Invite another assistant', 'Start muted']" />
                    </div>
                </div>
                <BoxRow class="footer">
                    <BaseButton type="outline">
                        Cancel
                    </BaseButton>
                    <BaseButton>
                        Create
                    </BaseButton>
                </BoxRow>
            </div>
        </div>


        <div class="helper-container">
            <div class="modal-detail">
                <div class="new-session-head">
                    <div class="new-session-title">
                        <TextBox>
                            <template #main-text>
                                <BaseText kind="primary-light-1">
                                    Mon, 21 Jul at 08:00
                                </BaseText>
                            </template>
                            <template #right-icon>
                                <IconButton kind="mono" type="ghost">
                                    <DotsIcon />
                                </IconButton>
                                <IconButton kind="mono" type="ghost">
                                    <CloseIcon />
                                </IconButton>
                            </template>
                        </TextBox>
                        <div>
                            <BaseText kind="h2">
                                My new session
                            </BaseText>
                            <BaseText kind="primary-light-2">
                                158-871-171-165
                            </BaseText>
                        </div>
                    </div>
                    <BaseButton block>
                        Connect
                    </BaseButton>
                </div>
                <TabNav kind="secondary" :tabs="['Members', 'Media Library', 'Feedback']" :activeTab="0" />
                <div class="content">
                    <div class="new-session">
                        <div class="client">
                            <BaseText kind="subtitle">
                                Client
                            </BaseText>
                            <div class="contact">
                                <div class="email">
                                    <TextBox>
                                        <template #left-icon>
                                            <InitialsIcon>T</InitialsIcon>
                                        </template>
                                        <template #main-text>
                                            <BaseText kind="primary-bold">
                                                Tomas Anderson
                                            </BaseText>
                                        </template>
                                        <template #secondary-text>
                                            <BaseText kind="small-green">
                                                Notifications sent to email and phone
                                            </BaseText>
                                        </template>
                                        <template #right-icon>
                                            <IconButton kind="mono" type="ghost">
                                                <DotsIcon />
                                            </IconButton>
                                        </template>
                                    </TextBox>
                                    <div class="divider"></div>
                                    <TextBox>
                                        <template #left-icon>
                                            <div class="center">
                                                <LinkIcon />
                                            </div>
                                        </template>
                                        <template #main-text>
                                            <BaseText>
                                                Show connection link
                                            </BaseText>
                                        </template>
                                        <template #right-icon>
                                            <IconButton kind="mono" type="ghost">
                                                <ArrowIcon />
                                            </IconButton>
                                        </template>
                                    </TextBox>
                                    <TextBox>
                                        <template #left-icon>
                                            <div class="center">
                                                <QrIcon />
                                            </div>
                                        </template>
                                        <template #main-text>
                                            <BaseText>
                                                Show connection QR code
                                            </BaseText>
                                        </template>
                                        <template #right-icon>
                                            <IconButton kind="mono" type="ghost">
                                                <ArrowIcon />
                                            </IconButton>
                                        </template>
                                    </TextBox>
                                </div>
                            </div>
                        </div>
                        <div class="assistant">
                            <BaseText kind="subtitle">
                                Assistant
                            </BaseText>
                            <div class="contact">
                                <div class="email">
                                    <TextBox>
                                        <template #left-icon>
                                            <InitialsIcon>J</InitialsIcon>
                                        </template>
                                        <template #main-text>
                                            <BaseText kind="primary-bold">
                                                John Anderson (You)
                                            </BaseText>
                                        </template>
                                    </TextBox>
                                    <div class="divider"></div>
                                    <TextBox>
                                        <template #left-icon>
                                            <div class="center">
                                                <LinkIcon />
                                            </div>
                                        </template>
                                        <template #main-text>
                                            <BaseText>
                                                Show connection link
                                            </BaseText>
                                        </template>
                                        <template #right-icon>
                                            <IconButton kind="mono" type="ghost">
                                                <ArrowIcon />
                                            </IconButton>
                                        </template>
                                    </TextBox>
                                    <TextBox>
                                        <template #left-icon>
                                            <div class="center">
                                                <QrIcon />
                                            </div>
                                        </template>
                                        <template #main-text>
                                            <BaseText>
                                                Show connection QR code
                                            </BaseText>
                                        </template>
                                        <template #right-icon>
                                            <IconButton kind="mono" type="ghost">
                                                <ArrowIcon />
                                            </IconButton>
                                        </template>
                                    </TextBox>
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
    width: 465px;
    height: 762px;
    flex: 0 0 465px;
    display: flex;
    flex-direction: column;
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

.close {
    cursor: pointer;
}

.details {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-3);
}

.content {
    flex: 1;
    overflow-y: auto;
    padding: 0 var(--spacing-4);
}


.invite {
    padding: var(--spacing-5) 0;
}

.options {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-3);
}
.contact {
    display: flex;
    flex-direction: column;
    border: 1px solid var(--color-input-border);
    border-radius: var(--border-radius-4);
}

.email {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: var(--spacing-3);
}

.save {
    display: flex;
    align-items: center;
    flex: 0 0 55px;
    height: 55px;
    padding: 0 var(--spacing-3);
    background: var(--color-input-box-bg);
    border-top: 1px solid var(--color-input-border);
    border-bottom-left-radius: var(--border-radius-4);
    border-bottom-right-radius: var(--border-radius-4);
}

.contact-title {
    display: flex;
    align-items: center;
}

.info-box {
    display: flex;
    align-items: center;
    gap: var(--spacing-1);
    font-size: var(--size-text-small);
    color: var(--color-btn-info);
}

.info-box p {
    font-size: var(--size-text-small);
}

.center {
    width: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
}


.icon-center {
    margin: 0 9px;
}

.icon-rignt-center {
    margin-right: 6px;
}

.divider {
    width: 381px;
    position: relative;
}

.divider::before {
    content: "";
    display: block;
    height: 1px;
    width: 381px;
    border-bottom: 1px solid var(--color-divider);
    position: absolute;
    top: 50%;
}

.client,
.assistant {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-2);
}

.new-session-head {
    height: 206px;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-5);
    padding: 0 var(--spacing-4);
    padding-top: var(--spacing-3);
}

.new-session-title {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-3);
}

.new-session {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-5);
    padding-top: var(--spacing-4);
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

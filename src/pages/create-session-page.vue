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
                        <h2>Other options</h2>
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
                        <h2>Other options</h2>
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
                            <div class="contact">
                                <div class="email">
                                    <div class="contact-title">
                                        <h2>New contact</h2>
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
                                        <span class="info-icon">i</span>
                                        <p>The new contact will be saved in your contacts.</p>
                                    </div>
                                </div>
                            </div>
                        </FormField>
                    </div>
                    <div class="options">
                        <h2>Other options</h2>
                        <CheckboxInput :options="['Invite another assistant', 'Start muted']" />
                    </div>
                </div>
                <BoxRow class="footer">
                    <BaseButton type="outline">
                        Cancel
                    </BaseButton>
                    <BaseButton disable>
                        Create
                    </BaseButton>
                </BoxRow>
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
    justify-content: center;
    height: 100vh;
    background-color: #F5F5F5;
    gap: 45px;

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

h2 {
    flex: 1;
    font-size: var(--size-text-small);
    font-weight: var(--font-weight-semibold);
    text-transform: uppercase;
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

.info-icon {
    font-size: 10px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 1px solid var(--color-btn-info);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-btn-info);
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

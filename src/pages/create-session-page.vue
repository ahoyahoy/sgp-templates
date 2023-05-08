<template>
    <div class="container">
        <ModalHeader title="Create session">
            <template #left>
            </template>
            <template #right>
                <CloseIcon class="close" />
            </template>
        </ModalHeader>
        <div class="content">
            <div class="details">
                <FormField id="new" label="Session name" />
                <div class="date">
                    <SelectBox class="date-detail" id="day" :options="['Today', '7.5.2023', '8.5.2023']"
                        label="Start date" />
                    <SelectBox class="date-detail" id="time" :options="['8:00', '9:00', '10:00']" label="Start time" />
                </div>
            </div>
            <div class="invite">
                <FormField id="new" label="Invite a client" />
            </div>
            <div class="options">
                <h2>Other options</h2>
                <CheckboxInput :options="['Invite another assistant', 'Start muted']" />
            </div>
        </div>
        <div class="buttons">
            <OutlineButton class="btn">
                Cancel
            </OutlineButton>
            <BaseButton class="btn">
                Create
            </BaseButton>
        </div>
    </div>
</template>

<style scoped>
* {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-size: var(--size-text-medium);
}

.container {
    display: flex;
    flex-direction: column;
    width: 465px;
    border-left: 1px solid var(--color-grey-lighten-4);
    padding: 0 var(--spacing-4);
    height: 762px;
    min-height: 450px;
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
}

.date {
    display: flex;
    gap: var(--spacing-3);
}

.invite {
    padding: var(--spacing-5) 0;
}

.options {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-3);
}

.date-detail {
    flex-basis: 50%;
}

h2 {
    font-size: var(--size-text-small);
    font-weight: var(--font-weight-semibold);
    text-transform: uppercase;
}

.buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-3);
    flex: 0 0 84px;
    height: 84px;
    border-top: 1px solid var(--color-divider);
}

.btn {
    flex-basis: 50%;
}
</style>

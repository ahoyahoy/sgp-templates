<script setup>
const guide = [
    {
        title: '(Untitled)',
    },
    {
        title: '(Untitled)',
        open: true,
        img: 'dropzone',
    },
    {
        title: '(Untitled)',
        open: true,
        img: 'dropzone-hover',
    },
    {
        title: '(Untitled)',
        subtitle: 'Required',
        open: true,
        img: 'dropzone-overlay',
    },
    {
        add: true,
    },

]
</script>

<template>
    <div class="app_container desktop">
        <SidebarNav />
        <div class="page-body">
            <AppHeader title="New Guide">
                <template #right>
                    <BaseButton type="outline" kind="primary">
                        Show preview
                    </BaseButton>
                    <BaseButton class="save-btn">
                        <DoneIcon />
                        Save
                    </BaseButton>
                    <IconButton kind="mono" type="ghost">
                        <CloseIcon />
                    </IconButton>
                </template>
            </AppHeader>
            <div class="page-content">
                <div class="content-box">
                    <div class="items">
                        <div class="item" v-for="item, i in guide" :key="i">
                            <div class="item-content" v-if="item.title" :class="{ 'open': item.open }">
                                <div class="item-left">
                                    <DragIcon />
                                    <div class="item-index">{{ i + 1 }}</div>
                                    <div>
                                        <div class="item-title">{{ item.title }}</div>
                                        <div class="subtitle" v-if="item.subtitle">{{ item.subtitle }}</div>
                                    </div>
                                </div>
                                <div class="item-right">
                                    <div class="icons-left">
                                        <IconButton kind="mono" type="ghost">
                                            <CopyIcon />
                                        </IconButton>
                                        <IconButton kind="mono" type="ghost">
                                            <DeleteIcon class="delete" />
                                        </IconButton>
                                    </div>
                                    <div class="vertical-divider"></div>
                                    <IconButton kind="mono" type="ghost">
                                        <ArrowIcon :class="{ 'open-icon': item.open }" />
                                    </IconButton>
                                </div>
                            </div>
                            <div class="item-open" v-if="item.open">
                                <div class="open-left">
                                    <FormField label="Type">
                                            <SelectBox :options="['Text Field']" label="Type" >
                                        </SelectBox>
                                    </FormField>
                                    <FormField label="Name">
                                        <TextInput placeholder="Type the name of the field" />
                                    </FormField>
                                    <FormField label="Description">
                                        <template #comment>
                                            <BaseText kind="primary-light-2">
                                                Optional
                                            </BaseText>
                                        </template>
                                        <TextInput placeholder="Type the description of the field" />
                                    </FormField>
                                    <CheckboxInput :options="['Required field']" />
                                </div>
                                <div class="open-right" v-if="item.img === 'dropzone'">
                                        <p>Choose or drop images here</p>
                                        <p>You can upload jpg, png, svg or PDF files.</p>
                                </div>
                                <div class="open-right hover" v-if="item.img === 'dropzone-hover'">
                                        <p>Choose or drop images here</p>
                                        <p>You can upload jpg, png, svg or PDF files.</p>
                                </div>
                                <div class="open-right overlay" v-if="item.img === 'dropzone-overlay'">
                                    <div class="overlay-bg">
                                        <DeleteIcon />
                                    </div>
                                </div>
                            </div>
                            <div class="item-content" v-if="item.add">
                               <BaseButton type="outline" kind="primary">
                                   <AddIcon />
                                   Add field
                               </BaseButton>
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
    flex-direction: row;
    height: 100vh;
    font-size: var(--size-text-medium);
}

.app_container.desktop {
    min-width: 1024px;
    min-height: 500px;
}

.page-body {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    min-width: 0;
}

.save-btn {
    gap: var(--spacing-1);
}

.page-content {
    display: flex;
    justify-content: center;
    flex: 1;
    overflow-y: auto;
    padding: 0 var(--spacing-5);
}

.content-box {
    display: flex;
    flex-direction: column;
    max-width: 1112px;
    width: 100%;
    height: fit-content;
    margin-bottom: var(--spacing-3);
    border-radius: var(--border-radius-5);
    border: 1px solid var(--color-border);
    background: var(--color-purple-lighten-5);
    padding: var(--spacing-3);
}

.items {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-4);
}

.item {
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    width: 100%;
    user-select: none;
    border-radius: var(--border-radius-3);
    border: 1px solid var(--color-purple-lighten-3);
    background: var(--color-white-base);
    box-shadow: 0px 2px 6px 0px rgba(33, 33, 44, 0.05);
}

.item-content {
    display: flex;
    align-items: center;
    gap: var(--spacing-1);
    flex-shrink: 0;
    width: 100%;
    flex: 0 0 56px;
    padding: 0 var(--spacing-3);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-hight-2);
}

.open {
    border-bottom: 1px solid var(--color-purple-lighten-3);
}

.open-icon {
    transform: rotate(180deg);
}

.item-index {
    color: var(--color-grey-lighten-2);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-hight-2);
}

.item-title {
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-hight-2);
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.subtitle {
    color: var(--color-grey-lighten-2);
    font-size: var(--size-text-small);
    line-height: var(--line-hight-1);
}

.item-left {
    display: flex;
    flex: 1;
    align-items: center;
    gap: var(--spacing-2);
}


.item-right {
    display: flex;
    align-items: center;
}

.icons-left {
    display: flex;
}

.delete {
    color: var(--color-red-base);
}

.vertical-divider {
    height: var(--spacing-5);
    width: 1px;
    background: var(--color-grey-lighten-3);
    margin: 0 var(--spacing-1);
}


.item-open {
    display: flex;
    position: relative;
    gap: var(--spacing-4);
    width: 100%;
    padding: var(--spacing-4) var(--spacing-4) var(--spacing-4) var(--spacing-5);
}

.item-open::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 1px;
    background-color: var(--color-purple-base);
}

.open-left {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-3);
    width: 50%;
}

.open-right {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 50%;
    border-radius: var(--border-radius-5);
    border: 1px dashed var(--color-grey-lighten-3);
    background-color: var(--color-white-base);
}

.open-right p:first-child {
    color: var(--color-text-secondary);
    line-height: var(--line-hight-2);
}
.open-right p:nth-child(2) {
    color: var(--color-text-disabled);
    line-height: var(--line-hight-2);
}

.open-right.hover {
    background-color: var(--color-purple-lighten-4);
}
.open-right.overlay {
    background: url(../../img/drag-box.png) ;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    border: none;
}

.overlay-bg {
    width: 100%;
    height: 100%;
    border-radius: var(--border-radius-5);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.64);
}
.open-right.overlay svg {
    color: var(--color-white-base);
    width: 32px;
    height: 32px;
}

</style>

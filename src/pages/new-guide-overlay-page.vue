<script setup>
import img from '../../img/drag-box.png'

const rndId = 'id-' + Math.random().toString(36).substring(7)
const rndId1 = 'id-' + Math.random().toString(36).substring(7)

const page = [
    {
        img: img,
        active: true,
    },
    {
        img: img,
    },
    {
        img: img,
    },
    {
        img: img,
    },
    {
        img: img,
    },
    {
        img: img,
    },
    {
        img: img,
    },
    {
        img: img,
    },
    {
        img: img,
    },
    {
        img: img,
    },
]
const selection = [
    {
        option: 'All pages',
    },
    {
        option: 'Custom',
    },
]
</script>

<template>
    <div class="overlay-bg">
        <div class="overlay-box">
            <ModalHeader title="Select pages from PDF" kind="secondary">
                <template #right>
                    <IconButton kind="mono" type="ghost">
                        <CloseIcon />
                    </IconButton>
                </template>
            </ModalHeader>
            <div class="body">
                <div class="left">
                    <div class="checkbox-container" v-for="item, i in page" :key="i">
                        <label :for="`${rndId}-${i}`" :class="{ 'active': item.active }">
                            <input :id="`${rndId}-${i}`" type="checkbox" :value="page">
                            <img class="image" :src="item.img" alt="">
                        </label>
                        <div class="box-title">Page {{ i + 1 }}</div>
                    </div>
                </div>
                <div class="right">
                    <div class="options">
                        <div class="options-title">Page selection type</div>
                        <label class="options-item" :for="`${rndId1}-${i}`" v-for="item, i in selection" :key="i">
                            <input :id="`${rndId1}-${i}`" type="radio" :value="item.option" name="selection">
                            <span>{{ item.option }}</span>
                        </label>
                    </div>
                    <div class="number">
                        <FormField label="Number of pages">
                            <TextInput />
                        </FormField>
                        <p class="num-subtitle">You can type individual page numbers e.g.:&nbsp;1,2,3 or range e.g.:&nbsp;1-10</p>
                    </div>
                    <label for="apply" class="apply">
                        <input id="apply" type="checkbox" value="apply">
                        Apply selected pages to a separate form fields
                    </label>
                </div>
            </div>
            <div class="footer">
                <BaseButton type="ghost" kind="purple">
                    Cancel
                </BaseButton>
                <BaseButton type="default" kind="primary">
                    Use selected
                </BaseButton>
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

.overlay-bg {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    background-color: rgba(65, 66, 88, 0.8);
}
.overlay-box {
    display: flex;
    flex-direction: column;
    width: 736px;
    height: 611px;
    flex-shrink: 0;
    border-radius: var(--border-radius-5);
    background: var(--color-white-base);
}

.body {
    display: flex;
    gap: var(--spacing-4);
    flex: 1;
    padding: 0 var(--spacing-5);
    overflow: auto;
}

.left {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-3);
    width: 65%;
    overflow: auto;
}

.checkbox-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-0);
}

.checkbox-container label {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 120px;
    height: 140px;
    flex-shrink: 0;
    padding: var(--spacing-1);
    gap: var(--spacing-2);
    user-select: none;
    border-radius: var(--border-radius-3);
    border: 1px solid var(--color-grey-lighten-3);
    background: var(--color-white-base);
}

label.active {
    border-radius: var(--border-radius-3);
    border: 2px solid var(--color-purple-base);
    background: var(--color-white-base);
}

.checkbox-container input[type="checkbox"] {
    display: flex;
    align-self: end;
    width: 16px;
    height: 16px;
    border: 1px solid var(--color-input-border);
    border-radius: var(--border-radius-3);
}

.image {
    width: 100px;
    height: 78.592px;
    flex-shrink: 0;
}

.box-title {
    color: var(--color-grey-lighten-2);
    font-size: var(--size-text-small);
    line-height: var(--line-hight-1);
}

.right {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-5);
    width: 35%;
    overflow: auto;
}

.options {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-3);
}

.options-title {
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-hight-1);
}

.options-item {
    display: flex;
    align-items: center;
    gap: var(--spacing-2);
}

.number {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-1);
}

.num-subtitle {
    color: var(--color-grey-lighten-2);
    font-size: var(--size-text-small);
    line-height: var(--line-hight-1);
}

.apply {
    display: flex;
    align-items: flex-start;
    gap: var(--spacing-2);
    line-height: var(--line-hight-2);
}

.apply input {
    min-width: 24px;
    min-height: 24px;
}

.footer {
    display: flex;
    gap: var(--spacing-3);
    align-items: center;
    justify-content: end;
    flex: 0 0 var(--spacing-6);
    padding: 0 var(--spacing-5);
    background-color: var(--color-purple-lighten-5);
    border-top: 1px solid var(--color-purple-lighten-4);
    border-radius: 0 0 var(--border-radius-5) var(--border-radius-5);
}
</style>

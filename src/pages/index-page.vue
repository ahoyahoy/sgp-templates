<script setup>
import DataList from '../components/advanced/data-list.vue'
import AppHeader from '../components/layout/app-header.vue'
import BaseButton from '../components/primitives/base-button.vue'
import TabNav from '../components/primitives/tab-nav.vue'
import TextInput from '../components/primitives/text-input.vue'

const sessions = [
    {
        date: 'Mon, 21 Jul at 08:00',
        title: 'Check bizHub 3526 printer in Prague',
    },
    {
        date: 'Mon, 21 Jul at 08:00',
        title: 'Broken bizHub 1762 in Berlin',
        disabled: true,
    },
    {
        date: 'Mon, 21 Jul at 08:00',
        title: 'Broken bizHub 1762 in Berlin',
        disabled: true,
    },
    {
        date: 'Mon, 21 Jul at 08:00',
        title: 'Broken bizHub 1762 in Berlin',
        disabled: true,
    },
    {
        date: 'Mon, 21 Jul at 08:00',
        title: 'Broken bizHub 1762 in Berlin',
        disabled: true,
    },
    {
        date: 'Mon, 21 Jul at 08:00',
        title: 'Broken bizHub 1762 in Berlin',
        disabled: true,
    },
]
</script>


<template>
    <h1>AireLink</h1>
    <nav>
        <router-link to="/sessions">Sessions</router-link>
    </nav>

    <BaseButton>
        <svg xmlns="http://www.w3.org/2000/svg" height="15" viewBox="0 96 960 960" width="15">
            <path
                d="M140 896q-24 0-42-18t-18-42V316q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302L140 371v465h680V371L480 594Zm0-60 336-218H145l335 218ZM140 371v-55 520-465Z" />
        </svg>
        Click me
    </BaseButton>

    <TextInput placeholder="xyxyx" />
    <div class="fx">
        <AppHeader title="ahoy">
            <template #left>
                <TextInput placeholder="xy">
                    <template #icon>
                        <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960"
                            width="48">
                            <path
                                d="M796 935 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l264 262-44 44ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z" />
                        </svg>
                    </template>
                </TextInput>
            </template>
            <template #right>
                <BaseButton>
                    <svg xmlns="http://www.w3.org/2000/svg" height="15" viewBox="0 96 960 960" width="15">
                        <path
                            d="M140 896q-24 0-42-18t-18-42V316q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302L140 371v465h680V371L480 594Zm0-60 336-218H145l335 218ZM140 371v-55 520-465Z" />
                    </svg>
                    Click me
                </BaseButton>
                <BaseButton>
                    <svg xmlns="http://www.w3.org/2000/svg" height="15" viewBox="0 96 960 960" width="15">
                        <path
                            d="M140 896q-24 0-42-18t-18-42V316q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302L140 371v465h680V371L480 594Zm0-60 336-218H145l335 218ZM140 371v-55 520-465Z" />
                    </svg>
                    Click me
                </BaseButton>
            </template>
        </AppHeader>


        <AppHeader title="Team">
            <template #right>
                <BaseButton>
                    <svg xmlns="http://www.w3.org/2000/svg" height="15" viewBox="0 96 960 960" width="15">
                        <path
                            d="M140 896q-24 0-42-18t-18-42V316q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302L140 371v465h680V371L480 594Zm0-60 336-218H145l335 218ZM140 371v-55 520-465Z" />
                    </svg>
                    Create Team
                </BaseButton>
            </template>
        </AppHeader>

        <TabNav :tabs="['Active', 'Second', 'Third']" :activeTab="1" />

        <DataList :data="sessions">
            <template #left="{item}">
                <div class="session-blok-left">
                    <div>{{ item.date }}</div>
                    <div>{{ item.title }}</div>
                    <div>name1, name2</div>
                </div>
            </template>
            <template #right="{item}">
                <div>[icon]</div>
                <BaseButton :style="{visibility: item.disabled ? 'hidden' : 'visible'}">
                    <svg xmlns="http://www.w3.org/2000/svg" height="15" viewBox="0 96 960 960" width="15">
                        <path
                            d="M140 896q-24 0-42-18t-18-42V316q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302L140 371v465h680V371L480 594Zm0-60 336-218H145l335 218ZM140 371v-55 520-465Z" />
                    </svg>
                </BaseButton>
            </template>
        </DataList>

    </div>
</template>

<script>

</script>

<style scoped>

.session-blok-left {
    color: green;
    display: flex;
    flex-direction: column;
}

h1 {
    color: blue;
}

.fx {
    display: flex;
    flex-direction: column;
    background: pink;

}
</style>

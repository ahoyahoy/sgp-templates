<script setup>
const search = [
    {
        icon: 'school',
        title: 'How to fix the internet connection for printers bizHub 3526',
        topic: 'Topic',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    },
    {
        icon: 'school',
        title: 'How to fix the internet connection for printers bizHub 3526',
        topic: 'Topic',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
        active: true,
    },
    {
        icon: 'school',
        title: 'How to fix the internet connection for printers bizHub 3526',
        topic: 'Topic',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    },
    {
        icon: 'school',
        title: 'How to fix the internet connection for printers bizHub 3526',
        topic: 'Topic',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    },
    {
        icon: 'schedule',
        title: 'How to fix the internet connection for printers bizHub 3526',
    },
    {
        icon: 'schedule',
        title: 'How to fix the internet connection for printers bizHub 3526',
    },
    {
        icon: 'schedule',
        title: 'How to fix the internet connection for printers bizHub 3526',
    },
    {
        icon: 'schedule',
        title: 'How to fix the internet connection for printers bizHub 3526',
    },
    {
        searchLoading: true,
    },
    {
        searchLoading: true,
    },
]
</script>
 <template>
    <div class="helper-container">
        <div class="search-box">
            <TextInput placeholder="Search in Knowledge base" kind="underline">
                <template #icon>
                    <SearchIcon />
                </template>
                <template #right-icon>
                    <CloseIcon />
                </template>
            </TextInput>
            <BaseText kind="search-result">
                4 results
            </BaseText>
           <DataList :data="search" kind="search">
               <template #left="{ item }">
                   <SchoolIcon v-if="item.icon === 'school'" class="more-options" type="ghost"  :style="{ visibility: item.disabled ? 'hidden' : 'visible', }"/>
                   <ScheduleIcon v-if="item.icon === 'schedule'" class="more-options" type="ghost"  :style="{ visibility: item.disabled ? 'hidden' : 'visible', }"/>
               </template>
               <template
                #right="{ item }">
                    <div class="title">{{ item.title }}</div>
                    <div v-if="item.topic || item.text" class="search-content">
                        <div class="topic">{{ item.topic }}</div>
                        <div class="text">{{ item.text }}</div>
                    </div>
               </template>
           </DataList>
       </div>
    </div>
 </template>

<style scoped>
    * {
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        font-size: var(--size-text-medium);
    }

    .helper-container {
        display: flex;
        justify-content: center;
        padding: 3em 0;
        overflow: scroll;
        background-color: #F5F5F5;
    }

    .search-box {
        width: 811px;
        background: var(--color-white-base);
        border-radius: var(--border-radius-5);
        padding: var(--spacing-5);
    }

    .search-content {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-1);
    }

    .title {
        font-size: var(--size-h4);
        line-height: var(--line-hight-2);
        font-weight: var(--font-weight-semibold);
    }

    .topic,
    .text {
        font-size: var(--size-text-medium);
        color: var(--color-text-primary-2);
        line-height: var(--line-hight-2);
    }

</style>

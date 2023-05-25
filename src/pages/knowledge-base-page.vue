
<template>
    <div class="app_container desktop">
        <SidebarNav />

        <div class="search-menu">
            <BaseText kind="h1">
                Knowledge base
            </BaseText>
            <div class="menu">
                <TextInput placeholder="Search in Knowledge base" kind="sized">
                    <template #icon>
                        <SearchIcon />
                    </template>
                </TextInput>
                <div class="buttons-box">
                    <BaseButton type="ghost" kind="mono-left">
                        <PhoneIcon />
                        Sessions
                    </BaseButton>
                    <BaseButton type="ghost" kind="mono-left">
                        <MailIcon />
                        Sessions
                    </BaseButton>
                </div>
            </div>
            <div class="divider"></div>
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

.search-menu {
    display: flex;
    flex-direction: column;
    flex: 0 0 317px;
    height: 100%;
}

.kind-h1 {
    display: flex;
    align-items: center;
    padding: 0 var(--spacing-5);
    flex: 0 0 96px;
    height: 96px;
}

.menu {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-3);
    padding: 0 var(--spacing-5);
}
.buttons-box {
    display: flex;
    flex-direction: column
}

.divider {
  width: 270px;
  height: 34px;
  position: relative;
  margin: 0 auto;
}
.divider::before {
  content: "";
  display: block;
  height: 1px;
  width: 270px;
  border-bottom: 1px solid var(--color-divider);
  position: absolute;
  top: 50%;
}

</style>

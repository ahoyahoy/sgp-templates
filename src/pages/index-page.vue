<script setup>
</script>


<template>
    <div class="nav">
        <h1>AireLink</h1>
        <nav>
            <router-link to="/sessions">Sessions</router-link>
            <router-link to="/create-session">Create session</router-link>
            <router-link to="/knowledge-base">Knowledge base</router-link>
            <router-link to="/knowledge-base-search">Knowledge base search</router-link>
            <router-link to="/insights">Insights</router-link>
            <router-link to="/teams">Teams</router-link>
            <router-link to="/create-topic">Create topic</router-link>
            <router-link to="/subscription-overview">Subscription overview</router-link>
            <router-link to="/subscription-payment">Subscription payment</router-link>
        </nav>
    </div>
</template>

<script>

</script>

<style scoped>
* {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    font-size: var(--size-text-medium);
}

.nav,
nav {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-2);
    justify-content: center;
    align-items: center;
    padding: var(--spacing-3);
}

h1 {
    color: var(--color-purple-base);
    font-size: var(--size-h1);
}
</style>

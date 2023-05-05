<script setup>
defineProps(['tabs', 'activeTab'])
</script>

<template>
  <div class="tabs">
    <ul class="links">

      <template v-for="tab, i in tabs" :key="i">
        <li class="link" :class="{ active: activeTab == i }">
          <a href="#">{{ tab }}</a>
        </li>
      </template>
    </ul>
  </div>
</template>

<style scoped>
.tabs {
  position: relative;
  font-weight: var(--font-weight-semibold);
  flex: 0 0 41px;
  border-bottom: 1px solid var(--color-divider);
}

.links {
  position: absolute;
  display: flex;
  gap: var(--spacing-5);
  left: var(--spacing-5);
  height: 41px;
}

.link {
  list-style: none;
}

.link a {
  display: flex;
  align-items: center;
  position: relative;
  height: 100%;
  border-bottom: 2px solid transparent;
  border-radius: var(--border-radius-1);
  color: #444;
  text-decoration: none;
  transition: color 0.2s ease;
}

.link a::after {
  transition: background-color 0.2s ease;
}

.link:hover a::after,
.link.active a::after {
  content: "";
  position: absolute;
  bottom: -2px;
  width: 100%;
  height: 2px;
  border-radius: var(--border-radius-1);
  background-color: var(--color-tabs-hover);
}

.link a:hover,
.link.active a {
  color: var(--color-tabs-hover);
}
</style>

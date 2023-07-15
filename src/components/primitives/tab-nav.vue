<script setup>
defineProps(['tabs', 'activeTab', 'kind', 'type'])
</script>

<template>
  <div :class="['tabs', `kind-${kind}`, `type-${type}`,]">
    <ul class="links">
      <template v-for="tab, i in tabs" :key="i">
        <li :class="['link', { active: activeTab === i, inactive: activeTab !== i }]">
          <a href="#">{{ tab }}</a>
        </li>
      </template>
    </ul>
    <div class="btn">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<style scoped>
.tabs {
  position: relative;
  border-bottom: 1px solid var(--color-divider);
}

.tabs .link.active {
  font-weight: var(--font-weight-semibold);
}

.links {
  display: flex;
  gap: var(--spacing-5);
  padding: 0 var(--spacing-5);
  line-height: var(--line-hight-4);
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
  color: var(--color-grey-base);
  text-decoration: none;
  transition: color 0.2s ease;
}

.link a::after {
  transition: color 0.2s ease;
}

.link.active a::after {
  content: "";
  position: absolute;
  bottom: -3px;
  width: 100%;
  height: 2px;
  border-radius: var(--border-radius-1);
  background-color: var(--color-tabs-hover);
}

.link.active a {
  color: var(--color-tabs-hover);
  font-weight: var(--font-weight-semibold);
}

.kind-secondary .inactive a {
  color: var(--color-text-primary-2);
  font-weight: var(--font-weight-normal);
}
.type-position-3 .links {
  padding: 0 var(--spacing-3);
}
.type-mobile .links {
  padding: 0 var(--spacing-3);
}

.btn {
  position: absolute;
    display: flex;
    align-items: center;
    gap: var(--spacing-5);
    right: var(--spacing-3);
    top: 0;
    height: var(--line-hight-4);
}

@media (min-width: 769px) {
  .link:hover a::after {
  content: "";
  position: absolute;
  bottom: -3px;
  width: 100%;
  height: 2px;
  border-radius: var(--border-radius-1);
  background-color: var(--color-tabs-hover);
}

.link a:hover {
  color: var(--color-tabs-hover);
  font-weight: var(--font-weight-semibold);
}
.kind-secondary .inactive:hover a {
  color: var(--color-tabs-hover);
}

}

</style>

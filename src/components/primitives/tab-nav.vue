<script setup>
defineProps(['tabs', 'activeTab', 'kind', 'type', 'tabBadges'])
</script>

<template>
  <div :class="['tabs', `kind-${kind}`, `type-${type}`,]">
    <ul class="links">
      <template v-for="tab, i in tabs" :key="i">
        <li :class="['link', { active: activeTab === i, inactive: activeTab !== i }]">
          <a href="#">
            {{ tab }}
            <span v-if="tabBadges?.[i] !== undefined" class="badge">{{ tabBadges[i] }}</span>
          </a>
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

.type-badge .link a {
  gap: var(--spacing-0);
}

.type-badge .link.active .badge {
  background-color: var(--color-tabs-hover);
  color: var(--color-white-base);
}

.badge {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 18px;
  padding: 2px var(--spacing-1);
  border-radius: 100px;
  background-color: var(--color-grey-lighten-4);
  color: var(--color-grey-lighten-1);
  transition: background-color 0.2s ease;
  font-size: var(--size-text-small);
  font-weight: var(--font-weight-semibold);
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
.type-badge .link a:hover .badge {
  background-color: var(--color-tabs-hover);
  color: var(--color-white-base);
}
.kind-secondary .inactive:hover a {
  color: var(--color-tabs-hover);
}

}

</style>

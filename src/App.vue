<script setup>
import session from './components/session.vue';
</script>

<template>
  <div class="sidebar">
    <div class="sidebar-head">
      <img class="sidebar-logo" src="img/logo-lite.svg" alt="logo">
    </div>
    <div class="sidebar-body">
      <nav class="sidebar-links">
        <a href="#" class="sidebar-link sidebar-link-active ">
          <img class="sidebar-link-icon" src="img/icon.png" alt="">
          <span class="sidebar-link-text">Sessions</span>
          <span class="sidebar-link-badge">5</span>
        </a>
        <a href="#" class="sidebar-link">
          <img class="sidebar-link-icon" src="img/icon.png" alt="">
          <span class="sidebar-link-text">Media Library</span>
          <span class="sidebar-link-badge">4</span>
        </a>
        <a href="#" class="sidebar-link">
          <img class="sidebar-link-icon" src="img/icon.png" alt="">
          <span class="sidebar-link-text">Contacts</span>
          <span class="sidebar-link-badge">8</span>
        </a>
        <a href="#" class="sidebar-link">
          <img class="sidebar-link-icon" src="img/icon.png" alt="">
          <span class="sidebar-link-text">Dashboard</span>
          <span class="sidebar-link-badge no-show">5</span>
        </a>
        <div class="sidebar-divider"></div>
        <a href="#" class="sidebar-link">
          <span class="sidebar-link-text">My Account</span>
        </a>
        <a href="#" class="sidebar-link">
          <span class="sidebar-link-text">Forum</span>
        </a>
        <a href="#" class="sidebar-link">
          <span class="sidebar-link-text">Referral Program</span>
        </a>

      </nav>
    </div>
    <div class="sidebar-foot">
      <a href="#" class="sidebar-link">
        <img class="sidebar-link-icon" src="img/icon.png" alt="">
        <span class="sidebar-link-text">Log Out</span>
      </a>
    </div>
  </div>
  <session msg="Vite + Vue" />
</template>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  flex: 0 0 264px;
  height: 100%;
  background-color: var(--color-sidebar-main);
}

.sidebar-head {
  display: flex;
  align-items: center;
  padding-left: var(--spacing-5);
  flex: 0 0 96px;
}

.sidebar-logo {
  width: 143px;
  height: 24px;
}

.sidebar-body {
  flex-grow: 1;
  overflow-y: auto;
}

.sidebar-links {
  display: flex;
  flex-direction: column;
  padding: 0 var(--spacing-3);
}

.sidebar-link {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  border-radius: var(--border-radius-3);
  padding: 0 var(--spacing-3);
  height: 40px;
  transition: background-color 0.2s ease;
}

.sidebar-link-icon {
  width: 22px;
  height: 22px;
}

.sidebar-link-text {
  flex-grow: 1;
  color: var(--color-text-secondary);
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.sidebar-link-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  padding: 0 var(--spacing-2);
  border-radius: 100px;
  background-color: var(--color-sidebar-secondary);
  color: var(--color-text-secondary);
  transition: background-color 0.2s ease;
}

.sidebar-link-active {
  background-color: var(--color-sidebar-btn-active);
}

.sidebar-link:hover {
  background-color: var(--color-sidebar-btn-hover);
}

.sidebar-link-active .sidebar-link-badge {
  background-color: var(--color-sidebar-btn-badge-active);
}

.sidebar-link:hover .sidebar-link-badge {
  background-color: var(--color-sidebar-btn-badge-hover);
}

.sidebar-divider {
  width: 231px;
  height: 34px;
  position: relative;
}

.sidebar-divider::before {
  content: "";
  display: block;
  height: 1px;
  width: 231px;
  border-bottom: 1px solid var(--color-divider);
  position: absolute;
  top: 50%;
}

.sidebar-foot {
  display: flex;
  flex-direction: column;
  flex: 0 0 40px;
  padding: 0 var(--spacing-3);
  margin-bottom: var(--spacing-5);
}
</style>

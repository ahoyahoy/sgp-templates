<template>
  <div class="sidebar">
    <div class="head">
      <img class="logo" src="img/logo-lite.svg" alt="logo">
    </div>
    <div class="body">
      <nav class="links">
        <a href="#" class="link active ">
          <img class="icon" src="img/icon.png" alt="">
          <span class="text">Sessions</span>
          <span class="badge">5</span>
        </a>
        <a href="#" class="link">
          <img class="icon" src="img/icon.png" alt="">
          <span class="text">Media Library</span>
          <span class="badge">4</span>
        </a>
        <a href="#" class="link">
          <img class="icon" src="img/icon.png" alt="">
          <span class="text">Contacts</span>
          <span class="badge">8</span>
        </a>
        <a href="#" class="link">
          <img class="icon" src="img/icon.png" alt="">
          <span class="text">Dashboard</span>
          <span class="badge no-show">5</span>
        </a>
        <div class="divider"></div>
        <a href="#" class="link">
          <span class="text">My Account</span>
        </a>
        <a href="#" class="link">
          <span class="text">Forum</span>
        </a>
        <a href="#" class="link">
          <span class="text">Referral Program</span>
        </a>

      </nav>
    </div>
    <div class="foot">
      <a href="#" class="link">
        <img class="icon" src="img/icon.png" alt="">
        <span class="text">Log Out</span>
      </a>
    </div>
  </div>
</template>


<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  flex: 0 0 264px;
  height: 100%;
  background-color: var(--color-sidebar-main);
}

.head {
  display: flex;
  align-items: center;
  padding-left: var(--spacing-5);
  flex: 0 0 96px;
}

.logo {
  width: 143px;
  height: 24px;
}

.body {
  flex-grow: 1;
  overflow-y: auto;
}

.links {
  display: flex;
  flex-direction: column;
  padding: 0 var(--spacing-3);
}

.link {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  border-radius: var(--border-radius-3);
  padding: 0 var(--spacing-3);
  height: 40px;
  transition: background-color 0.2s ease;
}

.icon {
  width: 22px;
  height: 22px;
}

.text {
  flex-grow: 1;
  color: var(--color-text-secondary);
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.badge {
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

.active {
  background-color: var(--color-sidebar-btn-active);
}

.link:hover {
  background-color: var(--color-sidebar-btn-hover);
}

.active .badge {
  background-color: var(--color-sidebar-btn-badge-active);
}

.link:hover .badge {
  background-color: var(--color-sidebar-btn-badge-hover);
}

.divider {
  width: 231px;
  height: 34px;
  position: relative;
}

.divider::before {
  content: "";
  display: block;
  height: 1px;
  width: 231px;
  border-bottom: 1px solid var(--color-divider);
  position: absolute;
  top: 50%;
}

.foot {
  display: flex;
  flex-direction: column;
  flex: 0 0 40px;
  padding: 0 var(--spacing-3);
  margin-bottom: var(--spacing-5);
}
</style>

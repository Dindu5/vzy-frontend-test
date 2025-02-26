<template>
  <header class="header">
    <nav class="navigation">
      <img class="logo" src="../assets/logo.png" alt="PollVue Logo" />
      <h1>Interactive Poll</h1>
    </nav>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped>
.navigation {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-xs);
}
.navigation .logo {
  width: 32px;
  height: 32px;
  border-radius: var(--border-radius-sm);
}
.navigation h1 {
  font-size: 1.5rem;
  line-height: 2rem;
  color: var(--color-text);
  text-align: center;
  margin: var(--spacing-md) 0;
}
</style>

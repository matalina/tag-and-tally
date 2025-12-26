<script lang="ts" setup>
import { RouterView } from 'vue-router'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <div id="main">
    <header>
      <AppHeader />
    </header>
    <main>
      <RouterView />
    </main>
    <footer>
      <AppFooter />
    </footer>
  </div>
</template>

<style scoped>
#main {
  display: grid;
  gap: var(--size-3);
  grid-template-areas:
    'header'
    'main'
    'footer';
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
  min-height: 100vh;
}

header {
  grid-area: header;
}

main {
  grid-area: main;
}

footer {
  grid-area: footer;
}

@media (max-width: 768px) {
  .container {
    grid-template-columns: 1fr;
    grid-template-areas:
      'header'
      'main'
      'footer'
      'aside'; /* sidebar drops to bottom */
  }
  aside {
    order: 4;
  }
}
</style>

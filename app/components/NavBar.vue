<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

const items: NavigationMenuItem[] = [
  {
    label: 'Home',
    to: '/',
  },
  // {
  //   label: 'Projects',
  //   to: '/projects',
  // },
  {
    label: 'About',
    to: '/about',
  },
  {
    label: 'Blog',
    to: '/blog',
  },
];
</script>

<template>
  <div
    class="mx-auto rounded-full bg-muted/70 backdrop-blur-sm fixed bottom-5 lg:bottom-auto lg:top-4 left-1/2 -translate-x-1/2 z-20 border border-muted/50 shadow-lg shadow-neutral-950/5"
  >
    <nav class="flex items-center gap-2 px-2">
      <UNavigationMenu :items="items" orientation="horizontal" variant="link" />
    </nav>
  </div>
</template>

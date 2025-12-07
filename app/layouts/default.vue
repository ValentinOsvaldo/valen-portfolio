<template>
  <div class="relative">
    <div class="noise-overlay" aria-hidden="true" />
    <div
      class="fixed inset-0 mesh-gradient pointer-events-none"
      aria-hidden="true"
    />
    <NavBar />
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { BreadcrumbItem } from '@nuxt/ui';

const route = useRoute();
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first();
});

const breadcrumbs: BreadcrumbItem[] = [
  {
    label: 'Home',
    to: '/blog',
  },
  {
    label: page.value?.title,
  },
];

useHead({
  title: page.value?.title,
});
</script>

<template>
  <UContainer class="relative z-10 p-4 mt-16 lg:mt-32">
    <UBreadcrumb :items="breadcrumbs" class="mb-4" />
    <ContentRenderer v-if="page" :value="page" />
    <div v-else>Not found</div>
  </UContainer>
</template>

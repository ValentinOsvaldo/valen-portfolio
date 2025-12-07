<script setup lang="ts">
const route = useRoute();
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first();
});
</script>

<template>
  <UContainer class="relative z-10 mt-32">
    <ContentRenderer v-if="page" :value="page" />
    <div v-else>Not found</div>
  </UContainer>
</template>

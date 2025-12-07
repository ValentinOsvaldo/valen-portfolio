<script setup lang="ts">
const { data: posts } = await useAsyncData('posts', () => {
  return queryCollection('content').all();
});
</script>

<template>
  <UContainer class="relative z-10 mt-30">
    <UBlogPosts>
      <UBlogPost v-for="post in posts" :key="post.id" :post="post" />
    </UBlogPosts>
  </UContainer>
</template>

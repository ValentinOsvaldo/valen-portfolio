<script setup lang="ts">
const { data: posts } = await useAsyncData('posts', () => {
  return queryCollection('content').order('date', 'DESC').all();
});
</script>

<template>
  <UContainer class="relative z-10 p-4 lg:mt-30">
    <h1 class="text-4xl font-medium mb-3">All articles</h1>
    <UBlogPosts>
      <UBlogPost
        v-for="post in posts"
        :key="post.id"
        v-bind="post"
        :to="post.path"
      />
    </UBlogPosts>
  </UContainer>
</template>

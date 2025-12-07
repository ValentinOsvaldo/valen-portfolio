<template>
  <UContainer class="min-h-screen flex items-center">
    <article class="max-w-2xl">
      <p class="inline-flex items-center gap-2 uppercase text-muted mb-4">
        <span className="relative flex h-2 w-2">
          <span
            className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"
          />
          <span
            className="relative inline-flex rounded-full h-2 w-2 bg-primary"
          />
        </span>
        Available for new projects
      </p>

      <h2 class="text-4xl lg:text-6xl font-medium mb-2">
        <span class="block"> Building the future </span>
        <span class="block"> of the web with </span>
        <span class="text-primary">precision and minimalism.</span>
      </h2>

      <p class="text-lg text-muted mb-3">
        Senior Front-End Developer with 5+ years of experience crafting
        performant, accessible, and visually refined digital experiences. I turn
        complex problems into elegant interfaces.
      </p>

      <div class="flex items-center gap-2">
        <UButton
          href="https://github.com/valentinosvaldo"
          target="_blank"
          rel="noopener noreferrer"
          icon="i-lucide-github"
          size="xl"
          variant="soft"
        />
        <UButton
          href="https://linkedin.com/in/valentin-osvaldo"
          target="_blank"
          rel="noopener noreferrer"
          icon="i-lucide-linkedin"
          size="xl"
          variant="soft"
        />
        <UButton
          href="mailto:valentin.osvaldo@outlook.com"
          icon="i-lucide-mail"
          size="xl"
          variant="soft"
        />
      </div>
    </article>
  </UContainer>
</template>

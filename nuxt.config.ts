// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/hints',
    '@nuxt/image',
    '@nuxt/test-utils',
    '@nuxt/fonts',
  ],
  alias: {
    assets: '/<srcDir>/assets',
  },

  css: ['~/assets/css/main.css'],

  fonts: {
    families: [
      {
        name: 'Inter',
        provider: 'google',
      },
    ],
  },

  content: {
    experimental: {
      sqliteConnector: 'native',
    },
  },
});

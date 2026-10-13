export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxtjs/i18n'],
  css: ['~/assets/css/main.css'],
  i18n: {
    baseUrl: 'https://amirabroun.github.io',
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    locales: [
      { code: 'en', language: 'en', name: 'English', file: 'en.json', dir: 'ltr' },
      { code: 'fa', language: 'fa', name: 'فارسی', file: 'fa.json', dir: 'rtl' },
    ],
  },
  nitro: {
    prerender: {
      routes: ['/fa'],
    },
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      script: [
        {
          // set theme before first paint to avoid a flash of the wrong theme
          innerHTML:
            '(function(){try{var t=localStorage.getItem("theme");if(t!=="dark"&&t!=="light"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.setAttribute("data-theme",t)}catch(e){document.documentElement.setAttribute("data-theme","light")}})()',
        },
      ],
    },
  },
})

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxtjs/i18n'],
  css: ['~/assets/css/main.css'],
  i18n: {
    baseUrl: 'https://amirabroun.ir',
    defaultLocale: 'fa',
    strategy: 'prefix_except_default',
    locales: [
      { code: 'fa', language: 'fa', name: 'فارسی', file: 'fa.json', dir: 'rtl' },
      { code: 'en', language: 'en', name: 'English', file: 'en.json', dir: 'ltr' },
    ],
  },
  nitro: {
    prerender: {
      routes: ['/en', '/now'], // /cv joins in Task 10 when the page content exists
    },
  },
  app: {
    head: {
      htmlAttrs: { lang: 'fa' },
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

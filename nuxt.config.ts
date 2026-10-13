export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Amir Abroun — Full-Stack Developer',
      script: [
        {
          // set theme before first paint to avoid a flash of the wrong theme
          innerHTML:
            '(function(){try{var t=localStorage.getItem("theme");if(t!=="dark"&&t!=="light"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.setAttribute("data-theme",t)}catch(e){document.documentElement.setAttribute("data-theme","light")}})()',
        },
      ],
      meta: [
        {
          name: 'description',
          content:
            'Amir Abroun — full-stack developer with 6+ years of experience. Laravel APIs, Vue & Nuxt frontends, Docker & CI/CD. Currently at Sanjeman.',
        },
        { property: 'og:title', content: 'Amir Abroun — Full-Stack Developer' },
        {
          property: 'og:description',
          content:
            'Full-stack developer — Laravel on the backend, Vue & Nuxt on the frontend, DevOps in between. 6+ years of experience.',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://amirabroun.github.io' },
      ],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    },
  },
})

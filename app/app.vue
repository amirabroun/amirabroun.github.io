<template>
  <div class="site">
    <SiteHeader />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
const { t, locale } = useI18n()
const isFa = computed(() => locale.value === 'fa')

useHead({
  title: () => t('meta.title'),
  htmlAttrs: {
    lang: () => (isFa.value ? 'fa' : 'en'),
    dir: () => (isFa.value ? 'rtl' : 'ltr'),
  },
  meta: [
    { name: 'description', content: () => t('meta.description') },
    { property: 'og:title', content: () => t('meta.title') },
    { property: 'og:description', content: () => t('meta.description') },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://amirabroun.github.io' },
    { property: 'og:locale', content: () => (isFa.value ? 'fa_IR' : 'en_US') },
  ],
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    { rel: 'alternate', hreflang: 'en', href: 'https://amirabroun.github.io/' },
    { rel: 'alternate', hreflang: 'fa', href: 'https://amirabroun.github.io/fa' },
    { rel: 'alternate', hreflang: 'x-default', href: 'https://amirabroun.github.io/' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Amir Abroun',
        jobTitle: 'Full-Stack Developer',
        url: 'https://amirabroun.github.io',
        worksFor: { '@type': 'Organization', name: 'Sanjeman', url: 'https://sanjeman.com/' },
        sameAs: [
          'https://github.com/amirabroun',
          'https://www.linkedin.com/in/amir-abroun-4a7ab321a/',
        ],
      }),
    },
  ],
})

let revealObserver: IntersectionObserver | null = null

function observeReveals() {
  document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => {
    revealObserver?.observe(el)
  })
}

onMounted(() => {
  revealObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          revealObserver?.unobserve(entry.target)
        }
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
  )
  observeReveals()
})

// after a locale switch the page remounts — re-observe the fresh elements
watch(locale, async () => {
  await nextTick()
  observeReveals()
})
</script>

<style>
.site {
  overflow-x: clip;
}
</style>

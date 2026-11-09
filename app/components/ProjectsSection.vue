<template>
  <section id="projects" class="py-22">
    <div class="container">
      <SectionHead num="04" :title="t('projects.heading')" />

      <p class="-mt-4 mb-6 text-center font-mono text-xs text-muted reveal">{{ t('projects.cloudflare') }}</p>

      <div class="grid gap-5 stagger sm:grid-cols-2">
        <article v-for="p in projects" :key="p.key" class="flex flex-col gap-2.5 rounded-lg border border-line bg-card p-6 reveal">
          <div class="flex flex-wrap items-center gap-3">
            <h3 class="font-display font-semibold">
              <a :href="p.url" target="_blank" rel="noopener" class="inline-flex items-center gap-2 text-ink hover:text-accent hover:no-underline">
                {{ t(`projects.items.${p.key}.title`) }}
                <IconExternal />
              </a>
            </h3>
            <span v-if="p.badge" class="rounded-full border border-ok-border bg-ok-bg px-3 py-0.5 font-mono text-xs text-ok-text">{{ t(`projects.items.${p.key}.badge`) }}</span>
          </div>
          <p class="flex-1 text-sm">{{ t(`projects.items.${p.key}.desc`) }}</p>
          <p class="mt-1 font-mono text-xs text-muted">{{ p.chips.join(' · ') }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const projects: { key: string; url: string; badge?: boolean; chips: string[] }[] = [
  {
    key: 'anbaritoys',
    url: 'https://anbaritoys.ir/',
    badge: true,
    chips: ['PHP 8.2', 'MariaDB', 'Docker', 'Zarinpal'],
  },
  {
    key: 'kapsul',
    url: 'https://kapsul.amirabroun.ir',
    chips: ['Nuxt 3', 'TypeScript', 'Cloudflare Workers', 'D1', 'Tailwind v4'],
  },
  {
    key: 'hermes_mini',
    url: 'https://github.com/amirabroun/hermes-mini',
    chips: ['TypeScript', 'Cloudflare', 'AI'],
  },
  {
    key: 'gin',
    url: 'https://github.com/amirabroun/gin',
    chips: ['Go', 'Gin'],
  },
  {
    key: 'redis_mysql',
    url: 'https://github.com/amirabroun/comparison-redis-and-mysql',
    chips: ['Redis', 'MySQL'],
  },
]
</script>

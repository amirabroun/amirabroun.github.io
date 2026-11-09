<template>
  <section id="skills" class="py-22">
    <div class="container">
      <SectionHead num="03" :title="t('skills.heading')" />

      <div class="grid gap-4 stagger sm:grid-cols-2">
        <article class="rounded-lg border border-line bg-card p-6 reveal">
          <h3 class="mb-3 flex items-center gap-2.5 font-display font-semibold text-ink">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-accent" aria-hidden="true"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/></svg>
            {{ t('skills.backend') }}
          </h3>
          <p class="font-mono text-sm leading-loose text-body">PHP 8 · Laravel · MySQL · Redis / Horizon · REST API</p>
        </article>

        <article class="rounded-lg border border-line bg-card p-6 reveal">
          <h3 class="mb-3 flex items-center gap-2.5 font-display font-semibold text-ink">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-accent" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
            {{ t('skills.frontend') }}
          </h3>
          <p class="font-mono text-sm leading-loose text-body">Vue 2/3 · Nuxt 3 · TypeScript · Tailwind CSS v4 · Vuetify</p>
        </article>

        <article class="rounded-lg border border-line bg-card p-6 reveal">
          <h3 class="mb-3 flex items-center gap-2.5 font-display font-semibold text-ink">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-accent" aria-hidden="true"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><path d="M6 6h.01"/><path d="M6 18h.01"/></svg>
            {{ t('skills.devops') }}
          </h3>
          <p class="font-mono text-sm leading-loose text-body">Docker · nginx · GitLab CI/CD · {{ locale === 'fa' ? 'لینوکس (TLS/فایروال)' : 'Linux (TLS/firewall)' }} · GlitchTip / Sentry</p>
        </article>

        <article class="rounded-lg border border-line bg-card p-6 reveal">
          <h3 class="mb-3 flex items-center gap-2.5 font-display font-semibold text-ink">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-accent" aria-hidden="true"><path d="M3 12h4l3-9 4 18 3-9h4"/></svg>
            {{ t('skills.methods') }}
          </h3>
          <p class="font-mono text-sm leading-loose text-body">Git · {{ locale === 'fa' ? 'TDD با Pest (۸۰۰+)' : 'TDD w/ Pest (800+)' }} · phpstan / rector · vue-tsc · Playwright · ADR</p>
        </article>

        <article class="rounded-lg border border-dashed border-accent/40 bg-gradient-to-br from-surface to-accent-soft p-6 reveal sm:col-span-2">
          <h3 class="mb-3 flex items-center gap-2.5 font-display font-semibold text-ink">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-accent" aria-hidden="true"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
            {{ t('skills.learning') }}
          </h3>
          <p class="flex items-center gap-2.5 font-mono text-sm text-body">
            <span class="size-2 rounded-full bg-accent motion-safe:animate-pulse" aria-hidden="true"></span>
            Go — {{ t('skills.learning_note') }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t, locale } = useI18n()
</script>

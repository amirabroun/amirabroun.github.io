<template>
  <section id="top" class="relative overflow-hidden pt-40 pb-24">
    <div class="container text-center">
      <div class="mx-auto mb-6 size-20 rounded-full bg-[image:var(--grad)] p-[3px] reveal">
        <img
          v-if="!avatarFailed"
          src="/img/avatar.jpg"
          width="80"
          height="80"
          :alt="t('name')"
          class="size-full rounded-full object-cover"
          @error="avatarFailed = true"
        >
        <span v-else class="grid size-full place-items-center rounded-full bg-bg font-display text-2xl font-bold text-ink" aria-hidden="true">AA</span>
      </div>

      <p class="reveal">
        <span class="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-4 py-1.5 text-sm font-medium text-ink">
          <span class="size-2 rounded-full bg-ok motion-safe:animate-pulse" aria-hidden="true"></span>
          {{ t('hero.status') }}
        </span>
      </p>

      <p class="mt-6 font-mono text-xs font-medium uppercase tracking-[0.22em] text-accent reveal">{{ t('hero.eyebrow') }}</p>

      <h1 class="mx-auto mt-3 max-w-4xl font-display text-[clamp(2.75rem,8vw,4.75rem)] font-bold leading-[1.05] tracking-[-0.03em] text-ink reveal">
        {{ t('name') }}
      </h1>

      <p class="mx-auto mt-5 max-w-2xl text-[clamp(1.02rem,2vw,1.22rem)] text-body reveal">{{ t('hero.sub') }}</p>

      <ul class="mt-8 flex flex-wrap justify-center gap-x-7 gap-y-2.5 font-mono text-sm text-muted reveal" role="list">
        <li class="inline-flex items-center gap-2">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-accent" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
          {{ t('hero.meta_location') }}
        </li>
        <li class="inline-flex items-center gap-2">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-accent" aria-hidden="true"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
          {{ t('hero.meta_experience') }}
        </li>
        <li class="inline-flex items-center gap-2">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-accent" aria-hidden="true"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M8 10h.01"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 14h.01"/><path d="M16 14h.01"/><path d="M12 14h.01"/></svg>
          {{ t('hero.meta_company') }}
          <a href="https://sanjeman.com/" target="_blank" rel="noopener" class="text-accent hover:underline">{{ t('hero.company_name') }}</a>
        </li>
      </ul>

      <div class="mt-9 flex flex-wrap justify-center gap-3.5 stagger">
        <a
          class="inline-flex items-center gap-2.5 rounded-full bg-accent px-5.5 py-3 text-sm font-semibold text-on-accent shadow-md transition hover:-translate-y-0.5 hover:bg-accent-strong hover:no-underline"
          href="#experience"
        >
          {{ t('hero.cta') }}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </a>
        <a
          class="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-5.5 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:no-underline"
          href="/cv"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
          {{ t('hero.resume') }}
        </a>
        <a
          class="inline-flex size-11 items-center justify-center rounded-full border border-line bg-surface text-ink transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
          href="https://github.com/amirabroun"
          target="_blank"
          rel="noopener"
          :aria-label="t('hero.github')"
        >
          <IconGithub />
        </a>
        <a
          class="inline-flex size-11 items-center justify-center rounded-full border border-line bg-surface text-ink transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
          href="https://www.linkedin.com/in/amir-abroun-4a7ab321a/"
          target="_blank"
          rel="noopener"
          :aria-label="t('hero.linkedin')"
        >
          <IconLinkedin />
        </a>
      </div>

      <ul class="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-9 sm:grid-cols-4 reveal" role="list">
        <li><StatCounter :value="5" suffix="+" :label="t('hero.stats.years')" /></li>
        <li>
          <span class="block font-display text-[clamp(1.6rem,3.4vw,2.2rem)] font-bold leading-tight text-ink" dir="ltr" style="unicode-bidi: isolate">{{ t('hero.stats.fraction') }}</span>
          <span class="mt-1 block font-mono text-xs text-muted">{{ t('hero.stats.micro') }}</span>
        </li>
        <li><StatCounter :value="800" suffix="+" :label="t('hero.stats.tests')" /></li>
        <li><StatCounter :value="500" prefix="~" :label="t('hero.stats.resumes')" /></li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
const avatarFailed = ref(false)
</script>

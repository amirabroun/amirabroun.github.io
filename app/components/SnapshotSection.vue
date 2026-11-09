<template>
  <section id="about" class="py-22">
    <div class="container">
      <SectionHead num="01" :title="t('snapshot.heading')" />

      <div class="grid gap-4 sm:grid-cols-2 stagger">
        <NuxtLink
          :to="localePath('/now')"
          class="flex items-start gap-3.5 rounded-lg border border-line bg-card p-5.5 transition hover:-translate-y-0.5 hover:border-accent hover:no-underline reveal"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mt-0.5 flex-none text-accent" aria-hidden="true"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>
          <div>
            <h3 class="mb-1.5 font-display font-semibold text-ink">{{ t('snapshot.now_title') }}</h3>
            <p class="text-sm leading-relaxed text-body">{{ t('snapshot.now_body') }}</p>
          </div>
        </NuxtLink>

        <div class="flex items-start gap-3.5 rounded-lg border border-line bg-card p-5.5 reveal">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mt-0.5 flex-none text-accent" aria-hidden="true"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
          <div>
            <h3 class="mb-1.5 font-display font-semibold text-ink">{{ t('snapshot.role_title') }}</h3>
            <p class="text-sm leading-relaxed text-body">{{ t('snapshot.role_body') }}</p>
          </div>
        </div>

        <div class="flex items-start gap-3.5 rounded-lg border border-line bg-card p-5.5 reveal">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mt-0.5 flex-none text-accent" aria-hidden="true"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></svg>
          <div>
            <h3 class="mb-1.5 font-display font-semibold text-ink">{{ t('snapshot.stack_title') }}</h3>
            <p class="font-mono text-sm leading-loose text-body">Laravel · Vue/Nuxt · MySQL · Redis · Docker · GitLab CI</p>
          </div>
        </div>

        <div class="flex items-start gap-3.5 rounded-lg border border-line bg-card p-5.5 reveal">
          <span class="mt-2 size-2.5 flex-none rounded-full bg-ok motion-safe:animate-pulse" aria-hidden="true"></span>
          <div>
            <h3 class="mb-1.5 font-display font-semibold text-ink">{{ t('snapshot.openness_title') }}</h3>
            <p class="text-sm leading-relaxed text-body">{{ t('snapshot.openness_body') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
</script>

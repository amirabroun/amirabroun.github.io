<template>
  <section id="contact" class="py-22">
    <div class="container">
      <div class="mx-auto max-w-2xl border-t border-line pt-16 text-center reveal">
        <p class="font-mono text-sm text-muted" aria-hidden="true">05 /</p>
        <p class="mt-4 font-mono text-xs font-medium uppercase tracking-[0.22em] text-accent">{{ t('contact.eyebrow') }}</p>

        <h2 class="mt-3 font-display text-[clamp(1.8rem,4vw,2.6rem)] font-semibold tracking-tight text-ink">
          {{ t('contact.heading') }}
        </h2>

        <p class="mx-auto mt-4 max-w-lg text-body">{{ t('contact.sub') }}</p>

        <div class="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            :href="`mailto:${EMAIL}`"
            class="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-5 py-2.5 font-mono text-sm font-medium text-ink transition hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:no-underline"
            dir="ltr"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            {{ EMAIL }}
          </a>
          <button
            type="button"
            class="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2.5 font-mono text-sm font-semibold text-on-accent transition hover:-translate-y-0.5 hover:bg-accent-strong"
            :aria-label="t('contact.copy_email')"
            @click="copyEmail"
          >
            <svg v-if="!copied" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
            <svg v-else width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
            <span aria-live="polite">{{ copied ? t('contact.copied') : t('contact.copy_email') }}</span>
          </button>
        </div>

        <div class="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 font-mono text-sm stagger">
          <a href="https://github.com/amirabroun" target="_blank" rel="noopener" class="inline-flex items-center gap-1.5 text-body transition-colors hover:text-accent hover:no-underline reveal"><IconGithub /> {{ t('contact.github') }}</a>
          <a href="https://www.linkedin.com/in/amir-abroun-4a7ab321a/" target="_blank" rel="noopener" class="inline-flex items-center gap-1.5 text-body transition-colors hover:text-accent hover:no-underline reveal"><IconLinkedin /> {{ t('contact.linkedin') }}</a>
          <a href="https://sanjeman.com/" target="_blank" rel="noopener" class="text-body transition-colors hover:text-accent hover:no-underline reveal">{{ t('contact.site') }}</a>
          <NuxtLink to="/cv" class="text-body transition-colors hover:text-accent hover:no-underline reveal">{{ t('nav.cv') }}</NuxtLink>
        </div>
      </div>

      <footer class="flex flex-wrap justify-between gap-2.5 border-t border-line pb-8 pt-7 font-mono text-xs text-muted">
        <span>{{ t('contact.footer_left') }}</span>
        <span>
          <NuxtLink :to="localePath('/now')" class="transition-colors hover:text-accent hover:no-underline">{{ t('now.title') }}</NuxtLink>
          ·
          {{ t('contact.footer_right') }}
        </span>
      </footer>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

const EMAIL = 'abroon234@gmail.com'

const copied = ref(false)
let copiedTimer: ReturnType<typeof setTimeout> | undefined

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(EMAIL)
    copied.value = true
    clearTimeout(copiedTimer)
    copiedTimer = setTimeout(() => (copied.value = false), 1600)
  } catch {
    // clipboard blocked (permissions/non-secure) — mailto link stays as the fallback
  }
}

onBeforeUnmount(() => clearTimeout(copiedTimer))
</script>

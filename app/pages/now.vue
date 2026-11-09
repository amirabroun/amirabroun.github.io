<template>
  <main class="container pt-32 pb-22">
    <div class="mb-10">
      <p class="font-mono text-sm text-muted" aria-hidden="true">// {{ t('now.eyebrow') }}</p>
      <h1 class="mt-2 font-display text-[clamp(1.75rem,4vw,2.5rem)] font-semibold tracking-tight text-ink">{{ t('now.title') }}</h1>
      <div class="mt-4 h-px w-16 bg-accent" aria-hidden="true"></div>
      <p class="mt-4 text-muted">{{ t('now.sub') }}</p>
    </div>

    <ul class="grid list-none gap-3 p-0 stagger" role="list">
      <li v-for="item in items" :key="item" class="rounded-lg border border-line bg-card p-6 text-base reveal">
        {{ item }}
      </li>
    </ul>

    <p class="mt-6 font-mono text-xs text-muted">{{ t('now.updated') }}</p>
  </main>
</template>

<script setup lang="ts">
const { t, tm, rt } = useI18n()
const rtv = rt as (msg: unknown) => string

const items = computed(() => (tm('now.items') as unknown[]).map((b) => rtv(b)))

useHead({ title: () => t('now.title') })
</script>

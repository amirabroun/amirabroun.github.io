<template>
  <section id="experience" class="py-22">
    <div class="container">
      <SectionHead num="02" :title="t('experience.heading')" />

      <ul class="mb-5 grid grid-cols-2 gap-3.5 reveal sm:grid-cols-4" role="list">
        <li class="rounded-lg border border-line bg-card px-3.5 py-4"><StatCounter :value="30" prefix="~" :suffix="pct" :label="t('experience.band.screening')" /></li>
        <li class="rounded-lg border border-line bg-card px-3.5 py-4"><StatCounter :value="300" suffix="+" :label="t('experience.band.users')" /></li>
        <li class="rounded-lg border border-line bg-card px-3.5 py-4"><StatCounter :value="1000" prefix="~" :label="t('experience.band.jobs')" /></li>
        <li class="rounded-lg border border-line bg-card px-3.5 py-4"><StatCounter :value="4" :label="t('experience.band.frontends')" /></li>
      </ul>

      <article class="rounded-xl border border-line bg-card p-6 reveal sm:p-8">
        <div class="mb-2 flex flex-wrap items-center gap-4">
          <span class="grid size-13 place-items-center rounded-xl bg-[image:var(--grad)] font-display text-xl font-bold text-white" aria-hidden="true">S</span>
          <div>
            <h3 class="font-display text-xl tracking-tight">
              <a href="https://sanjeman.com/" target="_blank" rel="noopener" class="inline-flex items-center gap-2 text-ink hover:text-accent hover:no-underline">
                {{ t('experience.company') }}
                <IconExternal />
              </a>
            </h3>
            <p class="mt-0.5 text-sm text-muted">{{ t('experience.role') }}</p>
          </div>
          <span class="ms-auto rounded-full border border-ok-border bg-ok-bg px-3.5 py-1 font-mono text-xs font-medium text-ok-text max-sm:ms-0">{{ t('experience.present') }}</span>
        </div>

        <p class="mb-5 font-mono text-xs text-muted">{{ t('experience.sanjeman.date') }} · {{ t('experience.sanjeman.subline') }}</p>

        <div class="flex flex-wrap gap-x-2.5 gap-y-1 border-b border-line" role="tablist" :aria-label="t('experience.heading')">
          <button
            v-for="(tab, i) in tabs"
            :id="`sanjeman-tab-${i}`"
            :key="tab.label"
            role="tab"
            type="button"
            class="tab-btn relative px-3 py-2.5 text-sm font-semibold transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:rounded-full after:bg-[image:var(--grad)] after:opacity-0"
            :class="i === activeTab ? 'text-ink after:opacity-100' : 'text-muted hover:text-ink'"
            :aria-selected="i === activeTab"
            :aria-controls="`sanjeman-panel-${i}`"
            :tabindex="i === activeTab ? 0 : -1"
            @click="activeTab = i"
            @keydown="onTabKeydown"
          >
            {{ tab.label }}
          </button>
        </div>

        <div
          v-for="(tab, i) in tabs"
          :id="`sanjeman-panel-${i}`"
          :key="tab.label"
          v-show="i === activeTab"
          role="tabpanel"
          class="motion-safe:animate-[fade-up_0.25s_ease]"
          :aria-labelledby="`sanjeman-tab-${i}`"
        >
          <ul class="mb-5 mt-5 grid list-none gap-3.5 p-0">
            <li v-for="b in tab.bullets" :key="b" class="relative ps-6 text-[0.98rem] before:absolute before:start-0 before:top-[0.55em] before:size-2 before:rounded-full before:bg-accent">{{ b }}</li>
          </ul>
          <span v-if="tab.metric" class="inline-block rounded-full border border-ok-border bg-ok-bg px-3.5 py-1 font-mono text-xs font-semibold text-ok-text">{{ tab.metric }}</span>
        </div>

        <p class="mt-6 border-t border-line pt-5 font-mono text-sm text-muted">Laravel · Nuxt 3 · Vue · MySQL · Redis · Docker · Nginx · GitLab CI · GlitchTip</p>
      </article>

      <div class="mt-5 grid gap-5 stagger lg:grid-cols-[1.55fr_1fr]">
        <div class="rounded-xl border border-line bg-card p-6 reveal">
          <h3 class="mb-3 font-display font-semibold text-ink">{{ t('experience.education.title') }}</h3>
          <div class="text-sm font-semibold text-ink">{{ t('experience.education.msc') }}</div>
          <p class="mt-0.5 text-sm text-muted">{{ t('experience.education.msc_note') }}</p>
          <div class="mt-3.5 text-sm font-semibold text-ink">{{ t('experience.education.bsc') }}</div>
          <p class="mt-0.5 text-sm text-muted">{{ t('experience.education.bsc_note') }}</p>
        </div>
        <div class="rounded-xl border border-line bg-card p-6 reveal">
          <h3 class="mb-3 font-display font-semibold text-ink">{{ t('experience.language.title') }}</h3>
          <div class="flex items-center justify-between text-sm">
            <span>{{ t('experience.language.english') }}</span>
            <span class="font-mono font-bold text-accent">B1</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t, tm, rt, locale } = useI18n()

type Tab = { label: string; bullets: string[]; metric: string }
// typed alias — rt's generics choke vue-tsc with TS2589 on message casts
const rtv = rt as (msg: unknown) => string

const tabs = computed<Tab[]>(() =>
  (tm('experience.sanjeman.tabs') as unknown[]).map((raw) => {
    const tab = raw as Record<string, unknown>
    return {
      label: rtv(tab.label),
      bullets: (tab.bullets as unknown[]).map((b) => rtv(b)),
      metric: tab.metric ? rtv(tab.metric) : '',
    }
  }),
)

const pct = computed(() => (locale.value === 'fa' ? '٪' : '%'))

const activeTab = ref(0)

function onTabKeydown(e: KeyboardEvent) {
  const count = tabs.value.length
  let next: number | null = null
  // visual direction: in RTL the left arrow moves forward
  if ((e.key === 'ArrowRight' && locale.value !== 'fa') || (e.key === 'ArrowLeft' && locale.value === 'fa')) {
    next = (activeTab.value + 1) % count
  } else if ((e.key === 'ArrowLeft' && locale.value !== 'fa') || (e.key === 'ArrowRight' && locale.value === 'fa')) {
    next = (activeTab.value - 1 + count) % count
  }
  if (next !== null) {
    e.preventDefault()
    activeTab.value = next
    ;(e.currentTarget as HTMLElement).parentElement
      ?.querySelectorAll<HTMLButtonElement>('.tab-btn')
      [next]?.focus()
  }
}
</script>

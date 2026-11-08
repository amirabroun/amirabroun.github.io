<template>
  <section id="experience">
    <div class="container">
      <div class="section-head reveal">
        <p class="eyebrow">{{ t('nav.experience') }}</p>
        <h2>{{ t('experience.heading') }}</h2>
      </div>

      <article class="card xp reveal">
        <div class="xp-head">
          <span class="xp-logo" aria-hidden="true">S</span>
          <div class="xp-id">
            <h3>
              <a href="https://sanjeman.com/" target="_blank" rel="noopener">
                {{ t('experience.company') }}
                <IconExternal />
              </a>
            </h3>
            <p class="xp-role">{{ t('experience.role') }}</p>
          </div>
          <span class="chip chip-now">{{ t('experience.present') }}</span>
        </div>

        <p class="xp-subline">{{ t('experience.sanjeman.date') }} · {{ t('experience.sanjeman.subline') }}</p>

        <div class="tabs" role="tablist" :aria-label="t('experience.heading')">
          <button
            v-for="(tab, i) in tabs"
            :id="`sanjeman-tab-${i}`"
            :key="tab.label"
            role="tab"
            type="button"
            class="tab-btn"
            :class="{ 'is-active': i === activeTab }"
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
          class="tab-panel"
          :aria-labelledby="`sanjeman-tab-${i}`"
        >
          <ul class="xp-list">
            <li v-for="b in tab.bullets" :key="b">{{ b }}</li>
          </ul>
          <span v-if="tab.metric" class="chip chip-metric">{{ tab.metric }}</span>
        </div>

        <div class="xp-stack">
          <span class="chip">Laravel</span>
          <span class="chip">Nuxt 3</span>
          <span class="chip">Vue</span>
          <span class="chip">MySQL</span>
          <span class="chip">Redis</span>
          <span class="chip">Docker</span>
          <span class="chip">Nginx</span>
          <span class="chip">GitLab CI</span>
          <span class="chip">GlitchTip</span>
        </div>
      </article>

      <article class="card xp reveal">
        <div class="xp-head">
          <span class="xp-logo xp-logo-toys" aria-hidden="true">ع</span>
          <div class="xp-id">
            <h3>
              <a href="https://anbaritoys.ir/" target="_blank" rel="noopener">
                {{ t('experience.anbaritoys.company') }}
                <IconExternal />
              </a>
            </h3>
            <p class="xp-role">{{ t('experience.anbaritoys.role') }}</p>
          </div>
          <span class="chip chip-now">{{ t('experience.present') }}</span>
        </div>

        <p class="xp-subline">{{ t('experience.anbaritoys.date') }}</p>

        <ul class="xp-list">
          <li v-for="b in anbaritoysBullets" :key="b">{{ b }}</li>
        </ul>

        <div class="xp-stack">
          <span class="chip">PHP 8.2</span>
          <span class="chip">MariaDB</span>
          <span class="chip">Docker</span>
          <span class="chip">nginx</span>
        </div>
      </article>

      <div class="edu-grid stagger">
        <div class="card edu reveal">
          <h3>{{ t('experience.education.title') }}</h3>
          <div class="edu-deg">{{ t('experience.education.msc') }}</div>
          <p class="edu-note">{{ t('experience.education.msc_note') }}</p>
          <div class="edu-deg">{{ t('experience.education.bsc') }}</div>
          <p class="edu-note">{{ t('experience.education.bsc_note') }}</p>
        </div>
        <div class="card edu reveal">
          <h3>{{ t('experience.language.title') }}</h3>
          <div class="lang-row"><span>{{ t('experience.language.english') }}</span><span class="lang-level">B1</span></div>
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

const anbaritoysBullets = computed(() =>
  (tm('experience.anbaritoys.bullets') as unknown[]).map((b) => rtv(b)),
)

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

<style scoped>
.xp {
  padding: 30px 32px;
}

.xp + .xp {
  margin-top: 20px;
}

.xp-head {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 8px;
}

.xp-logo {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: var(--grad);
  color: #fff;
  display: grid;
  place-items: center;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.35rem;
  box-shadow: var(--shadow-md);
}

.xp-logo-toys {
  background: linear-gradient(135deg, #db2777 0%, #f59e0b 100%);
}

.xp-id h3 {
  margin: 0;
  font-family: var(--font-display);
  font-size: 1.25rem;
  letter-spacing: -0.01em;
}

.xp-id h3 a {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  color: var(--ink);
}

.xp-id h3 a:hover {
  color: var(--blue-600);
  text-decoration: none;
}

.xp-role {
  margin: 2px 0 0;
  color: var(--muted);
  font-size: 0.92rem;
}

.xp-subline {
  margin: 0 0 20px;
  color: var(--muted);
  font-size: 0.9rem;
}

.chip-now {
  margin-inline-start: auto;
  background: var(--ok-bg);
  border-color: var(--ok-border);
  color: var(--ok-text);
}

.tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 10px;
  border-bottom: 1px solid var(--line);
  margin-bottom: 20px;
}

.tab-btn {
  appearance: none;
  background: none;
  border: none;
  position: relative;
  padding: 9px 12px;
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--muted);
  transition: color 0.2s ease;
}

.tab-btn::after {
  content: "";
  position: absolute;
  inset-inline: 0;
  bottom: 0;
  height: 2px;
  border-radius: 2px;
  background: var(--grad);
  opacity: 0;
}

.tab-btn:hover {
  color: var(--ink);
}

.tab-btn.is-active {
  color: var(--ink);
}

.tab-btn.is-active::after {
  opacity: 1;
}

.tab-panel {
  animation: panel-fade 0.25s ease;
}

@keyframes panel-fade {
  from {
    opacity: 0;
    transform: translateY(6px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

.chip-metric {
  background: var(--ok-bg);
  border-color: var(--ok-border);
  color: var(--ok-text);
  font-weight: 600;
}

.xp-list {
  list-style: none;
  margin: 0 0 20px;
  padding: 0;
  display: grid;
  gap: 13px;
}

.xp-list li {
  position: relative;
  padding-inline-start: 26px;
  font-size: 0.98rem;
}

.xp-list li::before {
  content: "";
  position: absolute;
  inset-inline-start: 0;
  top: 0.55em;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--grad);
}

.xp-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.edu-grid {
  display: grid;
  grid-template-columns: 1.55fr 1fr;
  gap: 20px;
  margin-top: 20px;
}

.edu {
  padding: 22px 26px;
}

.edu h3 {
  margin: 0 0 12px;
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 600;
  color: var(--ink);
}

.edu-deg {
  font-weight: 600;
  color: var(--ink);
  font-size: 0.95rem;
}

.edu-deg + .edu-deg {
  margin-top: 10px;
}

.edu-note {
  margin: 2px 0 0;
  color: var(--muted);
  font-size: 0.86rem;
}

.lang-row {
  display: flex;
  justify-content: space-between;
  font-size: 0.95rem;
}

.lang-level {
  color: var(--blue-600);
  font-weight: 700;
}

@media (max-width: 640px) {
  .xp {
    padding: 24px;
  }

  .chip-now {
    margin-inline-start: 0;
  }

  .edu-grid {
    grid-template-columns: 1fr;
  }
}
</style>

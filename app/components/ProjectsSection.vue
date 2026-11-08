<template>
  <section id="projects">
    <div class="container">
      <div class="section-head reveal">
        <p class="eyebrow">{{ t('nav.projects') }}</p>
        <h2>{{ t('projects.heading') }}</h2>
      </div>

      <div class="projects-grid stagger">
        <!-- tier 1 — live product on own domain -->
        <article class="card featured reveal">
          <div class="featured-body">
            <div class="featured-head">
              <h3>
                <a href="https://kapsul.amirabroun.ir" target="_blank" rel="noopener">
                  {{ t('projects.kapsul.title') }}
                  <IconExternal />
                </a>
              </h3>
              <span class="chip chip-work">{{ t('projects.kapsul.badge') }}</span>
            </div>
            <p>{{ t('projects.kapsul.desc') }}</p>
            <div class="chips">
              <span v-for="c in kapsulChips" :key="c" class="chip">{{ c }}</span>
            </div>
          </div>
          <img
            v-if="!shotFailed"
            class="featured-shot"
            src="/img/kapsul.png"
            width="640"
            height="400"
            loading="lazy"
            :alt="t('projects.kapsul.title')"
            @error="shotFailed = true"
          >
        </article>

        <!-- tier 2 — production store, wide -->
        <article class="card project project-wide reveal">
          <div class="featured-head">
            <h3>
              <a href="https://anbaritoys.ir/" target="_blank" rel="noopener">
                {{ t('projects.items.anbaritoys.title') }}
                <IconExternal />
              </a>
            </h3>
            <span class="chip chip-work">{{ t('projects.items.anbaritoys.badge') }}</span>
          </div>
          <p>{{ t('projects.items.anbaritoys.desc') }}</p>
          <div class="chips">
            <span v-for="c in anbaritoysChips" :key="c" class="chip">{{ c }}</span>
          </div>
        </article>

        <!-- tier 3 — compact -->
        <article v-for="p in projects" :key="p.key" class="card project reveal">
          <h3>
            <a :href="p.url" target="_blank" rel="noopener">
              {{ t(`projects.items.${p.key}.title`) }}
              <IconExternal />
            </a>
          </h3>
          <p>{{ t(`projects.items.${p.key}.desc`) }}</p>
          <div class="chips">
            <span v-for="c in p.chips" :key="c" class="chip">{{ c }}</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
const shotFailed = ref(false)

const kapsulChips = ['Nuxt 3', 'TypeScript', 'Cloudflare Workers', 'D1', 'Tailwind v4']
const anbaritoysChips = ['PHP 8.2', 'MariaDB', 'Docker', 'Zarinpal']

const projects = [
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

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.featured {
  grid-column: 1 / -1;
  position: relative;
  overflow: hidden;
  padding: 28px 32px;
  border-color: var(--blue-200);
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 26px;
  align-items: center;
}

.featured::before {
  content: "";
  position: absolute;
  inset-inline-start: 0;
  top: 0;
  bottom: 0;
  width: 5px;
  background: var(--grad);
}

.featured-head {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
  margin-bottom: 8px;
}

.featured h3 {
  margin: 0;
  font-family: var(--font-display);
  font-size: 1.3rem;
  letter-spacing: -0.01em;
}

.featured h3 a {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--ink);
}

.featured h3 a:hover {
  color: var(--blue-600);
  text-decoration: none;
}

.chip-work {
  background: var(--ok-bg);
  border-color: var(--ok-border);
  color: var(--ok-text);
}

.featured-body p {
  margin: 0 0 16px;
  font-size: 0.98rem;
}

.featured-shot {
  display: block;
  width: 100%;
  border-radius: var(--radius-md);
  border: 1px solid var(--line);
  box-shadow: var(--shadow-sm);
}

.project {
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.project-wide {
  grid-column: span 2;
}

.project h3 {
  margin: 0;
  font-family: var(--font-display);
  font-size: 1.02rem;
}

.project h3 a {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  color: var(--ink);
}

.project h3 a:hover {
  color: var(--blue-600);
  text-decoration: none;
}

.project p {
  margin: 0;
  font-size: 0.9rem;
  flex: 1;
}

.project .chips {
  margin-top: 2px;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

@media (max-width: 960px) {
  .featured {
    grid-template-columns: 1fr;
  }

  .featured-shot {
    order: -1;
  }
}

@media (max-width: 640px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }

  .featured {
    padding: 24px;
  }

  .project-wide {
    grid-column: auto;
  }
}
</style>

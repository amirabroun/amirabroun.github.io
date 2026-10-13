<template>
  <section id="projects">
    <div class="container">
      <div class="section-head reveal">
        <p class="eyebrow">{{ t('nav.projects') }}</p>
        <h2>{{ t('projects.heading') }}</h2>
      </div>

      <div class="projects-grid stagger">
        <article class="card featured reveal">
          <div class="featured-head">
            <h3>
              <a href="https://sanjeman.com/" target="_blank" rel="noopener">
                {{ t('projects.featured_title') }}
                <IconExternal />
              </a>
            </h3>
            <span class="chip chip-work">{{ t('projects.featured_badge') }}</span>
          </div>
          <p>{{ t('projects.featured_desc') }}</p>
          <div class="chips">
            <span class="chip">Laravel</span>
            <span class="chip">Nuxt 3</span>
            <span class="chip">MySQL</span>
            <span class="chip">Docker</span>
            <span class="chip">GitLab CI</span>
          </div>
        </article>

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

const projects = [
  {
    key: 'nuxt_blog',
    url: 'https://github.com/amirabroun/nuxt-blog',
    chips: ['Nuxt', 'Vue'],
  },
  {
    key: 'laravel_blog',
    url: 'https://github.com/amirabroun/laravel-blog',
    chips: ['Laravel', 'PHP'],
  },
  {
    key: 'chat_app',
    url: 'https://github.com/amirabroun/chat-app',
    chips: ['JavaScript'],
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
  {
    key: 'php_container',
    url: 'https://github.com/amirabroun/php-container',
    chips: ['Docker', 'PHP'],
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

.featured p {
  margin: 0 0 16px;
  max-width: 640px;
  font-size: 0.98rem;
}

.project {
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
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
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }

  .featured {
    padding: 24px;
  }
}
</style>

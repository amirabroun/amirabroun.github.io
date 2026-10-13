<template>
  <section id="skills">
    <div class="container">
      <div class="section-head reveal">
        <p class="eyebrow">{{ t('nav.skills') }}</p>
        <h2>{{ t('skills.heading') }}</h2>
      </div>

      <div class="skills-grid stagger">
        <article class="card skill-card reveal">
          <h3>
            <span class="skill-icon" aria-hidden="true">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/></svg>
            </span>
            {{ t('skills.backend') }}
          </h3>
          <div class="chips">
            <span class="chip">PHP</span>
            <span class="chip">Laravel</span>
            <span class="chip">MySQL</span>
            <span class="chip">Redis</span>
            <span class="chip">REST APIs</span>
            <span class="chip">Queues &amp; Jobs</span>
          </div>
        </article>

        <article class="card skill-card reveal">
          <h3>
            <span class="skill-icon" aria-hidden="true">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
            </span>
            {{ t('skills.frontend') }}
          </h3>
          <div class="chips">
            <span class="chip">Vue 2 / 3</span>
            <span class="chip">Nuxt 3</span>
            <span class="chip">JavaScript</span>
            <span class="chip">TypeScript</span>
            <span class="chip">Tailwind CSS</span>
            <span class="chip">Blade</span>
          </div>
        </article>

        <article class="card skill-card reveal">
          <h3>
            <span class="skill-icon" aria-hidden="true">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><path d="M6 6h.01"/><path d="M6 18h.01"/></svg>
            </span>
            {{ t('skills.devops') }}
          </h3>
          <div class="chips">
            <span class="chip">Docker</span>
            <span class="chip">Nginx</span>
            <span class="chip">Linux</span>
            <span class="chip">GitLab CI/CD</span>
            <span class="chip">GlitchTip / Sentry</span>
            <span class="chip">Git</span>
          </div>
        </article>

        <article class="card skill-card skill-learning reveal">
          <h3>
            <span class="skill-icon" aria-hidden="true">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
            </span>
            {{ t('skills.learning') }}
          </h3>
          <div class="chips">
            <span class="chip">Go</span>
            <span class="chip">Gin</span>
          </div>
          <p class="learning-note">
            <span class="pulse-dot" aria-hidden="true"></span>
            {{ t('skills.learning_note') }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.skill-card {
  padding: 26px;
}

.skill-card h3 {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0 0 16px;
  font-family: var(--font-display);
  font-size: 1.05rem;
  color: var(--ink);
}

.skill-icon {
  width: 38px;
  height: 38px;
  border-radius: 11px;
  background: var(--grad-soft);
  border: 1px solid var(--blue-100);
  color: var(--blue-600);
  display: grid;
  place-items: center;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.skill-learning {
  border-style: dashed;
  border-color: var(--blue-200);
  background: linear-gradient(135deg, var(--surface-raised), var(--blue-50));
}

.learning-note {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 14px 0 0;
  font-size: 0.85rem;
  color: var(--muted);
}

.pulse-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--blue-500);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4);
  }
  70% {
    box-shadow: 0 0 0 7px rgba(59, 130, 246, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
  }
}

@media (max-width: 720px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>

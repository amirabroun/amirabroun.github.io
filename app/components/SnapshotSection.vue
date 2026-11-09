<template>
  <section id="about">
    <div class="container">
      <div class="section-head reveal">
        <p class="eyebrow">{{ t('nav.about') }}</p>
        <h2>{{ t('snapshot.heading') }}</h2>
      </div>

      <div class="bento stagger">
        <NuxtLink :to="localePath('/now')" class="bento-card card reveal">
          <span class="bento-icon" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg></span>
          <div>
            <h3>{{ t('snapshot.now_title') }}</h3>
            <p>{{ t('snapshot.now_body') }}</p>
          </div>
        </NuxtLink>

        <div class="bento-card card reveal">
          <span class="bento-icon" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg></span>
          <div>
            <h3>{{ t('snapshot.role_title') }}</h3>
            <p>{{ t('snapshot.role_body') }}</p>
          </div>
        </div>

        <div class="bento-card card reveal">
          <span class="bento-icon" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></svg></span>
          <div>
            <h3>{{ t('snapshot.stack_title') }}</h3>
            <ul class="bento-chips" role="list">
              <li class="chip">Laravel</li>
              <li class="chip">Vue/Nuxt</li>
              <li class="chip">MySQL</li>
              <li class="chip">Redis</li>
              <li class="chip">Docker</li>
              <li class="chip">GitLab CI</li>
            </ul>
          </div>
        </div>

        <div class="bento-card card reveal">
          <span class="bento-icon" aria-hidden="true"><span class="status-dot" /></span>
          <div>
            <h3>{{ t('snapshot.openness_title') }}</h3>
            <p>{{ t('snapshot.openness_body') }}</p>
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

<style scoped>
.bento {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.bento-card {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 22px;
}

.bento-card:hover {
  text-decoration: none;
}

.bento-icon {
  width: 38px;
  height: 38px;
  border-radius: 11px;
  background: var(--blue-50);
  border: 1px solid var(--blue-100);
  color: var(--blue-600);
  display: grid;
  place-items: center;
  flex: none;
}

.bento-card .status-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--green);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(22, 163, 74, 0.35);
  }
  70% {
    box-shadow: 0 0 0 8px rgba(22, 163, 74, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(22, 163, 74, 0);
  }
}

.bento-card h3 {
  margin: 0 0 6px;
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 600;
  color: var(--ink);
}

.bento-card p {
  margin: 0;
  font-size: 0.92rem;
}

.bento-chips {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 0;
  margin: 0;
}

@media (max-width: 880px) {
  .bento {
    grid-template-columns: 1fr;
  }
}
</style>

<template>
  <section id="about">
    <div class="container">
      <div class="section-head reveal">
        <p class="eyebrow">{{ t('nav.about') }}</p>
        <h2>{{ t('about.heading') }}</h2>
      </div>

      <div class="about-grid">
        <div class="about-text reveal">
          <p>{{ t('about.p1') }}</p>
          <p>{{ t('about.p2') }}</p>
          <p>{{ t('about.p3') }}</p>
        </div>

        <aside class="facts card reveal" aria-label="Quick facts">
          <dl>
            <div class="fact">
              <span class="fact-icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </span>
              <div>
                <dt>{{ t('about.facts.location.label') }}</dt>
                <dd>{{ t('about.facts.location.value') }}</dd>
              </div>
            </div>

            <div class="fact">
              <span class="fact-icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
              </span>
              <div>
                <dt>{{ t('about.facts.experience.label') }}</dt>
                <dd>{{ t('about.facts.experience.value') }}</dd>
              </div>
            </div>

            <div class="fact">
              <span class="fact-icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M8 10h.01"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 14h.01"/><path d="M16 14h.01"/><path d="M12 14h.01"/></svg>
              </span>
              <div>
                <dt>{{ t('about.facts.role.label') }}</dt>
                <dd>{{ t('about.facts.role.value') }}</dd>
              </div>
            </div>

            <div class="fact">
              <span class="fact-icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/></svg>
              </span>
              <div>
                <dt>{{ t('about.facts.education.label') }}</dt>
                <dd>{{ t('about.facts.education.value') }}</dd>
              </div>
            </div>

            <div class="fact">
              <span class="fact-icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m13 2-10 12h7l-1 8 10-12h-7l1-8Z"/></svg>
              </span>
              <div>
                <dt>{{ t('about.facts.focus.label') }}</dt>
                <dd>{{ t('about.facts.focus.value') }}</dd>
              </div>
            </div>

            <div class="fact">
              <span class="fact-icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
              </span>
              <div>
                <dt>{{ t('about.facts.learning.label') }}</dt>
                <dd>{{ t('about.facts.learning.value') }}</dd>
              </div>
            </div>
          </dl>
        </aside>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 1.45fr 1fr;
  gap: 40px;
  align-items: start;
}

.about-text p {
  margin: 0 0 18px;
  font-size: 1.02rem;
}

.about-text p:last-child {
  margin-bottom: 0;
}

.facts {
  padding: 6px 26px;
}

.facts dl {
  margin: 0;
}

.fact {
  display: flex;
  gap: 14px;
  align-items: flex-start;
  padding: 15px 0;
  border-bottom: 1px dashed var(--line);
}

.fact:last-child {
  border-bottom: 0;
}

.fact-icon {
  width: 36px;
  height: 36px;
  border-radius: 11px;
  background: var(--blue-50);
  border: 1px solid var(--blue-100);
  color: var(--blue-600);
  display: grid;
  place-items: center;
  flex: none;
}

.fact dt {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: var(--muted);
}

.fact dd {
  margin: 2px 0 0;
  color: var(--ink);
  font-weight: 600;
  font-size: 0.95rem;
}

@media (max-width: 880px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
}
</style>

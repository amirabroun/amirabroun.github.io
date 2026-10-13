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

        <ul class="xp-list">
          <li v-for="b in tm('experience.bullets')" :key="rt(b as never)">
            {{ rt(b as never) }}
          </li>
        </ul>

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
    </div>
  </section>
</template>

<script setup lang="ts">
const { t, tm, rt } = useI18n()
</script>

<style scoped>
.xp {
  padding: 30px 32px;
}

.xp-head {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 22px;
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

.chip-now {
  margin-inline-start: auto;
  background: var(--ok-bg);
  border-color: var(--ok-border);
  color: var(--ok-text);
}

.xp-list {
  list-style: none;
  margin: 0 0 24px;
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

@media (max-width: 640px) {
  .xp {
    padding: 24px;
  }

  .chip-now {
    margin-inline-start: 0;
  }
}
</style>

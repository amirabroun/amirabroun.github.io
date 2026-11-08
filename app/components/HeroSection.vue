<template>
  <section class="hero" id="top">
    <div class="hero-bg" aria-hidden="true">
      <span class="blob b1"></span>
      <span class="blob b2"></span>
    </div>

    <div class="container hero-inner">
      <div class="hero-avatar reveal">
        <img
          v-if="!avatarFailed"
          src="/img/avatar.jpg"
          width="120"
          height="120"
          :alt="t('name')"
          @error="avatarFailed = true"
        >
        <span v-else class="avatar-fallback" aria-hidden="true">AA</span>
      </div>

      <p class="hero-badges reveal">
        <span class="status">
          <span class="status-dot" aria-hidden="true"></span>
          {{ t('hero.status') }}
        </span>
      </p>

      <p class="eyebrow reveal">{{ t('hero.eyebrow') }}</p>

      <h1 class="hero-title grad-text reveal">{{ t('name') }}</h1>

      <p class="hero-sub reveal">{{ t('hero.sub') }}</p>

      <p class="hero-type reveal" dir="ltr" aria-hidden="true">
        {{ twText }}<span class="tw-cursor">▍</span>
      </p>

      <ul class="hero-meta reveal">
        <li>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
          {{ t('hero.meta_location') }}
        </li>
        <li>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
          {{ t('hero.meta_experience') }}
        </li>
        <li>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M8 10h.01"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 14h.01"/><path d="M16 14h.01"/><path d="M12 14h.01"/></svg>
          {{ t('hero.meta_company') }}
          <a href="https://sanjeman.com/" target="_blank" rel="noopener">{{ t('hero.company_name') }}</a>
        </li>
      </ul>

      <div class="hero-cta stagger">
        <a class="btn btn-primary reveal" href="#projects">
          {{ t('hero.cta') }}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </a>
        <a class="btn btn-ghost reveal" href="/cv">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
          {{ t('hero.resume') }}
        </a>
        <a class="btn btn-ghost reveal" href="https://github.com/amirabroun" target="_blank" rel="noopener">
          <IconGithub />
          {{ t('hero.github') }}
        </a>
        <a class="btn btn-ghost reveal" href="https://www.linkedin.com/in/amir-abroun-4a7ab321a/" target="_blank" rel="noopener">
          <IconLinkedin />
          {{ t('hero.linkedin') }}
        </a>
      </div>

      <ul class="hero-stats reveal" role="list">
        <li><StatCounter :value="5" suffix="+" :label="t('hero.stats.years')" /></li>
        <li>
          <span class="stat-value">{{ t('hero.stats.fraction') }}</span>
          <span class="stat-label">{{ t('hero.stats.micro') }}</span>
        </li>
        <li><StatCounter :value="800" suffix="+" :label="t('hero.stats.tests')" /></li>
        <li><StatCounter :value="500" prefix="~" :label="t('hero.stats.resumes')" /></li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
const avatarFailed = ref(false)

// terminal typewriter — SSR/static shows the first line, JS loops the rest
const TW_LINES = [
  '$ php artisan make:impact',
  '$ npm run dev -- --host 0.0.0.0',
  '$ docker compose up -d',
  '$ git push origin main',
]
const FIRST_LINE = TW_LINES[0]!
const twText = ref(FIRST_LINE)
let twTimer: ReturnType<typeof setTimeout> | undefined

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  let line = 0
  let chars = FIRST_LINE.length
  let deleting = true
  const step = () => {
    const text = TW_LINES[line] ?? FIRST_LINE
    if (deleting) {
      chars--
      twText.value = text.slice(0, chars)
      if (chars === 0) {
        deleting = false
        line = (line + 1) % TW_LINES.length
        twTimer = setTimeout(step, 350)
        return
      }
      twTimer = setTimeout(step, 30)
    } else {
      chars++
      twText.value = text.slice(0, chars)
      if (chars === text.length) {
        deleting = true
        twTimer = setTimeout(step, 1800)
        return
      }
      twTimer = setTimeout(step, 55)
    }
  }
  twTimer = setTimeout(step, 1400)
})

onBeforeUnmount(() => clearTimeout(twTimer))
</script>

<style scoped>
.hero {
  position: relative;
  padding: 176px 0 96px;
  overflow: hidden;
}

.hero-inner {
  position: relative;
  text-align: center;
}

.hero-avatar {
  width: 120px;
  height: 120px;
  margin: 0 auto 24px;
  border-radius: 50%;
  padding: 4px;
  background: var(--grad);
  box-shadow: var(--shadow-md);
}

.hero-avatar img {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}

.avatar-fallback {
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: var(--bg);
  color: var(--navy);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 2rem;
}

.hero-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(72px);
}

.b1 {
  width: 430px;
  height: 430px;
  background: rgba(56, 189, 248, 0.32);
  top: -70px;
  right: -70px;
  animation: drift 16s ease-in-out infinite alternate;
}

.b2 {
  width: 380px;
  height: 380px;
  background: rgba(37, 99, 235, 0.26);
  bottom: -150px;
  left: -90px;
  animation: drift 20s ease-in-out infinite alternate-reverse;
}

@keyframes drift {
  from {
    transform: translate3d(0, 0, 0) scale(1);
  }
  to {
    transform: translate3d(36px, 28px, 0) scale(1.08);
  }
}

.status {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 7px 15px;
  border-radius: 999px;
  background: var(--surface-raised);
  border: 1px solid var(--line);
  box-shadow: var(--shadow-sm);
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--ink);
}

.status-dot {
  width: 8px;
  height: 8px;
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

.hero .eyebrow {
  margin-top: 26px;
  justify-content: center;
}

.hero-title {
  margin: 10px 0 22px;
  font-family: var(--font-display);
  font-size: clamp(2.7rem, 7vw, 4.5rem);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.035em;
  color: var(--ink);
}

.hero-sub {
  max-width: 660px;
  margin: 0 auto;
  font-size: clamp(1.02rem, 2vw, 1.22rem);
}

.hero-type {
  margin: 20px auto 0;
  font-family: var(--font-display);
  font-size: 0.86rem;
  color: var(--muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tw-cursor {
  animation: blink 1.1s step-end infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

.hero-meta {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px 28px;
  padding: 0;
  margin: 30px 0 36px;
  color: var(--muted);
  font-size: 0.93rem;
}

.hero-meta li {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.hero-meta svg {
  color: var(--blue-600);
}

.hero-cta {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 14px;
}

.hero-stats {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  max-width: 760px;
  padding: 0;
  margin: 42px auto 0;
}

.hero-stats li {
  display: block;
  text-align: center;
}

.hero-stats .stat-value {
  display: block;
  font-family: var(--font-display);
  font-size: clamp(1.6rem, 3.4vw, 2.2rem);
  font-weight: 700;
  line-height: 1.1;
  color: var(--ink);
}

.hero-stats .stat-label {
  display: block;
  margin-top: 4px;
  font-size: 0.85rem;
  color: var(--muted);
}

@media (max-width: 640px) {
  .hero-stats {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>

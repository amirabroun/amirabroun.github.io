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
          src="https://github.com/amirabroun.png"
          width="120"
          height="120"
          alt="Amir Abroun"
          @error="avatarFailed = true"
        >
        <span v-else class="avatar-fallback" aria-hidden="true">AA</span>
      </div>

      <p class="hero-badges reveal">
        <span class="status">
          <span class="status-dot" aria-hidden="true"></span>
          Open to new opportunities
        </span>
      </p>

      <p class="eyebrow reveal">Full-Stack Developer</p>

      <h1 class="hero-title grad-text reveal">Amir Abroun</h1>

      <p class="hero-sub reveal">
        Laravel APIs on the backend, Vue &amp; Nuxt on the frontend, and the Docker,
        Nginx &amp; CI plumbing in between — I build web products end-to-end.
      </p>

      <ul class="hero-meta reveal">
        <li>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
          Iran · open to remote
        </li>
        <li>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
          6+ years of experience
        </li>
        <li>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M8 10h.01"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 14h.01"/><path d="M16 14h.01"/><path d="M12 14h.01"/></svg>
          Building
          <a href="https://sanjeman.com/" target="_blank" rel="noopener">Sanjeman</a>
        </li>
      </ul>

      <div class="hero-cta stagger">
        <a class="btn btn-primary reveal" href="#projects">
          See my work
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </a>
        <a class="btn btn-ghost reveal" href="https://github.com/amirabroun" target="_blank" rel="noopener">
          <IconGithub />
          GitHub
        </a>
        <a class="btn btn-ghost reveal" href="https://www.linkedin.com/in/amir-abroun-4a7ab321a/" target="_blank" rel="noopener">
          <IconLinkedin />
          LinkedIn
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const avatarFailed = ref(false)
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
</style>

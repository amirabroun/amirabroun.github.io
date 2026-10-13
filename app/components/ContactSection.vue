<template>
  <section id="contact">
    <div class="container">
      <div class="contact-panel reveal">
        <p class="contact-eyebrow">Contact</p>
        <h2>Let's build something.</h2>
        <p class="contact-sub">
          I'm open to interesting full-stack and backend roles — and good
          conversations about Laravel, Nuxt or Go.
        </p>

        <div class="contact-actions stagger">
          <a class="btn btn-white reveal" href="https://github.com/amirabroun" target="_blank" rel="noopener">
            <IconGithub />
            GitHub
          </a>
          <a class="btn btn-outline reveal" href="https://www.linkedin.com/in/amir-abroun-4a7ab321a/" target="_blank" rel="noopener">
            <IconLinkedin />
            LinkedIn
          </a>
          <a class="btn btn-outline reveal" href="https://sanjeman.com/" target="_blank" rel="noopener">
            sanjeman.com
          </a>
        </div>
      </div>

      <footer class="site-footer">
        <span>© 2026 Amir Abroun</span>
        <span>Built with Nuxt · Deployed on GitHub Pages</span>
      </footer>
    </div>
  </section>
</template>

<style scoped>
.contact-panel {
  position: relative;
  overflow: hidden;
  border-radius: 28px;
  background: var(--grad);
  box-shadow: var(--shadow-lg);
  padding: 68px 32px;
  text-align: center;
  color: #fff;
}

.contact-panel::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(28rem 16rem at 20% 0%, rgba(255, 255, 255, 0.14), transparent 60%),
    radial-gradient(24rem 14rem at 90% 100%, rgba(255, 255, 255, 0.1), transparent 60%);
}

.contact-eyebrow {
  margin: 0 0 10px;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.85);
}

.contact-panel h2 {
  margin: 0 0 14px;
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  color: #fff;
}

.contact-sub {
  max-width: 520px;
  margin: 0 auto 32px;
  color: rgba(255, 255, 255, 0.88);
}

.contact-actions {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 14px;
}

.site-footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
  padding: 26px 0 8px;
  color: var(--muted);
  font-size: 0.85rem;
}
</style>

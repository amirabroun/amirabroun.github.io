<template>
  <section id="experience">
    <div class="container">
      <div class="section-head reveal">
        <p class="eyebrow">Experience</p>
        <h2>Where I've been shipping</h2>
      </div>

      <article class="card xp reveal">
        <div class="xp-head">
          <span class="xp-logo" aria-hidden="true">S</span>
          <div class="xp-id">
            <h3>
              <a href="https://sanjeman.com/" target="_blank" rel="noopener">
                Sanjeman
                <IconExternal />
              </a>
            </h3>
            <p class="xp-role">Full-Stack Developer</p>
          </div>
          <span class="chip chip-now">Present</span>
        </div>

        <ul class="xp-list">
          <li>
            Build and evolve the core Laravel API platform behind sanjeman.com — a
            recruitment product serving the Iranian market.
          </li>
          <li>
            Ship and maintain Nuxt 3 and Vue frontends: the main product, the admin
            panel and SSO flows.
          </li>
          <li>
            Own DevOps end-to-end — Docker, Nginx, GitLab CI/CD pipelines and
            production MySQL &amp; Redis.
          </li>
          <li>
            Integrate external services: payment gateways, SMS providers and job-board
            partners.
          </li>
          <li>
            Keep production healthy — GlitchTip/Sentry error triage, performance tuning
            and code review across the team.
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
  margin-left: auto;
  background: #f0fdf4;
  border-color: #bbf7d0;
  color: #15803d;
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
  padding-left: 26px;
  font-size: 0.98rem;
}

.xp-list li::before {
  content: "";
  position: absolute;
  left: 0;
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
    margin-left: 0;
  }
}
</style>

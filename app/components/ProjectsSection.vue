<template>
  <section id="projects">
    <div class="container">
      <div class="section-head reveal">
        <p class="eyebrow">Projects</p>
        <h2>Things I've built</h2>
      </div>

      <div class="projects-grid stagger">
        <article class="card featured reveal">
          <div class="featured-head">
            <h3>
              <a href="https://sanjeman.com/" target="_blank" rel="noopener">
                Sanjeman Platform
                <IconExternal />
              </a>
            </h3>
            <span class="chip chip-work">Work · Production</span>
          </div>
          <p>
            A large-scale recruitment platform serving the Iranian market — Laravel
            APIs, Nuxt 3 frontends, SSO, browser extensions and the infrastructure
            behind it.
          </p>
          <div class="chips">
            <span class="chip">Laravel</span>
            <span class="chip">Nuxt 3</span>
            <span class="chip">MySQL</span>
            <span class="chip">Docker</span>
            <span class="chip">GitLab CI</span>
          </div>
        </article>

        <article class="card project reveal">
          <h3>
            <a href="https://github.com/amirabroun/nuxt-blog" target="_blank" rel="noopener">
              nuxt-blog
              <IconExternal />
            </a>
          </h3>
          <p>Blog application built with Nuxt — routing, SSR and content handling.</p>
          <div class="chips">
            <span class="chip">Nuxt</span>
            <span class="chip">Vue</span>
          </div>
        </article>

        <article class="card project reveal">
          <h3>
            <a href="https://github.com/amirabroun/laravel-blog" target="_blank" rel="noopener">
              laravel-blog
              <IconExternal />
            </a>
          </h3>
          <p>Blog engine in Laravel — Eloquent, auth and an admin area.</p>
          <div class="chips">
            <span class="chip">Laravel</span>
            <span class="chip">PHP</span>
          </div>
        </article>

        <article class="card project reveal">
          <h3>
            <a href="https://github.com/amirabroun/chat-app" target="_blank" rel="noopener">
              chat-app
              <IconExternal />
            </a>
          </h3>
          <p>Real-time chat application.</p>
          <div class="chips">
            <span class="chip">JavaScript</span>
          </div>
        </article>

        <article class="card project reveal">
          <h3>
            <a href="https://github.com/amirabroun/gin" target="_blank" rel="noopener">
              gin
              <IconExternal />
            </a>
          </h3>
          <p>Learning Go by building REST APIs with the Gin framework.</p>
          <div class="chips">
            <span class="chip">Go</span>
            <span class="chip">Gin</span>
          </div>
        </article>

        <article class="card project reveal">
          <h3>
            <a href="https://github.com/amirabroun/comparison-redis-and-mysql" target="_blank" rel="noopener">
              redis-vs-mysql
              <IconExternal />
            </a>
          </h3>
          <p>Benchmarking Redis against MySQL across real workloads.</p>
          <div class="chips">
            <span class="chip">Redis</span>
            <span class="chip">MySQL</span>
          </div>
        </article>

        <article class="card project reveal">
          <h3>
            <a href="https://github.com/amirabroun/php-container" target="_blank" rel="noopener">
              php-container
              <IconExternal />
            </a>
          </h3>
          <p>Dockerized PHP development environment.</p>
          <div class="chips">
            <span class="chip">Docker</span>
            <span class="chip">PHP</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

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
  left: 0;
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

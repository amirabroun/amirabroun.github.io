<template>
  <header class="site-header">
    <div class="container header-inner">
      <a href="#top" class="logo" aria-label="Amir Abroun — back to top">
        <span class="logo-mark" aria-hidden="true">AA</span>
        <span>Amir Abroun</span>
      </a>

      <nav class="site-nav" aria-label="Sections">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      <a
        class="header-gh"
        href="https://github.com/amirabroun"
        target="_blank"
        rel="noopener"
        aria-label="GitHub profile"
      >
        <IconGithub />
      </a>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: fixed;
  inset: 0 0 auto;
  z-index: 50;
  background: rgba(248, 250, 252, 0.78);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(226, 232, 240, 0.7);
}

.header-inner {
  display: flex;
  align-items: center;
  gap: 20px;
  height: 68px;
}

.logo {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 1.02rem;
  letter-spacing: -0.01em;
  color: var(--ink);
}

.logo:hover {
  text-decoration: none;
  color: var(--blue-700);
}

.logo-mark {
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background: var(--grad);
  color: #fff;
  display: grid;
  place-items: center;
  font-size: 0.78rem;
  font-weight: 700;
  box-shadow: var(--shadow-sm);
}

.site-nav {
  display: flex;
  gap: 26px;
  margin-left: auto;
  font-size: 0.92rem;
  font-weight: 500;
}

.site-nav a {
  color: var(--body);
}

.site-nav a:hover {
  color: var(--blue-600);
  text-decoration: none;
}

.header-gh {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  color: var(--navy);
  border: 1px solid var(--line);
  background: #fff;
  transition: border-color 0.2s, color 0.2s, transform 0.2s;
}

.header-gh:hover {
  color: var(--blue-600);
  border-color: var(--blue-200);
  transform: translateY(-1px);
  text-decoration: none;
}

@media (max-width: 720px) {
  .site-nav {
    display: none;
  }

  .header-gh {
    margin-left: auto;
  }
}
</style>

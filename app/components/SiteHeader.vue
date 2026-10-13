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

      <div class="header-actions">
        <button
          type="button"
          class="header-btn"
          :aria-label="theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'"
          :title="theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'"
          @click="toggleTheme"
        >
          <svg
            v-if="theme === 'dark'"
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
          </svg>
          <svg
            v-else
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
          </svg>
        </button>

        <a
          class="header-btn"
          href="https://github.com/amirabroun"
          target="_blank"
          rel="noopener"
          aria-label="GitHub profile"
        >
          <IconGithub />
        </a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const theme = ref<'light' | 'dark'>('light')

onMounted(() => {
  theme.value =
    document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
})

function toggleTheme() {
  const next = theme.value === 'dark' ? 'light' : 'dark'
  const root = document.documentElement

  root.classList.add('theming')
  root.setAttribute('data-theme', next)
  localStorage.setItem('theme', next)
  theme.value = next

  window.setTimeout(() => root.classList.remove('theming'), 320)
}
</script>

<style scoped>
.site-header {
  position: fixed;
  inset: 0 0 auto;
  z-index: 50;
  background: var(--header-bg);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--line);
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

.header-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.header-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  color: var(--navy);
  border: 1px solid var(--line);
  background: var(--surface-raised);
  transition: border-color 0.2s, color 0.2s, transform 0.2s;
}

.header-btn:hover {
  color: var(--blue-600);
  border-color: var(--blue-200);
  transform: translateY(-1px);
  text-decoration: none;
}

@media (max-width: 720px) {
  .site-nav {
    display: none;
  }

  .header-actions {
    margin-left: auto;
  }
}
</style>

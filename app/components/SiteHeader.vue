<template>
  <header class="fixed inset-x-0 top-0 z-50 border-b border-line bg-header backdrop-blur-md print:hidden">
    <!-- scroll progress -->
    <div
      aria-hidden="true"
      class="absolute inset-x-0 top-0 h-0.5 origin-start bg-[image:var(--grad)]"
      :style="{ transform: `scaleX(${progress})` }"
    ></div>

    <div class="container flex h-16 items-center gap-5">
      <a href="#top" class="inline-flex items-center gap-2.5 font-display text-base font-semibold tracking-tight text-ink hover:text-accent-strong hover:no-underline" aria-label="Amir Abroun — back to top">
        <span class="grid size-8 place-items-center rounded-md bg-[image:var(--grad)] text-xs font-bold text-white" aria-hidden="true">AA</span>
        <span>{{ t('name') }}</span>
      </a>

      <nav class="ms-auto hidden items-center gap-6 font-mono text-sm font-medium md:flex" aria-label="Sections">
        <a
          v-for="item in navItems"
          :key="item.id"
          :href="item.hash"
          class="transition-colors hover:text-accent hover:no-underline"
          :class="active === item.id ? 'text-ink underline decoration-accent decoration-2 underline-offset-8' : 'text-body'"
          :aria-current="active === item.id ? 'true' : undefined"
        >{{ t(item.label) }}</a>
        <NuxtLink to="/cv" :class="isCv ? 'text-ink underline decoration-accent decoration-2 underline-offset-8' : 'text-body'" class="transition-colors hover:text-accent hover:no-underline">{{ t('nav.cv') }}</NuxtLink>
      </nav>

      <div class="ms-auto flex items-center gap-2.5 md:ms-0">
        <NuxtLink
          :to="switchLocalePath(otherLocale)"
          class="inline-flex h-9 items-center justify-center rounded-md border border-line bg-surface px-3 font-mono text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-accent hover:no-underline"
          :aria-label="isFa ? 'Change language to English' : 'تغییر زبان به فارسی'"
        >
          {{ isFa ? 'EN' : 'فا' }}
        </NuxtLink>

        <button
          type="button"
          class="inline-flex size-9 items-center justify-center rounded-md border border-line bg-surface text-ink transition-colors hover:border-accent hover:text-accent"
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
          class="inline-flex size-9 items-center justify-center rounded-md border border-line bg-surface text-ink transition-colors hover:border-accent hover:text-accent"
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
const { t, locale } = useI18n()
const isFa = computed(() => locale.value === 'fa')
const otherLocale = computed(() => (isFa.value ? 'en' : 'fa'))
const switchLocalePath = useSwitchLocalePath()

const theme = ref<'light' | 'dark'>('light')

// highlight the nav item of the section currently in view (home page only)
const active = ref('')
const route = useRoute()
const isCv = computed(() => route.path === '/cv')

const navItems = [
  { id: 'about', hash: '#about', label: 'nav.about' },
  { id: 'experience', hash: '#experience', label: 'nav.experience' },
  { id: 'skills', hash: '#skills', label: 'nav.skills' },
  { id: 'projects', hash: '#projects', label: 'nav.projects' },
  { id: 'contact', hash: '#contact', label: 'nav.contact' },
] as const

// scroll progress for the top hairline bar (skipped under reduced motion)
const progress = ref(0)

onMounted(() => {
  theme.value =
    document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    let raf = 0
    const update = () => {
      raf = 0
      const doc = document.documentElement
      const max = doc.scrollHeight - doc.clientHeight
      progress.value = max > 0 ? Math.min(1, doc.scrollTop / max) : 0
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    update()
    onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) active.value = entry.target.id
      }
    },
    { rootMargin: '-40% 0px -55% 0px' },
  )
  for (const id of ['about', 'experience', 'skills', 'projects', 'contact']) {
    const el = document.getElementById(id)
    if (el) io.observe(el)
  }
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

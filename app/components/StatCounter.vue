<template>
  <div ref="root" class="stat">
    <span class="stat-value stat-num">{{ display }}</span>
    <span class="stat-label">{{ label }}</span>
  </div>
</template>

<script setup lang="ts">
// Renders the final value in SSR/print; animates 0 → value only in the
// browser, only when visible, and only without prefers-reduced-motion.
const props = withDefaults(
  defineProps<{
    value: number
    label: string
    prefix?: string
    suffix?: string
  }>(),
  { prefix: '', suffix: '' },
)

const { locale } = useI18n()
const current = ref(props.value)
const display = computed(() => {
  const digits = new Intl.NumberFormat(locale.value === 'fa' ? 'fa-IR' : 'en-US').format(current.value)
  return props.prefix + digits + props.suffix
})

const root = ref<HTMLElement | null>(null)
let raf = 0

onMounted(() => {
  const start = () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    current.value = 0
    const t0 = performance.now()
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / 1200)
      current.value = Math.round(props.value * (1 - Math.pow(1 - p, 3)))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
  }

  const io = new IntersectionObserver(
    (entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        io.disconnect()
        start()
      }
    },
    { threshold: 0.6 },
  )
  io.observe(root.value!)
  onBeforeUnmount(() => {
    io.disconnect()
    cancelAnimationFrame(raf)
  })
})
</script>

<style scoped>
.stat {
  text-align: center;
}

.stat-value {
  display: block;
  font-family: var(--font-display);
  font-size: clamp(1.6rem, 3.4vw, 2.2rem);
  font-weight: 700;
  line-height: 1.1;
  color: var(--ink);
}

/* isolate number+suffix from RTL bidi so "۵+" keeps its pinned order */
.stat-num {
  direction: ltr;
  unicode-bidi: isolate;
}

.stat-label {
  display: block;
  margin-top: 4px;
  font-size: 0.85rem;
  color: var(--muted);
}
</style>

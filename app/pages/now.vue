<template>
  <main class="container now-page">
    <div class="section-head">
      <p class="eyebrow">{{ t('now.eyebrow') }}</p>
      <h1>{{ t('now.title') }}</h1>
      <p class="now-sub">{{ t('now.sub') }}</p>
    </div>

    <ul class="now-list stagger" role="list">
      <li v-for="item in items" :key="item" class="card now-item reveal">
        {{ item }}
      </li>
    </ul>

    <p class="now-updated">{{ t('now.updated') }}</p>
  </main>
</template>

<script setup lang="ts">
const { t, tm, rt } = useI18n()
const rtv = rt as (msg: unknown) => string

const items = computed(() => (tm('now.items') as unknown[]).map((b) => rtv(b)))

useHead({ title: () => t('now.title') })
</script>

<style scoped>
.now-page {
  padding: 140px 24px 88px;
}

.now-sub {
  margin: 8px 0 0;
  color: var(--muted);
}

.now-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 12px;
}

.now-item {
  padding: 20px 24px;
  font-size: 1rem;
}

.now-updated {
  margin-top: 22px;
  color: var(--muted);
  font-size: 0.85rem;
}
</style>

<template>
  <main class="container cv-stub">
    <p>{{ t('hero.resume') }}</p>
  </main>
</template>

<script setup lang="ts">
// placeholder until Task 10 ports the full resume — exists so the hero
// /cv link prerenders instead of 404ing the crawler
const { t } = useI18n()
</script>

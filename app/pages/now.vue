<template>
  <main class="container">
    <p>{{ t('snapshot.now_body') }}</p>
  </main>
</template>

<script setup lang="ts">
// placeholder until Task 9 fills the real /now list — exists so the
// snapshot card link prerenders instead of 404ing the crawler
const { t } = useI18n()
</script>

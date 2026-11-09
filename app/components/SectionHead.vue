<template>
  <div class="mb-10 reveal">
    <p class="font-mono text-sm text-muted" aria-hidden="true">{{ num }} /</p>
    <h2 class="mt-2 font-display text-[clamp(1.75rem,4vw,2.5rem)] font-semibold tracking-tight text-ink">
      {{ title }}
    </h2>
    <div class="mt-4 h-px w-16 bg-accent" aria-hidden="true"></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ num: string, title: string }>()
</script>

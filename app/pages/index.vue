<template>
  <main :key="locale">
    <HeroSection />
    <AboutSection />
    <ExperienceSection />
    <SkillsSection />
    <ProjectsSection />
    <ContactSection />
  </main>
</template>

<script setup lang="ts">
const { locale } = useI18n()
</script>

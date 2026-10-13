<template>
  <div class="site">
    <SiteHeader />
    <main>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  </div>
</template>

<script setup lang="ts">
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Amir Abroun',
        jobTitle: 'Full-Stack Developer',
        url: 'https://amirabroun.github.io',
        worksFor: { '@type': 'Organization', name: 'Sanjeman', url: 'https://sanjeman.com/' },
        sameAs: [
          'https://github.com/amirabroun',
          'https://www.linkedin.com/in/amir-abroun-4a7ab321a/',
        ],
      }),
    },
  ],
})

onMounted(() => {
  const elements = document.querySelectorAll('.reveal')
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
  )
  elements.forEach((el) => observer.observe(el))
})
</script>

<style>
.site {
  overflow-x: clip;
}
</style>

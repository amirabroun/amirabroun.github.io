import type { RouterConfig } from '@nuxt/schema'

// strip the /fa locale prefix so / and /fa are recognized as the same page
function stripLocale(path: string): string {
  return path.replace(/^\/fa(\/|$)/, '/') || '/'
}

export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    // switching language is the same page in another locale — keep scroll position
    if (stripLocale(to.path) === stripLocale(from.path)) {
      return savedPosition ?? undefined
    }

    if (to.hash) {
      return { el: to.hash, top: 88 }
    }

    return savedPosition ?? { top: 0 }
  },
}

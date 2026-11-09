# Tailwind v4 + Dark Engineer Editorial Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Port the Nuxt 4 portfolio to Tailwind v4 and redesign all pages in a "dark engineer editorial" visual language — mono accents, numbered sections, flat cards, subtle grid texture — while keeping both locales (fa RTL / en LTR), both themes, and the static build green.

**Architecture:** Tailwind v4 via `@tailwindcss/vite` (CSS-first, no config file). Semantic CSS variables stay on `:root` / `[data-theme="dark"]` and are bridged into Tailwind with `@theme inline`, so `dark:` is mapped to the existing `data-theme` attribute and theme switching keeps working without touching JS. Templates are rewritten utility-first; `main.css` shrinks to base + reveal + print + theme plumbing. A new `SectionHead.vue` component standardizes the numbered-section pattern.

**Tech Stack:** Nuxt 4 (static generate), Tailwind CSS v4, `@tailwindcss/vite`, @fontsource variable fonts (Inter, Space Grotesk, Vazirmatn + new JetBrains Mono), `@nuxtjs/i18n`.

**Spec:** This document is the spec (design direction chosen by Amir in session 2026-11-09: full Tailwind v4 migration + dark engineer editorial + all pages).

## Global Constraints

- **No commits, no pushes.** Plan intentionally has zero commit steps — Amir asks for those separately per his git rules. Everything stays uncommitted in the working tree (currently on `main`; branching/commit is his call).
- **No content changes.** Copy/numbers stay as-is; only exception: new i18n keys for copy-email feedback, and removal of keys orphaned by deleted UI (typewriter, blobs).
- **Both locales must stay fully working** — fa (RTL, default) and en (LTR). Direction-sensitive styles use Tailwind logical utilities only (`ms-*`, `me-*`, `ps-*`, `pe-*`, `text-start`, `start-*`, `end-*`). Never `ml-*, pl-*, left-*, right-*, text-left` for content layout.
- **Both themes stay** (light + dark, `data-theme` attribute, localStorage, no-flash inline script in `nuxt.config.ts` — untouched).
- **Keep working as-is:** reveal/stagger IntersectionObserver system (`.reveal` classes in `app.vue`), theme toggle logic, active-nav IntersectionObserver in `SiteHeader`, `prefers-reduced-motion` handling, focus-visible styles, print styles, `router.options.ts`, PDF build script.
- **New deps allowed (exactly these):** `tailwindcss`, `@tailwindcss/vite` (devDeps), `@fontsource-variable/jetbrains-mono` (dep). No UI kit, no animation library.
- **Blue accent palette stays** (brand continuity). The redesign changes structure/typography/texture, not the hue.
- Body text contrast ≥ 4.5:1 in BOTH themes (mono accent numbers may be ≥ 3:1 as large/decorative text).
- Node ≥ 20.19 (`package.json` engines).

## Design Language — decisions locked

**Tokens (bridged via `@theme inline` in `main.css`):**

- Colors keep current names/values from `main.css:10-99`: `--bg`, `--ink`, `--body`, `--muted`, `--line`, `--card`, `--surface-raised`, `--header-bg`, blues, `--green`, `--grad`. Bridge: `--color-bg: var(--bg)`, `--color-ink: var(--ink)`, etc. → utilities `bg-bg`, `text-ink`, `text-body`, `text-muted`, `border-line`, `bg-card`, `text-accent` (from `--blue-600`), `text-accent-strong` (`--blue-700`), `bg-accent` etc.
- Fonts: `--font-sans` (Inter), `--font-display` (Space Grotesk), `--font-mono` (JetBrains Mono, NEW), each overridable by `html[lang="fa"]` → Vazirmatn (mono stays JetBrains Mono in fa — digits/latin look intentional).
- Radius: `--radius-xl: 16px`, `--radius-lg: 12px`, `--radius-md: 8px` (sharper than current 20px — editorial).
- Shadows: keep current three shadows but use sparingly; cards rely on border + bg, not shadow.

**Typography scale (utilities, no custom classes):**

- Hero name: `text-[clamp(2.75rem,8vw,4.5rem)] leading-[1.05] font-display font-bold tracking-[-0.03em]` (en; fa keeps `tracking-normal` via the existing `html[lang="fa"]` letter-spacing reset).
- Section h2: `text-[clamp(1.75rem,4vw,2.5rem)]`.
- Eyebrows / meta / numbers: `font-mono text-xs` (0.78rem), uppercase + `tracking-[0.18em]` for en eyebrows only.

**Section header pattern — new `SectionHead.vue`:**

Props: `num: string` (`'01'`), `title: string`. Markup: mono number (`text-muted font-mono text-sm`) + title, with a thin `bg-line` rule. Replaces every `.section-head`/`.eyebrow` block. Numbers: snapshot `01`, experience `02`, skills `03`, projects `04`, contact `05`.

**Background texture (replaces blobs):** `body::before` — dark theme: 1px grid lines `rgba(148,163,184,0.05)` at 48px cells (two `linear-gradient`s) + existing top radial glow kept; light theme: existing soft radial wash only (no grid). Implemented in `main.css`, masked to fade near edges (radial mask).

**Deleted visual elements:** hero blobs, typewriter (`.hero-type`, `tw-cursor`, `twText` logic), chip-walls (`.chips`/`.chip` groups → inline `font-mono text-sm text-body` lists, items joined by ` · `), universal card hover-lift (hover becomes `border-accent` + tiny `-translate-y-0.5` only on interactive cards).

**Header:** fixed, blur backdrop (existing), + NEW 2px scroll progress bar at the very top (`bg-grad` gradient, `scale-x` transform driven by rAF scroll listener, `aria-hidden`, disabled under reduced motion).

**Contact:** big closing statement (display font) + email row: mailto link + copy button (`navigator.clipboard`, "کپی شد/Copied" feedback for ~1.6s, `aria-live="polite"`).

**Case-study project cards:** thumbnail (kapsul has `/img/kapsul-*.jpg` — check `public/img/` at execution; Anbari Toys/hermes-mini/gin get no screenshot, keep text layout), title + badge, one-line desc, tech in mono, `IconExternal` on hover-end.

## File Structure

- Modify: `package.json`, `nuxt.config.ts` (vite plugin only)
- Rewrite: `app/assets/css/main.css` (shrink: tailwind import + custom-variant + theme bridge + base + reveal + print + texture)
- Rewrite templates + delete scoped styles in: `SiteHeader.vue`, `HeroSection.vue`, `SnapshotSection.vue`, `ExperienceSection.vue`, `SkillsSection.vue`, `ProjectsSection.vue`, `ContactSection.vue`, `StatCounter.vue` (only class renames if any), `pages/cv.vue`, `pages/now.vue`
- Create: `app/components/SectionHead.vue`
- Modify: `i18n/locales/fa.json`, `i18n/locales/en.json` (add `contact.copy_email`, `contact.copied`; drop keys orphaned by deletions)
- Untouched: `app.vue` (script; `.site` style trivial), `router.options.ts`, `scripts/build-pdf.mjs`, `public/`

---

### Task 1: Tailwind v4 foundation (coexists with old CSS)

**Files:**
- Modify: `package.json`, `nuxt.config.ts`, `app/assets/css/main.css`

**Interfaces:**
- Produces: working `dark:` variant bound to `[data-theme="dark"]`; token utilities (`bg-bg`, `text-ink`, `text-muted`, `border-line`, `bg-card`, `text-accent`, `text-accent-strong`, `bg-accent`, `font-sans`, `font-display`, `font-mono`, `rounded-xl/lg/md`) available to all later tasks. Old semantic classes keep working until Task 11.

- [ ] **Step 1: Install deps**

Run: `npm i -D tailwindcss @tailwindcss/vite && npm i @fontsource-variable/jetbrains-mono`
Expected: package.json gains the three deps.

- [ ] **Step 2: Wire the vite plugin in `nuxt.config.ts`**

```ts
import tailwindcss from '@tailwindcss/vite'
// inside defineNuxtConfig:
vite: { plugins: [tailwindcss()] },
```

- [ ] **Step 3: Prepend to `main.css` (before everything, after fontsource imports add the mono font)**

```css
@import "tailwindcss";
@import "@fontsource-variable/jetbrains-mono";

@custom-variant dark (&:where([data-theme="dark"], [data-theme="dark"] *));

@theme inline {
  --color-bg: var(--bg);
  --color-ink: var(--ink);
  --color-body: var(--body);
  --color-muted: var(--muted);
  --color-line: var(--line);
  --color-card: var(--card);
  --color-surface: var(--surface-raised);
  --color-accent: var(--blue-600);
  --color-accent-strong: var(--blue-700);
  --color-accent-soft: var(--blue-50);
  --color-ok: var(--green);
  --font-sans: var(--font-body);
  --font-display: var(--font-display);
  --font-mono: "JetBrains Mono Variable", ui-monospace, monospace;
  --radius-xl: 16px;
  --radius-lg: 12px;
  --radius-md: 8px;
}
```

(`:root` block below keeps defining `--bg` etc.; `html[lang="fa"]` font override keeps working because utilities resolve `var(--font-body)`.)

- [ ] **Step 4: Verify coexistence**

Run: `npm run build`
Expected: build succeeds; generated CSS contains both Tailwind preflight/utilities and the old semantic classes; dev render of `/` visually unchanged.

### Task 2: Base layer + SectionHead component

**Files:**
- Modify: `app/assets/css/main.css`
- Create: `app/components/SectionHead.vue`

**Interfaces:**
- Consumes: token utilities from Task 1.
- Produces: `<SectionHead num="01" :title="t('...')" />` used by Tasks 5–9; grid texture + sharper typography base for everything.

- [ ] **Step 1: Rework base in `main.css`** — keep: fontsource + tailwind imports, `@custom-variant`, `@theme inline`, `:root`/dark vars, fa font override + letter-spacing reset, `html.theming` transition, reveal/stagger, reduced-motion block, print block (update selector names only as components migrate), focus-visible, selection. Change: `body::before` per texture spec (grid in dark only, keep light wash; add `-webkit-mask-image`/`mask-image` radial fade), sharpen `--radius-*` values (16/12/8) in the existing `:root`, body `line-height: 1.7` (fa needs room).
- [ ] **Step 2: Create `SectionHead.vue`** — props `num: string`, `title: string`; markup: `<div class="mb-10 reveal">` → mono number + `<h2 class="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-semibold text-ink tracking-tight">`, thin rule under (`h-px bg-line`). Add `class="reveal"`.
- [ ] **Step 3: Verify** — Run: `npx nuxi typecheck && npm run build`. Expected: pass.

### Task 3: SiteHeader

**Files:**
- Modify: `app/components/SiteHeader.vue`

- [ ] **Step 1: Convert template/style to utilities** — keep script block 100% as-is (theme toggle, lang switch, active observer, GitHub link). Add scroll progress: `ref` progress + `onMounted` passive scroll listener with rAF setting `transform: scaleX(p)` on a `position:absolute inset-inline-0 top-0 h-0.5 origin-start bg-grad` div (`aria-hidden`; skip listener when `matchMedia('(prefers-reduced-motion: reduce)')`). Note `origin-start` flips correctly in RTL.
- [ ] **Step 2: Verify** — Run: `npx nuxi typecheck && npm run build`. Expected: pass. Delete scoped style block.

### Task 4: HeroSection

**Files:**
- Modify: `app/components/HeroSection.vue`, `i18n/locales/fa.json`, `i18n/locales/en.json`

- [ ] **Step 1: New hero markup** — remove: `.hero-bg` blobs, typewriter block + `twText` script. Keep: avatar (smaller ring: `size-20 rounded-full ring-2 ring-accent`), status pill (keep pulse dot), `hero.eyebrow` as mono eyebrow line, name at display scale (spec above), `hero.sub` at `text-lg text-body max-w-2xl`, mono meta row (location/experience/company links), CTA row (`btn-primary` → solid accent pill, ghost stays). All reveal classes preserved.
- [ ] **Step 2: Remove orphaned i18n keys** — typewriter strings (find exact keys, e.g. `hero.type_*`) from both locale files.
- [ ] **Step 3: Verify** — Run: `npx nuxi typecheck && npm run build`. Expected: pass; no dead key warnings from i18n.

### Task 5: SnapshotSection

**Files:**
- Modify: `app/components/SnapshotSection.vue`

- [ ] **Step 1: Convert** — `SectionHead num="01" :title="t('snapshot.heading')"`. Bento grid `grid gap-4 sm:grid-cols-2`; cards `rounded-lg border border-line bg-card p-5` (no shadow), the NuxtLink one gets hover border-accent + `-translate-y-0.5` transition. Icons lose their tinted boxes → plain `text-accent` size-5. Delete scoped styles.
- [ ] **Step 2: Verify** — Run: `npx nuxi typecheck && npm run build`. Expected: pass.

### Task 6: ExperienceSection

**Files:**
- Modify: `app/components/ExperienceSection.vue`

- [ ] **Step 1: Convert** — `SectionHead num="02"`. Keep ALL interactive logic (tabs, stat band, timeline data flow) untouched; only classes change. Timeline rail + dots → `border-s border-line ps-*` + `size-2 rounded-full bg-accent` markers. Dates/sublines → `font-mono text-xs text-muted`. Stat band (`StatCounter` + `hero.stats.*`) → flatter cells `divide-x divide-line`-style (use `divide-x` only in en; for RTL safety use `border-s` on children instead). Delete scoped styles.
- [ ] **Step 2: Verify** — Run: `npx nuxi typecheck && npm run build`. Expected: pass.

### Task 7: SkillsSection

**Files:**
- Modify: `app/components/SkillsSection.vue`

- [ ] **Step 1: Convert** — `SectionHead num="03"`. Grid `sm:grid-cols-2`. Chip-walls become inline mono lists: `<p class="font-mono text-sm text-body">PHP 8 · Laravel · MySQL · Redis/Horizon · REST API</p>` (keep per-card items identical, locale-conditional items keep their ternaries). Icons plain accent. Learning card keeps dashed border + pulse dot (`.animate-pulse` utility is fine — Tailwind's respects nothing automatically, so wrap pulse in `motion-safe:animate-pulse`). Delete scoped styles.
- [ ] **Step 2: Verify** — Run: `npx nuxi typecheck && npm run build`. Expected: pass.

### Task 8: ProjectsSection

**Files:**
- Modify: `app/components/ProjectsSection.vue`

- [ ] **Step 1: Convert** — `SectionHead num="04"`. kapsul: featured card, `sm:col-span-2`, screenshot top (`rounded-t-lg` full-bleed in card, lazy, width/height attrs), title + badge + desc + mono tech line + `IconExternal`. Others: compact cards same anatomy without image. Cloudflare note line stays (`font-mono text-xs text-muted`). Delete scoped styles.
- [ ] **Step 2: Verify** — Run: `npx nuxi typecheck && npm run build`. Expected: pass.

### Task 9: ContactSection

**Files:**
- Modify: `app/components/ContactSection.vue`, `i18n/locales/fa.json`, `i18n/locales/en.json`

- [ ] **Step 1: Convert + copy-email** — `SectionHead num="05"`. Big statement (display font, `text-[clamp(1.5rem,3.5vw,2.25rem)]`). Email row: mailto `text-accent underline-offset-4` + copy button (`navigator.clipboard.writeText`, `ref copied`, timeout 1600ms, `aria-live="polite"` feedback label from `contact.copied`). Social links (GitHub/LinkedIn) inline mono row.
- [ ] **Step 2: Add i18n keys** — `contact.copy_email`: fa «کپی ایمیل» / en "Copy email"; `contact.copied`: fa «کپی شد» / en "Copied".
- [ ] **Step 3: Verify** — Run: `npx nuxi typecheck && npm run build`. Expected: pass.

### Task 10: cv.vue + now.vue

**Files:**
- Modify: `app/pages/cv.vue`, `app/pages/now.vue`

- [ ] **Step 1: Convert both pages** to utilities; section headers follow the SectionHead pattern (import it — cv page uses it for its top blocks too). cv keeps its download/print affordances. Print styles in `main.css` already cover `.card`-era names — update print selectors here to whatever classes remain (or add `print:hidden` utilities where the old rules targeted removed elements).
- [ ] **Step 2: Verify** — Run: `npx nuxi typecheck && npm run build`. Expected: pass.

### Task 11: Strip dead CSS + final verification

**Files:**
- Modify: `app/assets/css/main.css`, both locale files (sweep), any leftover scoped styles

**Interfaces:**
- Consumes: all previous tasks landed.

- [ ] **Step 1: Delete dead blocks from `main.css`** — `.container` (replace usages with `mx-auto max-w-5xl px-6` utility or keep as ONE `@utility container` — pick `@utility`, it's used everywhere), `.section-head`, `.eyebrow`, `.grad-text` (keep if still used; else `@utility grad-text`), `.btn` family (replace with per-usage utilities during Tasks 4/9; delete here), `.card`, `.chip`, old hero/bento/skill leftovers. Grep `class="btn|card|chip|eyebrow` across `app/` must return zero.
- [ ] **Step 2: Dead i18n sweep** — for each key in both JSONs, grep usage in `app/`; delete unused (expect: old typewriter keys only).
- [ ] **Step 3: Full verification**

Run: `npx nuxi typecheck && npm run build && npm run generate && npm run pdf`
Expected: all pass; `.output/public` contains `/`, `/en`, `/now`, `/cv`; PDF builds from the redesigned cv page (screenshot composition still valid — if the PDF crops wrong against the new layout, report it, don't tune silently).

- [ ] **Step 4: Visual handoff** — Amir checks `npm run dev` himself (fa+en, light+dark, 375/768/1440). List what to look at: hero scale, grid texture subtlety, RTL numerals, progress bar, copy-email, cv print preview.

## Review Focus

1. **RTL physical-utility leak** — any `ml/pl/left/right/text-left` in layouts shifts/breaks fa. Test: view `/` (fa) and `/en`, toggle each. Mandate: logical utilities only (Global Constraints).
2. **Dark-theme contrast** — mono `text-muted` numbers/eyebrows and `text-body` on `bg-card` in dark must hold ≥4.5:1 body / ≥3:1 decorative. Check computed values in both themes.
3. **Theme machinery** — no-flash script, `html.theming` transition, toggle icons: all must survive the CSS rewrite (they live on `data-theme` + vars, which stay).
4. **Reduced motion** — new scroll progress bar + learning pulse must sit under `prefers-reduced-motion` guards (`motion-safe:` / the global reduce block in `main.css`).
5. **Print/PDF regression** — cv print output and `npm run pdf` must stay correct after markup rewrite; old print selectors reference removed classes.

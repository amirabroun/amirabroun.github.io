// Screenshot matrix of the prerendered site: pages × themes × viewports.
// Output lands in OUT (default /tmp/portfolio-shots) for eyeball review.
// Same env gotcha as build-pdf: local Chrome needs PUPPETEER_EXECUTABLE_PATH.
import http from 'node:http'
import { createReadStream, existsSync, statSync } from 'node:fs'
import path from 'node:path'
import { mkdir } from 'node:fs/promises'

const ROOT = path.resolve('.output/public')
const OUT = process.env.OUT || '/tmp/portfolio-shots'
const PORT = 4181

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.woff2': 'font/woff2',
  '.ico': 'image/x-icon',
}

const server = http.createServer((req, res) => {
  const urlPath = decodeURIComponent(new URL(req.url, 'http://x').pathname)
  let file = path.join(ROOT, urlPath)
  if (urlPath.endsWith('/')) file = path.join(file, 'index.html')
  if (!file.startsWith(ROOT) || !existsSync(file)) {
    res.writeHead(404).end('not found')
    return
  }
  if (statSync(file).isDirectory()) file = path.join(file, 'index.html')
  res.writeHead(200, { 'content-type': MIME[path.extname(file)] || 'application/octet-stream' })
  createReadStream(file).pipe(res)
})

await new Promise((resolve) => server.listen(PORT, '127.0.0.1', resolve))

const VIEWPORTS = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'mobile', width: 375, height: 812 },
]

// page name → route; fullPage extra shot only where noted
const PAGES = [
  { name: 'home-fa', path: '/', full: true },
  { name: 'home-en', path: '/en' },
  { name: 'cv-fa', path: '/cv' },
  { name: 'now-fa', path: '/now' },
]

const puppeteer = (await import('puppeteer')).default
const browser = await puppeteer.launch({ args: ['--no-sandbox', '--no-proxy-server'] })

try {
  await mkdir(OUT, { recursive: true })
  let count = 0

  for (const vp of VIEWPORTS) {
    for (const theme of ['light', 'dark']) {
      for (const p of PAGES) {
        // cv/now are locale-stable; skip their mobile/en duplicates to keep the set small
        if (vp.name === 'mobile' && p.name !== 'home-fa' && p.name !== 'home-en') continue

        const page = await browser.newPage()
        await page.setViewport({ width: vp.width, height: vp.height })
        // reduced motion ⇒ .reveal renders fully without the scroll dance
        await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }])
        // theme is read from localStorage before first paint (no-flash script)
        await page.evaluateOnNewDocument((t) => localStorage.setItem('theme', t), theme)

        await page.goto(`http://127.0.0.1:${PORT}${p.path}`, { waitUntil: 'networkidle0', timeout: 60000 })
        await page.evaluate(() => document.fonts.ready)

        const base = `${OUT}/${p.name}-${theme}-${vp.name}`
        await page.screenshot({ path: `${base}.png` })
        count++
        if (p.full) {
          await page.screenshot({ path: `${base}-full.png`, fullPage: true })
          count++
        }
        await page.close()
        console.log(`shot: ${p.name} ${theme} ${vp.name}`)
      }
    }
  }
  console.log(`shot-matrix: ${count} screenshots → ${OUT}`)
} finally {
  await browser.close()
  server.close()
}

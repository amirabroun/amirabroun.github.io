// Render /cv to PDF with the browser's print engine and drop it into the
// Pages artifact. Fails the build if the PDF cannot be produced — a broken
// résumé link is worse than a red CI run.
import http from 'node:http'
import { createReadStream, existsSync, statSync } from 'node:fs'
import path from 'node:path'
import { mkdir } from 'node:fs/promises'

const ROOT = path.resolve('.output/public')
const OUT_DIR = path.join(ROOT, 'cv')
const OUT = path.join(OUT_DIR, 'amir-abroun.pdf')
const PORT = 4179

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml',
  '.ico': 'image/x-icon',
}

// tiny static server — no dependency needed for prerendered output
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

const puppeteer = (await import('puppeteer')).default
const browser = await puppeteer.launch({ args: ['--no-sandbox'] })
try {
  const page = await browser.newPage()
  await page.goto(`http://127.0.0.1:${PORT}/cv/`, { waitUntil: 'networkidle0', timeout: 60000 })
  await page.evaluate(() => document.fonts.ready) // embed Vazirmatn, not a fallback
  await mkdir(OUT_DIR, { recursive: true })
  await page.pdf({
    path: OUT,
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
  })
  console.log(`build-pdf: wrote ${OUT} (${statSync(OUT).size} bytes)`)
} finally {
  await browser.close()
  server.close()
}

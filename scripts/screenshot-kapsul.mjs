// Screenshot the live kapsul app for the portfolio featured card.
// Writes public/img/kapsul.png; exits 0 without writing on any failure —
// the committed fallback image (if any) then stays in place.
import { mkdir } from 'node:fs/promises'
import path from 'node:path'

const URL = process.env.KAPSUL_URL || 'https://kapsul.amirabroun.ir/login'
const OUT = path.resolve('public/img/kapsul.png')

try {
  const puppeteer = (await import('puppeteer')).default
  await mkdir(path.dirname(OUT), { recursive: true })
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] })
  const page = await browser.newPage()
  await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 2 })
  await page.goto(URL, { waitUntil: 'networkidle0', timeout: 30000 })
  await page.screenshot({ path: OUT })
  await browser.close()
  console.log(`screenshot-kapsul: wrote ${OUT}`)
} catch (err) {
  console.warn(`screenshot-kapsul: skipped (${err.message})`)
  process.exit(0)
}

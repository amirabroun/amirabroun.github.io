<template>
  <main class="pt-30 pb-18 print:pt-0 print:pb-0">
    <div class="mb-6.5 flex justify-center gap-3.5 print:hidden">
      <a class="inline-flex items-center gap-2.5 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-on-accent shadow-md transition hover:-translate-y-0.5 hover:bg-accent-strong hover:no-underline" href="/cv/amir-abroun.pdf">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
        {{ t('cv.download') }}
      </a>
      <button type="button" class="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-accent hover:text-accent" @click="printCv">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8" rx="1"/></svg>
        {{ t('cv.print') }}
      </button>
    </div>

    <!-- resume v5, ported verbatim: amir_abroun_resume_v5.html is the source of truth -->
    <article class="cv-paper">
      <header>
        <div class="name">امیر آبرون</div>
        <div class="role">توسعه‌دهنده فول‌استک</div>
        <p class="contact-line">
          سبزوار، ایران<span class="sep">·</span><a class="ltr" href="tel:+989398720306">+98 939 872 0306</a><span class="sep">·</span><a class="ltr" href="mailto:abroon234@gmail.com">abroon234@gmail.com</a><br>
          <a class="ltr" href="https://amirabroun.ir">https://amirabroun.ir</a><span class="sep">·</span><a class="ltr" href="https://github.com/amirabroun">https://github.com/amirabroun</a><span class="sep">·</span><a class="ltr" href="https://linkedin.com/in/amir-abroun-4a7ab321a">https://linkedin.com/in/amir-abroun-4a7ab321a</a>
        </p>
      </header>

      <section>
        <h2>خلاصه</h2>
        <p class="summary">
          توسعه‌دهنده فول‌استک با ۵ سال تجربه در
          <a href="https://sanjeman.com/">سنجمان</a> — پلتفرم SaaS منابع انسانی (ATS).
          بک‌اند را با <b>Laravel</b> و فرانت را با <b>Vue/Nuxt</b> می‌نویسم و هر فیچر را از ایده تا استقرار
          خودم جلو می‌برم؛ کار را از هر سمتی خودم می‌گیرم و رها نمی‌کنم.
          چیزهایی را هم که از من خواسته نشده اما محصول به آن‌ها نیاز پیدا می‌کند،
          با نگاه به آینده خودم می‌سازم — از طراحی و کد تا تست، CI و سرور.
        </p>
      </section>

      <section>
        <h2>مهارت‌های اصلی</h2>
        <div class="skill-row"><div class="skill-label">بک‌اند</div>
          <div class="skill-value">PHP 8 · Laravel · MySQL · صف با Redis (Horizon) · طراحی REST API</div></div>
        <div class="skill-row"><div class="skill-label">فرانت‌اند</div>
          <div class="skill-value">Vue 2/3 · Nuxt 3 · TypeScript · Tailwind CSS v4 · Vuetify</div></div>
        <div class="skill-row"><div class="skill-label">دواپس</div>
          <div class="skill-value">Docker و docker-compose · nginx · GitLab CI/CD · مدیریت سرور لینوکسی (TLS، فایروال) · مانیتورینگ با GlitchTip/Sentry</div></div>
        <div class="skill-row"><div class="skill-label">روش‌های توسعه</div>
          <div class="skill-value">Git · TDD با Pest (۸۰۰+ تست) · گیت‌های کیفیت phpstan/rector و vue-tsc در CI · تست e2e با Playwright · ADR</div></div>
      </section>

      <section>
        <h2>سوابق کاری</h2>

        <div class="exp-head">
          <div class="exp-org">سنجمان <span class="context">— <a href="https://sanjeman.com/">sanjeman.com</a> · پلتفرم SaaS منابع انسانی</span></div>
          <div class="exp-dates">مهر ۱۴۰۰ <span class="ltr">(Oct 2021)</span> – اکنون</div>
        </div>
        <div class="exp-sub">توسعه‌دهنده فول‌استک · تیم محصول ۳ نفره · روی <b>هر ۵ میکروسرویس اصلی</b> (از ۱۱ سرویس) همزمان</div>
        <ul>
          <li>مالک فیچرهای اصلی <b>ATS</b> — پایپ‌لاین استخدام و مراحل، فرم‌های چندبخشی درخواست همکاری،
            استخر استعدادها و کنترل دسترسی نقش‌محور؛ به‌علاوه طراحی <b>SSO مرکزی و ورود OTP</b>
            به‌عنوان هاب احراز هویت چند فرانت‌اند (کاربر ادمین سازمان، کارمند سازمان، کارجو، کاربر خریدار آزمون روان‌شناختی).</li>
          <li>ساخت <b>مصاحبه‌گر هوش مصنوعی</b> از صفر تا صد: بک‌اند گفتگو و تحلیل در Laravel با
            امتیازدهی چندبعدی و گزارش مصاحبه، به‌همراه رابط Vue با پخش هم‌گام صدا؛
            معماری قابل اتصال به <b>هر سرویس LLM دارای API</b> —
            <b>حدود ۳۰٪ کاهش زمان غربالگری</b> هر موقعیت شغلی برای تیم منابع انسانی.</li>
          <li>یکپارچه‌سازی <b>۶ جاب‌ورد</b> (Jobvision، Jobinja، Kando و…) و <b>۷+ پنل SMS</b>
            با الگوی <b>Strategy + Template Method</b> — افزودن ارائه‌دهندهٔ جدید بدون دست به کد موجود؛
            جریان <b>حدود ۵۰۰ رزومه در روز برای هر سازمان</b> با jobهای sync میکروسرویسی وارد می‌شود و
            <b>حدود ۱۰۰۰ job در روز</b> در صف Horizon پردازش می‌شود (سازگار با on-premise).</li>
          <li>توسعه <a href="https://sanjeman.com/tests"><b>پلتفرم آزمون‌های روان‌شناختی آنلاین</b></a>
            (Laravel API + پنل Nuxt 3): ورود مهمان با OTP و موتور محاسبه‌ی کارنامه
            که نمره‌ی <b>۱۱ آزمون</b> را از پاسخ‌های کاربر به‌دست می‌دهد — با <b>حدود ۳۰۰ کاربر فعال ماهانه</b>.</li>
          <li>راه‌اندازی <b>پرداخت زرین‌پال</b> (checkout سریالی، مدیریت race condition، کد تخفیف) و
            پنل <b>نمایندگی فروش (reseller)</b> با قابلیت impersonation و گزارش فروش.</li>
          <li>بهینه‌سازی کارایی پروداکشن: رفع <b>N+1</b> در سرویس‌های پرترافیک با eager loading،
            رفع <b>memory exhaustion</b> در jobهای حجیم و
            بهینه‌سازی کوئری‌ها (join به‌جای زیرکوئری، chunk).</li>
          <li>کیفیت و دواپس: <b>۸۰۰+ تست Pest</b> (تقریباً هر تغییر)، گیت‌های phpstan/rector و vue-tsc در CI،
            مهاجرت دیزاین‌سیستم از Vuetify به Tailwind v4؛ Docker و GitLab CI برای production،
            سرور استیج لینوکسی (TLS، فایروال) و مانیتورینگ خطا با GlitchTip.</li>
        </ul>

        <div class="exp-head exp-head-gap">
          <div class="exp-org">عنبری‌تویز <span class="context">— <a href="https://anbaritoys.ir/">anbaritoys.ir</a> · پروژه شخصی فروشگاه آنلاین</span></div>
          <div class="exp-dates">آبان ۱۴۰۴ <span class="ltr">(Oct 2025)</span> – اکنون</div>
        </div>
        <div class="exp-sub">مالک — بازسازی و نگه‌داری به‌تنهایی</div>
        <ul>
          <li>در اختیار گرفتن فروشگاه اینترنتی با <b>بیش از ۷۰۰ محصول</b> از توسعه‌دهنده‌ی قبلی —
            کد <b>PHP 8.2 بدون فریمورک</b>، ناپایدار و بدون تست و مستندات — و بازسازی کاملش:
            رفع باگ‌های فراوان، مستندسازی و انتقال به Git برای توسعه‌ی مطمئن‌تر.</li>
          <li>نگه‌داری و توسعه‌ی ویترین و پنل مدیریت کامل (محصولات، تنوع‌ها، دسته‌ها، برندها، کد تخفیف، بلاگ)
            با MariaDB و SQL دست‌نویس؛ پرداخت با درگاه‌های <b>زرین‌پال و IDPay</b>، پیامک با کاوه‌نگار،
            حساب کاربری و پیگیری سفارش.</li>
          <li>مهاجرت زیرساخت از هاست اشتراکی <b>cPanel/Apache</b> به <b>Docker</b> (nginx + php-fpm).</li>
        </ul>
      </section>

      <section class="cols">
        <div>
          <h2>تحصیلات</h2>
          <div class="edu-deg">دانشجوی کارشناسی ارشد مهندسی کامپیوتر — نرم‌افزار</div>
          <div class="edu-note">دانشگاه آزاد اسلامی سبزوار · فارغ‌التحصیلی ۱۴۰۷ <span class="ltr">(2029)</span></div>
          <div class="edu-note">معافیت تحصیلی از خدمت سربازی</div>
          <div class="edu-deg edu-deg-gap">کارشناسی مهندسی کامپیوتر</div>
          <div class="edu-note">دانشگاه حکیم سبزواری · مهر ۱۳۹۹ – بهمن ۱۴۰۴ <span class="ltr">(Oct 2020 – Feb 2026)</span></div>
        </div>
        <div>
          <h2>زبان</h2>
          <div class="lang-row"><span>انگلیسی</span><span class="lang-level">B1</span></div>
        </div>
      </section>

      <footer class="cv-footer">
        <a class="ltr" href="https://amirabroun.ir">amirabroun.ir</a>
        <img src="/img/qr.svg" alt="QR — amirabroun.ir" width="72" height="72">
      </footer>
    </article>
  </main>
</template>

<script setup lang="ts">
// fa-only page: no /en/cv variant
defineI18nRoute(false)

const { t } = useI18n()

function printCv() {
  window.print()
}

useHead({ title: 'رزومه — امیر آبرون' })
</script>

<style>
/* global: @page cannot live in scoped CSS */
@media print {
  @page {
    size: A4;
    margin: 13mm 15mm 13mm;
  }
}
</style>

<style scoped>
/* the paper — v5 palette, forced light in both themes */
.cv-paper {
  width: min(820px, 100%);
  margin: 0 auto;
  padding: 40px 46px 30px;
  background: #ffffff;
  color: #0f172a;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  font-family: "Vazirmatn Variable", "Vazirmatn", Tahoma, sans-serif;
  font-size: 10.6px;
  line-height: 1.72;
  zoom: 1.3; /* v5 sizes are A4-print-tuned; scale up on screen */
}

.cv-paper a {
  color: #1e3a5f;
  text-decoration: none;
  font-weight: 500;
}

.cv-paper a:hover {
  text-decoration: underline;
}

.cv-paper b {
  font-weight: 700;
}

.ltr {
  direction: ltr;
  unicode-bidi: isolate;
}

.cv-paper header {
  padding-bottom: 12px;
  border-bottom: 2.5px solid #0f172a;
}

.name {
  font-size: 31px;
  font-weight: 800;
  line-height: 1.25;
}

.role {
  font-size: 13px;
  font-weight: 700;
  color: #2563eb;
  margin-top: 4px;
}

.contact-line {
  margin-top: 9px;
  font-size: 9.7px;
  line-height: 1.55;
  color: #475569;
  white-space: nowrap;
}

.contact-line .sep {
  color: #cbd5e1;
  margin: 0 6px;
}

.cv-paper section {
  padding: 0;
  margin-top: 15px;
  scroll-margin-top: 0;
}

.cv-paper h2 {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 11.5px;
  font-weight: 800;
  color: #1e3a5f;
  margin: 0 0 8px;
}

.cv-paper h2::before {
  content: "";
  width: 7px;
  height: 7px;
  background: #2563eb;
  flex-shrink: 0;
}

.cv-paper h2::after {
  content: "";
  flex: 1;
  height: 1px;
  background: #e2e8f0;
}

.summary {
  color: #334155;
  line-height: 1.85;
}

.skill-row {
  display: flex;
  gap: 10px;
  margin-bottom: 5px;
  align-items: baseline;
}

.skill-row:last-child {
  margin-bottom: 0;
}

.skill-label {
  flex: 0 0 82px;
  font-weight: 700;
  color: #1e3a5f;
  font-size: 10.2px;
}

.skill-value {
  color: #334155;
}

.exp-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 12px;
}

.exp-head-gap {
  margin-top: 9px;
}

.exp-org {
  font-size: 12.6px;
  font-weight: 800;
}

.exp-org .context {
  font-weight: 400;
  color: #64748b;
  font-size: 9.9px;
}

.exp-dates {
  font-size: 9.5px;
  color: #1e3a5f;
  font-weight: 700;
  white-space: nowrap;
}

.exp-sub {
  font-size: 10px;
  color: #475569;
  margin: 1px 0 5px;
}

.cv-paper ul {
  padding-right: 14px;
  padding-left: 0;
  margin: 0;
}

.cv-paper li {
  margin-bottom: 4px;
  color: #334155;
  line-height: 1.68;
}

.cv-paper li::marker {
  color: #2563eb;
}

.cv-paper li b {
  color: #0f172a;
}

.cols {
  display: grid;
  grid-template-columns: 1.55fr 1fr;
  gap: 25px;
}

.edu-deg {
  font-weight: 700;
  font-size: 10.8px;
}

.edu-deg-gap {
  margin-top: 6px;
}

.edu-note {
  color: #475569;
  font-size: 9.8px;
}

.lang-row {
  display: flex;
  justify-content: space-between;
  font-size: 10.6px;
}

.lang-level {
  color: #1e3a5f;
  font-weight: 700;
}

.cv-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
  margin-top: 18px;
  padding-top: 10px;
  border-top: 1px solid #e2e8f0;
  font-size: 10.6px;
}

.cv-footer img {
  width: 72px;
  height: 72px;
}

@media (max-width: 640px) {
  .cv-paper {
    zoom: 1.05;
    padding: 26px 20px;
  }

  .contact-line {
    white-space: normal;
  }
}

@media print {
  .cv-paper {
    width: auto;
    margin: 0;
    padding: 0;
    border-radius: 0;
    box-shadow: none;
    zoom: 1;
    font-size: 10.2px;
  }

  .cv-paper header,
  .cv-paper section,
  .exp-head,
  .skill-row,
  .cols,
  .cv-footer {
    break-inside: avoid;
  }

  .cv-footer img {
    width: 24mm;
    height: 24mm;
  }
}
</style>

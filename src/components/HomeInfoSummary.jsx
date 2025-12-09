import React from 'react'
import { useI18n } from '../i18n/i18n'
import RevealOnScroll from './RevealOnScroll'

const HomeInfoSummary = () => {
  const { t } = useI18n()
  return (
    <section className="section-padding bg-[#f0e7da]">
      <div className="container-layout grid gap-6 md:grid-cols-2">
        <RevealOnScroll from="left" className="card-soft p-6 sm:p-8">
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-accentGold/25 bg-cardBg/60 p-4 shadow-sm">
              <p className="text-[11px] uppercase tracking-[0.3em] text-accentGold">{t('homeInfo.hours')}</p>
              <p className="mt-2 text-sm text-textMain">{t('homeInfo.hoursValue')}</p>
            </div>
            <div className="rounded-xl border border-accentGold/25 bg-cardBg/60 p-4 shadow-sm">
              <p className="text-[11px] uppercase tracking-[0.3em] text-accentGold">{t('homeInfo.address')}</p>
              <p className="mt-2 text-sm text-textMain">{t('homeInfo.addressValue')}</p>
            </div>
            <div className="rounded-xl border border-accentGold/25 bg-cardBg/60 p-4 shadow-sm">
              <p className="text-[11px] uppercase tracking-[0.3em] text-accentGold">Map</p>
              <a
                href="https://www.google.com/maps/place/Restaurant+Boulevard/@40.33724656047392,49.8332816754788,17z"
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex min-h-[44px] items-center justify-center rounded-full border border-accentGold/40 px-4 py-2 text-sm text-textMain transition hover:bg-primaryBg hover:text-lightBg tap-scale"
              >
                {t('homeInfo.map')}
              </a>
            </div>
          </div>
        </RevealOnScroll>
        <RevealOnScroll from="right" className="card-soft overflow-hidden">
          <iframe
            title="Boulevard 1909 location preview"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2752.1546300447403!2d49.8332816754788!3d40.33724656047392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307f00779bad09%3A0x8c410e1ffe7372fd!2sRestaurant%20Boulevard!5e1!3m2!1saz!2saz!4v1765275907358!5m2!1saz!2saz"
            className="h-full min-h-[260px] w-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </RevealOnScroll>
      </div>
    </section>
  )
}

export default HomeInfoSummary

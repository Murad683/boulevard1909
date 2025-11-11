import React from 'react'
import { useI18n } from '../i18n/i18n'

const HomeInfoSummary = () => {
  const { t } = useI18n()
  return (
    <section className="section-padding bg-[#f0e7da]">
      <div className="container-layout grid gap-6 md:grid-cols-2">
        <div className="card-soft p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-accentGold">{t('homeInfo.hours')}</p>
          <p className="mt-2 text-textMain">{t('homeInfo.hoursValue')}</p>
          <p className="mt-6 text-xs uppercase tracking-[0.3em] text-accentGold">{t('homeInfo.address')}</p>
          <p className="mt-2 text-textMain">{t('homeInfo.addressValue')}</p>
          <a
            href="https://www.google.com/maps?q=Boulevard%201909%20Baku"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center text-sm text-textMain underline decoration-accentGold/60 underline-offset-4"
          >
            {t('homeInfo.map')}
          </a>
        </div>
        <div className="card-soft overflow-hidden">
          <iframe
            title="Boulevard 1909 location preview"
            src="https://www.google.com/maps?q=Boulevard%201909%20Baku&output=embed"
            className="h-full min-h-[220px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}

export default HomeInfoSummary


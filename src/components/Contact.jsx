import React from 'react'
import SectionTitle from './SectionTitle'
import { useI18n } from '../i18n/i18n'

const Contact = () => {
  const { t } = useI18n()
  return (
    <section id="contact" className="section-padding bg-[#f0e7da]">
      <div className="container-layout grid gap-12 lg:grid-cols-[1.1fr,0.9fr]">
        <div>
          <SectionTitle eyebrow={t('contact.eyebrow')} title={t('contact.title')} />
          <p className="mt-6 text-sm leading-relaxed text-textMuted sm:text-base">{t('contact.desc')}</p>

          <div className="mt-6 space-y-4 text-sm text-textMuted">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-accentGold">{t('about.addrLabel')}</p>
              <p className="mt-1 text-textMain">{t('contact.addr')}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-accentGold">{t('contact.phone')}</p>
              <p className="mt-1">
                <a href="tel:+994101001909" className="text-textMain underline decoration-accentGold/60 underline-offset-4">
                  +994 10 100 1909
                </a>
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-accentGold">Instagram</p>
              <a
                href="https://www.instagram.com/boulevard1909/"
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-flex items-center gap-2 text-textMain underline decoration-accentGold/60 underline-offset-4"
              >
                @boulevard1909
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-accentGold">{t('contact.hoursLabel')}</p>
              <p className="mt-1 text-textMain">{t('contact.hoursValue')}</p>
            </div>
          </div>
        </div>

        <div className="card-soft overflow-hidden">
          <iframe
            title="Boulevard 1909 location"
            src="https://www.google.com/maps?q=Boulevard%201909%20Baku&output=embed"
            className="h-full min-h-[260px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}

export default Contact


import React from 'react'
import SectionTitle from './SectionTitle'
import { useI18n } from '../i18n/i18n'
import instagramIcon from '../assets/instagram-icon.svg'
import phoneIcon from '../assets/phone.svg'

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
              <div className="mt-2">
                <a
                  href="tel:+994101001909"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-accentGold/40 px-4 py-2 text-textMain transition hover:bg-primaryBg hover:text-lightBg tap-scale"
                >
                  <img src={phoneIcon} alt="" className="h-4 w-4" aria-hidden />
                  <span>+994 10 100 1909</span>
                </a>
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-accentGold">Instagram</p>
              <div className="mt-2">
                <a
                  href="https://www.instagram.com/boulevard1909/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-accentGold/40 px-4 py-2 text-textMain transition hover:bg-primaryBg hover:text-lightBg tap-scale"
                >
                  <img src={instagramIcon} alt="" className="h-4 w-4" aria-hidden />
                  <span>@boulevard1909</span>
                </a>
              </div>
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2752.1546300447403!2d49.8332816754788!3d40.33724656047392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307f00779bad09%3A0x8c410e1ffe7372fd!2sRestaurant%20Boulevard!5e1!3m2!1saz!2saz!4v1765275907358!5m2!1saz!2saz"
            className="h-full min-h-[320px] w-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}

export default Contact

import React from 'react'
import { useI18n } from '../i18n/i18n'

const Footer = () => {
  const { t } = useI18n()
  return (
    <footer className="bg-primaryBg text-lightBg">
      <div className="container-layout border-t border-accentGold/20 py-10 text-sm text-lightBg/80">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-accentGold/90">Boulevard 1909</p>
            <p className="mt-2 text-sm text-lightBg/80">{t('footer.tagline')}</p>
          </div>
          <div className="space-y-1 text-xs text-lightBg/70">
            <p>{t('footer.address')}</p>
            <p>{t('footer.hours')}</p>
            <p>
              {t('footer.call')}{' '}
              <a href="tel:+994101001909" className="text-lightBg underline decoration-accentGold/60 underline-offset-4">
                +994 10 100 1909
              </a>
            </p>
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-2 border-t border-accentGold/10 pt-4 text-xs text-lightBg/50 sm:flex-row sm:items-center sm:justify-between">
          <p>{t('footer.copyright').replace('{year}', new Date().getFullYear())}</p>
          <p>
            {t('footer.createdBy')}{' '}
            <a
              href="https://wa.me/994505131380?text=Salam%2C%20Boulevard%201909%20sayt%C4%B1%20haqq%C4%B1nda"
              target="_blank"
              rel="noreferrer"
              className="text-lightBg underline decoration-accentGold/60 underline-offset-4"
            >
              REVİO.AZ
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer


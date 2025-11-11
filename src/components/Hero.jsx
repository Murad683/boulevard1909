import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useI18n } from '../i18n/i18n'

const Hero = () => {
  const navigate = useNavigate()
  const { t } = useI18n()
  const goMenu = () => navigate('/menu')
  const goReservation = () => navigate('/reservation')

  return (
    <section id="hero" className="relative flex min-h-[90vh] items-center overflow-hidden bg-primaryBg text-lightBg">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(198,170,118,0.18),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(0,0,0,0.55),_transparent_60%)]" />

      <div className="container-layout relative z-10 grid items-center gap-12 py-28 md:grid-cols-[1.1fr,0.9fr]">
        <div>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-accentGold/90">{t('hero.eyebrow')}</p>
          <h1 className="font-serif text-4xl tracking-[0.12em] text-lightBg sm:text-5xl md:text-[3.25rem]">BOULEVARD 1909</h1>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-lightBg/80 sm:text-base">{t('hero.desc')}</p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button onClick={goReservation} className="btn-primary">{t('hero.ctaReserve')}</button>
            <button onClick={goMenu} className="btn-secondary">{t('hero.ctaMenu')}</button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-6 text-xs text-lightBg/70">
            <div>
              {t('hero.addrLine1')}
              <br />
              <span className="text-[11px] text-lightBg/60">{t('hero.addrLine2')}</span>
            </div>
            <div>
              {t('hero.hoursPrefix')} {t('hero.hoursValue')}
              <br />
              +994 10 100 1909
            </div>
          </div>
        </div>

        <div className="relative hidden h-[380px] md:block">
          <div className="absolute inset-0 rounded-[32px] bg-cardBg/80 shadow-soft" />
          <div className="absolute inset-4 rounded-[28px] border border-accentGold/40 bg-lightBg/70 backdrop-blur">
            <div className="flex h-full flex-col justify-between p-6">
              <div>
                <p className="text-[11px] uppercase tracking-[0.35em] text-textMuted">{t('hero.rightEyebrow')}</p>
                <p className="mt-3 font-serif text-xl text-textMain">{t('hero.rightTitle')}</p>
                <p className="mt-2 text-xs text-textMuted">{t('hero.rightDesc')}</p>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-textMuted">{t('hero.rightToday')}</span>
                  <span className="rounded-full bg-primaryBg/90 px-3 py-1 text-xs text-lightBg">{t('hero.rightLimited')}</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-cardBg">
                  <div className="h-full w-2/3 rounded-full bg-accentGold" />
                </div>
                <p className="text-[11px] text-textMuted">{t('hero.rightNote')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero


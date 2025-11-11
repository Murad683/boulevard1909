import React, { useState } from 'react'
import SectionTitle from './SectionTitle'
import { useI18n } from '../i18n/i18n'

const DEFAULT_LIST = [
  { name: 'Nigar A.', text: 'Atmosfer çox zərif, servis diqqətlidir. Plov və kabablar mükəmməl balansda idi.' },
  { name: 'Rauf M.', text: 'Yeni Bulvarın sakit hissəsində, dəniz kənarında zövqlü axşam üçün ideal məkan.' },
  { name: 'Elnara K.', text: 'Menyu klassik daddadır, təqdimat isə müasir. Yenidən gələcəyik.' },
]

const Testimonials = () => {
  const { t } = useI18n()
  const [index, setIndex] = useState(0)
  const list = Array.isArray(t('testimonials.list')) ? t('testimonials.list') : DEFAULT_LIST
  const prev = () => setIndex((i) => (i === 0 ? list.length - 1 : i - 1))
  const next = () => setIndex((i) => (i + 1) % list.length)

  return (
    <section className="section-padding bg-[#f3ecdf]">
      <div className="container-layout">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionTitle eyebrow={t('testimonials.eyebrow')} title={t('testimonials.title')} />
          <p className="max-w-md text-sm leading-relaxed text-textMuted">{t('testimonials.desc')}</p>
        </div>

        <div className="relative mt-8 overflow-hidden rounded-2xl bg-cardBg p-4 shadow-soft sm:p-6">
          <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${index * 100}%)` }}>
            {list.map((tst) => (
              <div key={tst.name} className="w-full shrink-0 px-2 sm:px-4">
                <blockquote className="min-h-[120px] text-textMain">“{tst.text}”</blockquote>
                <p className="mt-2 text-sm text-textMuted">— {tst.name}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex gap-2">
              {list.map((_, i) => (
                <span key={i} className={`h-1.5 w-6 rounded-full ${i === index ? 'bg-accentGold' : 'bg-accentGold/30'}`} />
              ))}
            </div>
            <div className="flex gap-2">
              <button onClick={prev} className="btn-secondary px-4 py-2 text-xs">{t('testimonials.prev')}</button>
              <button onClick={next} className="btn-primary px-4 py-2 text-xs">{t('testimonials.next')}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials


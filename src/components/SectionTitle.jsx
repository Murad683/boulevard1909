import React from 'react'

const SectionTitle = ({ eyebrow, title, align = 'left' }) => {
  return (
    <div className={align === 'center' ? 'text-center' : 'text-left'}>
      {eyebrow && (
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.3em] text-accentGold">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-3xl sm:text-4xl tracking-wide text-textMain">
        {title}
      </h2>
    </div>
  )
}

export default SectionTitle

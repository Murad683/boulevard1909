import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import LangSwitch from './LangSwitch'
import { useI18n } from '../i18n/i18n'

const linkDefs = [
  { to: '/', key: 'nav.home' },
  { to: '/menu', key: 'nav.menu' },
  { to: '/gallery', key: 'nav.gallery' },
  { to: '/reservation', key: 'nav.reservation' },
  { to: '/contact', key: 'nav.contact' },
]

const Navbar = () => {
  const { t } = useI18n()
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuMounted, setMenuMounted] = useState(false)
  const [menuShown, setMenuShown] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuShown(false)
  }, [location.pathname])

  useEffect(() => {
    if (menuShown && !menuMounted) {
      setMenuMounted(true)
      requestAnimationFrame(() => setMenuShown(true))
    }
  }, [menuShown, menuMounted])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuShown(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
    }
  }, [menuShown])

  useEffect(() => {
    if (!menuShown && menuMounted) {
      const id = setTimeout(() => setMenuMounted(false), 250)
      return () => clearTimeout(id)
    }
  }, [menuShown, menuMounted])

  const toggleMenu = () => {
    if (menuShown) setMenuShown(false)
    else {
      setMenuMounted(true)
      requestAnimationFrame(() => setMenuShown(true))
    }
  }

  const isActive = (to) => (to === '/' ? location.pathname === '/' : location.pathname.startsWith(to))

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 h-14 md:h-16 transition duration-300 ${
        isScrolled
          ? 'bg-primaryBg/95 backdrop-blur border-b border-accentGold/20'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="container-layout flex h-full items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-left">
          <span className="rounded-full border border-accentGold/40 px-2.5 py-0.5 text-[9px] sm:text-[10px] font-medium uppercase tracking-[0.35em] text-accentGold">
            Boulevard 1909
          </span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {linkDefs.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`nav-link ${isActive(item.to) ? 'is-active' : ''}`}
            >
              {t(item.key)}
            </Link>
          ))}
          <LangSwitch />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            className="inline-flex flex-col items-center justify-center gap-1 rounded-full border border-accentGold/40 p-2"
            onClick={toggleMenu}
            aria-label={menuShown ? t('nav.close') : t('nav.open')}
            aria-expanded={menuShown}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">{menuShown ? t('nav.close') : t('nav.open')}</span>
            <span className={`block h-0.5 bg-accentGold transition-all duration-200 ${menuShown ? 'w-6' : 'w-4'}`} />
            <span className="block h-0.5 w-6 bg-accentGold transition-all duration-200" />
            <span className={`block h-0.5 bg-accentGold transition-all duration-200 ${menuShown ? 'w-6' : 'w-6'}`} />
          </button>
        </div>
      </nav>

      {menuMounted && (
        <>
          <div
            id="mobile-menu"
            className={`fixed top-14 md:top-16 inset-x-0 z-40 border-t border-accentGold/20 bg-primaryBg md:hidden transform transition-all duration-300 ${
              menuShown ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
            }`}
          >
            <div className="container-layout flex flex-col py-2">
              <div className="flex justify-center py-2">
                <LangSwitch onChange={() => setMenuShown(false)} />
              </div>
              {linkDefs.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setMenuShown(false)}
                  className={`nav-link text-left py-3 text-sm ${
                    isActive(item.to) ? 'is-active' : ''
                  }`}
                >
                  {t(item.key)}
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </header>
  )
}

export default Navbar

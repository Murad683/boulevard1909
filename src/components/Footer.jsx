import React from 'react'
import { useI18n } from '../i18n/i18n'
import instagramIcon from '../assets/instagram-icon.svg'

const footerLinks = [
  { href: '/', key: 'nav.home' },
  { href: '/menu', key: 'nav.menu' },
  { href: '/gallery', key: 'nav.gallery' },
  { href: '/reservation', key: 'nav.reservation' },
  { href: '/contact', key: 'nav.contact' },
]

const Footer = () => {
  const { t } = useI18n()
  const navHeading = t('footer.navigation') || 'NAVİGASİYA'
  const contactHeading = t('footer.contactAndReservation') || 'ƏLAQƏ & REZERVASİYA'
  return (
    <footer className="footer bg-primaryBg text-lightBg">
      <div className="footer-inner">
        <div className="footer-columns">
          <div className="footer-column footer-brand">
            <p className="footer-eyebrow">Boulevard 1909</p>
            <p className="footer-tagline">{t('footer.tagline')}</p>
          </div>

          <div className="footer-column footer-nav">
            <p className="footer-heading">{navHeading}</p>
            <ul className="footer-nav-list">
              {footerLinks.map((item) => (
                <li key={item.key} className="footer-nav-item">
                  <a href={item.href} className="footer-nav-link">
                    {t(item.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column footer-contact">
            <p className="footer-heading">{contactHeading}</p>
            <div className="footer-contact-block">
              <p className="footer-contact-line">{t('footer.address')}</p>
              <p className="footer-contact-line">{t('footer.hours')}</p>
              <a href="tel:+994101001909" className="footer-phone">
                {t('footer.call')} +994 10 100 1909
              </a>
              <a
                href="https://www.instagram.com/boulevard1909/"
                target="_blank"
                rel="noreferrer"
                className="footer-instagram"
              >
                <img src={instagramIcon} alt="" className="footer-instagram-icon" aria-hidden />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">{t('footer.copyright').replace('{year}', new Date().getFullYear())}</p>
          <p className="footer-credit">
            {t('footer.createdBy')}{' '}
            <a
              href="https://wa.me/994505131380?text=Salam%2C%20Boulevard%201909%20sayt%C4%B1%20haqq%C4%B1nda"
              target="_blank"
              rel="noreferrer"
              className="footer-credit-link"
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

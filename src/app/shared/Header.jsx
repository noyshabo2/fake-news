import React from 'react'

export default function Header() {
  const HOME_URL = 'https://timeout.co.il/'
  return (
    <header className="site-header">
      <div className="header-top">
        <div className="container header-top-inner">
          <a className="icon-btn menu mobile-only" aria-label="תפריט" href={HOME_URL}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </a>
          <div className="brand" aria-label="Logo">
            <a href={HOME_URL} aria-label="דף הבית">
              <img src="https://static.timeout.co.il/www/images/timeout_logo_white.svg" alt="Time Out" height="48" />
            </a>
          </div>
          <nav className="social desktop-only" aria-label="Social">
            <a href={HOME_URL} aria-label="English">EN</a>
            <a href={HOME_URL} aria-label="Twitter">𝕏</a>
            <a href={HOME_URL} aria-label="Instagram">IG</a>
            <a href={HOME_URL} aria-label="Facebook">f</a>
          </nav>
          <a className="icon-btn search mobile-only" href={HOME_URL} aria-label="חיפוש">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <circle cx="11" cy="11" r="7" stroke="#fff" strokeWidth="2.5"/>
              <path d="M20 20L16.65 16.65" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </a>

        </div>
      </div>
      <div className="nav-bar desktop-only">
        <nav className="container main-nav" aria-label="Main">
          <a className="more" href={HOME_URL}>עוד</a>
          <a href={HOME_URL}>סרטים</a>
          <a href={HOME_URL}>תרבות</a>
          <a href={HOME_URL}>המגזין</a>
          <a href={HOME_URL}>המדריך</a>
          <a href={HOME_URL}>עם הילדים</a>
          <a href={HOME_URL}>מסעדות וברים</a>
          <a href={HOME_URL}>חדשות עירוניות</a>
        </nav>
      </div>
    </header>
  )
}



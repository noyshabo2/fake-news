'use client'

import React from 'react'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <section className="newsletter">
          <h3>רוצים לקבל את “טיים אאוט” למייל? הירשמו לניוזלטר שלנו</h3>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="האימייל שלכם" aria-label="אימייל" />
            <a className="btn" href="https://timeout.co.il/">שלח</a>
          </form>
          <label className="checkbox">
            <input type="checkbox" />
            <span>אני מאשר/ת קבלת ניוזלטרים ומידע פרסומי מאתר ״טיים אאוט״</span>
          </label>
        </section>

        <div className="footer-links">
          <div>
            <h4>ערוצי תוכן</h4>
            <ul>
              <li><a href="https://timeout.co.il/">הבועה</a></li>
              <li><a href="https://timeout.co.il/">הסצינה</a></li>
              <li><a href="https://timeout.co.il/">הטרנד</a></li>
              <li><a href="https://timeout.co.il/">הבמה</a></li>
              <li><a href="https://timeout.co.il/">המסך</a></li>
              <li><a href="https://timeout.co.il/">העולם</a></li>
            </ul>
          </div>
          <div>
            <h4>מיוחדים</h4>
            <ul>
              <li><a href="https://timeout.co.il/">המגזין</a></li>
              <li><a href="https://timeout.co.il/">הכי טובים</a></li>
              <li><a href="https://timeout.co.il/">עם הילדים</a></li>
              <li><a href="https://timeout.co.il/">מסעדות בתל אביב</a></li>
              <li><a href="https://timeout.co.il/">סדרות מומלצות</a></li>
            </ul>
          </div>
          <div>
            <h4>שירות לקוחות</h4>
            <ul>
              <li><a href="https://timeout.co.il/">שירות למנויי המגזין</a></li>
              <li><a href="https://timeout.co.il/">תנאי שימוש</a></li>
              <li><a href="https://timeout.co.il/">מדיניות פרטיות</a></li>
              <li><a href="https://timeout.co.il/">הצהרת נגישות</a></li>
              <li><a href="https://timeout.co.il/">כתבו לנו</a></li>
            </ul>
          </div>
        </div>
        <div className="legal">
          <p><a href="https://timeout.co.il/">© יובל סיגלר תקשורת בע"מ 2025</a></p>
          <p><a href="https://timeout.co.il/">Designed, Developed and Powered by RGB Media</a></p>
        </div>
      </div>
    </footer>
  )
}



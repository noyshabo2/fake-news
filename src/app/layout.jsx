import React from 'react'
import Header from './shared/Header.jsx'
import Footer from './shared/Footer.jsx'
import './styles/index.css'

export const metadata = {
  title: 'טיים אאוט - חדשות ותרבות',
  description: 'אתר החדשות והתרבות המוביל בישראל',
}

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <body>
        <div className="app-root">
          <Header />
          <main role="main" className="site-content">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

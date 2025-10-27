import React from 'react'
import Header from './shared/Header.jsx'
import Footer from './shared/Footer.jsx'
import './styles/index.css'

export const metadata = {
  title: 'טיים אאוט - חדשות ותרבות',
  description: 'אתר החדשות והתרבות המוביל בישראל',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'none',
      'max-snippet': -1,
    },
  },
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

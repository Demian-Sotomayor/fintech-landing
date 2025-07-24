'use client'
import { useEffect } from 'react'
import Script from 'next/script'
import localFont from 'next/font/local'
import '../app/globals.css'
import { Footer, Navbar, Loader } from '@/components'
import { initCursorEffects, initParticleSystem, initScrollAnimations } from '@/lib/animations'

const customFont = localFont({
  src: [
    { path: '../../public/fonts/GraphieRegular.otf', weight: '400', style: 'normal' },
    { path: '../../public/fonts/GraphieExtraBold.otf', weight: '800', style: 'normal' }
  ]
})

export default function RootLayout({ children }) {

  useEffect(() => {
    initScrollAnimations();
    initParticleSystem();
    initCursorEffects();
  }, [])

  return (
    <html lang="es" className={customFont.className}>
      <body>
        <Loader />
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

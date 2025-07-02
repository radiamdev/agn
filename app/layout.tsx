import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Header from './components/layout/Header'
import './globals.css'
import Footer from './components/layout/Footer'
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css'
import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from '@mantine/core'
import PrivacyHeader from './components/layout/PrivacyHeader'
import { ToastContainer, Bounce } from 'react-toastify'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'AGN',
  description: 'AGN website',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MantineProvider>
          <PrivacyHeader />
          <Header />
          {children}
          <Footer />
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
          />
        </MantineProvider>
      </body>
    </html>
  )
}

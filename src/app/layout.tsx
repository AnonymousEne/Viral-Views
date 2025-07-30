import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { AuthProvider } from '@/contexts/AuthContext'
import BetaNotice from '@/components/BetaNotice'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Viral Views - Hip-Hop Competition Platform (Beta)',
  description: 'AI-powered rap battles, cypher analysis, and community features - Now in Beta!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <BetaNotice />
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}

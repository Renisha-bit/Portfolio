import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Renisha Chauhan — Cybersecurity Student & Digital Forensics Enthusiast',
  description:
    'Portfolio of Renisha Chauhan, a cybersecurity student focused on system security, threat analysis, ethical hacking, and digital forensics.',
  keywords: [
    'Renisha Chauhan',
    'Cybersecurity',
    'Digital Forensics',
    'Ethical Hacking',
    'Portfolio',
    'Security Student',
  ],
  authors: [{ name: 'Renisha Chauhan' }],
  openGraph: {
    title: 'Renisha Chauhan — Cybersecurity Student',
    description:
      'Cybersecurity student & digital forensics enthusiast. Explore projects, skills, certifications, and experience.',
    type: 'website',
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0d0e20',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark bg-background ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

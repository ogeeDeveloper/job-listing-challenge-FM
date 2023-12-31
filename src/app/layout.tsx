import './globals.css'
import type { Metadata } from 'next'
import { League_Spartan } from 'next/font/google'

const league_spartan = League_Spartan({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Job listings',
  description: 'Job listings challenge for Frontend Mentor',
  icons: {
    icon:'/_next/static/media/metadata/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${league_spartan.className} bg-neutral-lightBg m-0 p-0`}>{children}</body>
    </html>
  )
}

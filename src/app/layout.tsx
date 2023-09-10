import './globals.css'
import type { Metadata } from 'next'
import { League_Spartan } from 'next/font/google'

const league_spartan = League_Spartan({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Job listings',
  description: 'Job listings challenge for Frontend Mentor',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${league_spartan.className}  m-0 p-0`}>{children}</body>
    </html>
  )
}

import './globals.css'
import Header from './Components/Layout/Header'

export const metadata = {
  title: 'Panaverse Dao Website',
  description: 'Generated by Syed Shahmir Sultan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body><Header/>{children}</body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Source_Sans_3 as FontSans } from 'next/font/google'
import './globals.css'
import Header from '@/components/common/header'
import Footer from '@/components/common/footer'
import ReactQueryProvider from '@/providers/react-query-provider'
const fontSans = FontSans({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
})
export const metadata: Metadata = {
  title: 'Jämför Formel 1-biljetter & resor – Formel1resor24.se',
  description:
    'Hitta och jämför biljetter, hotellpaket och F1-resor till alla Grand Prix. Vi visar priser från flera svenska återförsäljare – tryggt, enkelt och prisvärt.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontSans.variable} font-sans antialiased bg-background`}
      >
        <ReactQueryProvider>
          <div className="relative flex min-h-screen flex-col">
            <Header />

            <main className="flex-1"> {children}</main>
            <Footer />
          </div>
        </ReactQueryProvider>
      </body>
    </html>
  )
}

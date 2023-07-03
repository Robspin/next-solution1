import './globals.css'
import { montserrat } from "@/lib/fonts"
import Navbar from "@/components/layout/navbar"
import { Toaster } from "@/components/ui/toaster"
import Footer from "@/components/layout/footer"
import ThemeWrapper from '@/components/layout/theme-wrapper'

export const metadata = {
  title: 'Solution One',
  description: "We solve complex IT problems so you don't have to",
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-gray-950">
        <body className={montserrat.className}>
          <ThemeWrapper>
            <Navbar />
            {children}
            <Toaster />
            <Footer />
          </ThemeWrapper>
        </body>
      </html>
  )
}

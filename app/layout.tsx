import './globals.css'
import { montserrat } from "@/lib/fonts"
import Navbar from "@/components/navbar"
import { Toaster } from "@/components/ui/toaster"

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
    <html lang="en">
      <body className={`${montserrat.className} dark:bg-gray-950 transition-colors`}>
        <Navbar />
        {children}
        <Toaster />
      </body>
    </html>
  )
}

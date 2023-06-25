import './globals.css'
import { montserrat } from "@/lib/fonts";
import Navbar from "@/components/navbar";

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
      <body className={`${montserrat.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

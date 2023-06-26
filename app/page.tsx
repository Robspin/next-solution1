import Image from 'next/image'
import Landing from "@/components/sections/landing"
import { ReactNode } from "react"
import Description from "@/components/sections/description"
import Questions from "@/components/sections/questions"
import Contact from "@/components/sections/contact"
import Footer from "@/components/footer";

const PageContainer = ({ children }: { children: ReactNode }) => (
    <main className="w-screen flex flex-col items-center relative">
        <div className="h-[70vh] w-[80vh] absolute pointer-none right-0">
            <Image src="/assets/hero-gradient.svg" alt="gradient background" className="object-cover" fill={true} />
        </div>
        <div className="xl:min-w-[1280px] max-w-[1280px] px-4">
            {children}
        </div>
    </main>
)

export default function Home() {
  return (
    <PageContainer>
        <Landing />
        <div className="w-full h-[30vh]" />
        <Description />
        <div className="w-full h-[30vh]" />
        <Questions />
        <Contact />
        <Footer />
    </PageContainer>
  )
}

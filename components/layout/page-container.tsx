import { ReactNode } from "react"
import Image from "next/image"


export default function PageContainer({ children, background = false }: { children: ReactNode, background?: boolean }) {
    return (
        <main className="w-screen flex flex-col items-center relative">
            {background && <div className="h-[70vh] w-[80vh] absolute pointer-none right-0">
                <Image src="/assets/hero-gradient.svg" alt="gradient background" className="object-cover" fill={true}/>
            </div>}
            <div className="xl:min-w-[1280px] max-w-[1280px] px-4">
                {children}
            </div>
        </main>
    )
}
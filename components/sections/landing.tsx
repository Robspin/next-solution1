import { inter } from "@/lib/fonts"

export default function Landing() {
    return (
        <section className="w-full h-screen flex justify-center items-center relative">
            <div className="mx-auto max-w-2xl text-center">
                <div><h1 className={`text-4xl font-bold tracking-tight sm:text-6xl ${inter.className}`}>We solve problems.<br/>So you don't have to.</h1><p
                    className="mt-6 text-lg leading-8">Specialists in IT solutions from dev-ops to frontend</p>
                </div>
            </div>
            <div className="absolute bottom-10 h-10 w-6 border-2 border-gray-300 rounded-xl flex justify-center">
                <div className="border border-gray-300 h-2 mt-2 rounded animate-scroll"/>
            </div>
        </section>
    )
}
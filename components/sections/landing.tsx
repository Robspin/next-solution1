"use client"
import { useState } from "react"
import { inter } from "@/lib/fonts"
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion"


export default function Landing() {
    const [showScrollIcon, setShowScrollIcon] = useState(true)
    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest === 0) setShowScrollIcon(true)
        else if (latest !== 0 && showScrollIcon) setShowScrollIcon(false)
    })

    return (
        <section className="w-full h-screen flex justify-center items-center relative">
            <div className="mx-auto max-w-2xl text-center">
                <div>
                    <motion.h1
                        initial={{ opacity: 0, x: "-15vw" }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.90, delay: 0.5 }}
                        className={`text-4xl font-bold tracking-tight sm:text-6xl ${inter.className}`}>We solve problems.</motion.h1>
                    <motion.h1
                        initial={{ opacity: 0, x: "15vw" }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.90, delay: 0.5 }}
                        className={`text-4xl font-bold tracking-tight sm:text-6xl ${inter.className}`}>So you don't have to.</motion.h1>

                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.40 }} className="mt-6 text-lg leading-8">Specialists in IT solutions from dev-ops to frontend</motion.p>
                </div>
            </div>
            <AnimatePresence>
                {showScrollIcon && <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="absolute bottom-10 h-10 w-6 border-2 border-gray-300 rounded-xl flex justify-center">
                    <div className="border border-gray-300 h-2 mt-2 rounded animate-scroll"/>
                </motion.div>}
            </AnimatePresence>
        </section>
    )
}
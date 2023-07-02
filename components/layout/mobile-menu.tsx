"use client"
import { Fragment, ReactNode, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import { Solution1 } from "@/components/layout/footer"
import ThemeSwitch from "@/components/theme-switch";

const Burger = ({ ...props }) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
    </svg>
)

const Cross = ({ ...props }) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>

)

const Transition = ({ children, className, ...props }: { children: ReactNode, className?: string }) => {
    return (
            <motion.div {...props} className={className}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {children}
            </motion.div>
    )
}

export default function MobileMenu() {
    const [menuOpened, setMenuOpened] = useState(false)

    const toggleMenu = () => setMenuOpened(!menuOpened)

    return (
        <Fragment>
            <AnimatePresence mode="wait">
                {!menuOpened &&
                    <Transition key="burger" className="flex md:hidden gap-4">
                        <ThemeSwitch />
                        <button onClick={toggleMenu}>
                            <Burger className="w-8 h-8"/>
                        </button>
                    </Transition>}
            </AnimatePresence>
            <AnimatePresence>
                {menuOpened && <Transition
                    key="menu"
                    className="top-0 bottom-0 right-0 left-0 h-full fixed bg-black inline md:hidden overflow-hidden">
                        <div className="w-screen h-full fixed flex flex-col justify-between items-center p-3">
                            <button className="inline md:hidden ml-auto" onClick={toggleMenu}>
                                <Cross className="w-8 h-8" />
                            </button>
                            <ul className="flex flex-col gap-6 text-lg">
                                <li><Link onClick={toggleMenu} href="/">Home</Link></li>
                                <li><Link onClick={toggleMenu} href="/services">Services</Link></li>
                                <li><Link onClick={toggleMenu} href="/about">About</Link></li>
                                <li><Link onClick={toggleMenu} href="/contact">Contact</Link></li>
                            </ul>
                            <Solution1 className="w-24 h-12 fill-black dark:fill-white" />
                        </div>
                </Transition>}
            </AnimatePresence>
        </Fragment>
    )
}